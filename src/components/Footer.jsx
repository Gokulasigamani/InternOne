import Logo from "../assets/image.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="absolute bottom-0 w-full h-[500px] ">
        <div className="w-[90%] h-[100%]  m-auto  flex items-start gap-28">
          <div>
            <div className="flex items-center">
              <header>
                <img src={Logo} className="m-2" alt="" />
              </header>
              <div>
                <h1 className="font-bold tracking-widest space-x-20 text-4xl">
                  ZEN HOOK
                </h1>
                <h3 className="text-[9px] font-semibold">
                  WE WIN FOR OUR CLIENTS,INSPIRED BY OUR ROOTS
                </h3>
              </div>
            </div>

            <p className="w-[350px] text-[14px] font-semibold leading-tight m-4 ">
              Zen Hook is a top digital marketing agency focused on driving
              online success. We specialize in social media, content creation,
              influencer marketing, website development, and personalized
              mentorship to boost your ROI.
            </p>
          </div>

          <div className="flex gap-32 mt-5 ml-10">
            <div>
              <header>
                <h2 className="font-extrabold text-2xl txtfoot">
                  Our Services
                </h2>
              </header>
              <div className="flex-col flex mt-5">
                <Link className="mb-2 font-semibold">Web Development</Link>
                <Link className="mb-2 font-semibold">Influencer Marketing</Link>
                <Link className="mb-2 font-semibold">Ecommerce services</Link>
                <Link className="mb-2 font-semibold">Digital Marketting</Link>
              </div>
            </div>
            <div>
              <header className="font-extrabold text-2xl txtfoot">
                <h2>Explore More</h2>
              </header>
              <div className="flex-col flex mt-5">
                <Link className="mb-2 font-semibold">Home</Link>
                <Link className="mb-2 font-semibold">About</Link>
                <Link className="mb-2 font-semibold">Our Wroks</Link>
                <Link className="mb-2 font-semibold">Testinmonial</Link>
                <Link className="mb-2 font-semibold">Privacy Policy</Link>
              </div>
            </div>
            <div>
              <header className="font-extrabold text-2xl txtfoot">
                <h2>Contact us</h2>
              </header>
              <div className="flex-col flex gap-5 mt-5">
                <Link className="flex  gap-2 w-[260px] items-center mb-2 font-semibold">
                  <span className="-mt-5 txtfoot">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-geo-alt"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    </svg>
                  </span>{" "}
                  Located at 123 Market Street, Suite 456, Metropolis
                </Link>
                <Link className="flex items-center gap-2 mb-2 font-semibold">
                  <span className="txtfoot">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-telephone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                      />
                    </svg>
                  </span>{" "}
                  (021) 234567
                </Link>
                <Link className="flex items-center gap-2 mb-2 font-semibold">
                  <span className="txtfoot">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-phone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                    </svg>
                  </span>{" "}
                  +91987654321
                </Link>

                <div className="flex gap-5 items-center">
                  <Link className="txtfoot">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                  </Link>
                  <Link className="txtfoot">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </Link>
                  <Link className="txtfoot">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="w-[90%] h-[4px] -mt-24 m-auto bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-md " />
        <div className="mt-8 w-[90%] flex justify-between m-auto" >
            <h2 className="font-semibold text-neutral-400">ZEN HOOK 2024@ All right reserved</h2>
            <h2  className="font-semibold text-neutral-400" >Terms & Conditions</h2>
        </div>
        </footer>
    </>
  );
}
export default Footer;
