import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

function Footer() {
  return (
    <footer className="w-full mb-[100px] lg:mb-0 md:mb-0 pb-10" id="contact">
      {/* <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Готовы вывести <span className="text-purple">ваше</span> цифровое
          присутствие на новый уровень?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Свяжитесь со мной сегодня, и давайте обсудим, как я могу помочь вам
          достичь ваших целей.
        </p>
        <a href="mailto:tilla.yosinbek@gmail.com">
          <MagicButton
            title="Связатьс со мной"
            icon={<FaLocationArrow />}
            position="right"
            otherClasses="whitespace-nowrap"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Yosinbek
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-7 bg-black-200 rounded-full border border-black-300 "
            >
              <img src={profile.img} alt={profile.img} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
