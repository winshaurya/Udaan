import Link from "next/link";

export default function Udaan2025Index() {
  return (
    <div className="flex w-full min-h-screen overflow-auto">
      <div className="w-full relative z-[30]">
        <div className="text-white max-w-[1000px] xl:px-[80px] lg:px-[50px] px-[30px] pt-[140px] pb-[60px] flex flex-col gap-4">
          <h1 className="text-3xl font-semibold uppercase tracking-wide">Udaan 2025</h1>
          <p className="text-sm leading-relaxed opacity-90">
            Find official information, circulars, and registration details for Udaan 2025 here.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/udaan2025/circular" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition-colors">
              View Official Circular
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
