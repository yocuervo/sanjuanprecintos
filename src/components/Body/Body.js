import './body.css';

import productOne from '../../images/productos/ProductoUno.png';
import productTwo from '../../images/productos/ProductoDos.png';
import productThree from '../../images/productos/ProductoTres.png';
import productFour from '../../images/productos/ProductoCuatro.png';

function Body() {
    return ( 
        <div className='body__container'>
            <div className='row body_title'>
                <h1>Productos</h1>
            </div>
            <div className='row body_products'>
                <div className='col-12 col-md-6 body_products_container'>
                    <div className='row products__img'> <img src={productOne} alt='Imagen de Producto' /> Modelo: TA-40 Traba de Acero </div>
                    <div className='row products__data'>
                        <button className='btn btn-outline-dark' type='button' data-bs-toggle='collapse' 
                                data-bs-target='#productOne' aria-expanded='false' aria-controls='collapseExample'>
                            <h4><b><u>Descripción:</u></b></h4>
                        </button>
                        <div className='collapse' id='productOne'>
                            <div className='card card-body'>
                                <h6>Precinto de máxima seguridad, inyectado en 
                                polipropileno con un mecanismo de cierra compuesto por 
                                una traba de acero que impide la acción de cualquier factor 
                                térmico que en otros precintos podrían ablandar el sistema 
                                de cierre. <br/>
                                Fácil y rápido de colocar, el TA-40 es absolutamente 
                                inviolable. <br/>
                                Tiene un sistema de abre-fácil y una escala graduada en 
                                centímetros en la cola. <br/>
                                Posee una gran resistencia a la tracción. </h6>

                                <h4><b><u>Características Técnicas:</u></b></h4>
                                <h6>Embalaje: Cajas de 1000 u. 40x30x30cm <br/>
                                Peso por caja: 7kg <br/>
                                Colores: A elección <br/>
                                Numeración: Alfanumérica hasta 8 dígitos <br/>
                                Material: Cuerpo PP copolimero. <br/>
                                Sistema de traba: Acero sae 1070. <br/>
                                Resistencia a la tracción: 32kg <br/>

                                Largo total: 40cm <br/>
                                Largo útil: 30cm <br/>
                                Ancho tira: 7mm </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 body_products_container'>
                    <div className='row products__img'> <img src={productTwo} alt='Imagen de Producto' /> Modelo: TA-40 Traba de Acero </div>
                    <div className='row products__data'>
                        <button className='btn btn-outline-dark' type='button' data-bs-toggle='collapse' 
                                data-bs-target='#productTwo' aria-expanded='false' aria-controls='collapseExample'>
                            <h4><b><u>Descripción:</u></b></h4>
                        </button>
                        <div className='collapse' id='productTwo'>
                            <div className='card card-body'>
                                <h6>Precinto de máxima seguridad, inyectado en 
                                polipropileno con un mecanismo de cierra compuesto por 
                                una traba de acero que impide la acción de cualquier factor 
                                térmico que en otros precintos podrían ablandar el sistema 
                                de cierre. <br/>
                                Fácil y rápido de colocar, el TA-40 es absolutamente 
                                inviolable. <br/>
                                Tiene un sistema de abre-fácil y una escala graduada en 
                                centímetros en la cola. <br/>
                                Posee una gran resistencia a la tracción. </h6>

                                <h4><b><u>Características Técnicas:</u></b></h4>
                                <h6>Embalaje: Cajas de 1000 u. 40x30x30cm <br/>
                                Peso por caja: 7kg <br/>
                                Colores: A elección <br/>
                                Numeración: Alfanumérica hasta 8 dígitos <br/>
                                Material: Cuerpo PP copolimero. <br/>
                                Sistema de traba: Acero sae 1070. <br/>
                                Resistencia a la tracción: 32kg <br/>

                                Largo total: 40cm <br/>
                                Largo útil: 30cm <br/>
                                Ancho tira: 7mm </h6>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div className='row body_products'>
                <div className='col-12 col-md-6 body_products_container'>
                    <div className='row products__img'> <img src={productThree} alt='Imagen de Producto' /> Modelo: TA-40 Traba de Acero </div>
                    <div className='row products__data'>
                        <button className='btn btn-outline-dark' type='button' data-bs-toggle='collapse' 
                                data-bs-target='#productThree' aria-expanded='false' aria-controls='collapseExample'>
                            <h4><b><u>Descripción:</u></b></h4>
                        </button>
                        <div className='collapse' id='productThree'>
                            <div className='card card-body'>
                                <h6>Precinto de máxima seguridad, inyectado en 
                                polipropileno con un mecanismo de cierra compuesto por 
                                una traba de acero que impide la acción de cualquier factor 
                                térmico que en otros precintos podrían ablandar el sistema 
                                de cierre. <br/>
                                Fácil y rápido de colocar, el TA-40 es absolutamente 
                                inviolable. <br/>
                                Tiene un sistema de abre-fácil y una escala graduada en 
                                centímetros en la cola. <br/>
                                Posee una gran resistencia a la tracción. </h6>

                                <h4><b><u>Características Técnicas:</u></b></h4>
                                <h6>Embalaje: Cajas de 1000 u. 40x30x30cm <br/>
                                Peso por caja: 7kg <br/>
                                Colores: A elección <br/>
                                Numeración: Alfanumérica hasta 8 dígitos <br/>
                                Material: Cuerpo PP copolimero. <br/>
                                Sistema de traba: Acero sae 1070. <br/>
                                Resistencia a la tracción: 32kg <br/>

                                Largo total: 40cm <br/>
                                Largo útil: 30cm <br/>
                                Ancho tira: 7mm </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-6 body_products_container'>
                    <div className='row products__img'> <img src={productFour} alt='Imagen de Producto' /> Modelo: TA-40 Traba de Acero </div>
                    <div className='row products__data'>
                        <button className='btn btn-outline-dark' type='button' data-bs-toggle='collapse' 
                                data-bs-target='#productFour' aria-expanded='false' aria-controls='collapseExample'>
                            <h4><b><u>Descripción:</u></b></h4>
                        </button>
                        <div className='collapse' id='productFour'>
                            <div className='card card-body'>
                                <h6>Precinto de máxima seguridad, inyectado en 
                                polipropileno con un mecanismo de cierra compuesto por 
                                una traba de acero que impide la acción de cualquier factor 
                                térmico que en otros precintos podrían ablandar el sistema 
                                de cierre. <br/>
                                Fácil y rápido de colocar, el TA-40 es absolutamente 
                                inviolable. <br/>
                                Tiene un sistema de abre-fácil y una escala graduada en 
                                centímetros en la cola. <br/>
                                Posee una gran resistencia a la tracción. </h6>

                                <h4><b><u>Características Técnicas:</u></b></h4>
                                <h6>Embalaje: Cajas de 1000 u. 40x30x30cm <br/>
                                Peso por caja: 7kg <br/>
                                Colores: A elección <br/>
                                Numeración: Alfanumérica hasta 8 dígitos <br/>
                                Material: Cuerpo PP copolimero. <br/>
                                Sistema de traba: Acero sae 1070. <br/>
                                Resistencia a la tracción: 32kg <br/>

                                Largo total: 40cm <br/>
                                Largo útil: 30cm <br/>
                                Ancho tira: 7mm </h6>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

    </div>

     );
}

export { Body };