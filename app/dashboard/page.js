"use client";
import Image from "next/image";
import React from "react";
import "./page.css";
export default function Dashboard() {
  const [activeTab, setActiveTab] = React.useState("");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="text-center p-8 max-w-[1250px] h-screen overflow-auto">
      <h1>Dashboard</h1>
      <div className="flex gap-3 justify-between p-3 max-w-[1250px]">
        {/* Contact DIV */}
        <div className=" p-4 h-full w-[280px] rounded-lg bg-[#1e1e1f] border-[1px] border-[#555556] sticky top-1">
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
            <div className="mt-6 p-3 flex flex-col gap-3 justify-between">
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
        <div className="h-full w-full rounded-2xl bg-[#1e1e1f] border-[1px] border-[#5555566">
          <div className="">
            <div className="Nav flex justify-end items-end flex-col relative z-10">
              <nav className="navbar h-12 bg-[#282829] backdrop-blur-md border-[1px] border-[#282829] shadow-md flex justify-end items-center rounded-b-2xl rounded-r-2xl px-10 z-50  w-[580px] max-md:fixed bottom-0 right-0">
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
            {(activeTab === "about" || activeTab === "") && (
              <>
                {/* About Header */}
                <header className="relative -top-[30px] items-start justify-start flex pl-4 font-bold text-3xl flex-col">
                  <span className="pl-2">About Me</span>
                  <hr className="w-10 h-[3px] bg-[#d8cb3f] ml-2 mt-2 rounded-full" />
                </header>

                {/* About Me Section */}
                <section className="flex flex-col items-start justify-start p-4 gap-2 w-full h-auto first-letter:capitalize text-left">
                  <p className="text-gray-300 text-sm font-thin items-start p-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
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
                    typesetting industry. Lorem Ipsum has been the industry's
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
                    typesetting industry. Lorem Ipsum has been the industry's
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
                <section className="flex flex-col items-start justify-start p-4 gap-2 w-full h-auto first-letter:capitalize text-left">
                  <div className="w-full font-bold text-2xl flex-col">
                    My Interests
                  </div>
                  <div className="w-full flex flex-wrap gap-[18px] p-[30px] justify-between">
                    <div className="max-w-[360px] rounded-3xl min-h-[200px] flex items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px]">
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
                    <div className="max-w-[360px] rounded-3xl min-h-[200px] flex items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px]">
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
                    <div className="max-w-[360px] rounded-3xl min-h-[200px] flex items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px]">
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
                    <div className="max-w-[360px] rounded-3xl min-h-[200px] flex items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px]">
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
                  <h1 className="text-2xl font-bold">Testimonials</h1>

                  <div className="flex overflow-x-auto gap-3 max-w-[730px] p-3">
                    <div className="max-w-[380px] min-w-[350px] rounded-3xl min-h-[200px] flex  flex-col items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px] content-center">
                      <div className="self-start flex gap-3 justify-center items-center p-1">
                        <div className="animate-pulse min-h-[60px] min-w-[60px] rounded-2xl bg-[#2a2a2b]">
                          <Image
                            src="/Avtar.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                          />
                        </div>
                        <div className="font-semibold items-center flex justify-center p-3">
                          Name Here
                        </div>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          document
                            .getElementById("full-text")
                            .classList.toggle("hidden");
                          document
                            .getElementById("popup")
                            .classList.toggle("hidden");
                        }}
                      >
                        <div className="bg-[#212123] rounded-xl p-3">
                          Show more
                        </div>
                      </div>
                      <div
                        id="popup"
                        className="hidden fixed top-0 left-0 w-full h-full bg-[#212123] z-50"
                      >
                        <div className="fixed top-0 left-0 w-full h-full bg-[#212123] opacity-75 z-30"></div>
                        <div className="bg-[#212123] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 z-40">
                          <div className="text-white">
                            Harsh I worked in the same team for a project for 6
                            months.&nbsp;
                            <span id="full-text" className="hidden">
                              He is very fast learner. Being an intern, He was
                              able to understand project objective and learned
                              the required skills very quickly. He contributed
                              to both frontend and backend part of the project.
                              He posses very good presentation and communication
                              skill. He also got very positive attitude to his
                              work. Harsh will be an asset to any team and I
                              wish him all the very best.
                            </span>
                          </div>
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              document
                                .getElementById("full-text")
                                .classList.toggle("hidden");
                              document
                                .getElementById("popup")
                                .classList.toggle("hidden");
                            }}
                          >
                            Close
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="max-w-[380px] min-w-[350px] rounded-3xl min-h-[200px] flex  flex-col items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px] content-center">
                      <div className="self-start flex gap-3 justify-center items-center p-1">
                        <div className="animate-pulse min-h-[60px] min-w-[60px] rounded-full">
                          <Image
                            src="/Avtar.png"
                            width={60}
                            height={60}
                            alt="Picture of the author"
                          />
                        </div>
                        <div className="font-semibold items-center flex justify-center p-3">
                          Name Here
                        </div>
                      </div>
                      <div className="self-center text-left font-thin text-size-[14px] overflow-hidden">
                        Harsh I worked in the same team for a project for 6
                        months.&nbsp;
                        <span id="full-text" className="hidden">
                          He is very fast learner. Being an intern, He was able
                          to understand project objective and learned the
                          required skills very quickly. He contributed to both
                          frontend and backend part of the project. He posses
                          very good presentation and communication skill. He
                          also got very positive attitude to his work. Harsh
                          will be an asset to any team and I wish him all the
                          very best.
                        </span>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() =>
                          document
                            .getElementById("full-text")
                            .classList.toggle("hidden")
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                          className="w-5 h-5"
                        >
                          <path
                            fill="#ffffff"
                            d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Experience */}
                <section className="flex flex-col gap-3 items-center justify-center mt-4">
                  <h1 className="text-2xl font-bold">Experience</h1>
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <div className="w-[150px] h-[120px] ">
                      <Image
                        src="/Avtar.png"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="w-[150px] h-[120px] ">
                      <Image
                        src="/Avtar.png"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="w-[150px] h-[120px] ">
                      <Image
                        src="/Avtar.png"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                      />
                    </div>
                    <div className="w-[150px] h-[120px] ">
                      <Image
                        src="/Avtar.png"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                      />
                    </div>
                  </div>
                </section>
              </>
            )}
            {activeTab === "resume" && <div>Tab-2</div>}

            {activeTab === "projects" && <div>Tab-3</div>}
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
