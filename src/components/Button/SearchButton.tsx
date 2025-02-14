const SeacrhButton = () => {
  return (
    <div className="w-full sm:mx-auto lg:mx-0 sm:w-[335px] lg:w-[422px] xl:w-[502px] h-[59.85px] lg:h-[4.5rem] xl:h-[4.56rem] tracking-[0.2px] bg-white rounded-lg flex items-center justify-between mt-11 md:mt-8 lg:mt-9 px-1 lg:px-1.5">
      <input
        type="text"
        placeholder="Find our courses"
        className="text-sm lg:text-base w-48 ml-4 lg:ml-6 outline-none"
      />
      <button className="w-[90.76px]  lg:w-[7.15rem] xl:w-[8.5rem] h-[50.01px] lg:h-[3.75rem] xl:h-[3.81rem] bg-[#EF4444] rounded-lg hover:bg-[#F87171] text-white font-bold text-sm lg:text-base">
        Search
      </button>
    </div>
  );
};

export default SeacrhButton;
