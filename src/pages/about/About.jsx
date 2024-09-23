import React from "react";
import kamina from "../../../public/assets/kamina.jpg";

function About() {
  return (
    <div className="align-elements py-5">
      <div
        style={{
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
        className="md:flex md:gap-8 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center p-5"
      >
        <div className="max-w-80">
          <img src={kamina} alt="" className="rounded-xl" />
        </div>
        <div>
          <p className="text-gray-500 text-lg mt-4 ">Name:</p>
          <h2 className="text-lg font-medium">Jalilov Shohbek</h2>
          <p className="text-gray-500 text-lg mt-4">Region:</p>
          <p className="text-lg font-medium">Surxondaryo, Uzbekistan</p>
          <p className="text-gray-500 text-lg mt-4">Education:</p>
          <p className="text-lg font-medium">
            National university of uzbekistan (2019-2023)
          </p>
          <p className="text-gray-500 text-lg mt-4">Work:</p>
          <p className="text-lg font-medium">
            Leading specialist of the Institute for the Development of
            Professional Education
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
