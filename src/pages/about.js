import aboutBg from "../../public/images/image23.jpg";

export default function about() {
  return (
    <div className="flex w-full h-screen overflow-auto">
      <div className="sm:w-[50%] xl:w-[40%] about-text relative z-[30] sm:after:w-[50%] xl:after:w-[40%] sm:before:w-[50%] xl:before:w-[40%]">
        <div className="text-white max-w-[900px] xl:px-[80px] lg:px-[50px] px-[30px] pt-[140px] pb-[50px] flex flex-col">
          <h2 className="text-2xl font-light uppercase ">About Udaan</h2>
          <div className="py-[30px]">
            <p className="text-xl font-bold uppercase">SGSITS, Indore</p>
            <p className="text-lg uppercase">Shri Govindram Seksaria Institute of Technology and Science</p>
          </div>
          <p className="text-sm pb-[16px]">
            Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore, is a premier autonomous institute affiliated to RGPV and recognized by AICTE. Established in 1952, it is among Madhya Pradesh’s oldest engineering institutions, known for strong academics, research culture, and vibrant student life.
          </p>
          <p className="text-sm pb-[16px]">
            Udaan is the institute’s annual cultural fest—celebrating creativity, music, dance, arts, and student-led initiatives. The fest brings together diverse clubs and communities, providing a platform for talent, collaboration, and campus-wide celebration.
          </p>
          <p className="text-sm pb-[16px]">
            SGSITS offers undergraduate and postgraduate programs across engineering and applied sciences, supported by experienced faculty, industry engagement, and active alumni. The campus hosts numerous technical and cultural events round the year, with Udaan as the flagship celebration.
          </p>
        </div>
      </div>
      <div className="fixed top-0 right-0 overflow-hidden about-cover xl:w-[60%] sm:w-[50%] w-full sm:opacity-100 opacity-20 sm:before:opacity-100 before:opacity-0"
        style={{
          backgroundImage: `url(${aboutBg.src})`,
          height: "100%",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        
      </div>
    </div>
  );
}
