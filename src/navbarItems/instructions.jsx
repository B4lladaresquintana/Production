import NavBar from "../common/NavBar"
import Tablero from '../assets/imgs/Tablero.png'
import Ficha from '../assets/imgs/Verde.png'
import Casa from '../assets/imgs/casa.png'
import './instructions.css'

function ComponenteJuego(src,title,Descripcion){
    return(
        <div className="card-instruction">
                        <img src={src} alt='Tablero' className="img-instruction"/>
                        <div className="intro-instruction">
                            <h1>{title}</h1>
                            <p className="p-instruction"> {Descripcion}</p>
                        </div>
                    </div>
    )
}
function Instructions(){
    return (
        <body className="body-instruction">
            <NavBar/>
            <br></br>
            <br></br>
            <div className="main-instruction">
                <h1 className="title-instruction">Componentes del juego</h1>  
                <div className="container-instruction">
                    {ComponenteJuego(Tablero,"Tablero","El Tablero es el terreno de batalla en donde los jugadores competirán para ver quién se queda con el campus San Joaquín")}
                    {ComponenteJuego(Ficha,"Ficha","La Ficha representa a cada jugador")}
                    {ComponenteJuego(Casa,"Casa","La Casa, hazte dueño, mejoralas y veras tu gloria divina.")}
                </div>

            </div>
        </body>
    )
}

export default Instructions;
/*<div className="card">
                        <img src={Tablero} alt='Tablero' className="img"/>
                        <div className="intro">
                            <h1>Tablero</h1>
                            <p> El <span>Tablero</span> es el terreno de batalla en donde los jugadores competirán para ver quién se queda con el campus San Joaquín.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Ficha} alt='Ficha' className="img"/>
                        <div className="intro">
                            <h1>Ficha</h1>
                            <p> LA <span>Ficha</span> representa a cada jugador.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Casa} alt='Casa' className="img"/>
                        <div className="intro">
                            <h1>Casa</h1>
                            <p> La <span>Casa</span>, hazte dueño, mejoralas y veras tu gloria divina. </p>
                        </div>
                    </div>*/