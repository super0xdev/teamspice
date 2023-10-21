import Pic from '../img/Footer.png'
import Pic1 from '../img/Footer1.png'
import Pic2 from '../img/Footer2.png'
import Pic3 from '../img/Footer3.png'
import Pic4 from '../img/Footer4.png'

const Footer = () => {
    return (
        <>
            <img className='block sm:hidden' src={Pic} />
            <img className='hidden sm:block md:hidden' src={Pic1} />
            <img className='hidden md:block lg:hidden' src={Pic2} />
            <img className='hidden lg:block xl:hidden' src={Pic3} />
            <img className='hidden xl:block' src={Pic4} />
        </>
    )
}

export default Footer;