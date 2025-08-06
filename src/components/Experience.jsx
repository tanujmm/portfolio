// import React from "react";
// import html from "../../public/html.png";
// import css from "../../public/css.jpg";
// import java from "../../public/java.png";
// import javascript from "../../public/javascript.png";
// import express from "../../public/express.png";
// import react from "../../public/reactjs.png";
// import mongoDb from "../../public/mongodb.jpg";
// import node from "../../public/node.png";
// import cprog from "/Cprog.png";
// import cpp from "/c++prog.png";
// function Experience() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: html,
//       name: "HTML",
//     },
//     {
//       id: 2,
//       logo: css,
//       name: "CSS",
//     },
//     {
//       id: 3,
//       logo: javascript,
//       name: "JavaScript",
//     },
//     {
//       id: 4,
//       logo: react,
//       name: "ReactJs",
//     },
//     {
//       id: 5,
//       logo: node,
//       name: "NodeJs",
//     },
//     {
//       id: 6,
//       logo: express,
//       name: "ExpressJs",
//     },
//     {
//       id: 7,
//       logo: mongoDb,
//       name: "MongoDB",
//     },
//     {
//       id: 8,
//       logo: cprog,
//       name: "C Programming",
//     },
//     {
//       id: 9,
//       logo: cpp,
//       name: "Cpp",
//     },
//   ];
//   return (
//     <div
//       name="Experiance"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//     >
//       <div>
//         <h1 className="text-3xl font-bold mb-5">Skills Set</h1>
//         <p className="  ">Here are my some technical skill sets</p>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
//           {cardItem.map(({ id, logo, name }) => (
//             <div
//               className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
//               key={id}
//             >
//               <img src={logo} className="w-[150px] rounded-full" alt="" />
//               <div>
//                 <div className="">{name}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;

import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import express from "../../public/express.png";
import react from "../../public/reactjs.png";
import mongoDb from "../../public/mongodb.jpg";
import node from "../../public/node.png";
import cprog from "/Cprog.png";
import cpp from "/c++prog.png";

function Experience() {
  const cardItem = [
    { id: 1, logo: html, name: "HTML" },
    { id: 2, logo: css, name: "CSS" },
    { id: 3, logo: javascript, name: "JavaScript" },
    { id: 4, logo: react, name: "ReactJS" },
    { id: 5, logo: node, name: "NodeJS" },
    { id: 6, logo: express, name: "ExpressJS" },
    { id: 7, logo: mongoDb, name: "MongoDB" },
    { id: 8, logo: cprog, name: "C Programming" },
    { id: 9, logo: cpp, name: "C++" },
  ];

  return (
    <section
      name="Experience"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16 bg-gray-50"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">Skill Set</h1>
        <p className="text-gray-600 text-lg">
          A showcase of technologies and languages I’ve worked with
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="flex flex-col items-center bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 p-4 group"
          >
            <img
              src={logo}
              alt={name}
              className="w-24 h-24 object-contain mb-4 group-hover:scale-105 transition"
            />
            <h3 className="text-md font-semibold text-gray-700">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
