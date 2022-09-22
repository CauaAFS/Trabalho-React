import './Home.css';
import img from "../components/image/image.webp"
export const Home = () => {    
    return (   
        <>
        <h1 className='menuprincipal'>MENU PRINCIPAL</h1>
        <div className='frase'>
        <h1>EXPERIMENTE O BUGATTI CHIRON !!</h1>
        <h2>O ÚLTIMO BUGATTI A USAR O W16 POWERTRAIN. 99 UNIDADES PRODUZIDAS, 
        NUNCA PARA SER REPLICADAS. <br />
        O ULTIMATE ROADSTER INSPIRADO POR UM VENTO LENDÁRIO. </h2>
        </div>
        <div className='carro'>
        <img src={img} alt="" />
        </div>
        </>
    );
};