import { HashLink as Link } from "react-router-hash-link";
import { twMerge } from "tailwind-merge";

import CustomButton from "../ui/Button";

import homesvg from "../../assets/svgs/Home.svg";
import usersvg from "../../assets/svgs/User.svg";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { hash } = useLocation();

  return (
    <div className=" hidden md:flex justify-between py-4 px-[100px]">
      <div className=" flex gap-2">
        <Link smooth to="#home">
          <CustomButton
            style={{
              backgroundColor: hash === "#home" ? "rgba(67, 97, 238, 0.3)" : "",
            }}
          >
            <p className="font-poppins font-medium text-base">Home</p>
          </CustomButton>
        </Link>

        <Link smooth to="#about">
          <CustomButton
            style={{
              backgroundColor:
                hash === "#about" ? "rgba(67, 97, 238, 0.3)" : "",
            }}
          >
            <p className="font-poppins font-medium text-base">About</p>
          </CustomButton>
        </Link>
        <CustomButton>
          <p className="font-poppins font-medium text-base">Listing</p>
        </CustomButton>
        <CustomButton>
          <p className="font-poppins font-medium text-base">Services</p>
        </CustomButton>
        <Link smooth to="#blogs">
          <CustomButton
            style={{
              backgroundColor:
                hash === "#blogs" ? "rgba(67, 97, 238, 0.3)" : "",
            }}
          >
            <p className="font-poppins font-medium text-base">Blogs</p>
          </CustomButton>
        </Link>
      </div>

      <div className=" flex items-center gap-2">
        <div className=" flex justify-center items-center bg-[#3A0CA3] rounded-3xl w-12 h-12">
          <img src={homesvg} alt="Home" className="w-6 h-6" />
        </div>
        <p className="font-poppins font-semibold text-xl">Rezilla</p>
      </div>

      <div className=" flex items-center gap-5">
        <div className=" flex gap-[10px]">
          <img src={usersvg} />
          <p className=" font-medium">Login/Register</p>
        </div>

        <CustomButton className={twMerge("bg-[#3A0CA3] w-[169px] h-12")}>
          <div className=" flex justify-center gap-2">
            <img className=" w-5 h-5" src={homesvg} />
            <p className=" font-medium text-white">Add Listing</p>
          </div>
        </CustomButton>
      </div>
    </div>
  );
}

export default Navbar;
