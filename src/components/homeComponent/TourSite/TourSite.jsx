import DreamPlace from "../DreamPlace/DreamPlace.jsx";


const TourSite = () => {
    return (
        <div className="mt-10 mb-5 md:mt-20 md:mb-10">
            <h1 className="text-4xl font-bold text-center text-white ">Find your <br /><span className="text-green-500">Dream place</span></h1>
            <div>
                <DreamPlace></DreamPlace>
            </div>
        </div>
    );
};

export default TourSite;