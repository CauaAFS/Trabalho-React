import './Contato.css';
import img1 from "../components/image/Bugatti 3.png";
import img2 from "../components/image/bugatti-la-voiture.png";
import img3 from "../components/image/Bugatti-Veyron.png";
export const Contato = () => {
  return (
    <>
      

      <h1 className="contato">
        LISTA DE PREÇOS BUGATTI 2021-2022: MODELOS, ANÁLISES E ESPECIFICAÇÕES
      </h1>
      <h1 className="menuprincipal2">MODELO MOTOR PREÇOS</h1> 
      <div className='Fulltable'>
      <div className="car1">
        <img src={img1} alt="" />
        
        <table border={1} className="tabela1">
          <tr>
            <td> MODELO </td>
            <td> MOTOR </td>
            <td> PREÇO </td>
          </tr>
          <tr>
            <td>Bugatti Chiron</td>
            <td> 8.0 W16 </td>
            <td> R$ 21 milhões </td>
          </tr>
        </table>
        <table border={1} className="tabela2">
          <tr>
          <td>Bugatti Voiture</td>
            <td> 8.0 W16 </td>
            <td> R$ 67 milhões </td>
          </tr>
        </table>
        <table border={1} className="tabela3">
          <tr>
            <td>Bugatti Veyron</td>
            <td> 8.0 W16 </td>
            <td> 	R$ 16 milhões </td>
          </tr>
        </table>
      </div>
      <div className="car2">
        <img src={img2} alt="" />
      </div>
      <div className="car3">
        <img src={img3} alt="" />
      </div>
      </div>
      <div> 
      <h1 className="contato2">ENTRAR EM CONTATO COM O VENDEDOR</h1> 
      <form>
      <label>
    Comprador:
    <input type="text" name="Comprador" required />
    Email:
    <input type="text" name="Email" required/>
    Telefone:
    <input type="text" name="Telefone" required/>
    Carro:
    <input type="text" name="Carro" required/>
  </label>
  <input type="submit" value="Enviar" />
</form>   
      </div>
  
    </>
  );
};