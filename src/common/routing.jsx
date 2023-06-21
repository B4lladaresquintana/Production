import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../vistas/App'
import About from '../navbarItems/about'
import Login from '../user/login'
import Register from '../user/register'
import Principal from '../vistas/principal'
import Game from '../game/game'
import Instructions from '../navbarItems/instructions'
function Routing(){
    return (
        <BrowserRouter>
            <Routes>
            <Route path={"/"} element={<App />}/>
            <Route path={"/about"} element={<About />}/>
            <Route path={"/login"} element={<Login />}/>
            <Route path={"/register"} element={<Register/>}/>
            <Route path={"/principal"} element={<Principal/>}></Route>
            <Route path={"/game"} element={<Game/>}></Route>
            <Route path={"/instructions"} element={<Instructions/>}></Route>
            </Routes>
      </BrowserRouter>

    )
}
export default Routing

/*  <Route path={"/instructions"} element={<Instructions />}/>
            <Route path={"/about"} element={<About />}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/register"} element={<Register/>}/>*/