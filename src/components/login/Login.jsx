import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
const navigate=useNavigate();

    const [input, setInput] = useState({
        email: "",
        password: ""

    });

    const handleLogin=(e)=> {
       e.preventDefault();
       const loggedUser =JSON.parse(localStorage.getItem("user"));
       if(input.email==loggedUser.email && input.password==loggedUser.password) {
              navigate("/");
       }
       else if(input.email!=loggedUser.email && input.password!=loggedUser.password){
        // alert("Invalid Email or Password...");
        const alertMessage=document.querySelector(".alertMessage");
        alertMessage.style.opacity="1";
        console.log("wsqalamwsdkjwjsdjwdj");
        
       }
       else if(input.email==loggedUser.email && input.password!=loggedUser.password){
        // alert("Invalid Email or Password...");
        const alertMessage=document.querySelector(".alertMessage");
        alertMessage.style.opacity="1";
        console.log("salam");
    }
    else if(input.email!=loggedUser.email && input.password==loggedUser.password){
        // alert("Invalid Email or Password...");
        const alertMessage=document.querySelector(".alertMessage");
        alertMessage.style.opacity="1";
        console.log("sagol") } }


    function showPassword() {
       const password_input=document.getElementById("password_input") ;
       const img_url=document.querySelector(".openEye");
       if(password_input.type=="password") {
        password_input.type="text";
        img_url.src="/images/eye_5077234.png"

       }
       else {
        password_input.type="password";
        img_url.src="/images/eye_4735856.png"
       }

    }
    return(
        <>
        <div className="formLoginContainer">
           
         <div className="d-flex justify-content-between"> <h2 className="login_h2">Login Form</h2> <a className="w-3" href="/registration">Don't you have account? <br /> Go to register.</a></div> 
            <form onSubmit={handleLogin} className="form" action="">
                            <div className="form-group"><label htmlFor="email_input">E-mail</label> <br />
                <input 
                 name="email"
                
                 value={input.email}
                 onChange={(e)=> setInput({
                     ...input,
                     [e.target.name]: e.target.value,
                 })}
                className="form-control" type="email " id="email_input" placeholder="Enter your email..." /> <br /></div>
              
                <div className="form-group"> <label htmlFor="password_input">Password</label>
             
                <img onClick={showPassword} className="openEye" src="/images/eye_4735856.png" alt="" />
                <input
                 name="password"
                 
                 value={input.password}
                 onChange={(e)=> setInput({
                     ...input,
                     [e.target.name]: e.target.value,
                 })}
                className="form-control" type="password" id="password_input" placeholder="Enter your password..." />
 </div>
             

               
                
                <div className="login_and_a">
                    <div className="forgotandalert"> 
                <p className="alertMessage">Invalid email or password...</p></div>
               
                 <button className="login_button">LOGIN</button>
               </div>
            </form>

                <div className="modal fade" id="forgotPasswordModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h2>Reset Password</h2>
                                <button data-dismiss="modal" className="close" >&times;</button>
                            </div>
                            <div className="modal-body">
                            <div className="form-group"><label htmlFor="email_input">E-mail</label> <br />
                <input className="form-control" type="email " id="email_input" placeholder="Enter your email..." /></div>
                <button className="login_button">RESET PASSWORD</button>
              
                            </div>
                            <div className="modal-footer">
                                <button  data-dismiss="modal" className=" btn btn-light">CLOSE</button>
                                <button  data-dismiss="modal" className="btn btn-light">GO TO LOGIN</button>
                            </div>

                        </div>
                    </div>
                </div>
                <button data-toggle="modal" data-target="#forgotPasswordModal" className="forgot_password">Forgot your password?</button>

              

        </div>
  {/* <div className="alertMessage">
                <p>Invalid Email or Password...</p>
            </div> */}
           
        </>
    )
}

export default Login;