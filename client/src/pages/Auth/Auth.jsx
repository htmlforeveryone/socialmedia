// import React , { useState }from "react";
// import './Auth.css'
// import Logo from '../../img/Logo.jpg'
// import {useDispatch, useSelector} from 'react-redux'
// import { logIn, signUp } from "../../actions/AuthAction.js";





// const Auth = () =>{
//     const disPatch =useDispatch()
//     const loading = useSelector((state)=>state.authReducer.loading)
//     console.log(loading)
//     const [isSignUp , setIsSighnUp]=useState(false)

 
   
//     const [data , setData]=useState({
//     firstname: "",
//     lastname:"",
//     username:"" ,
//     password:"",
//     confirmpass:""
//  });

//     const [confirmPass ,setConfirmpass]=useState(true)

//     const handleChange = (e) =>{
//             setData({...data, [e.target.name]: e.target.value });


//     };

//     const handleSubmit=(e)=>{
//         setConfirmpass(true)
//         e.preventDefault();

//         if(isSignUp){
            
//             data.password===data.confirmpass 
//             ? disPatch( signUp(data) ) 
//             : setConfirmpass(false)
//         }else{
//             disPatch( logIn(data) ) 
            
//         }

//     };


//     const resetForm=()=>{
//         setConfirmpass(true);
//         setData({   firstname: "",
//         lastname:"",
//         username:"" ,
//         password:"",
//         confirmpass:"",
    
//     })
//     }



//     return(
//         <div className="Auth">
//         {/* Left Side */}
//            <div className="a-left">
//                 <img src={Logo} alt=""/>
//                     <div className="Webname">

//                         <h1>আলাপন</h1>
//                         <h6>Explore The World with আলাপন </h6>
//                     </div>
//            </div>
//           {/* right side */}
//            <div className="a-right">


//     <form  className="infoForm authForm"  onSubmit={handleSubmit}>

//     <h3> {isSignUp ? "Sign Up"  : "Log In"}</h3>

    
//         {isSignUp &&  (
//             <div>
          
//          <input
        
//         type="text"
//         placeholder="First Name"
//         className="infoInput"
//         name="firstname"
//         value={data.firstname}
//         onChange={handleChange}
                
            
        

//          />
//           <input
//          type="text"
//          placeholder="Last Name"
//          className="infoInput" 
//          name="lastname"
        
//         value={data.lastname}
//         onChange = {handleChange} 
        

//          />
//     </div>
//         )}
       

//     <div>

//     <input
//          type="text"
//          placeholder="Username"
//          className="infoInput" 
//          name="username"
      
//         value={data.username}
//         onChange = {handleChange} 

//          />
//     </div>



//     <div>


//     <input
//          type="password"
//          placeholder="Password"
//          className="infoInput" 
//          name="password"
//          value={data.password}
      
//         onChange = {handleChange} 

//          />
//     {isSignUp && (
//     <input
//          type="password"
//          placeholder="Confirm Password "
//          className="infoInput" 
//          name="confirmpass"
//          value={data.confirmpass}
     
//         onChange = {handleChange} 

//          />
// )    }
//     </div>

//         <span style={{display:confirmPass? "none" : "block" ,
//         color:"red", 
//         fontSize:"12px",
//         alignSelf:"flex-end" ,
//         marginRight:"5px" }}>
//  *Confirm password is not same
//           </span>
//           <div>
//             <span
//               style={{
//                 fontSize: "12px",
//                 cursor: "pointer",
//                 textDecoration: "underline",
//               }}
//               onClick={() => {
//                 resetForm();
//                 setIsSighnUp((prev) => !prev);
//               }}
//             >
//               {isSignUp
//                 ? "Already have an account Login"
//                 : "Don't have an account Sign up"}
//             </span>
//             <button
//               className="button infoButton"
//               type="Submit"
//             //   disabled={loading}
//             >
//               {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Auth;



import React , { useState }from "react";
import './Auth.css'
import Logo from '../../img/Logo.jpg'
import {useDispatch, useSelector} from 'react-redux'
import { logIn, signUp } from "../../actions/AuthAction.js";

import { useNavigate } from "react-router-dom";





const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  };
  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);

  const [data, setData] = useState(initialState);

  const [confirmPass, setConfirmPass] = useState(true);

  // const dispatch = useDispatch()

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  };

  // handle Change in input
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submission
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data, navigate))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="Auth">
      {/* left side */}

      <div className="a-left">
        <img src={Logo} alt="" />

        <div className="Webname">
          <h1>আলাপন</h1>
          <h6>Explore The World with আলাপন</h6>
        </div>
      </div>

      {/* right form side */}

      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                required
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
              />
              <input
                required
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
              />
            </div>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            *Confirm password is not same
          </span>
          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
            </span>
            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;









