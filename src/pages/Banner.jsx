import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-14">
        <div className="w-[1170px] h-[344px] relative bg-black">
          <img
            className=" h-[322px] left-[396px] top-[16px] absolute"
            src="public/phone.png"
          />
          <div className="left-[64px] top-[58px] absolute justify-start items-center gap-6 inline-flex">
            <img className=" h-[49px]" src="public/logo.png" />
            <div className="w-[126px] h-5 text-center text-neutral-50 text-base font-normal font-['Poppins'] leading-normal">
              iPhone 14 Series
            </div>
          </div>
          <div className="w-[294px] left-[64px] top-[127px] absolute text-neutral-50 text-5xl font-semibold font-['Inter'] leading-[60px] tracking-widest">
            Up to 10% off Voucher
          </div>
          <div className="left-[67px] top-[269px] absolute justify-start items-center gap-2 inline-flex">
            <div className="flex-col justify-start items-start gap-1 inline-flex">
              <NavLink
                to="products"
                className="text-center text-neutral-50 text-base font-medium font-['Poppins'] leading-normal flex justify-around "
              >
                Shop Now
                <svg
                  className="p-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 12H20M20 12L13 5M20 12L13 19"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </NavLink>
              <div className="w-[81px] h-[0px] border border-neutral-50"></div>
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
