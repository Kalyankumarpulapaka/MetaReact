import React from 'react';
import '../styles/Footer.css'; // Ensure this CSS file contains any necessary styles

const Newfooter = () => {
    return (
        <footer className="footer">
           
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

export default Newfooter;
