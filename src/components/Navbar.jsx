import { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import logo from '../assets/one.png'; 
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import "../styles/navbar.css";

const NavbarComponent = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);

  const toggleCard = (cardId) => {
    if (activeCard === cardId) {
      setIsCardVisible(!isCardVisible);
    } else {
      setActiveCard(cardId);
      setIsCardVisible(true);
    }
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setIsCardVisible(false);
      setActiveCard(null); // Hide card and reset activeCard
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar expand="lg" className="navbar bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="navbar-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav me-auto">
              {['shop', 'technologies', 'about', 'build', 'support'].map((item) => (
                <Nav.Link
                  key={item}
                  className="nav-link"
                  onClick={() => toggleCard(item)}
                  onMouseEnter={() => toggleCard(item)}
                  onMouseLeave={() => {
                    // Only hide if the card is not currently active
                    if (activeCard !== item) {
                      setIsCardVisible(false);
                    }
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {activeCard === item ? <BiCaretUp className="caret caret-up" /> : <BiCaretDown className="caret caret-down" />}
                </Nav.Link>
              ))}
            </Nav>
            <Nav className="nav-support-search">
              <a href="#search" className="search-icon">
                <BsSearch />
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {activeCard && (
        <div className={`dropdown-card ${isCardVisible ? 'show' : ''}`} ref={cardRef}>
          {activeCard === 'shop' && (
            <>
              <h4>Shop</h4>
              <div className="dropdown-content">
                <div className="dropdown-batch">
                  <img src={img1} alt="Virtual Reality" className="dropdown-image" />
                  <h5>Virtual Reality</h5>
                  <ul>
                    <li>Meta Quest overview</li>
                    <li>Meta Quest 3</li>
                    <li>Meta Quest 2</li>
                    <li>Meta Quest Pro</li>
                    <li>Compare devices</li>
                    <li>Accessories</li>
                    <li>Meta Warranty Plus</li>
                  </ul>
                </div>
                <div className="dropdown-batch">
                  <img src={img2} alt="Ray-Ban Meta Smart Glasses" className="dropdown-image" />
                  <h5>Ray-Ban Meta Smart Glasses</h5>
                  <ul>
                    <li>Ray-Ban | Meta overview</li>
                    <li>Shop all</li>
                    <li>Wayfarer</li>
                    <li>Headliner</li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {activeCard === 'technologies' && (
            <>
              <h4>Our Tech</h4>
              <div className="dropdown-content">
                <div className="dropdown-batch">
                  <h5>Shop Devices</h5>
                  <ul>
                    <li>Meta Quest</li>
                    <li>Ray-Ban | Meta</li>
                  </ul>
                </div>
                <div className="dropdown-batch">
                  <h5>Explore Apps</h5>
                  <ul>
                    <li>Facebook</li>
                    <li>Messenger</li>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Meta Horizon</li>
                  </ul>
                </div>
                <div className="dropdown-batch">
                  <h5>Explore Work Tools</h5>
                  <ul>
                    <li>Work Products Overview</li>
                    <li>Virtual Reality Headsets</li>
                    <li>Meta Horizon Workrooms</li>
                    <li>Workplace</li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {activeCard === 'about' && (
            <>
              <h4>About Us</h4>
              <div className="dropdown-content">
                <div className="dropdown-batch">
                  <p>The Metaverse</p>
                  <ul>
                    <li>Who We Are</li>
                  </ul>
                </div>
                <div className="dropdown-batch">
                  <p>Our Actions</p>
                  <ul>
                    <li>Our Community</li>
                  </ul>
                </div>
                <div className="dropdown-batch">
                  <p>News</p>
                </div>
              </div>
            </>
          )}
          {activeCard === 'build' && (
            <>
              <h4>Build With Us</h4>
              <div className="dropdown-content">
                <div className="dropdown-batch">
                  <ul>
                    <li>Businesses</li>
                    <li>Creators</li>
                    <li>Developers</li>
                  </ul>
                </div>
                <div className="dropdown-batch">
                  <ul>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Media</li>
                    <li>Researchers</li>
                    <li>Engineers</li>
                  </ul>
                </div>
                <div className="dropdown-batch">
                  <ul>
                    <li>Government, Politics & Advocacy</li>
                    <li>Nonprofits</li>
                    <li>Educators</li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {activeCard === 'support' && (
            <>
              <h4>Support Us</h4>
              <div className="dropdown-content">
                <div className="dropdown-batch">
                  <ul>
                    <li><h5>Shop Help Center</h5></li>
                    <li>Product Support Home</li>
                    <li>Meta Quest</li>
                    <li>Meta Portal</li>
                    <li>Ray-Ban Stories</li>
                    <li>Find Order</li>
                  </ul>
                </div>
                <div className="dropdown-batch">
                  <ul>
                    <li><h5>App Help Center</h5></li>
                    <li>Meta Horizon</li>
                    <li>Facebook</li>
                    <li>Messenger</li>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Workplace</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
