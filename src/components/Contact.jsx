// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import toast from "react-hot-toast";

// function Contact() {
//   const {
//     register,
//     handleSubmit,

//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       name: data.name,
//       email: data.email,
//       message: data.message,
//     };
//     try {
//       await axios.post("https://getform.io/f/raeqjora", userInfo);
//       toast.success("Your message has been sent");
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };
//   return (
//     <>
//       <div
//         name="Contact"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
//       >
//         <h1 className="text-3xl font-bold mb-4">Contact me</h1>
//         <span>Please fill out the form below to contact me</span>
//         <div className=" flex flex-col items-center justify-center mt-5">
//           <form
//             onSubmit={handleSubmit(onSubmit)}
//             // action="https://getform.io/f/raeqjora"
//             // method="POST"
//             className="bg-slate-200 w-96 px-8 py-6 rounded-xl"
//           >
//             <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">FullName</label>
//               <input
//                 {...register("name", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="name"
//                 name="name"
//                 type="text"
//                 placeholder="Enter your fullname"
//               />
//               {errors.name && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Email Address</label>
//               <input
//                 {...register("email", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="email"
//                 name="email"
//                 type="text"
//                 placeholder="Enter your email address"
//               />
//               {errors.email && <span>This field is required</span>}
//             </div>
//             <div className="flex flex-col mb-4">
//               <label className="block text-gray-700">Message</label>
//               <textarea
//                 {...register("message", { required: true })}
//                 className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                 id="message"
//                 name="message"
//                 type="text"
//                 placeholder="Enter your Query"
//               />
//               {errors.message && <span>This field is required</span>}
//             </div>
//             <button
//               type="submit"
//               className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Contact;

import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/aqoenoqa", userInfo);
      toast.success("Your message has been sent!");
      reset(); // Clear the form after successful submission
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl mx-auto px-4 md:px-20 py-16"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Contact Me</h1>
        <p className="text-gray-600 mt-2">
          I'd love to hear from you. Fill out the form below!
        </p>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-xl rounded-xl w-full max-w-lg p-8"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Send a Message
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="John Doe"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                Full Name is required.
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="john@example.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required.</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message here..."
            />
            {errors.message && (
              <span className="text-red-500 text-sm">Message is required.</span>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
