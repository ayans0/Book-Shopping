import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Registration() {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: "",
        lastname: "",
        email: "",
        password: "",
        date: "",
        email:"",
        password:""

    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    }


    function showPassword() {
        const password_input=document.getElementById("password_input") ;
        const img_url = document.querySelectorAll(".secondopenEye, .thirdopenEye");
        if(password_input.type=="password") {
         password_input.type="text";
         img_url.forEach(img_url => {
            img_url.src = "/images/eye_5077234.png";
        });
 
        }
        else {
         password_input.type="password";
        img_url.forEach(img_url => {
            img_url.src="/images/eye_4735856.png";
        });
        }
 
     }
    return(
        <div className="d-flex">
                    <div className="formRegisterContainer">
         <h2 className="register_h2">Registration Form</h2> 
            <form  className="form" action="">
                
            <div className="form-group"><label htmlFor="firstname_input">First Name</label> 
                <input name="name" 
                value={input.name} 
                onChange={(e)=>setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                })}
                required 
                className="form-control"
                 type="text " 
                 id="firstname_input" 
                 placeholder="Enter your first name..." /> </div>
                
            <div className="form-group">
                <label htmlFor="lastname_input">Last Name</label> 
                <input
                name="lastname"
                value={input.lastname}
                onChange={(e)=> setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                })}
                required
                 className="form-control"
                  type="text " 
                  id="lastname_input" 
                  placeholder="Enter your last name..." /> </div>

            <div className="form-group">
                <label htmlFor="date_input">Birth Date</label>
                <input
                name="date"
                value={input.date}
                onChange={(e)=> setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                })} required type="date" className="form-control" id="date_input" />

            </div>

            <div className="form-group">
                <label htmlFor="email_input">E-mail</label> 
                <input
                name="email"
                value={input.email}
                onChange={(e)=> setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                })} required className="form-control" type="email " id="email_input" placeholder="Enter your email..." /> </div>
              
            <div className="form-group">
                <label htmlFor="password_input">Password</label>
                <img onClick={showPassword} className="secondopenEye" src="/images/eye_4735856.png" alt="" />
                <input
                name="password"
                value={input.password}
                onChange={(e)=> setInput({
                    ...input,
                    [e.target.name]: e.target.value,
                })}
                required className="form-control" type="password" id="password_input" placeholder="Enter your password..." /> </div> 
            

          
                 <button onClick={handleSubmit}>REGISTER</button>
              
            </form>

               
           
        </div>
 <img className="registerImg" src="/images/xx.jpg" alt="" />
        </div>
    )
}

export default Registration;