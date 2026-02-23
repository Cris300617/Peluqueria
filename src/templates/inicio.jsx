import styled from "styled-components"
import logo from "../assets/logo_ayp.png"
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import BarraDeNavegacion from "../components/barra";
import FooterAyP from "../components/footer";

export default function Peluqueria() {

    return(
        <Container>

            <BarraDeNavegacion/>

            <Hero id="inicio">
                <div className="hero-left">
                    <img src={logo} alt="logo" />
                    <h1>Anyelo & Pía HairStudio</h1>
                    <p>Elegancia y estilo en cada detalle</p>
                    <div className="hero-buttons">
                        <NavLink to="/reserva" className="btn-primary">
                            Reservar Hora
                        </NavLink>

                        <NavLink to="/servicios" className="btn-secondary">
                            Ver Servicios
                        </NavLink>
                    </div>
                    
                </div>

                <div className="precios">
                    <div className="price-card">
                        <h3>Nuestros Servicios y  Valores</h3>

                        <table>
                            <tbody>
                                <tr>
                                    <td>Corte de Pelo (Hombre)</td>
                                    <td>$20.000</td>
                                </tr>
                                <tr>
                                    <td>Corte de Pelo (Mujer)</td>
                                    <td>$25.000</td>
                                </tr>
                                <tr>
                                    <td>Babylights</td>
                                    <td>$120.000</td>
                                </tr>
                                <tr>
                                    <td>Botox Capilar</td>
                                    <td>$100.000</td>
                                </tr>
                                <tr>
                                    <td>Brasil Cacao</td>
                                    <td>$90.000</td>
                                </tr>
                                <tr>
                                    <td>Balayage</td>
                                    <td>$150.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Hero>

            <FooterAyP/>

        </Container>
    )
}

const Container = styled.div`
    background: #0d0d0d;
    color: white;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
`



const Hero = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 140px 20px 50px 20px;  
    background: radial-gradient(circle at top, #1a1a1a, #000);
    flex-wrap: wrap;

    .hero-left {
        max-width: 400px;
        text-align: center;
    }

    img {
        width: 150px;
        margin-bottom: 20px;
    }

    h1 {
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .hero-buttons {
    margin-top: 35px;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    }

    .hero-buttons a {
        text-decoration: none;
        padding: 12px 28px;
        border-radius: 30px;
        font-weight: 600;
        transition: 0.3s ease;
    }

    .btn-primary {
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        color: black;
    }

    .btn-primary:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 20px rgba(212,175,55,0.3);
    }

    .btn-secondary {
        border: 2px solid #d4af37;
        color: #d4af37;
    }

    .btn-secondary:hover {
        background: #d4af37;
        color: black;
    }

    .precios {
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .price-card {
        background: rgba(17,17,17,0.9);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(212,175,55,0.25);
        padding: 40px 35px;
        border-radius: 25px;
        box-shadow: 0 0 35px rgba(212,175,55,0.15);
        min-width: 320px;
        transition: 0.4s ease;
    }

    .price-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 55px rgba(212,175,55,0.35);
    }

    .price-card h3 {
        text-align: center;
        margin-bottom: 25px;
        font-size: 1.4rem;
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .price-card table {
        width: 100%;
        border-collapse: collapse;
    }

    .price-card tr {
        border-bottom: 1px solid rgba(212,175,55,0.15);
    }

    .price-card tr:last-child {
        border-bottom: none;
    }

    .price-card td {
        padding: 14px 0;
        font-size: 0.95rem;
    }

    .price-card td:last-child {
        text-align: right;
        font-weight: 600;
        color: #d4af37;
    }

@media (max-width: 1024px) {
    justify-content: center;
    gap: 60px;

    .hero-left {
        max-width: 100%;
    }
}

@media (max-width: 768px) {
    flex-direction: column;
    padding: 120px 20px 60px 20px;
    text-align: center;

    img {
        width: 120px;
    }

    h1 {
        font-size: 1.8rem;
    }

    .hero-buttons {
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    .hero-buttons a {
        width: 100%;
        text-align: center;
    }

    .precios {
        width: 100%;
    }

    .price-card {
        width: 100%;
        padding: 30px 20px;
    }

    .price-card td {
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    padding: 110px 15px 50px 15px;

    h1 {
        font-size: 1.5rem;
    }

    p {
        font-size: 0.9rem;
    }

    .price-card {
        padding: 25px 18px;
        border-radius: 18px;
    }

    .price-card td {
        font-size: 0.85rem;
    }
}
`