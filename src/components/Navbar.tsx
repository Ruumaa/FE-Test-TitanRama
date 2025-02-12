import { navItems } from '../lib/utils';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className="w-full h-10 flex items-center justify-between lg:justify-end text-sm font-semibold gap-x-10">
      <MobileMenu />
      {navItems.map((item, i) => {
        return (
          <span
            key={i}
            className={`hidden lg:block cursor-pointer hover:text-black/70 ${
              i === 5 && 'text-[#EF4444] hover:text-[#F87171]'
            } `}
          >
            {item.name}
          </span>
        );
      })}
      <button className="w-[93px] h-10  bg-[#EF4444] rounded-md hover:bg-[#F87171] text-white font-bold  xl:ml-[9px] lg:ml-[4px]">
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
