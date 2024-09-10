import ContentSegment from "../components/ContentSegment";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


function Home()
{
    return(
        <div className="w-full h-[100vh]">
        <Navbar/>
        <ContentSegment/>
        {/* <div className="relative " >
        <Footer/>
        </div> */}
     
        </div>
    )
}
export default Home;