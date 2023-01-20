import React from "react";
import NavBar from "../components/NavBar";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"

const About = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div className="About">
                <header>SonnetCompleter</header>
                <p>
                    SonnetCompleter is as it's called, it completes a sonnet.
                </p>
                <p>
                    To use it simply, navigate to the SonnetCompleter page and type in the text you would
                    like your sonnet to start with. Then hit enter.
                </p>
                <header>GPT Model</header>
                <p>
                    But how exactly does this work? A GPT model was built in PyTorch and trained on a dataset of poems.
                    What
                </p>
                <header>About me</header>
                <div >
                    <AiFillLinkedin />
                    <a href="https://www.linkedin.com/in/alice-wan-42936921b/" className="PersonalInfo">LinkedIn</a>
                </div>
                <div>
                    <AiFillGithub />
                    <a href="https://github.com/ploffy06" className="PersonalInfo">Github</a>
                </div>
            </div>
        </div>
    )
}

export default About;