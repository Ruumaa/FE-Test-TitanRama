const Feature = () => {
  return (
    <div className="size-full h-screen mt-[60px] lg:mt-[120px] text-center">
      <h1 className="text-[32px] font-bold md:text-[36px]">Feature</h1>
      <p className="text-xs md:text-2xl leading-[22px] lg:leading-[39.5px] xl:leading-10 tracking-[0.2px] mt-[22px] lg:mt-[30px] max-w-[334px] lg:max-w-[852px] xl:max-w-[994px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo.
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[70px] lg:mt-[107px] gap-y-20 lg:gap-x-[116px] xl:gap-x-0">
        <div className="flex flex-col justify-center">
          <h3 className="text-[24px] leading-[32.68px] font-bold">
            Membership
          </h3>
          <p className="mt-[10px] text-lg leading-[28px] tracking-[0.2px] max-w-[298px] mx-auto">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] leading-[32.68px] font-bold">
            Associations
          </h3>
          <p className="mt-[10px] text-lg leading-[28px] tracking-[0.2px] max-w-[298px] mx-auto  ">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>
        </div>
        <div className="col-span-2">
          <h3 className="text-[24px] leading-[32.68px] font-bold">
            Clubs And Groups
          </h3>
          <p className="mt-[10px] text-lg leading-[28px] tracking-[0.2px] max-w-[298px]  mx-auto ">
            Ante vulputate ut at accumsan et. Feugiat at tempus, est senectus
            amet, elementum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
