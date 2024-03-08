import homesignal from "../../assets/svgs/HomeSignal.svg";
import useroctagine from "../../assets/svgs/useroctagone.svg";
import logo from "../../assets/svgs/logo.svg";
import footerimage1 from "../../assets/pictures/FooterImages/Rectangle14.png";
import footerimage2 from "../../assets/pictures/FooterImages/Rectangle15.png";
import footerimage3 from "../../assets/pictures/FooterImages/Rectangle16.png";

function LastSection() {
  return (
    <div
      id="about"
      className=" flex sm:flex-row flex-col justify-between sm:px-[160px] px-0 mt-[150px]  sm:mt-[230px] pb-8"
    >
      <div className=" w-[333px] sm:w-[500px] m-auto sm:m-0">
        <p className=" font-poppins font-medium text-[19.4px] text-[#4361EE] leading-[29px] tracking-[8px] pb-5 sm:pb-10">
          WHO ARE WE
        </p>
        <h1 className=" font-poppins font-semibold text-[27.6px] sm:text-[40px] leading-[41.4px] sm:leading-[47px] w-[333px] sm:w-[500px] pb-7 sm:pb-10">
          Assisting individuals in locating the appropriate real estate.
        </h1>
        <p className=" font-poppins font-normal text-[13.4px] sm:text-4 text-[#808080] leading-[22px] sm:leading-[26px] pb-10 width-[333px] sm:w-[500px]">
          Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
          dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac
          malesuada leo volutpat.
        </p>

        <div
          className=" hidden sm:flex gap-6 p-7 justify-center items-center w-[400px] bg-[#0000000] shadow-md rounded-[30px]"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <div>
            <img src={homesignal} alt="this is home signal svg" />
          </div>
          <div>
            <h4 className=" font-poppins font-medium text-[19.4px] text-5] text-[#4361EE] pb-4">
              Donec porttitor euismod
            </h4>
            <p className=" font-poppins font-normal text-base text-[#808080] w-[274px]">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>

        <div
          className=" hidden sm:flex gap-6 p-7 justify-center items-center  w-[400px] bg-[#0000000] shadow-md rounded-[30px] mt-8"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <div>
            <img src={useroctagine} alt="this is home signal svg" />
          </div>
          <div>
            <h4 className=" font-poppins font-medium text-[19.4px] text-5] text-[#4361EE] pb-4">
              Donec porttitor euismod
            </h4>
            <p className=" font-poppins font-normal text-base text-[#808080] w-[274px]">
              Nullam a lacinia ipsum, nec dignissim purus. Nulla
            </p>
          </div>
        </div>
      </div>

      <div className=" flex  self-end">
        <img
          className=" pt-20 w-[210px] h-auto sm:w-[300px] sm:h-[650px]"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          src={footerimage1}
          alt="footerimage1"
        />
        <div className=" relative top-10">
          <img
            className=" z-10 absolute top-[-50px] sm:top-[-65px] left-[-100px] sm:left-[-125px] w-40 sm:w-52 animate-spin "
            src={logo}
            alt="this is logo"
          />
          <img
            src={footerimage2}
            alt="footerimage2"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          />
          <img
            src={footerimage3}
            alt="footerimage3"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
}

export default LastSection;
