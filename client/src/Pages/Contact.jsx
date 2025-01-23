import { useState } from "react"

export const Contact = ()=>{

    const [contact, setContact] = useState({
    username:"",
    email:"",
    message:"",

});

// lets tackle our handle
const handleInput = (e =>{
    const name = e.target.name;
    const value = e.target.value;

    setContact({
        ...Contact,
        [name]:value,
    });
})
//handle form
const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(Contact);
}
    return (
        <>
        <section className="section-contact">
         <div className="contact-content container">
            <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* contact page main */}

        <div className="container grid grid-two-cols">
            <div className="contact-img">
                <img src="/images/Omega.png" alt="we are aleady ready to help" height="300" width = "300"/>
            </div>
        </div>


        {/* contact form */}
        <section className="section-form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Usename</label>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    autoComplete="off" 
                    required  
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    autoComplete="off" 
                    required  
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea 
                    name="message" 
                    id="message" 
                    autoComplete="off"
                    value={Contact.message}
                    onChange={handleInput}
                    required
                    cols="30" 
                    rows="10"
                    ></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
            </section>

        </section>
        </>
    )
}