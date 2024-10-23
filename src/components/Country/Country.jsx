import { useState } from 'react';
import './country.css'
const Country = ({country, handleVisitedCountry}) => {
    const {name,flags,capital,population,area,cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{ 
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited && 'purple'}}>Name: {name?.common}</h3>
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <img src={flags?.png} alt="" />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
        </div>
    );
};

export default Country;