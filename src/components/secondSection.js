import placeHolderImage from "./irwan-iwe-rbDE93-0hHs-unsplash.jpg"
document.querySelector("body").classList.add("bg-red-100")
function ImageCard({imageSrc,Description}){
    return(
        <div className = " mt-44  w-56 h-56 md:w-2/3 md:h-2/3 ">
                        <img src = {imageSrc} alt = "placeholder"></img>
                        <p className = "text-center mt-10">{Description}</p>

     </div>
        
    )
}
function SecondSection(){
    return(
        <section className = "bg-red-100 w-full h-screen">
            <h1 className="bg-red-100 mt-7 text-center font-medium text-6xl">Lorem Ipsum</h1>
            <div className= "mt-5 gap-y-12 grid grid-rows-2 md:grid-cols-2 w-full h-full">
                <div className="w-full flex items-center justify-center">
                    <ImageCard imageSrc = {placeHolderImage} Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"/>
                </div>
                <div className = "flex items-center justify-center w-full">
                <ImageCard  imageSrc = {placeHolderImage} Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"/>
                </div>
            </div>
        </section>
    )

}

export default SecondSection