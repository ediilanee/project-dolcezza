import React from 'react'
import '../style/promocoes.css'

const Promocoes = () => {
  return (
    <div className="conteiner">
     <h2>Não perca!As ofertas que você estava esperando já chegaram! </h2>
     <div>
        <img src="img/promocoes/bolofrutasvermelhas.png" alt="" />
        <p>Bolo de frutas vermelhas</p>
        <p>R$ 120,50</p>
     </div>
     <div>
         <img src="img/promocoes/browie.png" alt="" />
         <p>Browies sortidos</p>
         <p>R$7,00</p>
      </div>
     <div>
         <img src="img/promocoes/Churroscomdocedeleite.png" alt="" />
         <p>Churros com doce de leite</p>
         <p>R$30,00</p>
      </div>
      <div> 
          <img src="img/promocoes/combos3.png" alt="" />
          <p>Pecado perfeito </p>
          <p>R$20,00 </p>
      </div>
     <div> 
         <img src="img/promocoes/NinhocomMorango.png" alt="" />
         <p>Bolo ninho com morango</p>
         <p>R$100,00</p>
     </div>
     
      
     

    </div>
  )
}

export default Promocoes;
