import './Sobre.css'
import img from "../components/image/bugatti 0.png"
export const Sobre = () => {
    return (
        <>
            <h1 className='paginasobre'>PAGINA SOBRE A BUGATTI CHIRON</h1>
            <div className='car'>
                <img src={img} alt="" />
            </div>

            <h1 className='cartext4'> * ESPECIFICAÇÕES * </h1>
            <h2 className='cartext'>O motor 8 litros W16 quad-turbo é o mesmo do Veyron, no entanto,
                muito mais moderno.O Chiron tem agora 1500 cavalos de potência e 163,1 kgf.m (1.600 N.m) de torque iniciando a 2.000 rpm.
                Como o Veyron, a carroceria é de fibra de carbono, a suspensão é independente e a tração é integral.
                Acelera de 0-100 km/h em 2,5 segundos,0-200 km/h em menos de 6,5 segundos e 0-300 km/h em menos de 13,6 segundos.
                A velocidade máxima é limitada eletronicamente a 420 km/h por razões de segurança,
                sendo que o velocímetro é conhecido por ter a marca de 500 km/h.</h2>

            <h1 className='cartext2theme'> * RECORDE DE VELOCIDADE * </h1>
            <h2 className='cartext2'>
                Em um teste realizado em 2 de agosto de 2019,
                o piloto Andy Wallace alcançou a marca de 490.48 km/h em uma versão modificada do Bugatti Chiron.
                O teste foi realizado na pista de testes da Volkswagen em Ehra-Lessien.
                O Bugatti Chiron se torna o primeiro carro de produção a atingir a marca de 300 mph (482,8 km/h).</h2>

            <h1 className='cartext5theme'>  * FICHA TÉCNICA * </h1>
            <h2 className='cartext5'>
            Motor	W16 8.0 quad-turbo
            Potência	1 500 cv (1 100 kW) @ 6700 rpm; Torque	163,15 kgf-m (1 200 lb·ft) @ 2000 rpm
            Transmissão	Câmbio semiautomático de 7 velocidades; Layout	Motor central montado longitudinalmente, tração integral
            Modelos relacionados	Hennessey Venom GT; Koenigsegg Agera Comprimento	4 544 mm (180 in); Entre-eixos	2 711 mm (110 in)
           
            </h2>
           
        </>)
};
