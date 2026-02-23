import styled from "styled-components"
import logo from "../assets/logo_ayp.png"
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import BarraDeNavegacion from "../components/barra";

export default function FooterAyP() {

    return(
        <Container>

            <Footer>
                <div className="footer-content">

                    <div className="footer-brand">
                        <img src={logo} alt="logo" />
                        <h3>Anyelo & Pía HairStudio</h3>
                        <p>Elegancia y estilo en cada detalle</p>
                    </div>

                    <div className="footer-contact">
                        <h4>Contacto</h4>
                        <a href="https://www.instagram.com/anyeloypiahairstudio/" target="_blank" rel="noreferrer">
                            <Icon icon="mdi:instagram" />
                            Instagram
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                            <Icon icon="mdi:facebook" />
                            Facebook
                        </a>
                        <a href="https://wa.me/56942347537" target="_blank" rel="noreferrer">
                            <Icon icon="mdi:whatsapp" />
                            WhatsApp
                        </a>
                    </div>

                    <div className="footer-location">
                        <h4>Ubicación</h4>
                        <div>
                            <Icon icon="mdi:map-marker" />
                            Vitacura, Santiago, Chile
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    © {new Date().getFullYear()} Anyelo & Pía HairStudio. Todos los derechos reservados.
                </div>
            </Footer>

        </Container>
    )
}

const Container = styled.div`
    background: #0d0d0d;
    color: white;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
`


const Footer = styled.footer`
    background: #0a0a0a;
    border-top: 1px solid rgba(212,175,55,0.2);
    padding: 60px 20px 20px 20px;
    margin-top: 50px;

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 40px;
    }

    h3 {
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 10px;
    }

    h4 {
        margin-bottom: 15px;
        color: #d4af37;
    }

    .footer-brand img {
        width: 60px;
        margin-bottom: 10px;
    }

    .footer-brand p {
        color: #aaa;
        font-size: 0.9rem;
    }

    .footer-contact a {
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        color: #ccc;
        margin-bottom: 10px;
        transition: 0.3s;
    }

    .footer-contact a:hover {
        color: #d4af37;
        transform: translateX(4px);
    }

    .footer-location div {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #ccc;
    }

    .footer-bottom {
        text-align: center;
        margin-top: 40px;
        padding-top: 20px;
        border-top: 1px solid rgba(212,175,55,0.1);
        font-size: 0.85rem;
        color: #777;
    }
`;