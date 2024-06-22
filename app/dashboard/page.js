"use client";
import Image from "next/image";
import React from "react";
import "./page.css";
import Model from "@/components/Model";
import Link from "next/link";
import Testimonial from "@/components/Testimonial";
import Resume from "@/components/Resume";
import Education from "@/components/Education";
const Testimonials = [
  {
    name: "Aditya Raj",
    imageSrc: "/avtar2.png",
    description:
      "Tejas & I worked in the same team for a project for 6 months. He is very fast learner",
    link: "https://www.google.com",
    fulldecription: `Harsh I worked in the same team for a project for 6 months. He is very fast learner. Being an intern, He was able to understand project objective and learned the required skills very quickly. He contributed to both frontend and backend part of the project.
He posses very good presentation and communication skill. He also got very positive attitude to his work.
Harsh will be an asset to any team and I wish him all the very best.`,
  },
  {
    name: "Anonymous",
    imageSrc: "/avtar3.webp",
    description:
      "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
    link: "https://www.google.com",
    fulldecription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    name: "Shubham",
    imageSrc: "/Avtar.png",
    description: "xyz",
    link: "https://www.google.com",
    fulldecription: "xyz",
  },
];

const Experiences = [
  {
    company: "Physics Wallah",
    logo: "/pw.png",
  },
  {
    company: "IBM",
    logo: "/ibm.png",
  },
  {
    company: "Physics Wallah",
    logo: "/pw.png",
  },
  {
    company: "IBM",
    logo: "/ibm.png",
  },
  {
    company: "Physics Wallah",
    logo: "/pw.png",
  },
  {
    company: "IBM",
    logo: "/ibm.png",
  },
  {
    company: "Physics Wallah",
    logo: "/pw.png",
  },
  {
    company: "IBM",
    logo: "/ibm.png",
  },
  {
    company: "Physics Wallah",
    logo: "/pw.png",
  },
  {
    company: "IBM",
    logo: "/ibm.png",
  },
];

const Resumaes = [
  {
    company: "Physics Wallah",
    designation: "Software Developer",
    joiningDate: "2020-01-01",
    leavingDate: "Present",
    description: {
      points: [
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
      ],
    },
  },
  {
    company: "Amazon",
    designation: "Software Developer",
    joiningDate: "2020-01-01",
    leavingDate: "2020-01-01" || "Present",
    description: {
      points: [
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
      ],
    },
  },
];

const Educations = [
  {
    name: "ABC",
    session: "2020-2021",
    course: "B.Tech Information Technology",
    CGPA: "8.0",
    description: {
      points: [
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
      ],
    },
  },
  {
    name: "LPS",
    session: "2020-2021",
    course: "B.Tech Information Technology",
    CGPA: "8.0",
    description: {
      points: [
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
        "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
      ],
    },
  },
];

const skills = {
  leveled: [
    { name: "HTML", level: "80" },
    { name: "CSS", level: "70" },
    { name: "JavaScript", level: "60" },
    { name: "React", level: "20" },
  ],
  otherskills: [
    { name: "C", level: "80" },
    { name: "C++", level: "70" },
    { name: "Java", level: "60" },
    { name: "Python", level: "20" },
  ],
};

