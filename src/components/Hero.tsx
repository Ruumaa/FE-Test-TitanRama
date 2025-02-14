import { SearchButton } from './Button';

const Hero = () => {
  return (
    <div className="w-full h-full lg:w-[665px] lg:h-[359px] xl:h-[406px] text-center lg:text-left mt-[62px] lg:mt-[5.4rem] xl:mt-[7.75rem] xl:ml-[2px]">
      {/* Header */}
      <h1 className="w-full font-bold text-4xl sm:text-[42px] lg:text-[56px] xl:text-6xl leading-[50.5px] sm:leading-[57.5px] lg:leading-[73.5px] xl:leading-[76px]">
        Lessons and insights <br />
        <span className="text-[#EF4444]">from 8 years</span>
      </h1>
      {/* p */}
      <p className="sm:mx-auto lg:mx-0 text-xs lg:text-base xl:text-xl mt-7 xl:mt-8 sm:max-w-[335px] lg:max-w-[565px] xl:max-w-[645px] leading-6 lg:leading-7 xl:leading-9 tracking-[0.2px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.
      </p>
      {/* button search */}
      <SearchButton />
    </div>
  );
};

export default Hero;
