import styled from "styled-components"
import logo from "../assets/logo_ayp.png"
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../supabase/supabase.config";

export default function Formulario() {
    const [servicio, setServicio] = useState("");
    const [genero, setGenero] = useState("");
    const [profesional, setProfesional] = useState("");
    const [data, setData] = useState("");
    const profesionales = ["Anyelo", "Pía"];
    const serviciosHombre = ["Corte de Pelo", "Lavado de Pelo"]
    const [hora, setHora] = useState("");
    const [nombre, setNombre] = useState("");
    const [dia, setDia] = useState("");
    const serviciosMujer = ["Corte de Pelo", "Color", "botox H Brush", "balayage", "alisado brasil cacau"]
    const horarios = ["09:00","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30", "21:00"]

    const listaServicios =
    genero === "hombre"
        ? serviciosHombre
        : genero === "mujer"
        ? serviciosMujer
        : [];

        useEffect(() => {
            obtenerDatos();
        }, []);
        
        async function obtenerDatos() {
            const { data, error } = await supabase
            .from("Reservas_Clientes")
            .select("*")
            .order("id", { ascending: true }); 
            if (error) {
                console.error("Error al obtener datos:", error);
            } else {
                setData(data);
                }
        }

        async function handleSubmit(e) {
            e.preventDefault();

            const { error } = await supabase
                .from("Reservas_Clientes")
                .insert([
                    {
                        usuario_asignado: profesional,
                        nombre: nombre,
                        servicio: servicio,
                        genero: genero,
                        dia: dia,
                        hora: hora
                    }
                ]);

            if (error) {
                console.error("Error al guardar:", error);
                alert("Error al guardar la reserva");
            } else {
                alert("Reserva guardada con éxito ✅");

                
                setProfesional("");
                setGenero("");
                setServicio("");
                setHora("");
                setNombre("");
                setDia("");

                obtenerDatos(); 
            }
        }

    return(
        <Container>


                <Form onSubmit={handleSubmit}>
                    <h2>Reserva tu Hora</h2>

                    <span>¿Con quién deseas atenderte?</span>
                        <select
                            value={profesional}
                            onChange={(e) => {
                                setProfesional(e.target.value);
                                setGenero("");
                                setServicio("");
                                setHora("");
                            }}
                        >
                            <option value="">Selecciona un profesional</option>
                            {profesionales.map((p, index) => (
                                <option key={index} value={p}>
                                    {p}
                                </option>
                            ))}
                        </select>
                    <span>¿Buscas servicio para hombre o mujer?</span>
                    <div className="gender-buttons">
                        <button
                            type="button"
                            disabled={!profesional || profesional === "Pía"}
                            className={genero === "hombre" ? "active" : ""}
                            onClick={() => {
                                setGenero("hombre");
                                setServicio("");
                                setHora("");
                            }}
                        >
                            Hombre
                        </button>

                        <button
                            type="button"
                            disabled={!profesional}
                            className={genero === "mujer" ? "active" : ""}
                            onClick={() => {
                                setGenero("mujer");
                                setServicio("");
                                setHora("");
                            }}
                        >
                            Mujer
                        </button>
                    </div>
                    
                    <input
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    
                    <select
                        value={servicio}
                        onChange={(e) => setServicio(e.target.value)}
                        disabled={!genero}
                    >
                        <option value="">
                            {genero ? "Selecciona un servicio" : "Primero selecciona Hombre o Mujer"}
                        </option>

                        {listaServicios.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    
                    <input
                        type="date"
                        value={dia}
                        onChange={(e) => setDia(e.target.value)}
                    />

                    <select
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                        disabled={!servicio}
                    >
                        <option value="">
                            {servicio ? "Selecciona una hora" : "Primero selecciona un servicio"}
                        </option>

                        {horarios.map((h, index) => (
                            <option key={index} value={h}>
                                {h}
                            </option>
                        ))}
                    </select>

                    <button
                        type="submit"
                        disabled={!genero || !servicio || !hora || !profesional || !nombre || !dia}
                    >
                        Reservar
                    </button>
                </Form>

        </Container>
    )
}

const Container = styled.div`
    background: #0d0d0d;
    color: white;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
`


const Form = styled.form`
    background: #111;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(212,175,55,0.2);
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 300px;

    h2 {
        color: #d4af37;
        text-align: center;
    }

    input {
        padding: 12px;
        border-radius: 10px;
        border: 1px solid rgba(212,175,55,0.4);
        background: #1a1a1a;
        color: white;
    }

    button {
        padding: 12px;
        border-radius: 10px;
        border: none;
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        font-weight: bold;
        cursor: pointer;
        transition: .3s;
    }

    button:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(212,175,55,0.4);
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
    }

    .gender-buttons {
    display: flex;
    gap: 10px;
    }

    .gender-buttons button {
        flex: 1;
        background: transparent;
        border: 2px solid rgba(212,175,55,0.4);
        color: #d4af37;
        font-weight: 600;
    }

    .gender-buttons button:hover {
        background: rgba(212,175,55,0.1);
    }

    /* Estado activo */
    .gender-buttons button.active {
        background: linear-gradient(45deg, #d4af37, #f7e27b);
        color: black;
        border: none;
    }

    select {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid rgba(212,175,55,0.4);
    background: #1a1a1a;
    color: white;
    }

    select:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`