import React from "react";
import NavBar from "../components/NavBar";
import PersonalInfo from "../components/PersonalInfo";

const ChangeLog = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <PersonalInfo />
            </div>
            <div className="Blog">
                <header>Change Log</header>
                <h4>20.01.2023 - MVP made</h4>
                <p>
                    While it's great to have built and trained a model. You may of noticed
                    that the model is not very good and the sonnets generated are only satisfactory.

                    Thus, the purpose of having a change log.
                </p>
                <p>
                    Possible future improvements would involve; modifying the model (e.g. adding the positional
                    embedding to the attention head instead of the token embedding), training for longer and on a
                    larger dataset, having a deeper neural network (i.e. larger hyperparamters), as well as introducing
                    new UI components and improvements to the UX if necessary.
                </p>
            </div>
        </div>
    )
}

export default ChangeLog;