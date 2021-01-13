import React, { useState, useEffect } from 'react';


export default (props) => {
    console.log(props.path)

    console.log(props.type)
    const [ peopleType, setPeopleType ] = useState(false);
    const [ planets, setPlanets ] = useState(false);
    const [ films, setFilms ] = useState(false);
    const [ species, setSpecies ] = useState(false);
    const [ vehicles, setVehicles ] = useState(false);
    const [ starships, setStarships ] = useState(false);
    const [ stuff, setStuff ] = useState({});


    useEffect(() => {
        if (props.type === "people") {
            setPeopleType(true);
        } else if (props.type === "planets") {
            setPlanets(true);
        } else if (props.type === "films") {
            setFilms(true);
        } else if (props.type === "species") {
            setSpecies(true);
        } else if (props.type === "vehicles") {
            setVehicles(true);
        } else if (props.type === "starships") {
            setStarships(true);
        }
        fetch('https://swapi.dev/api' + props.path)
            .then(reply => reply.json())
            .then(reply => {
                setStuff(reply);
                console.log(reply);
            })
    }, []);

    

    return(
        <>
            {
                stuff.detail ?
                <h3 style={{color: "red"}}>These aren't the droids you're looking for</h3>
                : ''
            }

            {
                peopleType ?
                <div style={{marginTop: "5%"}}>
                    <h1>{stuff.name}</h1>
                    <p><strong>Height: </strong> {stuff.height}</p>
                    <p><strong>Hair Color: </strong> {stuff.hair_color}</p>
                    <p><strong>Skin Color: </strong> {stuff.skin_color}</p>
                    <p><strong>Mass: </strong> {stuff.mass}</p>
                </div>
                : ''
            }

            {
                planets ?
                <div style={{marginTop: "5%"}}>
                    <h1>{stuff.name}</h1>
                    <p><strong>Rotation: </strong> {stuff.rotation_period}</p>
                    <p><strong>Orbit: </strong> {stuff.orbital_period}</p>
                    <p><strong>Climate: </strong> {stuff.climate}</p>
                    <p><strong>Population: </strong> {stuff.population}</p>
                </div>
                : ''
            }

            {
                films ?
                <div style={{marginTop: "5%"}}>
                    <h1>{stuff.title}</h1>
                    <p><strong>Director: </strong> {stuff.director}</p>
                    <p><strong>Producer(s): </strong> {stuff.producer}</p>
                    <p><strong>Episode ID: </strong> {stuff.episode_id}</p>
                    <p><strong>Release Date: </strong> {stuff.release_date}</p>
                </div>
                : ''
            }

            {
                species ?
                <div style={{marginTop: "5%"}}>
                    <h1>{stuff.name}</h1>
                    <p><strong>Classification: </strong> {stuff.classification}</p>
                    <p><strong>Designation: </strong> {stuff.designation}</p>
                    <p><strong>Language: </strong> {stuff.language}</p>
                    <p><strong>Average Lifespan: </strong> {stuff.average_lifespan}</p>
                </div>
                : ''
            }

            {
                starships ?
                <div style={{marginTop: "5%"}}>
                    <h1>{stuff.name}</h1>
                    <p><strong>Model: </strong> {stuff.model}</p>
                    <p><strong>Manufacturer: </strong> {stuff.manufacturer}</p>
                    <p><strong>Crew: </strong> {stuff.crew}</p>
                    <p><strong>Passengers: </strong> {stuff.passengers}</p>
                </div>
                : ''
            }
        </>
    )
}


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default (props) => {
//     console.log(props.type)
//     const [ peopleType, setPeopleType ] = useState(false);
//     const [ planets, setPlanets ] = useState(false);
//     const [ films, setFilms ] = useState(false);
//     const [ species, setSpecies ] = useState(false);
//     const [ vehicles, setVehicles ] = useState(false);
//     const [ starships, setStarships ] = useState(false);
//     const [ stuff, setStuff ] = useState({});

//     axios.get('https://swapi.dev/api' + props.path).then(response=>{
//         console.log(response);
//     })

//     if (props.type === "people") {
//         setPeopleType(true);
//     } else if (props.type === "planets") {
//         setPlanets(true);
//     } else if (props.type === "films") {
//         setFilms(true);
//     } else if (props.type === "species") {
//         setSpecies(true);
//     } else if (props.type === "vehicles") {
//         setVehicles(true);
//     } else if (props.type === "starships") {
//         setStarships(true);
//     }

//     return(
//         <>
//             {/* {
//                 peopleType ?
//                 <div style={{marginTop: "5%"}}>
//                     <h1></h1>
//                 </div>
//                 :
//             }

//             {
//                 planets ?
//                 <div style={{marginTop: "5%"}}></div>
//                 :
//             }

//             {
//                 films ?
//                 <div style={{marginTop: "5%"}}></div>
//                 :
//             }

//             {
//                 species ?
//                 <div style={{marginTop: "5%"}}></div>
//                 :
//             }

//             {
//                 vehicles ?
//                 <div style={{marginTop: "5%"}}></div>
//                 :
//             }

//             {
//                 starships ?
//                 <div style={{marginTop: "5%"}}></div>
//                 :
//             } */}
//         </>
//     )
// }