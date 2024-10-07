import React from "react";
import satelitImg from "../../assets/satelite2.jpg";

const Satellite = () => {
  return (
    <>
      <section className="bg-black text-white py-20 relative z-50">
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 ">
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
                 PSLV-C54
              </h1>
              <p data-aos="fade-up" data-aos-delay="700">
                PSLV-C54 has successfully launched E0S-06 satellite along with Eight Nano-satellites into two different SSPOs. The mission was accomplished on 26th November 2022.
                The objective was to ensure the data continuity of Ocean colour and wind vector data to sustain the operational applications.
                <br/>
                The satellite also supports value added products such as potential fishing zone using chlorophyll, SST and wind speed and land based geophysical parameters.
                
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="900"
                className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200"
              >
                View All
              </button>
            </div>
            <div data-aos="zoom-in">
              <img
                src={satelitImg}
                alt=""
                className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Satellite;