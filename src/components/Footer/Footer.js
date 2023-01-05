import './footer.css';

function Footer() {
    return ( 
        <div className='footer__container'>
            <div className='row footer_row'>
                <div className='col'>
                   <h3>Quienes Somos</h3>
                   <h6>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco
                   </h6>
                </div>
                <div className='col'>
                    <h3>Contacto</h3>
                    <h6>
                        Calle 11 N° 32 - Urbanización Cañoto <br />
                        Telf: 3597617 - Cel: 71062917 - 75553425 <br />
                        eduardo@sanjuanrepresentaciones.com <br />
                        sanjuan.eduardo@gmail.com
                    </h6>
                </div>
            </div>
        </div>
     );
}

export { Footer };