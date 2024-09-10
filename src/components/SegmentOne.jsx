import Ai from "../assets/Ai.png";
function SegmentOne() {
  return (
    <>
      <main className="w-full h-[630px] vbg ">
        <section className="w-[92%] h-[100%]  m-auto  flex  ">
          <div className="w-[50%] h-[100%]">
            <div className="pt-20 ">
              <h1 className="w-[500px] text-3xl font-bold text-white leading-relaxed ">
                Empowering Your Business with Stunning Web Solutions.
              </h1>
              <p className="my-10 text-white ">Why Choose Zenhook?</p>

              <p className="text-white w-[600px] my-10 font-light">
                At Zenhook, we believe in building relationships as much as we
                believe in building websites. Our approach is personalized, and
                our goal is to see your business thrive in the digital world.
                Whether you're a startup or an established brand, we bring the
                expertise, creativity, and passion to help you achieve
                your digital goals.
              </p>
              <button className="px-6 py-2 bg-slate-50 border-neutral-100 rounded-md text-left text-violet-700">
                Get Started
                <span></span>
              </button>
            </div>
          </div>
            
            <div className="w-[50%] h-[100%] flex items-center relative ">
                   <div className="w-[450px] h-[300px] ml-20 bg-neutral-900 rounded-md relative border-neutral-300" >
                     <img src={Ai}  className="relative -left-5 -top-[10px]  rounded-xl shadow-black shadow-2xl" alt="" />
                   </div>
            </div>

        </section>
      </main>
    </>
  );
}
export default SegmentOne;
