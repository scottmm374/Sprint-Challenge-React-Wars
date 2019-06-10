import React from "react";
import Character from "./Character";

function CharactersList (props) {
    console.log(props)
    return (
        <div>
            {props.charInfo.map(item => {
                return (
                    <Character
                        characterInfo={item}
                        // key={index}
                     />   
                );
             })}
        </div>
    );
}


export default CharactersList;