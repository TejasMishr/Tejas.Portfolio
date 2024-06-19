"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Model from "./Model";

export default function Testimonial({
  name,
  imageSrc,
  description,
  link,
  fulldecription,
}) {
  const [isVisible, setIsVisible] = useState(false);
  if (isVisible) {
    window.history.replaceState(
      {},
      document.title,
      `${window.location.pathname}?modal=true`
    );
  } else {
    window.history.replaceState(
      {},
      document.title,
      `${window.location.pathname}?modal=false`
    );
  }
  const toggleModel = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div
      className={`max-w-[380px] min-w-[350px] rounded-3xl min-h-[200px] flex  flex-col items-center justify-center gap-3 p-[18px] bg-[#212123] border-[1px] content-center ${
        isVisible && "cursor-pointer"
      }`}
      onClick={toggleModel}
    >
      <div className="self-start flex gap-3 justify-center items-center p-1">
        <div className="animate-pulse min-h-[60px] min-w-[60px] rounded-full">
          <Image
            src={imageSrc}
            width={60}
            height={60}
            alt="Picture of the author"
          />
        </div>
        <div className="font-semibold items-center flex justify-center p-3">
          {name}
        </div>
      </div>
      <div className="self-center text-left font-thin text-size-[14px] overflow-hidden">
        {description}
      </div>
      {isVisible && (
        <Link href={`/dashboard/?modal=true`} replace>
          <Model
            content={fulldecription}
            name={name}
            imageSrc={imageSrc}
            url={link}
          />
        </Link>
      )}
    </div>
  );
}
