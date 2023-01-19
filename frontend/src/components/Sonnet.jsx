import React, {useState, useEffect} from "react";

const Sonnet = ({sonnet}) => {
    // useEffect(() => {
    //     async function createSonnet() {
    //         try {
    //             const response = await fetch('/sonnet', {
    //                 method: 'POST',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: {
    //                     'context': context
    //                 }
    //             })

    //             if (!response.ok) {
    //                 throw new Error(`Error has occurred: ${response.status}`);
    //             } else {
    //                 response.json().then((sonnet) => {
    //                     console.log(createdSonnet)
    //                     setCreatedSonnet(sonnet.sonnet);
    //                 })
    //             }
    //         } catch(e) {
    //             console.log("Network error occurred");
    //         }
    //     }
    // })

    return (
        <div>
            {sonnet}
        </div>
    )
}

export default Sonnet;