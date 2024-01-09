const CustomCard = () => {
  return (
    <>
      <div className="w-[270px] h-[322px] flex-col justify-start items-start gap-4 inline-flex">
        <div className="w-[270px] h-[250px] relative bg-neutral-100 rounded">
          <div className="px-3 py-1 left-[12px] top-[12px] absolute bg-red-500 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-neutral-50 text-xs font-normal font-['Poppins'] leading-[18px]">
              -40%
            </div>
          </div>
          <div className="left-[224px] top-[12px] absolute flex-col justify-start items-start gap-2 inline-flex">
            <div className="w-[34px] h-[34px] relative">
              <div className="w-[34px] h-[34px] left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-6 h-6 left-[5px] top-[5px] absolute" />
            </div>
          </div>
          <div className="w-[190px] h-[180px] px-[9px] py-3.5 left-[40px] top-[35px] absolute justify-center items-center inline-flex">
            <img
              className="w-[172px] h-[152px]"
              src="https://via.placeholder.com/172x152"
            />
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-2 flex">
          <div className="text-black text-base font-medium font-['Poppins'] leading-normal">
            HAVIT HV-G92 Gamepad
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-red-500 text-base font-medium font-['Poppins'] leading-normal">
              $120
            </div>
            <div className="opacity-50 text-black text-base font-medium font-['Poppins'] line-through leading-normal">
              $160
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomCard;
