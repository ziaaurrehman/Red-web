import React,{useState} from 'react'
import "../Navbar.css";
const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div className='main_container7'>
         <div className='navbar_section'>
            <div className="main_nav">
        <div className="Navbar">
          <a href='/'>
            <img className="logo" src="/images/Logo (3).svg" alt="" />
          </a>
          <div className={`nav-items items ${isOpen && "open"}`}>
<div class="dropdown">
  <div  class="trans">/ContactMissionControl</div>

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
    <div className='data_form'>
      <div className='contact'>Contact</div>
      <div className='div_1 mbl_v'>
      <input className='field_css' type="text" id="fname" placeholder="/EnterFirstName"/>
      <input className='field_css' type="text" id="fname" placeholder="/EnterLastName"/>
      <input className='field_css' type="text" id="fname" placeholder="/EnterCompanyName"/>
      </div>
      <div className='div_1 mbl_v'>
      <input className='field_css email_field' type="text" id="fname" placeholder="/EnterEmail"/>
      </div>
      <div className='div_1 mbl_v'>
      <input className='field_css email_field' type="text" id="fname" placeholder="/EnterDescription"/>
      </div>
      <div className='div_1 mbl_v'>
      <input className='field_css' type="text" id="fname" placeholder="/EnterBudget"/>
      <input className='field_css' type="text" id="fname" placeholder="EnterTimeframe"/>
      <button className='field_css fix_W'>LIFT-OFF</button>
      </div>
    </div>
    </div>
  )
}

export default ContactForm