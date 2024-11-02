import React, { useState } from 'react';

function CityEditForm() {
    const [cities, setCities] = useState([
        { id: 1, name: "Kyiv" },
        { id: 2, name: "Lviv" },
    ]);

    const updateCityName = (id, newName) => {
        setCities(cities.map(city =>
            city.id === id ? { ...city, name: newName } : city
        ));
    };

    return (
        <div>
            {cities.map(city => (
                <div key={city.id}>
                    <input 
                        type="text" 
                        value={city.name} 
                        onChange={(e) => updateCityName(city.id, e.target.value)} 
                    />
                </div>
            ))}
        </div>
    );
}
