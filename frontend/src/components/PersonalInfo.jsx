import React from "react";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub"
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin"

const PersonalInfo = () => {
    return (
        <div className="PersonalInfoContainer">
            <div >
                <AiFillLinkedin />
                <a href="https://www.linkedin.com/in/alice-wan-42936921b/" className="PersonalInfo">LinkedIn</a>
            </div>
            <div>
                <AiFillGithub />
                <a href="https://github.com/ploffy06" className="PersonalInfo">Github</a>
            </div>
        </div>
    )
}

export default PersonalInfo;