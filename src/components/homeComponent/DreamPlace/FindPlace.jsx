import { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard.jsx";


const FindPlace = () => {
    
    const [places,setPlaces] = useState([])

    useEffect(()=> {
        fetch('/placeTypeData.json')
            .then(res => res.json())
            .then(data => setPlaces(data))
    },[])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                places.map(place =><PlaceCard key={place.id} place={place}></PlaceCard>)
            }
        </div>
    );
};

export default FindPlace;