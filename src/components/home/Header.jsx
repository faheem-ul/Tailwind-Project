import locationsvg from "../../assets/svgs/location.svg";
import phonesvg from "../../assets/svgs/Phone.svg";
import emailsvg from "../../assets/svgs/Mail.svg";
function Header() {
  return (
    <div className="hidden sm:flex  justify-between px-[100px] py-3 bg-[#3A0CA3]   ">
      {/* this is the first flex in header */}

      <div className=" flex gap-2">
        <img src={locationsvg} alt="locationsvg" />
        <p className="font-poppins font-[400] text-white text-[13.3px] leading-[22px]">
          Rezilla, 18 Grattan St, Brooklyn
        </p>
      </div>

      {/* this is the seocnd flex in header */}

      <div className=" flex gap-[30px]">
        <div className=" flex gap-2">
          <img src={phonesvg} alt="phonesvg" />
          <p className="font-poppins text-white font-[400] text-[13.3px] leading-[22px]">
            +1 234 567 890
          </p>
        </div>
        <div className=" flex gap-2">
          <img src={emailsvg} alt="phonesvg" />
          <p className="font-poppins text-white font-[400] text-[13.3px] leading-[22px]">
            +1 234 567 890
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
