import { useState } from 'react';
import NavBar from '../common/NavBar';

import './form.css';
function Login() {

  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
        <NavBar />
        <br></br>
        <br></br>
        <div className='form-user-sesion'>
            <br></br>
            <h1 className='title-user-form-sesion'>Sign In </h1>
            <br></br>
            <form >
                <div>
                    <label className='form-labels'>Enter your email:
                        <input type="email" className='input-user-sesion' value={mail} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                </div>
                <br></br>
                <div>
                <label className='form-labels'> Enter your password:
                    <input type="password" className='input-user-sesion' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                </div>
                <input type="submit" className='btn-form-user-sesion' href="/"/>
            </form>
        </div>
    </div>
  );
}

export default Login;