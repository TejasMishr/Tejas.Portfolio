"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Model({ content, name, imageSrc, url }) {
  const [visible, setVisible] = useState(true);
  const toggleModel = () => setVisible(() => !visible);
  return (
    <>
      {visible && (
        <dialog className="fixed left-0 top-0 h-full w-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center hover:scale-105 ease-in-out duration-500 ">
          <div className="bg-[#1e1e1f] text-[#d5d5d5] m-auto p-4 rounded-3xl border-[1px] border-[#555556] ">
            <span className=" cursor-pointer relative bg-[#272728] left-[94%] justify-end z-50 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-7 h-7 cursor-pointer"
                  onClick={() => {
                    setVisible(false);
                    console.log("clicked");
                  }}
                >
                  <path
                    fill="#ef6a0b"
                    d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM185.8 174.5l-11.3 11.3 5.7 5.7L244.7 256l-64.6 64.6-5.7 5.7 11.3 11.3 5.7-5.7L256 267.3l64.6 64.6 5.7 5.7 11.3-11.3-5.7-5.7L267.3 256l64.6-64.6 5.7-5.7-11.3-11.3-5.7 5.7L256 244.7l-64.6-64.6-5.7-5.7z"
                  />
                </svg>
              </div>
            </span>

            <div className="flex gap-2 p-2 items-center min-w-[300px] max-w-[450px] relative -top-[15px] ">
              <div className="flex flex-col p-[2px] items-center gap-2 h-auto relative ">
                <div className="">
                  <div className="w-[60px] rounded-3xl bg-[#363636]">
                    <Image
                      src="/Avtar.png"
                      width={60}
                      height={60}
                      alt="Picture of the author"
                    />
                  </div>
                </div>
                <div className="h-full min-h-[100px] items-center flex animate-pulse">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-7 h-7"
                  >
                    <defs style={{ opacity: 0.4 }}></defs>
                    <path
                      class="fa-secondary"
                      fill="#bd6323"
                      d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                    />
                    <path
                      class="fa-primary"
                      fill="#ec6707"
                      d="M470.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 256 265.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-left p-[2px]">
                <div className="font-bold font-['Open+Sans'] ">{name}</div>
                <div className="text-xs">{content}</div>
                <div className="text-orange-500  font-semibold text-xs cursor-pointer p-2">
                  <Link href={url} target="_blank">
                    View their Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
