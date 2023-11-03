import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard.jsx";


const DreamPlace = () => {
    const countries = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                countries.map(country =><CountryCard key={country.id} country={country}></CountryCard>)
            }
        </div>
    );
};

export default DreamPlace;