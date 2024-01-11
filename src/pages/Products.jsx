import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../features/productSlice";
import { addToCart, selectCart } from "../features/cartSlice";
import { useEffect } from "react";
const Products = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  // const number = {cart.item.length}
  const data = useSelector((state) => {
    // console.log("state..", state.app);
    return state.app;
  });
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);
  // window.onload = () => ;

  if (data.loading) {
    return (
      <div
        role="status"
        className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2"
      >
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  if (data.error != null) {
    return <h2>{data.error}</h2>;
  }

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    console.log("data: ", item);
  };

  return (
    <>
      <TopHeader />
      <Navbar />
      <hr className="w-full  h-0  rotate-180 opacity-30 border border-black "></hr>
      {/* Page */}
      <div className="w-full h-14 justify-center mb-16 mt-8 items-center gap-[835px] inline-flex">
        <div className="text-center text-black text-xl font-normal font-['Poppins'] leading-relaxed">
          Total Products (8)
        </div>
        <button
          /*onClick={} */ className="px-12 py-4 rounded border border-black border-opacity-50 justify-center items-center gap-2.5 flex hover:bg-red-500 text-black text-base font-['Poppins'] leading-normal  font-bold"
        >
          Move All To Cart
        </button>
      </div>
      <div className="grid grid-cols-4 place-items-center mx-10 p-5 gap-5  ">
        {data.users.slice(0, 8).map((item) => (
          <div key={item.id}>
            <div className="w-[270px] h-[322px]  flex-col justify-start items-start gap-4 inline-flex">
              <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
                <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
                  <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
                    {item.discountInPercentage + "%"}
                  </div>
                </div>
                <div className="w-[190px] h-[180px] px-1.5 pt-[26px] pb-[25px] left-[40px] top-[15px] absolute justify-center items-center inline-flex">
                  <img
                    className="w-[178px] h-[129px]"
                    src={item.productImage}
                  />
                </div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-[270px] h-[41px] left-0 top-[209px] absolute bg-black rounded-bl rounded-br hover:bg-red-500  text-white text-md text-center hover:text-black font-bold font-['Poppins'] leading-[18px] "
                >
                  Add To Cart
                </button>
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
                  {item.title}
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                  <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
                    ${item.newPrice}
                  </div>
                  <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
                    {item.oldPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="h-52"></div>
    </>
  );
};

export default Products;
