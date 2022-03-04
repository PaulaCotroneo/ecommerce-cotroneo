
export const Footer = () => {
  
  return (
    <footer className="footer">
        <div className="footer__image">
            <div className="container">
                <div className="footer__content">
                        <nav className="footer__menu">
                            <h2 className="menu-title">Contactanos!</h2>
                            <p><i className="fab fa-whatsapp"></i> 11-6005-2520</p>
                            <p><i className="fas fa-paper-plane"></i> fermin.petshop@gmail.com</p>
                            <a href="https://www.instagram.com/fermin.petshop/"><i className="fab fa-instagram"></i> fermin.petshop</a>
                            <a href="https://es-la.facebook.com/fermin.petshop/"><i className="fab fa-facebook"></i> fermin.petshop</a>
                        </nav> 
                </div> 
            </div>
        </div>
        <div className="footer__bar">
            <p className="footer__rights center">© 2022 - Todos los derechos reservados.</p> 
        </div>
    </footer>
  )

}

;