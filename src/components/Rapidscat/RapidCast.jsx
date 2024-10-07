import React from "react";
import sateliteImg from "../../assets/satelite1.jpg";

const Rapidscat = () => {
  return (
    <>
      <section className="bg-black text-white pb-12">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div data-aos="zoom-in">
              <img
                src={sateliteImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 ">
              <p
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sky-800 uppercase"
              >
                OUR MISSION
              </p>
              <h1
                data-aos="fade-up"
                data-aos-delay="500"
                className="uppercase text-5xl"
              >
                Rapidscat
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">

              ISS-RapidScat was a scatterometer designed to support weather forecasting by bouncing microwaves off the ocean&apos;s surface to measure wind speed via wind waves. It featured a 75 cm (30 inches) rotating radar dish that  could collect data between 51.6 degrees north and south latitude, with a swath 900 km wide(560 mi).
              <br />

              It also played a role in observing the Category 5 Hurricane Patricia in October 2015, which was noted as one of the most powerful hurricanes on record, with maximum sustained winds 


            
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rapidscat;