

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>Clothify</h2>
                    <p>Style that speaks.</p>
                </div>
                
            </div>
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Clothify. All rights reserved.</p>
            </div>

            <style>{`
                .footer {
                    background-color: #f8f8f8;
                    color: #333;
                    padding: 2rem 1rem;
                    text-align: center;
                }
                .footer-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                }
                .footer-brand h2 {
                    font-size: 1.5rem;
                    color: #e91e63;
                    margin: 0;
                }
                .footer-brand p {
                    margin: 0;
                    font-size: 0.9rem;
                    color: #777;
                }
                
            `}</style>
        </footer>
    );
};

export default Footer;
