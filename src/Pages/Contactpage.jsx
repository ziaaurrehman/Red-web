import React,{useState} from 'react'
import "../Navbar.css";


const Contactpage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
     setToggleState(index);
    }
  return (
    <div className='main_container5'>
         <div className='navbar_section'>
            <div className="main_nav">
        <div className="Navbar">
          <a href='/'>
            <img className="logo" src="/images/Logo (3).svg" alt="" />
          </a>
          <div className={`nav-items items ${isOpen && "open"}`}>
<div class="dropdown">
  <div  class="trans">Transmission Received</div>

</div>
            <div class="d_flex">
              <div className="services" >Services</div>
  <div class="dropdown-content">
  <div className='gallery'>Gallery</div>
  </div>
</div>
         
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </div>
    <div className='section5'></div>
    <div className='title_1'>Thank you for reaching out</div>
    <div className='title_2'>
      
      Our team will <strong>contact</strong> you soon.
      <img src='/images/RocketLogo-ThrustOff 01 Artboard 1 2.svg' alt=''/></div>
    <div className='title_3'>return home</div>

    </div>
  )
}

export default Contactpage