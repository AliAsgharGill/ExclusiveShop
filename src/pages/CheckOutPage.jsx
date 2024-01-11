import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../features/productSlice";
import { RxCrossCircled } from "react-icons/rx";

const CheckOut = () => {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    console.log(state.cart);
    return state.cart;
  });
  window.onload = () => dispatch(getAllData());
  return (
    <>
      <TopHeader />
      <Navbar />
      <hr className="w-full  h-0  rotate-180 opacity-30 border border-black "></hr>
      {/* breedcrum links */}
      <div className=" w-full h-[21px] p-16 justify-start items-center gap-3 flex">
        <Link
          to={"/"}
          className="opacity-50 text-black text-sm font-normal font-['Poppins'] leading-[21px]"
        >
          Home /
        </Link>

        <Link
          to={"/checkout"}
          className="text-black text-sm font-normal font-['Poppins'] leading-[21px]"
        >
          Cart
        </Link>
      </div>
      {/* table */}
      <div className="grid place-items-center">
        <div className="w-[1170px] h-[72px] pl-10 pr-[39px] py-6 bg-white rounded shadow justify-center items-center inline-flex">
          <div className="justify-start items-center gap-[284px] inline-flex">
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Product
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Price
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Quantity
            </div>
            <div className="text-black text-base font-normal font-['Poppins'] leading-normal">
              Subtotal
            </div>
          </div>
        </div>
        {/* items */}
        {data.map((item) => (
          <>
            <div className="w-[1170px] h-[102px] relative  rounded shadow my-2">
              <div className="left-[387px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">
                {item.newPrice}
              </div>
              <div className="left-[1063px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">
                {item.newPrice}
              </div>
              <div className="w-[72px] h-11 px-3 py-1.5 left-[710px] top-[29px] absolute rounded border-opacity-40 justify-center items-center inline-flex">
                <div className="   justify-start items-center gap-4 inline-flex">
                  <form action="POST" name="one">
                    <input
                      type="number"
                      min={1}
                      name="totoalNumberOfProducts"
                      className="ml-8 rounded-lg p-2 h-10 w-16 border border-black text-black text-base font-normal font-['Poppins'] leading-normal"
                    />
                  </form>

                  {/* </input> */}
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="w-4 h-4 relative origin-top-left -rotate-180" />
                    <div className="w-4 h-4 relative" />
                  </div>
                </div>
              </div>
              <div className="w-[54px] h-[54px] px-0.5 pt-2 pb-[7px] left-[40px] top-[24px] absolute justify-center items-center inline-flex">
                <img className="w-[50px] h-[39px]" src={item.productImage} />
              </div>
              <div className="left-[114px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">
                {item.title}
              </div>
              <div className="left-[114px] top-[39px] absolute text-black text-base font-normal font-['Poppins'] leading-normal">
                {item.title}
              </div>
              <div className="w-6 h-6 left-[30px] top-[20px] absolute">
                <button
                  onClick=""
                  className="w-[18px] h-[18px] left-[3px] top-[3px] absolute bg-red-500 fill-black rounded-full"
                >
                  <div className="text-white flex justify-center items-center -mt-1 ">
                    X
                  </div>
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default CheckOut;
