import { useState, useEffect, useRef } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/one.png'; 
import img1 from '../assets/img1.webp';
import img2 from '../assets/img2.webp';
import "../styles/navbar.css";

const NavbarComponent = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);
  const location = useLocation();

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
      setActiveCard(null);
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
          <Navbar.Brand
            as={Link}
            to={location.pathname === '/' ? '/homepage2' : '/'}
          >
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

      {activeCard === 'shop' && (
        <div className={`dropdown-card ${isCardVisible ? 'show' : ''}`} ref={cardRef}>
          <h4>Shop</h4>
          <div className="dropdown-content">
            <div className="dropdown-batch">
              <img src={img1} alt="Virtual Reality" className="dropdown-image" />
              <h5>Virtual Reality</h5>
              <ul>
                <li><Link to="/homepage2?section=Meta%20Quest%20overview">Meta Quest overview</Link></li>
                <li><Link to="/homepage2?section=Meta%20Quest%203">Meta Quest 3</Link></li>
                <li><Link to="/homepage2?section=Meta%20Quest%202">Meta Quest 2</Link></li>
                <li><Link to="/homepage2?section=Meta%20Quest%20Pro">Meta Quest Pro</Link></li>
                <li><Link to="/homepage2?section=Compare%20devices">Compare devices</Link></li>
                <li><Link to="/homepage2?section=Accessories">Accessories</Link></li>
                <li><Link to="/homepage2?section=Meta%20Warranty%20Plus">Meta Warranty Plus</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <img src={img2} alt="Ray-Ban Meta Smart Glasses" className="dropdown-image" />
              <h5>Ray-Ban Meta Smart Glasses</h5>
              <ul>
                <li><Link to="/homepage2?section=Ray-Ban%20Meta%20overview">Ray-Ban | Meta overview</Link></li>
                <li><Link to="/homepage2?section=Shop%20all">Shop all</Link></li>
                <li><Link to="/homepage2?section=Wayfarer">Wayfarer</Link></li>
                <li><Link to="/homepage2?section=Headliner">Headliner</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeCard === 'technologies' && (
        <div className={`dropdown-card ${isCardVisible ? 'show' : ''}`} ref={cardRef}>
          <h4>Our Tech</h4>
          <div className="dropdown-content">
            <div className="dropdown-batch">
              <h5>Shop Devices</h5>
              <ul>
                <li><Link to="/homepage2?section=Meta%20Quest">Meta Quest</Link></li>
                <li><Link to="/homepage2?section=Ray-Ban%20Meta">Ray-Ban | Meta</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <h5>Explore Apps</h5>
              <ul>
                <li><Link to="/homepage2?section=Facebook">Facebook</Link></li>
                <li><Link to="/homepage2?section=Messenger">Messenger</Link></li>
                <li><Link to="/homepage2?section=Instagram">Instagram</Link></li>
                <li><Link to="/homepage2?section=WhatsApp">WhatsApp</Link></li>
                <li><Link to="/homepage2?section=Meta%20Horizon">Meta Horizon</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <h5>Explore Work Tools</h5>
              <ul>
                <li><Link to="/homepage2?section=Work%20Products%20Overview">Work Products Overview</Link></li>
                <li><Link to="/homepage2?section=Virtual%20Reality%20Headsets">Virtual Reality Headsets</Link></li>
                <li><Link to="/homepage2?section=Meta%20Horizon%20Workrooms">Meta Horizon Workrooms</Link></li>
                <li><Link to="/homepage2?section=Workplace">Workplace</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeCard === 'about' && (
        <div className={`dropdown-card ${isCardVisible ? 'show' : ''}`} ref={cardRef}>
          <h4>About Us</h4>
          <div className="dropdown-content">
            <div className="dropdown-batch">
              <p>The Metaverse</p>
              <ul>
                <li><Link to="/homepage2?section=Who%20We%20Are">Who We Are</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <p>Our Actions</p>
              <ul>
                <li><Link to="/homepage2?section=Our%20Community">Our Community</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <p>News</p>
            </div>
          </div>
        </div>
      )}

      {activeCard === 'build' && (
        <div className={`dropdown-card ${isCardVisible ? 'show' : ''}`} ref={cardRef}>
          <h4>Build With Us</h4>
          <div className="dropdown-content">
            <div className="dropdown-batch">
              <ul>
                <li><Link to="/homepage2?section=Businesses">Businesses</Link></li>
                <li><Link to="/homepage2?section=Creators">Creators</Link></li>
                <li><Link to="/homepage2?section=Developers">Developers</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <ul>
                <li><Link to="/homepage2?section=Careers">Careers</Link></li>
                <li><Link to="/homepage2?section=Investors">Investors</Link></li>
                <li><Link to="/homepage2?section=Media">Media</Link></li>
                <li><Link to="/homepage2?section=Researchers">Researchers</Link></li>
                <li><Link to="/homepage2?section=Engineers">Engineers</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <ul>
                <li><Link to="/homepage2?section=Government,%20Politics%20&%20Advocacy">Government, Politics & Advocacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeCard === 'support' && (
        <div className={`dropdown-card ${isCardVisible ? 'show' : ''}`} ref={cardRef}>
          <h4>Support</h4>
          <div className="dropdown-content">
            <div className="dropdown-batch">
              <h5>Getting Started</h5>
              <ul>
                <li><Link to="/homepage2?section=Find%20a%20Product">Find a Product</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <h5>Meta Quest</h5>
              <ul>
                <li><Link to="/homepage2?section=Meta%20Quest%20Support">Meta Quest Support</Link></li>
                <li><Link to="/homepage2?section=Meta%20Quest%20Warranty">Meta Quest Warranty</Link></li>
                <li><Link to="/homepage2?section=Meta%20Quest%20Safety%20Center">Meta Quest Safety Center</Link></li>
              </ul>
            </div>
            <div className="dropdown-batch">
              <h5>Ray-Ban Meta Smart Glasses</h5>
              <ul>
                <li><Link to="/homepage2?section=Ray-Ban%20Meta%20Support">Ray-Ban Meta Support</Link></li>
                <li><Link to="/homepage2?section=Ray-Ban%20Meta%20Warranty">Ray-Ban Meta Warranty</Link></li>
                <li><Link to="/homepage2?section=Ray-Ban%20Meta%20Safety%20Center">Ray-Ban Meta Safety Center</Link></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarComponent;
