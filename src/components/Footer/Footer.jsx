import React from 'react'
import './index.css'
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p className="footer-text">© {new Date().getFullYear()} Interview Insights. All rights reserved.</p>
                <div className="footer-links">
                    <a href="/about" className="footer-link">About Us</a>
                    <a href="/contact" className="footer-link">Contact</a>
                    <a href="/privacy" className="footer-link">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}
