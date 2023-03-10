import './header.css';
import imgLogo from '../../images/Logo.png';
import imgWhat from '../../images/LogoWhat.png';
import imgMail from '../../images/LogoMail.png';

function toMail() {
    window.open('mailto:example@gmail.com', '_blank');
};

function toWhats() {
    window.open('https://wa.me/+59175553425');
}

function Header() {
    return (
        <div className='row header__container'> 
            <div className='col header_logo'>
                <img src={imgLogo} className='header_img' alt='Logo SanJuan' />
            </div>
            <div className='col header_contact_container'>
                <div className='row header_contact_row_one'>
                    Contáctanos
                </div>
                <div className='row header_contact_row_two'>
                    <div className='col header_contact_col'>
                        Whatsapp <img src={imgWhat} alt='Imagen Whatsapp' className='contact_logos' onClick={toWhats} /></div>
                    <div className='col header_contact_col'>
                        Mail <img src={imgMail} alt='Imagen Mail' className='contact_logos' onClick={toMail} />
                    </div>
                </div>
            </div>
        </div>
     );
}

export { Header };