import React from "react";
import Character from "./Character";

function CharactersList(props) {
    console.log(props)
    return (
        <div className="charList">
            {props.charInfo.map(item => {
                return (
                    <Character
                        characterInfo={item} 
                    />
                );
            })}
        </div>
    );
}


export default CharactersList;