import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () =>{
        navigate('/login')
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value
        console.log(name)
    }

    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required/>

                <input type="email" name="email" id="" placeholder='Email Address' required/>

                <input type="password" name="password" id="" placeholder='Password' required/>

               <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;