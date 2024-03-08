import { twMerge } from "tailwind-merge";
import CustomButton from "../ui/Button";
import Navbar from "./Navbar";
import CustomSlider from "../ui/CustomSlider";

function HeroSection() {
  return (
    <div className="  bg-gradient-to-b from-blue-100 to-blue-200 rounded-tl-0 rounded-tr-0 rounded-br-full rounded-bl-full">
      <Navbar />

      <div
        id="home"
        className=" flex flex-col sm:flex-row h-320px sm:h-[920px] justify-center items-center sm:justify-between px-0 sm:px-[161px]  "
      >
        <div>
          <p className="font-poppins font-medium text-[19.4px] text-blue-800 tracking-[5px] pt-[90px]">
            REAL ESTATE
          </p>

          <h1 className="font-poppins w-[333px] sm:w-[560px] leading-[47px] sm:leading-[65px] font-semibold text-[39.8px] sm:text-6xl pt-5 sm:pt-[30px]">
            Find a perfect home you love..!
          </h1>
          <p className=" font-poppins text-slate-400 text-[13px] sm:text-[16px] w-[333px] sm:w-[580px] pt-7 sm:pt-10">
            Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
            Integer a dolor eu sapien sodales vulputate ac in purus.
          </p>

          <div className=" relative left-[70%] sm:left-[90%] h-[60px] w-[60px] bg-gradient-to-r from-blue-200 to-blue-600 rounded-full"></div>

          {/* custom slider */}

          <CustomSlider />
        </div>

        <div className=" relative h-[582px] flex flex-col gap-4 w-[390px] sm:w-[420px] items-center bg-white shadow-lg mt-0 sm:mt-32 py-10 rounded-2xl">
          <p className=" font-poppins font-medium text-[#3A0CA3] max-w-[129px]">
            Contact Us Now
          </p>
          <div className=" z-10 border-2 border-blue-900 w-[340px]"></div>
          <div className=" absolute top-[81px] border border-slate-400 w-[390px] sm:w-[420px]"></div>
          <input
            placeholder="Full Name"
            className=" bg-gray-200 p-5 w-[340px] m-auto rounded-3xl "
          ></input>
          <input
            placeholder="Email"
            className=" bg-gray-200 p-5 w-[340px] m-auto rounded-3xl "
          ></input>
          <textarea
            rows="5"
            placeholder="Message"
            className=" bg-gray-200 p-5 w-[340px] m-auto rounded-3xl "
          ></textarea>
          <CustomButton
            className={twMerge(
              "bg-[#3A0CA3] h-[60px] w-[340px] m-auto  text-white"
            )}
          >
            Submit
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
