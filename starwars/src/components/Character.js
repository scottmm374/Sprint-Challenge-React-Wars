import React from 'react';


function Character(props) {
    return (
        <div className="char-card">
            <p><strong>created: </strong>{props.characterInfo.created}</p>
            <p><strong>edited: </strong>{props.characterInfo.edited}</p>
            <p><strong>eyeColor: </strong>{props.characterInfo.eye_color}</p>
            <p><strong>films: </strong>{props.characterInfo.films}</p>
            <p><strong>gender: </strong>{props.characterInfo.gender}</p>
            <p><strong>hairColor: </strong>{props.characterInfo.hair_color}</p>
            <p><strong>height: </strong>{props.characterInfo.height}</p>
            <p><strong>homeWorld: </strong><a href={props.characterInfo.homeWorld} /></p>
            <p><strong>mass: </strong>{props.characterInfo.mass}</p>
            <p><strong>name: </strong>{props.characterInfo.name}</p>
            <p><strong>skinColor: </strong>{props.characterInfo.skin_color}</p>
            <p><strong>species: </strong><a href={props.characterInfo.species} /></p>
            <p><strong>starShips: </strong>{props.characterInfo.starShips}</p>
            <p><strong>url: </strong>{props.characterInfo.url}</p>
            <p><strong>vehicles: </strong>{props.characterInfo.vehicles}</p>           
        </div>
    );
}
   
export default Character;



 