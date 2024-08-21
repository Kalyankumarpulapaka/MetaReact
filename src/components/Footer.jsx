// src/components/Footer.jsx

import React from 'react';
import '../styles/Footer.css'; // Ensure this CSS file contains any necessary styles
import logo from '../assets/one.png'; 
import log from '../assets/logo1.jpg'; 
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => {
    return (
        <footer className="footer">
            <div className="row">
                <div className="col-md-3">
                    <img src={logo} alt="Logo" className="footer-logo" /> 
                    <img src={log} alt="Logo" className='logo2'/>
                </div>
                <div className="col-md-3">
                    <h5>Virtual Reality</h5>
                    <ul>
                        <li><Link to="/homepage2?section=Shop Meta Quest">Shop Meta Quest</Link></li>
                        <li><Link to="/homepage2?section=Refurbished Meta Quest 2">Refurbished Meta Quest 2</Link></li>
                        <li><Link to="/homepage2?section=VR for Good">VR for Good</Link></li>
                        <li><Link to="/homepage2?section=Forums">Forums</Link></li>
                        <li><Link to="/homepage2?section=Referrals">Referrals</Link></li>
                        <li><Link to="/homepage2?section=Blog">Blog</Link></li>
                        <li><Link to="/homepage2?section=Creators">Creators</Link></li>
                        <li><Link to="/homepage2?section=Download SDKs">Download SDKs</Link></li>
                        <li><Link to="/homepage2?section=Developers">Developers</Link></li>
                        <li><Link to="/homepage2?section=Made for Meta partner program">Made for Meta partner program</Link></li>
                        <li><Link to="/homepage2?section=Meta Quest health & safety information">Meta Quest health & safety information</Link></li>
                        <li><Link to="/homepage2?section=Meta Quest safety center">Meta Quest safety center</Link></li>
                        <li><Link to="/homepage2?section=VR for work">VR for work</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>Smart Glasses</h5>
                    <ul>
                        <li><Link to="/homepage2?section=Shop Ray-Ban Stories">Shop Ray-Ban Stories</Link></li>
                        <li><Link to="/homepage2?section=Privacy information">Privacy information</Link></li>
                        <li><Link to="/homepage2?section=Terms of service">Terms of service</Link></li>
                        <li><Link to="/homepage2?section=Data policy">Data policy</Link></li>
                        <li><Link to="/homepage2?section=Supported countries">Supported countries</Link></li>
                    </ul>
                    <h5>Support</h5>
                    <ul>
                        <li><Link to="/homepage2?section=Shop Help Center">Shop Help Center</Link></li>
                        <li><Link to="/homepage2?section=Order status">Order status</Link></li>
                        <li><Link to="/homepage2?section=Returns">Returns</Link></li>
                        <li><Link to="/homepage2?section=Find a product demo">Find a product demo</Link></li>
                        <li><Link to="/homepage2?section=Legal">Legal</Link></li>
                        <li><Link to="/homepage2?section=Facebook Help Center">Facebook Help Center</Link></li>
                        <li><Link to="/homepage2?section=Messenger Help Center">Messenger Help Center</Link></li>
                        <li><Link to="/homepage2?section=Instagram Help Center">Instagram Help Center</Link></li>
                        <li><Link to="/homepage2?section=WhatsApp Help Center">WhatsApp Help Center</Link></li>
                        <li><Link to="/homepage2?section=Workplace Help Center">Workplace Help Center</Link></li>
                        <li><Link to="/homepage2?section=Meta Quest">Meta Quest</Link></li>
                        <li><Link to="/homepage2?section=Meta Verified">Meta Verified</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5>About Us</h5>
                    <ul className="social-media">
                        <li><Link to="/homepage2?section=About Meta">About Meta</Link></li>
                        <li><Link to="/homepage2?section=Media gallery">Media gallery</Link></li>
                        <li><Link to="/homepage2?section=Brand resources">Brand resources</Link></li>
                        <li><Link to="/homepage2?section=For investors">For investors</Link></li>
                    </ul>
                    <h5>Our Community</h5>
                    <ul className="social-media">
                        <li><Link to="/homepage2?section=Support SMB">Support SMB</Link></li>
                        <li><Link to="/homepage2?section=Giving together">Giving together</Link></li>
                        <li><Link to="/homepage2?section=Social impact">Social impact</Link></li>
                        <li><Link to="/homepage2?section=Business and community growth">Business and community growth</Link></li>
                        <li><Link to="/homepage2?section=VR for Good">VR for Good</Link></li>
                    </ul>
                    <h5>Our Actions</h5>
                    <ul className="social-media">
                        <li><Link to="/homepage2?section=Data and privacy">Data and privacy</Link></li>
                        <li><Link to="/homepage2?section=Safety and expression">Safety and expression</Link></li>
                        <li><Link to="/homepage2?section=Elections">Elections</Link></li>
                        <li><Link to="/homepage2?section=COVID-19 response">COVID-19 response</Link></li>
                        <li><Link to="/homepage2?section=Regulations">Regulations</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom row justify-content-between align-items-center">
                <div className="col-auto left-section">
                    <p className="mb-0">
                        © 2024 Meta |
                        <a href="#"> Community Standards</a> |
                        <a href="#"> Data Policy</a> |
                        <a href="#"> Terms</a> |
                        <a href="#"> Cookie policy</a>
                    </p>
                </div>
                <div className="col-auto right-section">
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
