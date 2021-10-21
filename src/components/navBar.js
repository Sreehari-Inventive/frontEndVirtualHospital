function NavBar(){
    return (
        <div className = "flex justify-between w-full h-16 bg-red-200 shadow-md" >
            <div className = "h-10 w-20 bg-red-300"></div>
            <ul className = "flex w-1/2 items-center justify-evenly mr-5">
                <li><a>Home</a></li>
                <li><a>About Us</a></li>
                <li><a>Hospital registration</a></li>
                <li><a>Sign Up</a></li>
            </ul>
        </div>
    )

    
}

export default NavBar