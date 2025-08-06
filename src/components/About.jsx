// import React from "react";

// function About() {
//   return (
//     <div
//       name="About"
//       className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
//     >
//       <div>
//         {/* About Header */}
//         <h1 className="text-3xl font-bold mb-5 text-gray-800">About Me</h1>
//         <p className="text-gray-700 leading-relaxed">
//           Hello! I'm <span className="font-semibold">Tanuj</span>, a passionate
//           MERN Stack developer eager to build responsive and scalable web
//           applications. With a strong foundation in MongoDB, Express.js,
//           React.js, and Node.js, I'm excited to contribute to real-world
//           projects and grow as a full-stack developer.
//         </p>

//         {/* Education Section */}
//         <div className="mt-10">
//           <h2 className="text-green-600 font-semibold text-xl mb-2">
//             Education
//           </h2>
//           <ul className="list-disc ml-5 text-gray-700 space-y-1">
//             <li>
//               B.Tech in Computer Science, ITM University Gwalior (2021–2025)
//             </li>
//             <li>
//               Higher Secondary School (CBSE), Kiddy’s Corner Public School,
//               Gwalior (2021)
//             </li>
//           </ul>
//         </div>

//         {/* Skills & Expertise Section */}
//         <div className="mt-10">
//           <h2 className="text-green-600 font-semibold text-xl mb-2">
//             Skills & Expertise
//           </h2>
//           <ul className="list-disc ml-5 text-gray-700 space-y-1">
//             <li>
//               Proficient in full-stack web development using the MERN stack
//               (MongoDB, Express.js, React.js, Node.js)
//             </li>
//             <li>
//               Solid programming knowledge in C and C++, including data
//               structures, algorithms, and memory management
//             </li>
//             <li>
//               Experience with RESTful APIs, version control (Git), and basic
//               debugging techniques
//             </li>
//           </ul>
//         </div>

//         {/* Achievements & Awards Section */}
//         <div className="mt-10">
//           <h2 className="text-green-600 font-semibold text-xl mb-2">
//             Achievements & Awards
//           </h2>
//           <ul className="list-disc ml-5 text-gray-700 space-y-1">
//             <li>[Award/Recognition], [Organization/Institution], [Year]</li>
//             <li>[Achievement], [Organization/Platform], [Year]</li>
//           </ul>
//         </div>

//         {/* Mission Statement Section */}
//         <div className="mt-10">
//           <h2 className="text-green-600 font-semibold text-xl mb-2">
//             Mission Statement
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             My mission is to grow as a skilled full-stack developer by
//             continuously learning and adapting to new technologies. I aim to
//             build efficient, user-friendly, and scalable web applications that
//             solve real-world problems. I am committed to writing clean,
//             maintainable code and contributing to collaborative development
//             environments. My goal is to deliver value through technology while
//             sharpening my problem-solving skills each day.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      <div>
        {/* About Header */}
        <h1 className="text-4xl font-bold mb-6 text-gray-900">About Me</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Hello! I'm <span className="font-semibold text-black">Tanuj</span>, a
          passionate{" "}
          <span className="text-green-700 font-medium">
            MERN Stack Developer
          </span>{" "}
          driven to build responsive, user-friendly, and scalable web
          applications. I specialize in MongoDB, Express.js, React.js, and
          Node.js, and I enjoy contributing to real-world projects while
          constantly growing as a developer.
        </p>

        {/* Education Section */}
        <div className="mt-12">
          <h2 className="text-2xl text-green-700 font-semibold mb-3">
            🎓 Education
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              <strong>B.Tech in Computer Science</strong> – ITM University,
              Gwalior (2021–2025)
            </li>
            <li>
              <strong>Higher Secondary (CBSE)</strong> – Kiddy’s Corner Public
              School, Gwalior (2021)
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl text-green-700 font-semibold mb-3">
            🛠️ Skills & Expertise
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
            <li>
              C & C++ with strong understanding of DSA and memory management
            </li>
            <li>RESTful APIs, Git & GitHub, basic debugging techniques</li>
          </ul>
        </div>

        {/* Achievements Section */}
        <div className="mt-12">
          <h2 className="text-2xl text-green-700 font-semibold mb-3">
            🏆 Certifications and Achievements
          </h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Salesforce Administrator Virtual Internship.</li>
            <li>Service Now CAD Virtual Internship Certificate.</li>
            <li>Certificates of ‘C’ & ‘C++’ Course by Kanishka IT Ltd.</li>
            {/* You can remove or edit these as needed */}
          </ul>
        </div>

        {/* Mission Section */}
        <div className="mt-12">
          <h2 className="text-2xl text-green-700 font-semibold mb-3">
            🚀 Mission Statement
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            My mission is to become a skilled full-stack developer by
            consistently learning and adapting to new technologies. I aim to
            build efficient and intuitive web apps that make an impact. I’m
            committed to writing clean, maintainable code and thriving in
            collaborative development teams.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
