import SwiperCard from "./SwiperCard";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

function ContentSegment() {
  return (
    <>
      <section className="w-full h-[600px] my-36">
        <div className="text-center m-auto">
          <h1 className="tracking-[7px] text-xl  text-neutral-400">
            Testimonial
          </h1>
          <h2 className="txtfoot font-bold text-2xl">
            Customer is Our Top Priority
          </h2>
          <p className="w-[400px] m-auto mt-3  text-sm font-semibold text-neutral-500">
            We survey all or clients,the results of which of which go directly
            to our CEO
          </p>
        </div>
        <div className="w-full h-full mt-5 relative">
          <SwiperCard />
          <button className="absolute top-52 left-10 transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-md text-gray-700 rounded-full p-4 shadow-lg hover:bg-opacity-50 transition">
            <MdArrowBackIos size={24} />
          </button>

          <button className="absolute top-52 right-10  transform -translate-y-1/2 bg-white bg-opacity-30 backdrop-blur-md text-gray-700 rounded-full p-4 shadow-lg hover:bg-opacity-50 transition">
            <MdArrowForwardIos size={24} />
          </button>
        </div>
      </section>
    </>
  );
}
export default ContentSegment;
