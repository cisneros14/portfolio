import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Typed from "typed.js";
import Nav from "./Nav.js";
import Tooltip from "./Tooltip.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Overlay } from "./Overlay.tsx";


function App() {
    AOS.init();

    const [orbs, setOrbs] = useState([
        <div className="orb" key={0} style={{ "--Color5": "#8B48D7" } as React.CSSProperties} onClick={() =>
            changeColors("#8B48D7", 0)}
        ></div>,
    ]);
    const [color, setColor] = useState("#ec6e0d");
    const [activeOrb, setActiveOrb] = useState<number | null>(null);
    const typedRef = useRef(null);

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    };

    const duplicateOrbs = () => {
        if (orbs.length >= 5) {

            setOrbs([
                <div className="orb" key={0} style={{ "--Color5": color } as React.CSSProperties} onClick={() =>
                    changeColors(color, 0)}
                ></div>,
            ]);
        } else {
            const newOrbIndex = orbs.length;
            setOrbs([
                ...orbs,
                <div className={`orb ${newOrbIndex === activeOrb ? "active" : ""}`} key={newOrbIndex} style={{
                    "--Color5": color
                } as React.CSSProperties} onClick={() => changeColors(color, newOrbIndex)}
                ></div>,
            ]);
        }
    };

    const changeColors = (color: string, orbIndex: number) => {
        setActiveOrb(orbIndex);

        document.documentElement.style.setProperty("--Color5", color);
    };

    useEffect(() => {
        const options = {
            strings: [
                "Bootstrap",
                "React",
                "Web Services",
                "Wordpress",
                "JavaScript",
                "Sass",
                "HTML",
                "CSS",
                "APIs",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };

        if (typedRef.current) {
            const typed = new Typed(typedRef.current, options);

            return () => {
                typed.destroy();
            };
        }
    }, []);

    window.addEventListener("load", () => {
        setTimeout(() => {
            const sunsetElement = document.querySelector(".sunset");
            const sunset2Element = document.querySelector(".sunset2");

            if (sunsetElement) {
                sunsetElement.classList.add("sunset-visible");
            }

            if (sunset2Element) {
                sunset2Element.classList.add("sunset-visible");
            }
        }, 300);
    });



    return (
        <>

            <div data-bs-spy="scroll" data-bs-target="#ulNav1" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example" tabIndex={0}>

                <Nav />
                <div data-aos="fade-up" data-aos-delay="1000"
                    className="position-fixed bottom-0 cont_fijo_izquierdo texto_color_blanco fs-5 d-none d-lg-flex flex-column gap-4">
                    <a href="https://github.com/cisneros14" target="_blank" rel="noopener noreferrer" className="bi bi-github"></a>
                    <a href="https://wa.me/593939595776" target="_blank" rel="noopener noreferrer" className="bi bi-whatsapp"></a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin"></a>
                    <div className="lineaFija mx-auto"></div>
                </div>
                <div data-aos="fade-left" data-aos-delay="800"
                    className="p-1 py-3 rounded-4 shadow border border-2 d-none d-lg-flex flex-column variacionColores z-3 ">
                    <div className="tooltipPaleta">
                        <Tooltip text={<div className="fs-7">
                            <p className="">
                                <strong>What is This? (Color Contrast)</strong>
                            </p>
                            <ul className="mb-0">
                                <li>Select a color from the palette.</li>
                                <li>Click the "+" button to create an orb.</li>
                                <li>Click on an orb to apply its color to the theme.</li>
                            </ul>
                        </div>}
                        >
                            <i className="bi bi-question-circle-fill text-white" style={{ fontSize: "22px", cursor: "pointer" }}></i>
                        </Tooltip>

                    </div>
                    <div className="p-2 d-flex gap-3 flex-column contOrbes mb-5 pb-5 border-bottom">
                        {orbs}
                    </div>

                    <div className="d-flex flex-column contInputColores gap-2">
                        <input type="color" value={color} onChange={handleColorChange} className="h-auto" />
                        <button className="btn btn-light" onClick={duplicateOrbs}>
                            <i className="bi bi-plus-lg"></i>
                        </button>
                    </div>
                </div>
                <header id="header1" className="App-header ">
                    <div className="sunset"></div>
                    <div className="sunset2"></div>

                    <div className="container containerHeader d-flex justify-content-center align-items-center flex-column">

                        <div data-aos="fade-up" className="w-100 h-100 px-3 d-flex flex-column cont2Header">

                            <h3 className="textoDinamico">
                                Front-end specialist{" "}
                                <span className="ms-2 spanType fw-light" id="element" ref={typedRef}></span>
                            </h3>

                            <div className="carlos">
                                <h1 className="border-bottom">
                                    CARLOS{" "}
                                    <span className="fw-light text-white-50">CISNEROS</span>
                                </h1>
                                <p className="py-2 py-lg-4 text-justity">
                                    Passionate about web development since I discovered how amazing it is to build things for the Internet.
                                </p>
                            </div>
                            <div className="d-flex gap-3 justify-content-center justify-content-lg-start">

                                <div className="btnEfecto w-100">
                                    <div className="cuadradoBtn"></div>
                                    <a href="#seccion1" className="btn btn-primary border w-100">See projects</a>
                                </div>
                                <div className="btnEfecto w-100">
                                    <div className="cuadradoBtn"></div>
                                    <a href="#seccion3" className="btn btn-primary border w-100">Contact</a>
                                </div>

                            </div>



                        </div>

                    </div>
                </header>

                <section id="seccion0" className="">
                    <div data-aos="fade-up" data-aos-delay="200" className="container containerSeccion0  px-4  "
                        id="custom-cards">


                        <div style={{ maxWidth: '600px' }} className="contTituloSeccion0 mb-5 d-flex justify-content-center align-items-center mx-auto">

                            <hr className="flex-grow-1 border-white me-3" />
                            <h5 className="text-center latestTitulo fs-2 fw-light">
                                <span className="texto_color_variable fs-4 fuente">02.</span>{" "}
                                About <span className="fw-light text-white-50">Me</span>
                            </h5>
                            <hr className="flex-grow-1 border-white ms-3" />
                        </div>

                        <div className="row rowAbout">

                            <div className="col-12 col-lg-6">
                                <div className="text-justity d-flex flex-column col colAboutRelative p-lg-3">
                                    <div className="d-flex flex-column">
                                        <span className="spanType fw-light mb-3">Hi! my name is Carlos </span>
                                        <p>
                                            I’m a frontend web developer with over 5 years of experience creating
                                            modern, functional, and responsive web interfaces.
                                        </p>
                                    </div>
                                    <p className="pFlotante p-4 rounded-3 shadow">
                                        Focused on delivering <span className="spanType">optimized and efficient user experiences </span>
                                        with a strong emphasis on code quality and usability. Extensive
                                        experience in API integration and responsive design solutions to
                                        improve mobile experiences.
                                    </p>
                                    <div className="d-flex mt-4 justify-content-evenly mb-5 mb-lg-0">
                                        <ul className="tecnologias list-unstyled text-white">
                                            <li><i className="bi bi-caret-right-fill me-3"></i> HTML</li>
                                            <li><i className="bi bi-caret-right-fill me-3"></i> CSS</li>
                                            <li><i className="bi bi-caret-right-fill me-3"></i> JavaScript</li>
                                            <li><i className="bi bi-caret-right-fill me-3"></i> React</li>
                                            <li><i className="bi bi-caret-right-fill me-3"></i> Bootstrap</li>

                                        </ul>
                                        <ul className="tecnologias list-unstyled text-white">

                                            <li><i className="bi bi-caret-right-fill me-3"></i> TypeScript</li>
                                            <li><i className="bi bi-caret-right-fill me-3"></i> Vite</li>
                                            <li><i className="bi bi-caret-right-fill me-3"></i> Git</li>
                                            <li><i className="bi bi-caret-right-fill me-3"></i> Apis</li>
                                            <li><i className="bi bi-caret-right-fill me-3"></i> WordPress</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-12 col-lg-6 border-2 d-flex">
                                <img className="rounded-1 imgRetrato w-100 mx-auto" src="/imgs/retrato.jpeg" alt="Retrato" />
                            </div>
                        </div>

                    </div>
                </section>
                <section id="seccion1" className="mb-5">
                    <div data-aos="fade-up" data-aos-delay="200" className="container containerCarousel px-4  "
                        id="custom-cards">

                        <div style={{ maxWidth: '600px' }} className="contTituloSeccion0 mb-5 d-flex justify-content-center align-items-center mx-auto">

                            <hr className="flex-grow-1 border-white me-3" />
                            <h5 className="text-center latestTitulo fs-3 fw-light">
                                <span className="texto_color_variable fs-4 fuente">03.</span>{" "}
                                Latest <span className="fw-light text-white-50">Projects</span>
                            </h5>
                            <hr className="flex-grow-1 border-white ms-3" />
                        </div>

                        <div id="carouselExample" className="carousel slide position-relative pb-5 d-none d-lg-block"
                            data-bs-ride="carousel">
                            <div className="carousel-inner position-relative">
                                <div className="lineaCarou border rounded-pill"></div>
                                <div className="carousel-item active border-0 px-lg-3">
                                    <div className="row align-items-stretch g-4 py-0">
                                        <div className="col">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-4 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-6 text-nowrap text-nowrap">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://clinicadentalmx.com/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-4 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="https://clinicadentalmx.com/imgs/logoBlanco.png"></img>
                                                <h6 className="fs-6 text-nowrap">Clinica Dental MX</h6>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-4 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-6 text-nowrap">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="carousel-item border-0 px-lg-3">
                                    <div className="row align-items-stretch g-4 py-0">
                                        <div className="col">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-4 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-6 text-nowrap">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-4 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-6 text-nowrap">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-4 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-6 text-nowrap">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            {/* <div className="controlesCarousel position-absolute bg-danger bottom-0 z-1 w-100">
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div> */}
                        </div>

                        {/* <div id="carouselExample2"
                            className="carousel carousel2 slide position-relative pb-5 d-block d-lg-none"
                            data-bs-ride="carousel">
                            <div className="carousel-inner position-relative">
                                <div className="lineaCarou border rounded-pill"></div>
                                <div className="carousel-item active border-0 px-lg-3">
                                    <div className="row align-items-stretch g-2 py-0">
                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item border-0 px-lg-3">
                                    <div className="row align-items-stretch g-2 py-0">

                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item border-0 px-lg-3">
                                    <div className="row align-items-stretch g-2 py-0">

                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="controlesCarousel position-absolute bg-danger bottom-0 z-1 w-100">
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </section>
                <section id="seccionTemplates" className="mb-5">
                    <div data-aos="fade-up" data-aos-delay="200" className="container containerCarousel px-4  "
                        id="custom-cards">

                        <div style={{ maxWidth: '600px' }} className="contTituloSeccion0 mb-4 d-flex justify-content-center align-items-center mx-auto">

                            <hr className="flex-grow-1 border-white me-3" />
                            <h5 className="text-center latestTitulo fs-3 fw-light">
                                <span className="texto_color_variable fs-4 fuente">04.</span>{" "}
                                Some <span className="fw-light text-white-50">Templates</span>
                            </h5>
                            <hr className="flex-grow-1 border-white ms-3" />
                        </div>
                            <p className="mb-5 text-center fs-7">These are some templates developed with Bootstrap 5 and optimized for efficient API consumption. Every detail of these solutions is designed to deliver modern, scalable interfaces, reflecting the quality-focused and performance-driven approach I apply in my frontend development projects.</p>

                        <div id="carouselTemplates" data-bs-ride="true" className="carousel slide position-relative pb-5 d-none d-lg-block">
                            <div className="carousel-inner position-relative carousel-contain">
                                <div className="lineaCarou border rounded-pill"></div>
                                <div className="carousel-item active border-0 px-lg-3">
                                    <div className="row align-items-stretch g-4 py-0">
                                        <div className="col">
                                            <a href='https://template1.propeldesign.org/' className="card bg-2 shadow" target="_blank" rel="noopener noreferrer"> 
                                                <img src="/imgs/p1.png" className="w-100 card-img-top" alt="..."/>
                                                    <div className="card-body d-flex flex-column">
                                                        <h5 className="card-title fs-6 mt-2">Services Template</h5>
                                                        <hr className="my-1"/>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="https://template1.propeldesign.org/" className="btn btn-primary w-100 border mt-auto btn-sm">Live Demo</a>
                                                    </div>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href='https://template2.propeldesign.org/' className="card bg-2 shadow" target="_blank" rel="noopener noreferrer"> 
                                                <img src="/imgs/p2.png" className="w-100 card-img-top" alt="..."/>
                                                    <div className="card-body d-flex flex-column">
                                                        <h5 className="card-title fs-6 mt-2">Panel Template</h5>
                                                        <hr className="my-1"/>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="https://template2.propeldesign.org/" className="btn btn-primary w-100 border mt-auto btn-sm">Live Demo</a>
                                                    </div>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href='https://template3.propeldesign.org/' className="card bg-2 shadow" target="_blank" rel="noopener noreferrer"> 
                                            <img src="/imgs/p3.png" className="w-100 card-img-top" alt="..."/>
                                            <div className="card-body d-flex flex-column">
                                                        <h5 className="card-title fs-6 mt-2">Services 2 Template</h5>
                                                        <hr className="my-1"/>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="https://template3.propeldesign.org/" className="btn btn-primary w-100 border mt-auto btn-sm">Live Demo</a>
                                                    </div>
                                            </a>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="carousel-item border-0 px-lg-3">
                                    <div className="row align-items-stretch g-4 py-0">
                                    <div className="col">
                                            <a href='https://template4.propeldesign.org/' className="card bg-2 shadow" target="_blank" rel="noopener noreferrer"> 
                                            <img src="/imgs/p4.png" className="w-100 card-img-top" alt="..."/>
                                                    <div className="card-body d-flex flex-column">
                                                        <h5 className="card-title fs-6 mt-2">General Template</h5>
                                                        <hr className="my-1"/>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="https://template4.propeldesign.org/" className="btn btn-primary w-100 border mt-auto btn-sm">Live Demo</a>
                                                    </div>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href='https://template5.propeldesign.org/' className="card bg-2 shadow" target="_blank" rel="noopener noreferrer"> 
                                            <img src="/imgs/p5.png" className="w-100 card-img-top" alt="..."/>
                                                    <div className="card-body d-flex flex-column">
                                                        <h5 className="card-title fs-6 mt-2">Medical Template</h5>
                                                        <hr className="my-1"/>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="https://template5.propeldesign.org/" className="btn btn-primary w-100 border mt-auto btn-sm">Live Demo</a>
                                                    </div>
                                            </a>
                                        </div>
                                        <div className="col">
                                            <a href='https://template6.propeldesign.org/' className="card bg-2 shadow" target="_blank" rel="noopener noreferrer"> 
                                            <img src="/imgs/p6.png" className="w-100 card-img-top" alt="..."/>
                                                    <div className="card-body d-flex flex-column">
                                                        <h5 className="card-title fs-6 mt-2">Gallery Template</h5>
                                                        <hr className="my-1"/>
                                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                        <a href="https://template6.propeldesign.org/" className="btn btn-primary w-100 border mt-auto btn-sm">Live Demo</a>
                                                    </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="controlesCarousel position-absolute bg-danger bottom-0 z-1 w-100">
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselTemplates"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselTemplates"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        {/* <div id="carouselExample2"
                            className="carousel carousel2 slide position-relative pb-5 d-block d-lg-none"
                            data-bs-ride="carousel">
                            <div className="carousel-inner position-relative">
                                <div className="lineaCarou border rounded-pill"></div>
                                <div className="carousel-item active border-0 px-lg-3">
                                    <div className="row align-items-stretch g-2 py-0">
                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                                <div className="carousel-item border-0 px-lg-3">
                                    <div className="row align-items-stretch g-2 py-0">

                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item border-0 px-lg-3">
                                    <div className="row align-items-stretch g-2 py-0">

                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                        <div className="col-6">
                                            <a href="https://naturenutrition.shop/" target="_blank" rel="noopener noreferrer"
                                                className="card card1  p-3 card-cover h-100 overflow-hidden border-white rounded-2 shadow-lg position-relative">
                                                <img className=" mb-3 z-1" src="/imgs/natureLogo.webp"></img>
                                                <h6 className="fs-7">Biopepht Collagen</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="controlesCarousel position-absolute bg-danger bottom-0 z-1 w-100">
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample2"
                                    data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample2"
                                    data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div> */}
                    </div>
                </section>
                <section id="seccion2" className="mb-5">
                    <div data-aos="fade-up" data-aos-delay="200" className="container containerCarousel px-4  "
                        id="custom-cards">

                        <div style={{ maxWidth: '600px' }} className="contTituloSeccion0 mb-5 d-flex justify-content-center align-items-center mx-auto">

                            <hr className="flex-grow-1 border-white me-3" />
                            <h5 className="text-center latestTitulo fs-3 fw-light">
                                <span className="texto_color_variable fs-4 fuente">04.</span>{" "}
                                Resume
                            </h5>
                            <hr className="flex-grow-1 border-white ms-3" />
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="btnEfecto">
                                <div className="cuadradoBtn"></div>
                                <a href="/cisnerosCarlos.pdf" download className="btn btn-primary border">
                                    <i className="bi bi-file-earmark-pdf"></i> Download PDF
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="seccion3" className="mb-5">
                    <div data-aos="fade-up" data-aos-delay="200" className="container containerCarousel px-4  "
                        id="custom-cards">

                        <div style={{ maxWidth: '600px' }} className="contTituloSeccion0 mb-5 d-flex justify-content-center align-items-center mx-auto">
                            <hr className="flex-grow-1 border-white me-3" />
                            <h5 className="text-center latestTitulo fs-3 fw-light">
                                <span className="texto_color_variable fs-4 fuente">05.</span>{" "}
                                Contact
                            </h5>
                            <hr className="flex-grow-1 border-white ms-3" />
                        </div>


                        <div className="d-flex conBotones flex-column">
                            <div className="row my-3">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username"
                                        value="cisnerosgranda14@gmail.com" readOnly />

                                    <a href="mailto:cisnerosgranda14@gmail.com" className="btn btn-primary border"
                                        type="button" id="button-addon2">
                                        <i className="bi bi-send"></i>
                                    </a>

                                    <button className="btn btn-primary border position-relative" id="copyButton"
                                        onClick={() => {
                                            // Copiar el correo al portapapeles
                                            navigator.clipboard.writeText(
                                                "cisnerosgranda14@gmail.com"
                                            );

                                            // Obtener el botón y el ícono
                                            const button = document.getElementById("copyButton");
                                            const icon = button?.querySelector("i");

                                            // Cambiar el ícono a "check"
                                            if (icon) {
                                                icon.classList.remove("bi-clipboard");
                                                icon.classList.add("bi-check2");

                                                // Volver al ícono original después de 3 segundos
                                                setTimeout(() => {
                                                    icon.classList.remove("bi-check2");
                                                    icon.classList.add("bi-clipboard");
                                                }, 1500);
                                            }
                                        }}
                                    >
                                        <i className="bi bi-clipboard me-2"></i> Copy
                                    </button>
                                </div>
                            </div>
                            <div className="d-flex gap-3">
                                <a href="https://wa.me/593939595776" target="_blank" rel="noopener noreferrer"
                                    className="btn w-100 btn-primary z-1 border rounded-2 d-flex flex-nowrap justify-content-center">
                                    <i className="bi bi-whatsapp me-2"></i> WhatsApp
                                </a>

                                <a href="tel:+593939595776" target="_blank" rel="noopener noreferrer"
                                    className="btn w-100 btn-primary z-1 border rounded-2 d-flex flex-nowrap justify-content-center">
                                    <i className="bi bi-telephone me-2"></i> Call
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Overlay />

        </>
    );
}

export default App;