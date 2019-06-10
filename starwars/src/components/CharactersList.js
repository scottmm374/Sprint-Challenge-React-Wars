import React from "react";
import Character from "./Character";

function CharactersList (props) {
    console.log(props)
    return (
        <div>
            {props.starwarsChars.map(char => {
                return (
                    <Character
                        characterInfo={char}
                     />   
                );
             })}
        </div>
    );
}


export default CharactersList;