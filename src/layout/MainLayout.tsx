import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-[url('/bg-2xl.svg')] bg-cover bg-[position:66%] sm:bg-center lg:bg-[center_right_68%] xl:bg-center bg-no-repeat">
      {/* gradient */}
      <div className="h-full w-full absolute inset-0 overflow-hidden bg-gradient-to-l from-white/60 from-[1%] bg-right -right-60 to-transparent lg:hidden z-10"></div>

      {/* layout */}
      <div className="h-full w-full max-w-[288px] sm:max-w-[576px] md:max-w-[704px] lg:max-w-[896px] xl:max-w-[1120px] 2xl:max-w-[1344px] mx-auto py-[35px] font-open-sans relative z-20 text-[#1E293B] overflow-hidden">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
