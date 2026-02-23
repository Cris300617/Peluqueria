import styled from "styled-components"
import logo from "../assets/logo_ayp.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Formulario from "../components/form";
import BarraDeNavegacion from "../components/barra";
import FooterAyP from "../components/footer";

export default function Reserva() {

    return(
        <Container>

            <BarraDeNavegacion/>

            <Hero id="inicio">
                <div className="hero-left">
                    <img src={logo} alt="logo" />
                    <h1>Anyelo & Pía HairStudio</h1>
                    <p>Elegancia y estilo en cada detalle</p>
                </div>

                <Formulario/>
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
    gap: 50px;

    img {
        width: 120px;
    }

    h1 {
        font-size: 1.8rem;
    }

    p {
        font-size: 0.95rem;
    }

    & > * {
        width: 100%;
        max-width: 500px;
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

    & > * {
        max-width: 100%;
    }
}
`
