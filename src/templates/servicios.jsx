import styled from "styled-components"
import bb1 from "../assets/babylights_antes.png"
import bb2 from "../assets/babylights_despues.png"
import btx1 from "../assets/botox_despues.png"
import btx2 from "../assets/botox_antes.png"
import { NavLink } from "react-router-dom";
import BarraDeNavegacion from "../components/barra";
import FooterAyP from "../components/footer";
import { useState } from "react";

export default function Servicios() {
    const [bbAntes, setBbAntes] = useState(true);
    const [btxAntes, setBtxAntes] = useState(true);

    return(
        <Container>

            <BarraDeNavegacion/>

            <Services>
                <section>
                    <h2>Algunos de nuestros trabajos</h2>
                    <div className="intro">
                        <p>
                            Con más de <strong>20 años de experiencia</strong> en el rubro de la belleza y el cuidado capilar, 
                            en <strong>Anyelo & Pía HairStudio</strong> nos dedicamos a realzar tu estilo con técnica, 
                            pasión y dedicación.
                        </p>

                        <p>
                            Trabajamos con productos de alta calidad y las últimas tendencias en color, corte y tratamientos, 
                            ofreciendo una experiencia personalizada donde cada detalle cuenta.
                        </p>

                        <p className="highlight">
                            No solo transformamos tu cabello, transformamos tu confianza.
                        </p>
                    </div>

                    <div className="service-card">
                        <div className="service-content">
                            <div className="text">
                                <div className="service-title">Babylights</div>

                                <p>
                                    Técnica de coloración con mechas ultra finas que aportan 
                                    luminosidad natural, dimensión y movimiento sin generar 
                                    contrastes marcados.
                                </p>

                                <button 
                                    className="toggle-btn"
                                    onClick={() => setBbAntes(!bbAntes)}
                                >
                                    Ver {bbAntes ? "Antes" : "Después"}
                                </button>
                            </div>

                            <div className="image-wrapper">
                                <img 
                                    src={bbAntes ? bb2 : bb1} 
                                    alt="Babylights resultado"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="service-card">
                        <div className="service-content">
                            <div className="text">
                                <div className="service-title">Botox Capilar</div>

                                <p>
                                    Tratamiento de hidratación profunda y reparación del cabello que ayuda a devolverle brillo, suavidad y vitalidad.
                                </p>

                                <button 
                                    className="toggle-btn"
                                    onClick={() => setBtxAntes(!btxAntes)}
                                >
                                    Ver {btxAntes ? "Antes" : "Después"}
                                </button>
                            </div>

                            <div className="image-wrapper">
                                <img 
                                    src={btxAntes ? btx1 : btx2} 
                                    alt="Babylights resultado"
                                />
                            </div>
                        </div>
                    </div>

                </section>
            </Services>




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

const Services = styled.section`
    padding: 140px 20px 100px 20px;
    min-height: 100vh;
    background: radial-gradient(circle at top, #1a1a1a, #000);

    section {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 90px;
    }

    h2 {
        text-align: center;
        font-size: 2.2rem;
        margin-bottom: 20px;
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .intro {
        max-width: 800px;
        margin: 0 auto 40px auto;
        text-align: center;
        color: #ccc;
        line-height: 1.7;
        font-size: 1rem;
    }

    .intro strong {
        color: #d4af37;
    }

    .intro .highlight {
        margin-top: 15px;
        font-weight: 600;
        color: #d4af37;
    }

    .service-card {
        background: #111;
        padding: 50px;
        border-radius: 25px;
        box-shadow: 0 0 25px rgba(212,175,55,0.15);
        transition: 0.4s ease;
    }

    .service-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 0 45px rgba(212,175,55,0.3);
    }

    .service-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 60px;
        flex-wrap: wrap;
    }

    .text {
        flex: 1;
        min-width: 280px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .service-title {
        font-size: 1.6rem;
        font-weight: 600;
        color: #d4af37;
    }

    .text p {
        color: #bbb;
        line-height: 1.6;
    }

    .image-wrapper {
        width: 300px;
        height: 380px;
        overflow: hidden;
        border-radius: 18px;
        flex-shrink: 0;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 18px;
        transition: 0.5s ease;
    }

    .image-wrapper img:hover {
        transform: scale(1.05);
    }

    .toggle-btn {
        width: fit-content;
        padding: 10px 28px;
        border-radius: 30px;
        border: none;
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s ease;
    }

    .toggle-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(212,175,55,0.4);
    }

    /* ========================= */
/* ====== RESPONSIVE ====== */
/* ========================= */

@media (max-width: 1024px) {

    section {
        gap: 70px;
    }

    .service-content {
        gap: 40px;
    }

    .service-card {
        padding: 40px;
    }

    .image-wrapper {
        width: 260px;
        height: 340px;
    }
}

@media (max-width: 768px) {

    padding: 120px 20px 80px 20px;

    h2 {
        font-size: 1.8rem;
    }

    .intro {
        font-size: 0.95rem;
        padding: 0 10px;
    }

    .service-content {
        flex-direction: column;
        text-align: center;
    }

    .text {
        align-items: center;
    }

    .toggle-btn {
        width: 100%;
        max-width: 260px;
    }

    .image-wrapper {
        width: 100%;
        max-width: 320px;
        height: 380px;
    }
}

@media (max-width: 480px) {

    padding: 110px 15px 70px 15px;

    h2 {
        font-size: 1.5rem;
    }

    .service-card {
        padding: 30px 20px;
        border-radius: 18px;
    }

    .service-title {
        font-size: 1.3rem;
    }

    .text p {
        font-size: 0.9rem;
    }

    .image-wrapper {
        height: 320px;
    }
}
`;
