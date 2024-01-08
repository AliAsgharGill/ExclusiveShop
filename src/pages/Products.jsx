// import { Card } from "antd";
// const { Meta } = Card;

import Navbar from "../components/Navbar";
import TopHeader from "../components/TopHeader";

const Products = () => {
  return (
    <>
      {/* {Items.map((product) => {
        return (
          <>
            <div key={product.title} className="grid grid-cols-3 gap-4">
              <div>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={product.image} />}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </div>
            </div>
          </>
        );
      })} */}
      <TopHeader />
      <Navbar />
      <hr className="w-full  h-0  rotate-180 opacity-30 border border-black "></hr>
    </>
  );
};

export default Products;
