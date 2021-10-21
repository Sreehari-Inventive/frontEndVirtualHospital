import Icon from "./icon 1.png"
import SecondSection from "./secondSection"
import ThirdSection from "./illustrationSection"
import ContactUs from "./contactUs"
function FirstSection(){
    return(
        <div>
            <section className= "w-full h-screen bg-red-100">
            <div className = "grid w-full h-full grid-cols-2">
                <div className="flex items-center justify-center relative bottom-20" >
                    <img src={Icon}  alt = "company Logo" />
                </div>
                <div className = "flex items-center justify-center">
                    <div className = "h-56 flex items-center flex-col relative bottom-20">
                        <h1 className= "mb-3 text-6xl font-black">Tail</h1>
                        <p>loremem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className = "border-dashed border-black mt-10 hover:bg-green-500 hover:text-white w-44 rounded-3xl h-10 shadow-md bg-green-400">Explore</button>

                    </div>
                   
                </div>
            </div>
        </section>
        <SecondSection/>
        <ThirdSection/>
        <ContactUs/>
     </div>
        
       
    )
}
export default FirstSection