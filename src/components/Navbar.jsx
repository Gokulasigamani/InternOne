import Logo from "../assets/image.png"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <>
      <nav className="w-full h-[99px] bg-neutral-900">
        <section className="w-[95%] h-[100%]  m-auto flex items-center justify-between ">
            <header className="flex items-center gap-2" >
                <img src={Logo} alt="" />
                 <div>
                    <h1 className="font-bold text-white">ZenHook</h1>
                    <p className="font-semibold text-white text-sm">Vasanth New Project</p>
                 </div>
            </header>
             
             <section className="flex items-center gap-14 ml-56" >
                  <Link className="text-white font-bold hover:text-violet-700 transition-all text-lg" >Home</Link>
                  <Link className="text-white font-bold hover:text-violet-700 transition-all text-lg" >Our Services</Link>
                  <Link className="text-white font-bold hover:text-violet-700 transition-all text-lg" >Company</Link>
                  <Link className="text-white font-bold hover:text-violet-700 transition-all text-lg" >Contact</Link>
             </section>

             <section>
                <button className="bg-fuchsia-900 px-5 py-2 rounded-md font-bold text-md text-white " >Request Demo</button>
             </section>

        </section>
      </nav>
    </>
  );
}
export default Navbar;
