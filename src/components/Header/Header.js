import './header.css';
import imgLogo from '../../images/Logo.png';
import imgWhat from '../../images/LogoWhat.png';
import imgMail from '../../images/LogoMail.png';

function Header() {
    return (
        <div className='row header__container'> 
            <div className='col header_logo'>
                <img src={imgLogo} className='header_img' />
            </div>
            <div className='col header_contact_container'>
                <div className='row header_contact_row_one'>
                    Contáctanos
                </div>
                <div className='row header_contact_row_two'>
                    <div className='col header_contact_col'>Whatsapp <img src={imgWhat} /></div>
                    <div className='col header_contact_col'>Mail <img src={imgMail} /></div>
                </div>
            </div>
        </div>
     );
}

export { Header };