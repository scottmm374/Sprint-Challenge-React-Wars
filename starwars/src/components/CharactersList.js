import React from "react";
import Character from "./Character";

function CharactersList(props) {
    console.log(props)
    return (
        <div className="char-list">
            {props.charInfo.map(item => {
                return (
                    <Character
                        characterInfo={item}
                        key={item.name}
                    />
                );
            })}
        </div>
    );
}


export default CharactersList;