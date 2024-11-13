// import React from 'react';

const Nav = () => {
    return (
        <>
            <nav id="navbar-example" className="navbar navbar1 sticky-top py-0 shadow">
                <div className="container containerNav rounded-2 p-1 px-lg-5 px-1 ps-3">
                    <a className="navbar-brand" href="#">Navbar</a>

                    <ul id="ulNav0" className="navbar-nav d-flex d-lg-none flex-row gap-3 align-items-center text-white">
                        <li className='d-flex justify-content-center align-items-center'><a href='https://wa.me/593939595776' target="_blank" rel="noopener noreferrer" className="bi bi-whatsapp d-flex"></a></li>
                        <li className='d-flex justify-content-center align-items-center'><a href='' target="_blank" rel="noopener noreferrer" className="bi bi-instagram d-flex"></a></li>
                        <li className='d-flex justify-content-center align-items-center'><a href='https://github.com/cisneros14' target="_blank" rel="noopener noreferrer" className="bi bi-github d-flex"></a></li>
                    </ul>
                    <ul id="ulNav1" className="navbar-nav d-none d-lg-flex flex-row gap-4">
                        <li className="nav-item">
                            <a className="nav-link px-3 d-inline py-1 rounded-2 active" aria-current="page" href="#header1">
                                <span className="texto_color_variable">01.</span> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 d-inline rounded-2 py-1" href="#seccion0">
                                <span className="texto_color_variable">02.</span> About Me
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 d-inline rounded-2 py-1" href="#seccion1">
                                <span className="texto_color_variable">03.</span> Works
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link px-3 d-inline rounded-2 py-1" href="#seccion2">
                                <span className="texto_color_variable">04.</span> Resume
                            </a>
                        </li>
                    </ul>

                    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <i className="bi bi-list text-white fs-2"></i>
                    </button>
                </div>

                <div className="offcanvas offcanvas-end text-white border border-end-0 border-1 p-4" tabIndex={-1} data-bs-scroll="true" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header border-bottom border-white mb-5">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body d-flex flex-column p-0 p-md-3">
                        <ul className="navbar-nav d-flex flex-col gap-4">
                            <li className="nav-item">
                                <a className="nav-link text-white px-3 d-inline py-1 rounded-2" aria-current="page" href="#header1">
                                    <span className="texto_color_variable">01.</span> Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3 d-inline rounded-2 py-1" href="#seccion0">
                                    <span className="texto_color_variable">02.</span> About Me
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3 d-inline rounded-2 py-1" href="#seccion1">
                                    <span className="texto_color_variable">03.</span> Works
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white px-3 d-inline rounded-2 py-1" href="#seccion2">
                                    <span className="texto_color_variable">04.</span> Resume
                                </a>
                            </li>
                        </ul>
                        <p className='text-center mt-auto fs-7'><span className="spanType"><span className="me-2">&copy;</span>{new Date().getFullYear()}</span> Carlos Cisneros's Portfolio</p>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;