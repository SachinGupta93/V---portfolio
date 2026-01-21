const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {new Date().getFullYear()} Vivek Yandrathi — Crafted with passion by <span>AntiGravity</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
