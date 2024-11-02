import React, { useState } from 'react';

function CityList() {
    const [cities, setCities] = useState([]);
    const [newCity, setNewCity] = useState("");

    const addCity = () => {
        setCities([...cities, { id: Date.now(), name: newCity }]);
        setNewCity("");
    };

    return (
        <div>
            <ul>
                {cities.map(city => (
                    <li key={city.id}>{city.name}</li>
                ))}
            </ul>
            <input 
                type="text" 
                value={newCity} 
                onChange={(e) => setNewCity(e.target.value)} 
                placeholder="New city" 
            />
            <button onClick={addCity}>Add City</button>
        </div>
    );
}
