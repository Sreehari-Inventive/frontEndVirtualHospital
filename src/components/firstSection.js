import Icon from "./icon 1.png"
import SecondSection from "./secondSection"
import ThirdSection from "./illustrationSection"
import ContactUs from "./contactUs"
function FirstSection(){
    return(
        <div>
            <section className= "w-full h-screen bg-red-100">
            <div className = "md:mt-44 mt-32 grid w-full md:grid-cols-2 h-full grid-rows-2">
                <div className="flex items-center justify-center relative bottom-20" >
                    <img src={Icon} className = "md:w-72 md:h-72 w-44 h-44"  alt = "company Logo" />
                </div>
                <div className = "flex items-center justify-center">
                    <div className = "h-56 mb-44 md:mb-0 flex items-center flex-col relative bottom-20">
                        <h1 className= "mb-3 text-6xl font-black">Tail</h1>
                        <p className = "text-center">loremem ipsum dolor sit amet, conincididunt ut labore etquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className = "border-dashed border-black mt-10 hover:bg-green-500 hover:text-white w-44 rounded-3xl h-10 shadow-md bg-green-400">Explore</button>

                    </div>
                   
                </div>
            </div>
            <hr className="h-1 w-full bg-black"></hr>
        </section>
        <SecondSection/>
        <ThirdSection/>
        <hr className="h-1 w-full bg-black"></hr>
        <ContactUs/>
     </div>
        
       
    )
}
export default FirstSection