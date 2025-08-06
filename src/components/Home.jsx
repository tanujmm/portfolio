import React from "react";
import pic from "../../public/photo.avif";
import { ReactTyped } from "react-typed";
import profile from "../../public/profile.jpeg";
function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-xl text-gray-600">Welcome to My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl font-semibold">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <p className="text-sm md:text-md text-justify leading-relaxed text-gray-700">
              Hello! I'm Tanuj Mittal, a passionate MERN Stack developer eager
              to build responsive and scalable web applications. With a strong
              foundation in MongoDB, Express.js, React.js, and Node.js, I'm
              excited to contribute to real-world projects and grow as a
              full-stack developer.
            </p>

            {/* Download CV Button */}
            <a
              href="https://drive.google.com/file/d/1wUIsg54ezb1_oqvcblPz4my6JvYnMIs8/view?usp=drivesdk" // Make sure this path matches your public folder
              download
              className="inline-block bg-red-600 text-white px-5 py-2 rounded-md shadow-md hover:bg-red-700 transition duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Right Section - Profile Image */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src="https://www.shutterstock.com/image-vector/programmer-computer-expert-black-linear-600nw-2033137370.jpg"
              className="rounded-full md:w-[450px] md:h-[450px] shadow-lg"
              alt="Profile"
            />
            {/* <img
              src={profile}
              className="rounded-full md:w-[450px] md:h-[450px] shadow-lg"
              alt="Profile"
            /> */}
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
