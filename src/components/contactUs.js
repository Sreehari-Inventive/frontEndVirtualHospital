function ContactUs(){
    return(
        <div>
         <section className = "flex flex-col justify-center items-center h-72 bg-red-200">
         <h1 className="text-3xl mb-5 ">Contact Us!</h1>
          <div className = "flex  items-center flex-col w-72 ">
                <span className = "text-center">Ask away!</span>
                <textarea className = "mb-5"></textarea>
                <span className = "text-center">Email</span>
                <input></input>
                <button className = "rounded-xl mt-5 w-44 h-10 bg-green-400">Send</button>
          </div>
       
       </section>
    <footer className = "w-full bg-black h-10 flex items-center justify-center text-sm text-white">Created by Team Innventive</footer>
    </div>
    )

        
        
}

export default ContactUs