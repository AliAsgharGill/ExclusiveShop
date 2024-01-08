import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";
import Banner from "./banner";
const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <hr className="w-full  h-0  rotate-180 opacity-30 border border-black "></hr>
      <Banner />
    </>
  );
};

export default Home;
