import React, {useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Sonnet from "../components/Sonnet";
import { useContext } from "react";

const Home = () => {
    const [sonnet, setSonnet] = useState('');
    const [context, setContext] = useState('');
    async function createSonnet(event) {
        event.preventDefault();
        const encodedValue = encodeURIComponent(context);

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
            console.log("Network error occurred");
        }
    }
    return (
        <div >
            <div>
                <NavBar />
            </div>
            <form onSubmit={createSonnet}>
                <input
                    placeholder="Aa"
                    type='text'
                    onChange={(e) => setContext(e.target.value)}
                />
            </form>
            <div>
                <Sonnet sonnet={sonnet} />
            </div>
        </div>
    )
}

export default Home;