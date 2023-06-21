import { useState } from 'react';
import NavBar from '../common/NavBar';
// import { SessionContext } from './usercontext';
import './form.css';
function Login() {

  //const [ setIsLoggedIn] = useContext(SessionContext);
  const [mail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  /*
  //const [error, setError] = useState('');
  //const [error, setError] = useState('');
  /*const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mail, password })
      });*/

      //const data = await response.json();

      //if (response.ok) {
        // Inicio de sesión exitoso
        //setIsLoggedIn(true);
      //} else {
        // Inicio de sesión fallido
        //setError(data.message);
      //}
    /*} catch (error) {
      //console.error('Error al iniciar sesión:', error);
      //setError('Ocurrió un error al iniciar sesión');
    }*/
  //};
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