import styled from "styled-components"
import logo from "../assets/logo_ayp.png"
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function BarraDeNavegacion() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
        <Container>

            <Navbar>
                <NavContent>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                        <span>A&P</span>
                    </div>

                    <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                        <Icon icon={menuOpen ? "mdi:close" : "mdi:menu"} width="28" />
                    </div>

                    <div className={`links ${menuOpen ? "active" : ""}`}>
                        <NavLink to="/" onClick={() => setMenuOpen(false)}>Inicio</NavLink>
                        <NavLink to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</NavLink>
                        <NavLink to="/reserva" onClick={() => setMenuOpen(false)}>Reservar</NavLink>
                    </div>
                </NavContent>
            </Navbar>

        </Container>
    )
}

const Container = styled.div`
    background: #0d0d0d;
    color: white;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
`

const Navbar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: rgba(10,10,10,0.95);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid rgba(212,175,55,0.25);
    z-index: 1000;
`

const NavContent = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 45px;
        }

        span {
            font-size: 1.3rem;
            font-weight: 600;
            background: linear-gradient(45deg, #d4af37, #f7e27b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    .links {
        display: flex;
        gap: 50px;
    }

    .links a {
        text-decoration: none;
        color: white;
        font-size: 0.95rem;
        font-weight: 500;
        position: relative;
        transition: 0.3s;
    }

    .links a::after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        transition: 0.3s;
    }

    .links a:hover::after {
        width: 100%;
    }

    .links a.active {
        color: #d4af37;
    }


.menu-icon {
    display: none;
    cursor: pointer;
    color: #d4af37;
}

@media (max-width: 1024px) {
    padding: 0 25px;
}

@media (max-width: 768px) {

    .menu-icon {
        display: block;
        z-index: 1100;
    }

    .links {
        position: absolute;
        top: 80px;
        right: 0;
        width: 100%;
        background: rgba(10,10,10,0.98);
        backdrop-filter: blur(10px);
        flex-direction: column;
        align-items: center;
        gap: 30px;
        padding: 40px 0;
        transform: translateY(-120%);
        transition: 0.4s ease;
        border-bottom: 1px solid rgba(212,175,55,0.25);
    }

    .links.active {
        transform: translateY(0);
    }

    .links a {
        font-size: 1.1rem;
    }
}
`
