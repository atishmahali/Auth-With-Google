import React from "react";

function Home(){
    const logout =()=>{
        localStorage.clear(
        window.location.reload()
        )
    }
    return(
        <div classname='Btn'>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default Home;