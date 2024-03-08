import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function CustomButton({ className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-[40px] bg-white cursor-pointer w-20 h-9",
        className
      )}
    ></button>
  );
}

CustomButton.propTypes = {
  className: PropTypes.string,
};

export default CustomButton;