const Projects = [
  {
    name: "Project 1",
    description:
      "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
    link: "https://www.google.com",
  },
  {
    name: "Project 2",
    description:
      "lorem ipsum dolor sit ame met, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna alit",
    link: "https://www.google.com",
  },
];
export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center text-center p-8 xl:min-w-[980px]   h-screen overflow-auto  sm:justify-start ">
      {/* <h1>Dashboard</h1> */}
      <div className=" flex gap-3 justify-between p-3 max-w-[1250px] lg:flex md:flex sm:flex-col md:flex-row">
        {/* Contact DIV */}
        <div className="lg:block xl:block md:block p-4  w-[280px] rounded-lg bg-[#1e1e1f] border-[1px] border-[#555556] sticky top-1 sm:hidden">
          <div className="align-middle">
            <div className="text-3xl pt-5 p-3 flex flex-col gap-2">
              <div className="animate-rotate rounded-3xl border-[1px] border-solid border-rgb(34, 116, 107) bg-[#343434]">
                <Image
                  src="/Avtar.png"
                  width={250}
                  height={250}
                  alt="Picture of the author"
                />
              </div>
              <div className="flex flex-col gap-4 items-center">
                <span className="font-['Open+Sans']">Tejas Mishra</span>
                <div className="animate-pulse-yellow text-sm rounded-xl bg-[#2a2a2b] h-8 w-[190px] flex items-center justify-center gap-1">
                  <span className="pl-1 pr-1 animate-pulse-yellow text-yellow-500 transition-colors duration-700">
                    Innovating
                  </span>
                  <span className="animate-pulse-yellow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      className="w-4 h-4 animate-pulse-yellow text-yellow-500 transition-colors duration-700"
                    >
                      <path
                        fill="currentColor"
                        d="M297.2 248.9C311.6 228.3 320 203.2 320 176c0-70.7-57.3-128-128-128S64 105.3 64 176c0 27.2 8.4 52.3 22.8 72.9c3.7 5.3 8.1 11.3 12.8 17.7l0 0c12.9 17.7 28.3 38.9 39.8 59.8c10.4 19 15.7 38.8 18.3 57.5H109c-2.2-12-5.9-23.7-11.8-34.5c-9.9-18-22.2-34.9-34.5-51.8l0 0 0 0c-5.2-7.1-10.4-14.2-15.4-21.4C27.6 247.9 16 213.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176c0 37.3-11.6 71.9-31.4 100.3c-5 7.2-10.2 14.3-15.4 21.4l0 0 0 0c-12.3 16.8-24.6 33.7-34.5 51.8c-5.9 10.8-9.6 22.5-11.8 34.5H226.4c2.6-18.7 7.9-38.6 18.3-57.5c11.5-20.9 26.9-42.1 39.8-59.8l0 0 0 0 0 0c4.7-6.4 9-12.4 12.7-17.7zM192 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16s-7.2 16-16 16zm0 384c-44.2 0-80-35.8-80-80V416H272v16c0 44.2-35.8 80-80 80z"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="mt-6 p-3 flex flex-col gap-3 justify-between lg:block xl:block md:hidden">
              <div className="flex p-[2px] items-center gap-3 justify-start">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-7 h-7"
                  >
                    <path
                      fill="yellow"
                      d="M64 80c-26.5 0-48 21.5-48 48v28.2L220.8 321.4c20.5 16.5 49.8 16.5 70.3 0L496 156.2V128c0-26.5-21.5-48-48-48H64zM16 176.7V384c0 26.5 21.5 48 48 48H448c26.5 0 48-21.5 48-48V176.7L301.2 333.8c-26.4 21.3-64 21.3-90.4 0L16 176.7zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-light font-sans text-sm text-gray-400">
                    Email
                  </span>
                  <span className="font-bold font-sans text-sm text-blue-200">
                    <a href="mailto:tejasmishra72@gmail.com">
                      tejasmishra72@gmail.com
                    </a>
                  </span>
                </div>
              </div>
              {/* Linkedin */}
              <div className="flex p-[2px] items-center gap-3 justify-start">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="w-7 h-7"
                  >
                    <path
                      fill="#0766c2"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-light font-sans text-sm text-gray-400">
                    Linkedin
                  </span>
                  <span className="font-semibold font-sans text-sm text-blue-200">
                    <a
                      href="https://www.linkedin.com/in/tejasmishr/"
                      target="_blank"
                    >
                      View
                    </a>
                  </span>
                </div>
              </div>
              {/* Github */}
              <div className="flex p-[2px] items-center gap-3 justify-start">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                    className="w-7 h-7"
                  >
                    <path
                      fill="#ffffff"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-light font-sans text-sm text-gray-400">
                    Github
                  </span>
                  <span className="font-medium font-sans text-sm text-white">
                    <a href="https://github.com/TejasMishr/" target="_blank">
                      Collaborate
                    </a>
                  </span>
                </div>
              </div>
              {/* Leetcode */}
              <div className="flex p-[2px] items-center gap-3 justify-start">
                <div className="cursor-pointer">
                  <svg
                    fill="#ffffff"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                    className="w-7 h-7"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <title>LeetCode icon</title>

                      <path
                        fill="yellow"
                        d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-light font-sans text-sm text-gray-400">
                    Leetcode
                  </span>
                  <span className=" font-normal font-sans text-sm text-yellow-100">
                    <a
                      href="https://leetcode.com/u/tejas_mishr/"
                      target="_blank"
                    >
                      Check it out
                    </a>
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex p-[2px] items-center gap-3 justify-start">
                <div className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="w-7 h-7"
                  >
                    <path
                      fill="yellow"
                      d="M368 192c0-97.2-78.8-176-176-176S16 94.8 16 192c0 24.1 10.6 55.3 28.2 90c17.5 34.2 40.9 70 64.7 102.6c23.7 32.6 47.4 61.8 65.3 82.8c7 8.2 13 15.2 17.8 20.6c4.8-5.4 10.8-12.4 17.8-20.6c17.8-21 41.6-50.2 65.3-82.8c23.7-32.6 47.2-68.4 64.7-102.6c17.7-34.7 28.2-65.9 28.2-90zm16 0c0 95.9-140.8 262.2-181.3 308c-6.8 7.7-10.7 12-10.7 12s-4-4.3-10.7-12C140.8 454.2 0 287.9 0 192C0 86 86 0 192 0S384 86 384 192zM192 112a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm64 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-light font-sans text-sm text-gray-400">
                    Location
                  </span>
                  <span className="font-normal font-sans text-sm text-yellow-100">
                    Hardoi, India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact DIV ENDS HERE */}

        {/* Profile DIV STARTS HERE */}

        {/* Main Content */}
        <div
          className="rounded-2xl bg-[#1e1e1f] border-[1px] border-[#555556] overflow-auto scroll-smooth xl:min-w-[780px] lg:min-w-[720px] md:min-w-[480px] min-w-[300px]"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#FFE7A1 red",
          }}
        >
          <div className="">
            <div className="Nav flex justify-end items-end flex-col relative z-10 ">
              <nav className=" navbar  h-12 bg-[#282829] backdrop-blur-md border-[1px] border-[#282829] shadow-md flex justify-end items-center rounded-b-2xl rounded-r-2xl px-10 z-50 lg:w-[480] xl:w-[680px] max-md:fixed bottom-0 left-0 right-0 max-md:shadow-none]">
                <ul className="navbar-list flex gap-7">
                  <li className="navbar-item">
                    <button
                      className={`navbar-link text-gray-200  font-light font-['lato']  focus:outline-none hover:text-orange-400 ${
                        activeTab === "about" || activeTab === ""
                          ? "text-orange-500"
                          : ""
                      }`}
                      data-nav-link
                      onClick={() => setActiveTab("about")}
                    >
                      About
                    </button>
                  </li>

                  <li className="navbar-item">
                    <button
                      className={`navbar-link text-gray-200 font-light font-['lato'] focus:outline-none hover:text-orange-400 ${
                        activeTab === "resume" ? "text-orange-500" : ""
                      }`}
                      data-nav-link
                      onClick={() => setActiveTab("resume")}
                    >
                      Resume
                    </button>
                  </li>

                  <li className="navbar-item">
                    <button
                      className={`navbar-link text-gray-200 font-light font-['lato'] focus:outline-none hover:text-orange-400 ${
                        activeTab === "projects" ? "text-orange-500" : ""
                      }`}
                      data-nav-link
                      onClick={() => setActiveTab("projects")}
                    >
                      Projects
                    </button>
                  </li>

                  <li className="navbar-item">
                    <button
                      className={`navbar-link text-gray-200 font-light font-['lato'] focus:outline-none hover:text-orange-400 ${
                        activeTab === "certifications" ? "text-orange-500" : ""
                      }`}
                      data-nav-link
                      onClick={() => setActiveTab("certifications")}
                    >
                      Certifications
                    </button>
                  </li>

                  <li className="navbar-item">
                    <button
                      className={`navbar-link text-gray-200 font-light font-['lato'] focus:outline-none hover:text-orange-400 ${
                        activeTab === "extra" ? "text-orange-500" : ""
                      }`}
                      data-nav-link
                      onClick={() => setActiveTab("extra")}
                    >
                      Extra
                    </button>
                  </li>
                  <li className="navbar-item">
                    <button
                      className={`navbar-link text-gray-200 font-light font-['lato'] focus:outline-none hover:text-orange-400 ${
                        activeTab === "contact" ? "text-orange-500" : ""
                      }`}
                      data-nav-link
                      onClick={() => setActiveTab("contact")}
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Tabs Start Here */}

            {/* About */}
            {(activeTab === "about" || activeTab === "") && (
              <>
                {/* About Header */}
                <header className="relative -top-[30px] items-start justify-start flex pl-4 font-bold text-3xl flex-col">
                  <span className="pl-2">About Me</span>
                  <hr className="w-[40px] h-[3px] bg-[#d8cb3f] ml-2 mt-2 rounded-full" />
                </header>

                {/* About Me Section */}
                <section className="flex flex-col items-start justify-start p-4 gap-2  h-auto first-letter:capitalize text-left">
                  <p className="text-gray-300 text-sm font-thin items-start p-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                  <p className="text-gray-300 text-sm font-thin items-start p-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                  <p className="text-gray-300 text-sm font-thin items-start p-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </section>

                {/* My interest Section */}
                <section className="flex flex-col items-start justify-start p-4 gap-2  h-auto first-letter:capitalize text-left">
                  <div className="w-full font-bold text-2xl flex-col">
                    My Interests
                    <hr className="w-[40px] h-[3px] bg-[#f4e53e] mt-2 rounded-full animate-gradient-left-to-right" />
                  </div>
                  <div className="w-full flex flex-wrap gap-[18px] p-[30px] justify-between">
                    <div className="sm:max-w-[200px]  md:max-w-[250px] lg:max-w-[310px] xl:max-w-[390px] rounded-3xl min-h-[200px] flex items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px]">
                      <div className="flex flex-col gap-2 p-3">
                        <span className="text-xl font-semibold flex gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-7 h-7"
                          >
                            <path
                              fill="#ffc107"
                              d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 -48 0z"
                            />
                          </svg>
                          <span>Web Development</span>
                        </span>
                        <span className="text-sm">
                          Built websites during my internship at Apple and Yash
                          Technologies using HTML, CSS, Knockout JS, Oracle Jet
                          and SpringBoot.
                        </span>
                      </div>
                    </div>
                    <div className="sm:max-w-[200px] md:max-w-[250px]  lg:max-w-[310px] xl:max-w-[390px] rounded-3xl min-h-[200px] flex items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px]">
                      <div className="flex flex-col gap-2 p-3">
                        <span className="text-xl font-semibold flex gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-7 h-7"
                          >
                            <path
                              fill="#ffc107"
                              d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 -48 0z"
                            />
                          </svg>
                          <span>Web Development</span>
                        </span>
                        <span className="text-sm">
                          Built websites during my internship at Apple and Yash
                          Technologies using HTML, CSS, Knockout JS, Oracle Jet
                          and SpringBoot.
                        </span>
                      </div>
                    </div>
                    <div className="sm:max-w-[200px]  md:max-w-[250px] lg:max-w-[310px] xl:max-w-[390px] rounded-3xl min-h-[200px] flex items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px]">
                      <div className="flex flex-col gap-2 p-3">
                        <span className="text-xl font-semibold flex gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-7 h-7"
                          >
                            <path
                              fill="#ffc107"
                              d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 -48 0z"
                            />
                          </svg>
                          <span>Web Development</span>
                        </span>
                        <span className="text-sm">
                          Built websites during my internship at Apple and Yash
                          Technologies using HTML, CSS, Knockout JS, Oracle Jet
                          and SpringBoot.
                        </span>
                      </div>
                    </div>
                    <div className="sm:max-w-[200px]  md:max-w-[250px] lg:max-w-[310px] xl:max-w-[390px] rounded-3xl min-h-[200px] flex items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px]">
                      <div className="flex flex-col gap-2 p-3">
                        <span className="text-xl font-semibold flex gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-7 h-7"
                          >
                            <path
                              fill="#ffc107"
                              d="M64 64C46.3 64 32 78.3 32 96V416c0 17.7 14.3 32 32 32H448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120-24a24 24 0 1 1 0 48 24 24 0 1 1 -48 0z"
                            />
                          </svg>
                          <span>Web Development</span>
                        </span>
                        <span className="text-sm">
                          Built websites during my internship at Apple and Yash
                          Technologies using HTML, CSS, Knockout JS, Oracle Jet
                          and SpringBoot.
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testimonials / Recommendations */}

                <section className="flex flex-col gap-3 items-center justify-center">
                  <h1 className="text-2xl font-bold ">Testimonials</h1>

                  <div className="flex overflow-x-auto gap-3 md:max-w-[530px] lg:max-w-[730px] p-3">
                    {Testimonials.map((testimonial, index) => (
                      <Testimonial
                        key={index}
                        name={testimonial.name}
                        imageSrc={testimonial.imageSrc}
                        description={testimonial.description}
                        link={testimonial.link}
                        fulldecription={testimonial.fulldecription}
                      />
                    ))}
                  </div>
                </section>
                {/* Experience */}
                <section className="flex flex-col gap-3 items-center justify-center mt-4">
                  <h1 className="text-2xl font-bold">Experience</h1>
                  <div className="flex overflow-x-auto md:max-w-[480px] lg:max-w-[730px] p-2">
                    <div className="flex gap-2 overflow-hidden p-4">
                      {Experiences.map(({ company, logo }, index) => (
                        <div
                          key={index}
                          className="min-w-[120px] min-h-[120px] flex items-start justify-start rounded-3xl bg-[#f3f2f2] border-[1px] p-3 hover:animate-pulse-yellow cursor-pointer hover:bg-slate-200 hover:scale-105 ease-in-out duration-300 hover:translate-stop"
                          style={{
                            animation: "reverseTranslateX 13s linear infinite",
                          }}
                        >
                          <div
                            className="flex items-start justify-start overflow-hidden"
                            style={
                              {
                                // animation: "reverseTranslateX 6s linear infinite",
                              }
                            }
                          >
                            <Image
                              src={logo}
                              width={100}
                              height={100}
                              alt={company}
                              className="object-contain rounded-full"
                              style={{ background: "none" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            )}
            {/* Resume */}
            {activeTab === "resume" && (
              <>
                <header className="relative -top-[30px] items-start justify-start flex pl-4 font-bold text-3xl flex-col z-4">
                  <span className="pl-2">Resume</span>
                  <hr className="w-[40px] h-[3px] bg-[#d8cb3f] ml-2 mt-2 rounded-full" />
                </header>
                <section className="h-full flex flex-col items-start justify-start p-4 gap-2 first-letter:capitalize text-left">
                  {/* EXPERIENCE HEADING */}
                  <div className="flex p-1 gap-2 items-center h-auto">
                    <span className="p-2 rounded-xl bg-[#2a2a2b]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#eeb311"
                          d="M176 56V96H336V56c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zM128 96V56c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56V96h64c35.3 0 64 28.7 64 64V280 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V280 160c0-35.3 28.7-64 64-64h64zM48 304V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V304H320v16c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V304H48zm144-48H320 464V160c0-8.8-7.2-16-16-16H360 152 64c-8.8 0-16 7.2-16 16v96H192z"
                        />
                      </svg>
                    </span>
                    <span className="font-bold text-neutral-400">
                      <h3> Experience</h3>
                    </span>
                  </div>

                  {/* Experience Start Here */}
                  <section className="flex flex-col items-start justify-start p-1 gap-2 first-letter:capitalize text-left h-full">
                    {/* Experience Content */}
                    <div className="flex items-start justify-center h-full  relative ">
                      {/* Line Div */}
                      <div className="h-full absolute left-[16px] -top-[18px] w-[2px] rounded-full border-[1px] border-solid border-[#2A2A2B]"></div>

                      {/* Resumae Div Data Map */}
                      <div className="overflow-auto">
                        {Resumaes.map((resume, index) => (
                          <Resume key={index} resume={resume} />
                        ))}
                        {Resumaes.map((resume, index) => (
                          <Resume key={index} resume={resume} />
                        ))}
                      </div>
                    </div>
                  </section>
                </section>

                {/* Education */}
                <section className="h-full flex flex-col items-start justify-start p-4 gap-2 first-letter:capitalize text-left">
                  {/* Education HEADING */}
                  <div className="flex p-1 gap-2 items-center h-auto">
                    <span className="p-2 rounded-xl bg-[#2a2a2b]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#eeb311"
                          d="M156 32C100.6 32 48.8 46.6 27.1 53.6C10.3 59 0 74.5 0 91.1V403.5c0 26.1 24 44.2 48 40.2c19.8-3.3 54.8-7.7 100-7.7c54 0 97.5 25.5 112.5 35.6c7.5 5 16.8 8.4 27 8.4c11.5 0 21.6-4.2 29.3-9.9C330.2 460.3 369.1 436 428 436c47.7 0 80.5 4 99 7.2c23.9 4.1 49-13.8 49-40.6V91.1c0-16.5-10.3-32.1-27.1-37.5C527.2 46.6 475.4 32 420 32c-36.8 0-71.8 6.4-97.4 12.7c-12.8 3.2-23.5 6.3-30.9 8.7c-1.3 .4-2.6 .8-3.7 1.2c-1.1-.4-2.4-.8-3.7-1.2c-7.5-2.4-18.1-5.5-30.9-8.7C227.8 38.4 192.8 32 156 32zM264 97.3V417.9C238 404.2 196.8 388 148 388c-42.9 0-77.4 3.7-100 7.1V97.3C70.3 90.6 112.4 80 156 80c31.6 0 62.6 5.6 85.9 11.3c8.6 2.1 16.1 4.2 22.1 6zm48 319.2V97.3c6-1.8 13.5-3.9 22.1-6C357.4 85.6 388.4 80 420 80c43.6 0 85.7 10.6 108 17.3V394.7c-21.7-3.3-54.9-6.7-100-6.7c-51.4 0-90.8 15-116 28.6z"
                        />
                      </svg>
                    </span>
                    <span className="font-bold text-neutral-400">
                      <h3>Education</h3>
                    </span>
                  </div>

                  {/* Education Start Here */}
                  <section className="flex flex-col items-start justify-start p-1 gap-2 first-letter:capitalize text-left h-full">
                    {/* Education Content */}
                    <div className="flex items-start justify-center h-full  relative ">
                      {/* Line Div */}
                      <div className="h-full absolute left-[16px] -top-[18px] w-[2px] rounded-full border-[1px] border-solid border-[#2A2A2B]"></div>

                      {/* Education Div Data Map */}
                      <div className="overflow-auto">
                        {Educations.map((education, index) => (
                          <Education key={index} education={education} />
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* Education End Here */}

                  {/* My skills */}
                  <section className="flex flex-col items-start justify-start p-1 gap-2 first-letter:capitalize text-left h-full ">
                    <div className="flex p-1 gap-2 items-center h-auto">
                      <span className="p-2 rounded-xl bg-[#2a2a2b]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          className="w-6 h-6"
                        >
                          <defs style={{ opacity: 0.4 }}></defs>
                          <path
                            style={{ opacity: 0.4 }}
                            fill="white"
                            d="M325.6 139.8c8.3-3.1 12.5-12.3 9.4-20.6s-12.3-12.5-20.6-9.4L154.9 169.6C92.4 193.1 50.4 251.8 48.1 318.2c-.1 .6-.1 1.2-.1 1.8c0 28.4-10.8 57.8-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7c-3.2-14-7.5-28.3-13.4-41.5c2.8-52.5 36.4-98.7 86-117.3l159.4-59.8z"
                          />
                          <path
                            fill="#eeb311"
                            d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l77.4 27.9c16.8-17.8 37.8-31.9 61.7-40.9l159.4-59.8c8.3-3.1 17.5 1.1 20.6 9.4s-1.1 17.5-9.4 20.6L166.2 199.6c-14.6 5.5-27.8 13.4-39.3 23.1l169.5 61.2c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                          />
                        </svg>
                      </span>
                      <span className="font-bold text-neutral-400">
                        <h3>My Skills</h3>
                      </span>
                    </div>
                    {/* Skill Percentage Div  */}
                    <div className="pt-2 xl:w-[900px] lg:w-[720px] md:w-[600px] sm:w-[400px] border-[1px] border-neutral-400 bg-[#202122] rounded-3xl">
                      {skills.leveled.map((skill, index) => (
                        <div
                          key={index}
                          className="p-2 h-full w-full flex flex-col gap-3 "
                        >
                          <div className="p-2 text-neutral-400 text-semibold font-['open_sans']">
                            <span>
                              {skill.name} : {skill.level}%
                            </span>
                            <div className="xl:w-[840px] lg:w-[650px] md:w-[550px] sm:w-[340px] bg-[#3b3b38] rounded-full">
                              <div
                                style={{ width: `${skill.level}%` }}
                                className="h-[3px] bg-[#ece562] rounded-full"
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <span className="font-bold text-neutral-400 p-4 ">
                        Other Skills
                      </span>
                      <div className="pl-4 h-full w-full flex items-center gap-3">
                        {skills.otherskills.map((skill, index) => (
                          <li className="pl-3 pr-3 pt-1 pb-1 text-xs">
                            {skill.name}
                          </li>
                        ))}
                      </div>
                      <div className="h-3"></div>
                    </div>
                  </section>
                </section>
              </>
            )}
            {/* Projects */}
            {activeTab === "projects" && (
              <>
                <header className="relative -top-[30px] items-start justify-start flex pl-4 font-bold text-3xl flex-col">
                  <span className="pl-2">About Me</span>
                  <hr className="w-[40px] h-[3px] bg-[#d8cb3f] ml-2 mt-2 rounded-full" />
                </header>

                {/* About Me Section */}
                <section className="flex flex-col items-start justify-start first-letter:capitalize text-left h-[0.2px] overflow-hidden">
                  <p className="text-gray-300 text-sm font-thin items-start">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum
                  </p>
                </section>

                <section className="p-2 flex gap-2 flex-col">
                  <div className="flex p-1 gap-2 items-center h-auto ">
                    <span className="p-2 rounded-xl bg-[#2a2a2b]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5"
                      >
                        <defs></defs>
                        <path
                          fill="#edae4f"
                          style={{ opacity: 0.6 }}
                          d="M448 480H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H192c20.1 0 39.1 9.5 51.2 25.6l19.2 25.6c6 8.1 15.5 12.8 25.6 12.8H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64zM176 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm120 0c-8 0-15.5 4-20 10.7l-56 84L202.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h80 48H392c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144C311.5 228 304 224 296 224z"
                        />
                        <path
                          fill="#d8cb3f"
                          d="M296 224c8 0 15.5 4 20 10.7l96 144c4.9 7.4 5.4 16.8 1.2 24.6S400.9 416 392 416H248 200 120c-9.2 0-17.6-5.3-21.6-13.6s-2.9-18.2 2.9-25.4l64-80c4.6-5.7 11.4-9 18.7-9s14.2 3.3 18.7 9l17.3 21.6 56-84C280.5 228 288 224 296 224z"
                        />
                      </svg>
                    </span>
                    <span className="font-bold text-neutral-400">
                      <h3>Projects</h3>
                    </span>
                  </div>
                  <div className="flex gap-6 justify-between pl-6 pr-6 flex-wrap p-2 ">
                    {Projects.map((project) => (
                      <div className="card" key={project.name}>
                        <Image
                          src="/mmmut.xyz.png"
                          alt="image"
                          width={100}
                          height={100}
                          objectFit="cover"
                          className="w-full h-full"
                          style={{ aspectRatio: "1/1" }}
                        />
                        <div className="card__content cursor-pointer ">
                          <p className="card__title sm:text-sm sm:font-semibold">
                            {project.name}
                          </p>
                          <p className="card__description text-left gap-2 flex flex-col">
                            {project.description.split("\n").map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </p>
                          <button className="text-white bg-[#2a2a2b] rounded-md px-2 py-1 hover:bg-[#343434]">
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="h-[2px] bg-[#2a2a2b]"></div>
                  </div>

                  <div className="p-2  rounded-3xl border-2">
                    <div className="relative h-auto bg-[#2a2a2b] group">
                      <Image
                        src="/mmmut.png"
                        alt="image"
                        width={200}
                        height={100}
                        objectFit="contain"
                        className="w-full h-full transition-all duration-200 ease-in-out group-hover:blur-sm"
                        style={{ aspectRatio: "1.8/0.8" }}
                        quality={100}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex-col">
                        <span className="text-3xl font-bold text-blue-900">
                          Mini-ERP System
                        </span>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                          <Link
                            href="https://faculty.mmmut.xyz/"
                            target="_blank"
                          >
                            View
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <div>
                  <div className="h-[2px] bg-[#2a2a2b]"></div>
                </div>
                <section className="p-2">
                  <div className="flex p-1 gap-2 items-center h-auto ">
                    <span className="p-2 rounded-xl bg-[#2a2a2b]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                        class="w-7 h-7"
                      >
                        <path
                          fill="#ffffff"
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        ></path>
                      </svg>
                    </span>
                    <span className="font-bold text-neutral-400">
                      <h3>Github</h3>
                    </span>
                  </div>
                  <div className="p-2  rounded-3xl border-2">
                    <div className="relative h-auto bg-[#2a2a2b] group">
                      <Image
                        src="/Github.png"
                        alt="image"
                        width={200}
                        height={100}
                        objectFit="contain"
                        className="w-full h-full transition-all duration-200 ease-in-out group-hover:blur-sm"
                        style={{ aspectRatio: "1.8/0.8" }}
                        quality={100}
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out flex-col">
                        <span className="text-3xl font-bold text-white">
                          Github
                        </span>
                        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600">
                          <Link
                            href="https://github.com/TejasMishr/"
                            target="_blank"
                          >
                            View
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}
            {activeTab === "education" && <div>Tab-4</div>}
            {activeTab === "certifications" && <div>Tab-5</div>}
            {activeTab === "extra" && <div>Tab-6</div>}
            {activeTab === "contact" && <div>Tab-7</div>}

            {activeTab !== "about" && (
              <div style={{ display: "none" }}>Tab-1</div>
            )}
            {activeTab !== "resume" && (
              <div style={{ display: "none" }}>Tab-2</div>
            )}

            {activeTab !== "projects" && (
              <div style={{ display: "none" }}>Tab-3</div>
            )}
            {activeTab !== "education" && (
              <div style={{ display: "none" }}>Tab-4</div>
            )}
            {activeTab !== "certifications" && (
              <div style={{ display: "none" }}>Tab-5</div>
            )}
            {activeTab !== "extra" && (
              <div style={{ display: "none" }}>Tab-6</div>
            )}
            {activeTab !== "contact" && (
              <div style={{ display: "none" }}>Tab-7</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
