import React from 'react';


function Character(props) {
    return (
        <div className="char-card">
            <p className="char-name"><strong>Name: </strong>{props.characterInfo.name}</p>
            <p><strong>Eye Color: </strong>{props.characterInfo.eye_color}</p>  
            <p><strong>Gender: </strong>{props.characterInfo.gender}</p>
            <p><strong>Hair Color: </strong>{props.characterInfo.hair_color}</p>
            <p><strong>Height: </strong>{props.characterInfo.height}</p>  
            <p><strong>Mass: </strong>{props.characterInfo.mass}</p>
            <p><strong>Skin Color: </strong>{props.characterInfo.skin_color}</p>
            <p><strong>Species: </strong>{props.characterInfo.species}</p>
            <p><strong>StarShips: </strong>{props.characterInfo.starships}</p>
            <p><strong>Home World: </strong>{props.characterInfo.homeworld}</p>
            <p><strong>URL: </strong>{props.characterInfo.url}</p>
            <p><strong>Films: </strong>{props.characterInfo.films}</p>
            <p><strong>Vehicles: </strong>{props.characterInfo.vehicles}</p>    
            <p><strong>Created: </strong>{props.characterInfo.created}</p>
            <p><strong>Edited: </strong>{props.characterInfo.edited}</p>       
        </div>
    );
}
   
export default Character;



 