import { useState } from "react";

function Contact(){
    const [name,setName]=useState("Vrishin");
    const handleClick = () => {
        setName("Raj")
    }
    return(
    <div>
        <h1>Contact component</h1>
        <h2>The owner of this page is {name}</h2>
        <button onClick={handleClick}>Change owner</button>
    </div>        
    )
}
export default Contact;