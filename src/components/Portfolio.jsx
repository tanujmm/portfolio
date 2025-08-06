// import React from "react";

// function Portfolio() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: "https://cdn.dribbble.com/userupload/10088154/file/original-85d6085e85a52914ed42cb4e758e6e2e.jpg",
//       name: "Real-Estate Web Application",
//       src: "https://real-estate-project-backand2.onrender.com/",
//       text: "A simple real estate website where users can easily buy, sell, or rent homes and properties.",
//     },
//     {
//       id: 2,
//       logo: "https://appinventiv.com/wp-content/uploads/2021/08/firebase-chat-app.png",
//       name: "Real-Time Chat Application",
//       text: "A messaging app that lets users chat instantly and stay connected in real-time.",
//       src: "https://real-time-chat-applicaton-4-frontend.onrender.com",
//     },
//     {
//       id: 3,
//       logo: "https://www.tabnine.com/wp-content/uploads/2023/10/AI-Code-Review.png.webp",
//       name: "AI Powered Code Reveiwer Application",
//       text: "A smart tool that uses AI to review code, find bugs, and suggest improvements automatically.",
//       src: "https://github.com/tanujmm/AI-Powered-Code-Reviewer",
//     },
//     {
//       id: 4,
//       logo: "https://thumbs.dreamstime.com/b/map-icon-isometric-destination-location-pin-pointer-vector-illustration-flat-cartoon-concept-gps-position-symbol-172232507.jpg",
//       name: "Real-Time Location Tracker",
//       text: "A live tracking tool that shows the current location or status of people instanly",
//       src: "https://github.com/tanujmm/Real-Time-Tracker",
//     },
//   ];
//   return (
//     <div
//       name="Portfolio"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
//         <span className=" underline font-semibold">Featured Projects</span>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
//           {cardItem.map(({ id, logo, name, src, text }) => (
//             <div
//               className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img
//                 src={logo}
//                 className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
//                 alt=""
//               />
//               <div>
//                 <div className="px-2 font-bold text-xl mb-2">{name}</div>
//                 <p className="px-2 text-gray-700">{text}</p>
//               </div>
//               <div className=" px-6 py-4 space-x-3 justify-around">
//                 <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                   <a href={src} target="_blank" rel="noopener noreferrer">
//                     Preview
//                   </a>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Portfolio;

import React from "react";

function Portfolio() {
  const cardItem = [
    {
      id: 1,
      logo: "https://cdn.dribbble.com/userupload/10088154/file/original-85d6085e85a52914ed42cb4e758e6e2e.jpg",
      name: "Real-Estate Web Application",
      src: "https://real-estate-project-backand2.onrender.com/",
      text: "A simple real estate website where users can easily buy, sell, or rent homes and properties.",
    },
    {
      id: 2,
      logo: "https://appinventiv.com/wp-content/uploads/2021/08/firebase-chat-app.png",
      name: "Real-Time Chat Application",
      text: "A messaging app that lets users chat instantly and stay connected in real-time.",
      src: "https://real-time-chat-applicaton-4-frontend.onrender.com",
    },
    {
      id: 3,
      logo: "https://www.tabnine.com/wp-content/uploads/2023/10/AI-Code-Review.png.webp",
      name: "AI Powered Code Reviewer",
      text: "A smart tool that uses AI to review code, find bugs, and suggest improvements automatically.",
      src: "https://github.com/tanujmm/AI-Powered-Code-Reviewer",
    },
    {
      id: 4,
      logo: "https://thumbs.dreamstime.com/b/map-icon-isometric-destination-location-pin-pointer-vector-illustration-flat-cartoon-concept-gps-position-symbol-172232507.jpg",
      name: "Real-Time Location Tracker",
      text: "A live tracking tool that shows the current location or status of people instantly.",
      src: "https://github.com/tanujmm/Real-Time-Tracker",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
          Portfolio
        </h1>
        <p className="text-lg text-gray-600 font-medium underline">
          Featured Projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardItem.map(({ id, logo, name, src, text }) => (
          <div
            key={id}
            className="bg-white shadow-xl rounded-xl border hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center text-center"
          >
            <img
              src={logo}
              alt={name}
              className="w-[100px] h-[100px] rounded-full border mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
            <p className="text-sm text-gray-600 mb-4 px-2 line-clamp-3">
              {text}
            </p>
            <a
              href={src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-md">
                Preview
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
