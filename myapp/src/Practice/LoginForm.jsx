import React,{useRef} from "react";
const LoginForm=()=>{
const emailInputRef=useRef(null);
const passwordInputRef=useRef(null);
const handleSubmit=(event)=>{
    event.preventDefault();
    const dataForm={
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value
    }
    console.log(dataForm);
    emailInputRef.current.value='';
    passwordInputRef.current.value='';
    emailInputRef.current.focus();
}
return(
    <form onSubmit={handleSubmit}>
        <div className="if">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" ref={emailInputRef}/>
        </div>
        <div className="if">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" ref={emailInputRef}/>
        </div>
        <button type="submit">Login</button>
    </form>
)
}
export default LoginForm;