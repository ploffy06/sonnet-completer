import React, {useState} from "react";
import NavBar from "../components/NavBar";
import Sonnet from "../components/Sonnet";
import "../App.css";
import Footer from "../components/PersonalInfo";

const Home = () => {
    const [sonnet, setSonnet] = useState('');
    const [context, setContext] = useState('');

    const defaultInputDetails = {
        disabled: false,
        bg: "white",
        fc: "black"
    }
    const [inputDetails, setInputDetails] = useState(defaultInputDetails);

    async function createSonnet(event) {
        event.preventDefault();
        if (context.length > 128) {
            setSonnet("You can only input a maximum of 128 characters.")
            return
        }
        const encodedValue = encodeURIComponent(context);
        setSonnet("loading, please wait...");
        setInputDetails({
            disabled: true,
            bg: "grey",
            fc: "white"
        })

        try {
            const response = await fetch(`/sonnet?context=${encodedValue}`, {
                method: 'GET',
            })

            if (!response.ok) {
                throw new Error(`Error has occurred: ${response.status}`);
            } else {
                response.json().then((sonnet) => {
                    setSonnet(sonnet.sonnet);
                    console.log(sonnet)
                })
            }
        } catch(e) {
            setSonnet("Network error. Please reload the page and try again.");
            console.log("Network error occurred");
        }

        setInputDetails(defaultInputDetails)
        setContext('');
    }
    return (
        <div className="Home">
            <div>
                <NavBar />
            </div>
            <div>
                <Footer />
            </div>
            <header>Start a sonnet</header>
            <div className="ContextForm">
                <form onSubmit={createSonnet} >
                    <input
                        placeholder="Aa"
                        type='text'
                        disabled={inputDetails.disabled}
                        onChange={(e) => setContext(e.target.value)}
                        className="ContextInput"
                        style={{background: inputDetails.bg, color: inputDetails.fc}}
                    />
                </form>
            </div>
            <div>
                <Sonnet sonnet={sonnet} />
            </div>
        </div>
    )
}

export default Home;