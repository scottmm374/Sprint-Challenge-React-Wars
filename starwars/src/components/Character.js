import React from 'react';

function Character(props) {
    return (
        <div>
            <p><strong>created:</strong>{props.starwarsChars.created}</p>
            <p><strong>edited:</strong>{props.starwarsChars.edited}</p>
            <p><strong>eyeColor:</strong>{props.starwarsChars.eyeColor}</p>
            <p><strong>films:</strong>{props.starwarsChars.films}</p>
            <p><strong>gender:</strong>{props.starwarsChars.gender}</p>
            <p><strong>hairColor:</strong>{props.starwarsChars.hairColor}</p>
            <p><strong>height:</strong>{props.starwarsChars.height}</p>
            <p><strong>homeWorld:</strong>{props.starwarsChars.homeWorld}</p>
            <p><strong>mass:</strong>{props.starwarsChars.mass}</p>
            <p><strong>name:</strong>{props.starwarsChars.name}</p>
            <p><strong>skinColor:</strong>{props.starwarsChars.skinColor}</p>
            <p><strong>species:</strong>{props.starwarsChars.species}</p>
            <p><strong>starShips:</strong>{props.starwarsChars.starShips}</p>
            <p><strong>url:</strong>{props.starwarsChars.url}</p>
            <p><strong>vehicles:</strong>{props.starwarsChars.vehicles}</p>           
        </div>
    );
}
   
export default Character;



 // birthYear: "",
                // created: "",
                // edited: "",
                // eyeColor: "",
                // films: "",
                // gender: "",
                // hairColor: "",
                // height: "",
                // homeWorld: "",
                // mass: "",
                // name: "",
                // skinColor: "",
                // species: "",
                // starShips: "",
                // url: "",
                // vehicles: "",
