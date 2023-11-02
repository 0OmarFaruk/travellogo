import banner1 from "../../../assets/424037036.jpg";
import banner2 from "../../../assets/hill-view-1n3bsztqeismebwr.jpg";
import banner3 from "../../../assets/Seaview_(Clifton_Beach)_Karachi.jpg";
import banner4 from "../../../assets/Untitled_20200202233206.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full rounded h-[500px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle lg:ml-[1000px] mb-96">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute h-full  bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
          <h2 className="text-6xl text-white pl-20 pt-24 font-bold">
            Discover the world <br />{" "}
            <span className="text-rose-500">your way</span>
          </h2>
          <p className=" text-white pl-20 pt-8">
            Join us on an adventure of a lifetime! Explore new horizons and
            create lasting memories
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn mt-8 bg-rose-900 ml-20"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Read more
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-blue-300 text-black">
              <h3 className="text-3xl font-bold">Travellogo</h3>
              <p className="py-4">
                Pack your bags and get ready for an unforgettable adventure!
                Join us on a journey to explore new places, make memories, and
                experience the world like never before. Adventure awaits – book
                your tour today!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle lg:ml-[1000px] mb-96">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute h-full  bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
          <h2 className="text-6xl text-white pl-20 pt-24 font-bold">
            Discover the world <br />{" "}
            <span className="text-rose-500">your way</span>
          </h2>
          <p className=" text-white pl-20 pt-8">
            Join us on an adventure of a lifetime! Explore new horizons and
            create lasting memories
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn mt-8 bg-rose-900 ml-20"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Read more
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-blue-300 text-black">
              <h3 className="text-3xl font-bold">Travellogo</h3>
              <p className="py-4">
                Pack your bags and get ready for an unforgettable adventure!
                Join us on a journey to explore new places, make memories, and
                experience the world like never before. Adventure awaits – book
                your tour today!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle lg:ml-[1000px] mb-96">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute h-full  bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
          <h2 className="text-6xl text-white pl-20 pt-24 font-bold">
            Discover the world <br />{" "}
            <span className="text-rose-500">your way</span>
          </h2>
          <p className=" text-white pl-20 pt-8">
            Join us on an adventure of a lifetime! Explore new horizons and
            create lasting memories
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn mt-8 bg-rose-900 ml-20"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Read more
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-blue-300 text-black">
              <h3 className="text-3xl font-bold">Travellogo</h3>
              <p className="py-4">
                Pack your bags and get ready for an unforgettable adventure!
                Join us on a journey to explore new places, make memories, and
                experience the world like never before. Adventure awaits – book
                your tour today!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle lg:ml-[1000px] mb-96">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute h-full  bg-gradient-to-r from-black to-[rgba(21,21,21,0)]">
          <h2 className="text-6xl text-white pl-20 pt-24 font-bold">
            Discover the world <br />{" "}
            <span className="text-rose-500">your way</span>
          </h2>
          <p className=" text-white pl-20 pt-8">
            Join us on an adventure of a lifetime! Explore new horizons and
            create lasting memories
          </p>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn mt-8 bg-rose-900 ml-20"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Read more
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box bg-blue-300 text-black">
              <h3 className="text-3xl font-bold">Travellogo</h3>
              <p className="py-4">
                Pack your bags and get ready for an unforgettable adventure!
                Join us on a journey to explore new places, make memories, and
                experience the world like never before. Adventure awaits – book
                your tour today!
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Banner;
