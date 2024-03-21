import React,{useState} from 'react'
import "../Navbar.css";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const Nabvar = () => {
    // const Navigate = useNavigate ();
    const [isOpen, setIsOpen] = useState(false);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
     setToggleState(index);
   };
  return (
    <div className='navbar_section'>
            <div className="main_nav">
        <div className="Navbar">
          <a href='/'>
            <img className="logo" src="/images/Logo (3).svg" alt="" />
          </a>
          <div className={`nav-items items ${isOpen && "open"}`}>
<div class="dropdown div__center">
  <div  class="left_off">LIFT-OFF</div>

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
  )
}

export default Nabvar