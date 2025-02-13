import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { navItems } from '../lib/utils';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Hamburg Button */}
      <button
        onClick={toggleMenu}
        className="size-8 lg:hidden flex justify-center items-center"
      >
        <RxHamburgerMenu size={25.5} className="text-[#1E293B]" />
      </button>

      {/* Overlay background*/}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-[#1E293B]/70 z-10"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[250px] h-full bg-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-20 lg:hidden`}
      >
        <div className="h-full p-9">
          <div className="h-full">
            <IoClose
              size={28.5}
              onClick={toggleMenu}
              className="-ml-1 text-[#1E293B]"
            />
            <ul className="space-y-10 mt-8">
              {navItems.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`text-sm font-bold ${
                      i === 5 && 'text-[#EF4444] hover:text-[#F87171]'
                    } `}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
