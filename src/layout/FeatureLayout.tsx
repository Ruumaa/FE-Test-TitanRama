const FeatureLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full max-w-[288px] sm:max-w-[576px] md:max-w-[704px] lg:max-w-[896px] xl:max-w-[1120px] 2xl:max-w-[1344px] mx-auto py-[35px] font-open-sans relative z-20 text-[#1E293B] overflow-hidden">
      {children}
    </div>
  );
};

export default FeatureLayout;
