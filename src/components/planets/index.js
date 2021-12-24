import React, { useState, useEffect } from 'react'
import Planet from './planet'

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const removeLast = () => {
        let new_planets = [...planets]
        new_planets.pop()
        setPlanets(new_planets)
    }
    return (
        <div>
            <h3>Planet List</h3>
            <button onClick={removeLast}>Remove last</button>
            <hr />
            {planets.map((planet) =>
                <Planet
                    title={planet.title}
                    description={planet.description}
                />
            )}
        </div>
    )
}

export default Planets