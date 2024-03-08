import Marquee from "react-fast-marquee";

import googleimage from "../../assets/pictures/medialogos/googleimage.jpg";
import amazonimage from "../../assets/pictures/medialogos/amazonimage.jpg";
import logitechimage from "../../assets/pictures/medialogos/logitechimage.jpg";
import samsungimage from "../../assets/pictures/medialogos/samsungimage.jpg";
import spotifyimage from "../../assets/pictures/medialogos/spotifyimage.jpg";
import netfliximage from "../../assets/pictures/medialogos/netfliximage.jpg";

const medialogos = [
  googleimage,
  amazonimage,
  logitechimage,
  spotifyimage,
  samsungimage,
  netfliximage,
];

function MediaLogos() {
  return (
    <div id="blogs" className=" mt-28">
      <div className=" hidden  sm:block w-24 h-24 bg-gradient-to-tl from-blue-100 to-blue-500 rounded-full ml-[170px]"></div>

      <h5 className=" w-[238px] sm:w-[369px] font-poppins font-medium m-auto text-center   text-[#808080]">
        Trusted by 100+ Companies across the globe!
      </h5>

      <div className=" w-[300px] sm:w-[1277px] m-auto mt-14">
        <Marquee speed="90">
          <div className=" flex gap-24">
            {medialogos.map((logo, index) => {
              return <img src={logo} key={index} alt="logo" />;
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default MediaLogos;
