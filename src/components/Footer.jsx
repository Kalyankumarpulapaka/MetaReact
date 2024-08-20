
import '../styles/Footer.css'; // Ensure this CSS file contains any necessary styles
import logo from '../assets/one.png'; 
import log from '../assets/logo1.jpg'; // Corrected the import statement

const Footer = () => {
    return (
        <footer style={{ marginTop: '40px', padding: '60px', backgroundColor: '#ffffff', borderTop: '1px solid #ddd' }}>
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} alt="Logo" className="footer-logo" /> 
                    <img src={log} alt="Logo" className='logo2'/>
                </div>
                <div className="col-md-3">
                    <h5>Virtual Reality</h5>
                    <ul>
                        <li>Shop Meta Quest</li>
                        <li>Refurbished Meta Quest 2</li>
                        <li>VR for Good</li>
                        <li>Forums</li>
                        <li>Referrals</li>
                        <li>Blog</li>
                        <li>Creators</li>
                        <li>Download SDKs</li>
                        <li>Developers</li>
                        <li>Made for Meta partner program</li>
                        <li>Meta Quest health & safety information</li>
                        <li>Meta Quest safety center</li>
                        <li>VR for work</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Smart Glasses</h5>
                    <ul>
                        <li>Shop Ray-Ban Stories</li>
                        <li>Privacy information</li>
                        <li>Terms of service</li>
                        <li>Data policy</li>
                        <li>Supported countries</li>
                    </ul>
                    <h5>Support</h5>
                    <ul>
                        <li>Shop Help Center</li>
                        <li>Order status</li>
                        <li>Returns</li>
                        <li>Find a product demo</li>
                        <li>Legal</li>
                        <li>Facebook Help Center</li>
                        <li>Messenger Help Center</li>
                        <li>Instagram Help Center</li>
                        <li>WhatsApp Help Center</li>
                        <li>Workplace Help Center</li>
                        <li>Meta Quest</li>
                        <li>Meta Verified</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>About Us</h5>
                    <ul className="social-media">
                        <li>About Meta</li>
                        <li>Media gallery</li>
                        <li>Brand resources</li>
                        <li>For investors</li>
                    </ul>
                    <h5>Our Community</h5>
                    <ul className="social-media">
                        <li>Support SMB</li>
                        <li>Giving together</li>
                        <li>Social impact</li>
                        <li>Business and community growth</li>
                        <li>VR for Good</li>
                    </ul>
                    <h5>Our Actions</h5>
                    <ul className="social-media">
                        <li>Data and privacy</li>
                        <li>Safety and expression</li>
                        <li>Elections</li>
                        <li>COVID-19 response</li>
                        <li>Regulations</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom row">
                <div className="col-md-6 left-section">
                    <p>
                        © 2024 Meta | 
                        <a href="#"> Community Standards</a> | 
                        <a href="#"> Data Policy</a> | 
                        <a href="#"> Terms</a> | 
                        <a href="#"> Cookie policy</a>
                    </p>
                </div>
                <div className="col-md-6 right-section">
                    <div className="language-dropdown">
                        <select className="form-select">
                            <option>United States (English)</option>
                            <option>Español</option>
                            <option>Français</option>
                            <option>Deutsch</option>
                            <option>中文</option>
                            <option>日本語</option>
                            {/* Add more language options as needed */}
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
