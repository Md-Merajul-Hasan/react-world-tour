import CountryData from "../CountryData/CountryData";

const CountryDetail = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    return (
        <div>
            <h5>Country Details</h5>
            <CountryData
            country = {country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;