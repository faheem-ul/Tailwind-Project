import homesignal from "../../assets/svgs/HomeSignal.svg";
import useroctagine from "../../assets/svgs/useroctagone.svg";

function ResponsiveCards() {
  return (
    <div>
      <div className=" sm:hidden flex gap-6 p-7 justify-center items-center w-[400px] bg-[#0000000] shadow-md rounded-[30px]">
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

      <div className="sm:hidden flex gap-6 p-7 justify-center items-center  w-[400px] bg-[#0000000] shadow-md rounded-[30px] mt-8">
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
  );
}

export default ResponsiveCards;
