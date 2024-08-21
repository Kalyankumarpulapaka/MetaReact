import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { BsSearch, BsCart } from 'react-icons/bs';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import logo from '../assets/one.png';
import '../styles/Navbar2.css'; // Ensure CSS path is correct

const Navbar2 = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef(null);
  const location = useLocation(); // Use useLocation to get the current path

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
      <Navbar expand="lg" className="navbar2 bg-body-secondary">
        <Navbar.Brand
          as={Link}
          to={location.pathname === '/' ? '/homepage2' : '/'}
        >
          <img src={logo} alt="Logo" className="navbar-logo2" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom2" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav2 me-auto">
            {['Meta Quest', 'Ray-Ban Meta', 'Apps and games', 'About Meta', 'Support'].map((item) => (
              <Nav.Link
                key={item}
                className="nav-link2"
                onClick={() => toggleCard(item)}
                onMouseEnter={() => toggleCard(item)}
                onMouseLeave={() => {
                  if (activeCard !== item) {
                    setIsCardVisible(false);
                  }
                }}
              >
                {item}
                {activeCard === item ? <BiCaretUp className="caret2 caret-up" /> : <BiCaretDown className="caret2 caret-down" />}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="nav-support-search2">
            <Form className="d-flex search-bar2">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                <BsSearch />
              </button>
            </Form>
            <a href="#cart" className="cart-icon2">
              <BsCart />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {activeCard && (
        <div className={`dropdown-card2 ${isCardVisible ? 'show' : ''}`} ref={cardRef}>
          {activeCard === 'Meta Quest' && (
            <>
              <h4>Meta Quest</h4>
              <div className="dropdown-content2">
                <div className="dropdown-column">
                  <ul>
                    <li>Meta Quest overview</li>
                    <li>Meta Quest 3</li>
                    <li>Meta Quest 2</li>
                    <li>Meta Quest Pro</li>
                    <li>Compare devices</li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <ul>
                    <li>Accessories</li>
                    <li>Meta Quest: Play now, pay later</li>
                    <li>Meta Warranty Plus</li>
                    <li>Gift cards</li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {activeCard === 'Ray-Ban Meta' && (
            <>
              <h4>Ray-Ban Meta</h4>
              <div className="dropdown-content2">
                <div className="dropdown-column">
                  <ul>
                    <li>Shop all</li>
                    <li>Social</li>
                    <li>Gaming</li>
                    <li>Fitness</li>
                  </ul>
                </div>
    
              </div>
            </>
          )}
          {activeCard === 'Apps and games' && (
            <>
              <h4>Apps and Games</h4>
              <div className="dropdown-content2">
                <div className="dropdown-column">
                  <ul>
                    <li>Shop all</li>
                    <li>Social</li>
                    <li>Gaming</li>
                    <li>Fitness</li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <ul>
                    <li>Entertainment</li>
                    <li>Productivity</li>
                    <li>Mixed reality</li>
                    <li>Meta Quest+</li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {activeCard === 'About Meta' && (
            <>
              <h4>About Meta</h4>
              <div className="dropdown-content2">
                <div className="dropdown-column">
                  <ul>
                    <li>Company Overview</li>
                    <li>Leadership Team</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Investor Relations</li>
                  </ul>
                </div>
                <div className="dropdown-column">
                  <ul>
                    <li>Social Impact</li>
                    <li>Privacy and Data</li>
                    <li>Community Standards</li>
                    <li>Ethics and Compliance</li>
                    <li>Legal</li>
                  </ul>
                </div>
              </div>
            </>
          )}
          {activeCard === 'Support' && (
            <>
              <h4>Support</h4>
              <div className="dropdown-content2">
                <div className="dropdown-column col-1">
                  <ul>
                    <li>Store and Device Help Centers</li>
                    <li>Find order</li>
                    <li>Meta Quest and Quest Pro</li>
                    <li>Meta Portal</li>
                    <li>Smart Glasses</li>
                  </ul>
                </div>
                <div className="dropdown-column col-2">
                  <ul>
                    <li>Meta Help Center</li>
                    <li>Accounts Center</li>
                    <li>Meta Pay</li>
                    <li>Policies</li>
                    <li>Connected Experiences</li>
                  </ul>
                </div>
                <div className="dropdown-column col-3">
                  <ul>
                    <li>App Help Centers</li>
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

export default Navbar2;
