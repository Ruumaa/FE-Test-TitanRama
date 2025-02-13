const Hero = () => {
  return (
    <div className="w-full lg:w-[665px] h-[379.85px] lg:h-[359px] xl:h-[406px] text-center lg:text-left mt-[62px] lg:mt-[5.4rem] xl:mt-[7.75rem] lg:ml-[2.9rem] xl:ml-[2px]">
      {/* Header */}
      <h1 className="w-full font-bold text-[42px] lg:text-[56px] xl:text-6xl leading-[57.5px] lg:leading-[73.5px] xl:leading-[76px]">
        Lessons and insights <br />
        <span className="text-[#EF4444]">from 8 years</span>
      </h1>
      {/* p */}
      <p className="font-normal text-xs lg:text-base xl:text-xl mt-5 xl:mt-8 px-1 lg:px-0 lg:max-w-[565px] xl:max-w-[645px] leading-6 lg:leading-7 xl:leading-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
      {/* button search */}
      <div className="w-full lg:w-[422px] xl:w-[502px] h-[59.85px] lg:h-[4.5rem] xl:h-[4.56rem] bg-white rounded-lg flex items-center justify-between mt-7 lg:mt-9 px-1 lg:px-1.5">
        <input
          type="text"
          placeholder="Find our courses"
          className="text-sm lg:text-base w-48 ml-4 lg:ml-6 outline-none"
        />
        <button className="w-[90.76px]  lg:w-[7.15rem] xl:w-[8.5rem] h-[50.01px] lg:h-[3.75rem] xl:h-[3.81rem] bg-[#EF4444] rounded-lg hover:bg-[#F87171] text-white font-bold text-sm lg:text-base">
          Search
        </button>
      </div>
    </div>
  );
};

export default Hero;
