import React from 'react'
import logo from './pht.webp';
const Menu = () => {
  return (
    <div className='menu'>
        <div className='container'></div>
       
        <div className='row'>
          <div className='col-6'>
        
           
        
            <div className='menu-img'>
              <img src={logo} alt="logo" />
            </div>
            </div>

            <div className='col-6 p-25'>
                <div className='content-menu'>
                <h3>IceCream Menu</h3>
                <h1>Creamy Spanish Gelato</h1>
                <p>Elaborado con cuidado meticuloso y los ingredientes de la más alta calidad, este gelato proporciona una textura aterciopelada y un perfil de sabor excepcionalmente rico. Nuestro gelato premium se elabora utilizando métodos tradicionales italianos, incorporando ingredientes auténticos como chocolate decadente, purés de frutas maduras y vainilla aromática.</p>

<p>Nuestro compromiso con la excelencia se refleja en cada cucharada, ofreciendo una experiencia indulgente y lujosa. Cada lote de nuestro gelato es cuidadosamente batido a mano para garantizar una consistencia perfecta y un sabor inigualable.</p>

<p>Desde la primera prueba, quedarás cautivado por la suavidad y el equilibrio de sabores que se despliegan en tu paladar. Utilizamos técnicas de congelación lenta para mantener la integridad y el brillo de cada ingrediente, resultando en una delicia congelada que es tan nutritiva como deliciosa.</p>

</div>
<div button className='pad-btn'>
<div className='about-btn'>
                    <a href='#' className='btn btn-smart'>READ MORE</a>
          </div></div>
          
        
      </div>
  </div>
 </div>
  )
}

export default Menu