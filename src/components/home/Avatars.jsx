import listingImage from "../../assets//pictures/listing.jpg";

function Avatars() {
  return (
    // <div className="  flex  justify-center">
    <div className="  sm:relative bottom-[50px] flex flex-col sm:flex-row gap-8  items-center">
      <div
        className=" flex px-9 py-5 items-center justify-center w-[360px] gap-3 bg-white shadow-2xl rounded-full"
        data-aos="fade-right"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
      >
        <div className="flex -space-x-3   ">
          <img
            className=" h-9 w-9 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar image"
          />
          <img
            className=" h-9 w-9 rounded-full ring-2  ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar image"
          />
          <img
            className="h-9 w-9 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar image"
          />
          <img
            className="h-9 w-9 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar image"
          />
          <img
            className="h-9 w-9 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar image"
          />
          <img
            className="h-9 w-9 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="avatar image"
          />
        </div>
        <div className="w-[122px]">
          <p className=" font-poppins font-medium text-[19.4px]">
            72k+ Happy Customers
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="ease-in-out"
        data-aos-duration="1000"
        className=" flex px-9 py-5 items-center justify-center w-[360px] gap-3 bg-white shadow-2xl rounded-full"
      >
        <div className="flex -space-x-3">
          <img
            className=" h-15 w-15 rounded-full  ring-white"
            src={listingImage}
            alt="listingimage"
          />
        </div>
        <div className="w-[174px]">
          <p className=" font-poppins font-medium text-[19.4px]">
            200+ New Listings Everyday!
          </p>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Avatars;
