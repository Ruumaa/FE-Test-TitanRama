import { navItems } from '../lib/utils';
import { SignUpButton } from './Button';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className="w-full h-10 flex items-center justify-between lg:justify-end text-sm font-semibold gap-x-10">
      <MobileMenu />
      {navItems.map((item, i) => {
        return (
          <span
            key={i}
            className={`hidden lg:block cursor-pointer  ${
              i === 5
                ? 'text-[#EF4444] hover:text-[#F87171]'
                : 'hover:text-[#1E293B]/70'
            }`}
          >
            {item.name}
          </span>
        );
      })}
      <SignUpButton />
    </nav>
  );
};

export default Navbar;
