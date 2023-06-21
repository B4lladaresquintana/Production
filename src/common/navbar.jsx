import './NavBar.css'
export default function NavBar(){
    return (
       <div className="navbar">
            <a href='/' className="desaparece">Inicio</a>
            <a href="/about">Quienes Somos</a>
            <a href="/instructions">Instrucciones</a>
            <a href="/login">Iniciar Sesión</a>
            <a href="/register">Registarse</a>
        </div>
    )
}