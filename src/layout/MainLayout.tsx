const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full h-screen bg-[url('/bg-desktop.svg')] bg-cover xl:bg-center lg:bg-[center_right_68%]  bg-[center_right_36.5%] bg-no-repeat relative">
      {/* gradient */}
      <div className="h-full bg-gradient-to-l from-white from-[1%] bg-right -right-28 to-transparent absolute inset-0 sm:hidden z-10"></div>

      {/* layout */}
      <div className="h-full w-full xl:max-w-[1200px] lg:max-w-[948px] max-w-[335px] mx-auto py-[35px] font-open-sans relative z-20 text-[#1E293B]">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
