import React, { useState } from "react";
import Header from "./Header";
import icon5 from "../Image/icon_6.png";
import home1 from "../Image/home1.svg";
import home2 from "../Image/home2.svg";
import home3 from "../Image/home3.svg";
import { IoMdPrint } from "react-icons/io";
import { Link } from "react-router-dom";
import Sidenav from "./Sidenav";
import fing from "../Image/figura.png";
import checkbox from "../Image/checkbox1.png";
import { Button, Modal, Tabs } from "react-bootstrap";
import { HiOutlineArrowLeft } from "react-icons/hi2";
import { Tab } from "bootstrap";


const Informacira = () => {
    const [activeTab, setActiveTab] = useState("home");
    const [price, setPrice] = useState('200');
    const [pricesecond, setpricesecond] = useState('0.00');

    const handleprice = (event) => {
        let value = event.target.value;
        if (value.startsWith('$')) {
            value = value.substring(1);
        }

        setPrice(value);
    };
    const handlepricesecond = (event) => {
        let value = event.target.value;
        if (value.startsWith('$')) {
            value = value.substring(1);
        }
        setpricesecond(value);
    };

    const [showModal12, setShowModal12] = useState(false);

    const handleClose12 = () => setShowModal12(false);
    const handleShow12 = () => {
        setShowModal12(true);
        setTimeout(() => {
            setShowModal12(false);
        }, 2000);
    };

    const [show11, setShow11] = useState(false);

    const handleClose11 = () => setShow11(false);
    const handleShow11 = () => setShow11(true);


    const [show15, setShow15] = useState(false);

    const handleClose15 = () => setShow15(false);
    const handleShow15 = () => setShow15(true);

    const [show16, setShow16] = useState(false);

    const handleClose16 = () => setShow16(false);
    const handleShow16 = () => setShow16(true);

    const [show17, setShow17] = useState(false);

    const handleClose17 = () => setShow17(false);
    const handleShow17 = () => setShow17(true);

    const [show18, setShow18] = useState(false);

    const handleClose18 = () => setShow18(false);
    const handleShow18 = () => {
        setShow18(true)
        setTimeout(() => {
            setShow18(false)
        }, 2000);
    };

    const [show19, setShow19] = useState(false);

    const handleClose19 = () => setShow19(false);
    const handleShow19 = () => setShow19(true);


    document.addEventListener('DOMContentLoaded', function () {
        const tabs = document.querySelectorAll('#pills-tab button');

        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                // Remove 'bg-primary', 'text-light', 'bg-light', 'text-dark' from all tabs
                tabs.forEach(button => {
                    button.classList.remove('bg-primary', 'text-light');
                    button.classList.add('bg-light', 'text-dark');
                });

                // Add 'bg-primary' and 'text-light' to the clicked tab
                tab.classList.remove('bg-light', 'text-dark');
                tab.classList.add('bg-primary', 'text-light');
            });
        });
    });

    // create family
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // create family success
    const [showCreSuc, setShowCreSuc] = useState(false);
    const handleCloseCreSuc = () => setShowCreSuc(false);
    const handleShowCreSuc = () => {
        setShowCreSuc(true);
        setTimeout(() => {
            setShowCreSuc(false);
        }, 2000);
    };


    const users = [
        { horario: "07/12/2003", cierre: '08:00 am', inicial: '$100', final: '$0', Estado: "Abierta", Acción: "Ver detalles", Imprimir: "" },
        // { id: 2, name: 'Imrudeu', email: 'Bdrospira@gmail.com', role: 'User' }
        { horario: "07/12/2003", cierre: '08:00 am', inicial: '$100', final: '$0', Estado: "Cerrada", Acción: "Ver detalles", Imprimir: "" },
        { horario: "07/12/2003", cierre: '08:00 am', inicial: '$100', final: '$0', Estado: "Cerrada", Acción: "Ver detalles", Imprimir: "" },
        { horario: "07/12/2003", cierre: '08:00 am', inicial: '$100', final: '$0', Estado: "Cerrada", Acción: "Ver detalles", Imprimir: "" },

        // More users...
    ];


    const usersM = [
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Recibido", Acción: "Ver detalles", Imprimir: "" },
        // { id: 2, name: 'Imrudeu', email: 'Bdrospira@gmail.com', role: 'User' }
        // { horario: "07/12/2003", cierre: '08:00 am', inicial: '$100', final: '$0', Estado: "Abierta", Acción: "Ver detalles", Imprimir: "" },
        // More users...
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Recibido", Acción: "Ver detalles", Imprimir: "" },
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Preparado", Acción: "Ver detalles", Imprimir: "" },
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Entregado", Acción: "Ver detalles", Imprimir: "" },
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Finalizado", Acción: "Ver detalles", Imprimir: "" },
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Preparado", Acción: "Ver detalles", Imprimir: "" },
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Recibido", Acción: "Ver detalles", Imprimir: "" },
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Finalizado", Acción: "Ver detalles", Imprimir: "" },
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Entregado", Acción: "Ver detalles", Imprimir: "" },
        { pedido: "01234", sector: '4', mesa: '1', fecha: "22/03/2024", codigo: "0135", Estado: "Entregado", Acción: "Ver detalles", Imprimir: "" },


    ];
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleButtonClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="s_bg_dark">
                <Header />
                <div className="d-flex flex-column flex-lg-row">
                    <div>
                        <Sidenav />
                    </div>
                    <div className="flex-grow-1 sidebar">
                        <div className="py-3 px-4 sjbg_gay sj_border sjmargin">
                            {/* <button className="sj_btn"><img src={icon5} className="px-2" /> </button> */}
                            <Link to="/caja" className="sj_A"><button className="bj-btn-outline-primary  j-tbl-btn-font-1 btn">
                                <HiOutlineArrowLeft className='j-table-datos-icon' />Regresar</button></Link>
                            <div className="row pt-4 text-white justify-content-between text-white sjd-flex">
                                <div className="col-12 col-md-3 mb-3 mb-md-0 j_caja_p">
                                    <p className="mb-0">Información caja 1</p>
                                </div>
                                <div className="col-12 col-md-9">
                                    <div className="d-flex flex-wrap justify-content-md-end gap-2 sjd-flex row-gap-2">
                                        <button type="button" onClick={handleShow16} className="btn btn-primary btn-sm sjSky px-2 j-tbl-font-3">
                                            <img src={home3} className="me-2" alt="" /> Abrir Caja
                                        </button>

                                        <button className="j-canvas-btn2 btn j-tbl-font-3  bj-btn-outline-primary" onClick={handleShow15}>
                                            <svg className="j-canvas-btn-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clipRule="evenodd" />
                                            </svg>
                                            Generar Reporte
                                        </button>

                                        <button className="btn j-canvas-btn2 j-tbl-font-3 bj-btn-outline-primary" onClick={handleShow} data-bs-theme="dark">
                                            <svg className="me-2 j-canvas-btn-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clipRule="evenodd" />
                                            </svg>
                                            Editar
                                        </button>

                                        <button className="btn btn-danger btn-sm sjredbtn px-2 j-tbl-font-3" onClick={handleShow11}>
                                            Cerrar caja
                                        </button>
                                    </div>
                                </div>


                                {isModalOpen && (
                                    <div className="modal text-white">
                                        <div className="modal-content">
                                            <span className="close" onClick={closeModal}>&times;</span>
                                            <p>Modal Content Goes Here</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* <div className="d-flex justify-content-between text-white sjd-flex  pt-4">
                                <p className="mb-0">Información caja 1</p>
                                <div className="d-flex justify-content-end gap-3 sjd-flex">
                                    <button type="button" onClick={handleShow16} className="sjSky px-2 j-tbl-font-3">
                                        <img src={home3} className="px-2" /> Abrir Caja
                                    </button>
                                    <button
                                        className="j-canvas-btn2 btn j-tbl-font-3  bj-btn-outline-primary"
                                        onClick={handleShow15}
                                    >
                                        <div className="d-flex align-items-center">
                                            <svg className="j-canvas-btn-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd" />
                                            </svg>
                                            Generar Reporte
                                        </div>
                                    </button>
                                    <button
                                        data-bs-theme="dark"
                                        className="j-canvas-btn2 j-tbl-font-3  btn bj-btn-outline-primary"
                                        onClick={handleShow}
                                    >
                                        <div className="d-flex align-items-center" >
                                            <svg className="j-canvas-btn-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd" />
                                                <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd" />
                                            </svg>
                                            Editar
                                        </div>
                                    </button>
                                    <button
                                        className="sjredbtn px-2 j-tbl-font-3"
                                        onClick={handleShow11}
                                    >
                                        Cerrar caja
                                    </button>
                                    {isModalOpen && (
                                        <div className="modal text-white">
                                            <div className="modal-content">
                                                <span className="close" onClick={closeModal}>&times;</span>
                                                <p>Modal Content Goes Here</p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div> */}
                            <Modal
                                show={show16}
                                onHide={handleClose16}
                                backdrop={true}
                                keyboard={false}
                                className="m_modal jay-modal"
                            >
                                <Modal.Header closeButton className="j-caja-border-bottom p-0 m-3 mb-0 pb-3">
                                    <Modal.Title
                                        className="modal-title j-caja-pop-up-text-1"
                                    >
                                        Abrir caja
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <label htmlFor="sj" className="j-tbl-font-2 mb-1 mt-0">Monto inicial</label>
                                    <input type="text" className="sj_modelinput" value={100} />
                                </Modal.Body>
                                <Modal.Footer className="sjmodenone">
                                    <Button
                                        variant="primary"
                                        className="btn j-btn-primary text-white j-caja-text-1"
                                        onClick={() => {
                                            handleShow18()
                                            handleClose16();
                                        }}
                                    >
                                        Abrir caja
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal
                                show={show18}
                                onHide={handleClose18}
                                backdrop={true}
                                keyboard={false}
                                className="m_modal jay-modal"
                            >
                                <Modal.Header closeButton className="border-0"></Modal.Header>
                                <Modal.Body>
                                    <div className="text-center">
                                        <img src={require("../Image/check-circle.png")} alt="" />
                                        <p className="mb-0 mt-2 h6 j-tbl-pop-1">Caja abierta</p>
                                        <p className="opacity-75 j-tbl-pop-2">exitosamente</p>
                                    </div>
                                </Modal.Body>
                            </Modal>

                            <Modal
                                show={show15}
                                onHide={handleClose15}
                                backdrop={true}
                                keyboard={false}
                                className="m_modal jay-modal"
                            >
                                <Modal.Header closeButton className="j-caja-border-bottom p-0 m-3 mb-0 pb-3">
                                    <Modal.Title
                                        className="modal-title j-caja-pop-up-text-1"
                                    >
                                        Generar reporte cajas
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="row">
                                        <div className="col-6">
                                            <label className="mb-1 j-caja-text-1">Desde</label>

                                            <select
                                                className="form-select  b_select border-0 py-2  " style={{ borderRadius: "8px" }}
                                                aria-label="Default select example"
                                            >
                                                <option selected value="1">Enero</option>
                                                <option value="2">Febrero</option>
                                                <option value="3">Marzo</option>
                                                <option value="4">Abril</option>
                                                <option value="5">Mayo</option>
                                                <option value="6">Junio</option>
                                                <option value="7">Julio</option>
                                                <option value="8">Agosto</option>
                                                <option value="9">Septiembre</option>
                                                <option value="10">Octubre </option>
                                                <option value="11">Noviembre</option>
                                                <option value="12">Diciembre</option>
                                            </select>
                                        </div>
                                        <div className="col-6">
                                            <label className="mb-1 j-caja-text-1">Hasta</label>
                                            <select
                                                className="form-select  b_select border-0 py-2  " style={{ borderRadius: "8px" }}
                                                aria-label="Default select example"
                                            >
                                                <option selected value="1">Enero</option>
                                                <option value="2">Febrero</option>
                                                <option value="3">Marzo</option>
                                                <option value="4">Abril</option>
                                                <option value="5">Mayo</option>
                                                <option value="6">Junio</option>
                                                <option value="7">Julio</option>
                                                <option value="8">Agosto</option>
                                                <option value="9">Septiembre</option>
                                                <option value="10">Octubre </option>
                                                <option value="11">Noviembre</option>
                                                <option value="12">Diciembre</option>
                                            </select>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="sjmodenone">
                                    <Button
                                        variant="secondary"
                                        className="btn sjredbtn b_btn_close j-caja-text-1"
                                        onClick={handleClose15}

                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="btn j-btn-primary text-white j-caja-text-1"
                                        onClick={() => {
                                            handleShow12();
                                            handleClose15();
                                        }}
                                    >
                                        Generar reporte
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop={true}

                                keyboard={false}
                                className="m_modal"
                            >
                                <Modal.Header closeButton className="m_borbot j-caja-border-bottom p-0 m-3 mb-0 pb-3">
                                    <Modal.Title className="j-tbl-text-10">Editar caja</Modal.Title>
                                </Modal.Header>
                                <Modal.Body className="border-0">
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleFormControlInput1"
                                            className="form-label j-tbl-font-11"
                                        >
                                            Nombre caja
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control j-table_input"
                                            id="exampleFormControlInput1"
                                            placeholder="Caja#"
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            htmlFor="exampleFormControlInput1"
                                            className="form-label j-tbl-font-11"
                                        >
                                            Cajero asignado
                                        </label>
                                        <select
                                            className="form-select b_select border-0 py-2"
                                            style={{ borderRadius: "6px" }}
                                            aria-label="Selecciona un título"
                                            id="cajeroAsignadoSelect"
                                        >
                                            <option value="0">Cajero asignado</option>
                                            <option value="1">Carlos Alberto</option>
                                            <option value="2">Monte de apertura</option>
                                            <option value="3">Monte de apertura</option>
                                            <option value="4">Monte de apertura</option>
                                        </select>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className="sjmodenone justify-content-between pt-0">
                                    <div>
                                        <Button
                                            variant="primary"
                                            className="btn j-btn-primary text-white j-caja-text-1 me-2"
                                            onClick={() => {
                                                handleShowCreSuc();
                                                handleClose();
                                            }}
                                        >
                                            Guardar combios
                                        </Button>
                                        <Button
                                            className="btn j-btn-White text-white j-caja-text-1"
                                            onClick={() => {
                                                handleClose();
                                            }}
                                        >
                                            Cancelar
                                        </Button>
                                    </div>

                                    <Button
                                        variant="secondary"
                                        className="btn sjredbtn b_btn_close j-caja-text-1"
                                        onClick={handleClose}

                                    >
                                        Eliminar
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal
                                show={showCreSuc}
                                onHide={handleCloseCreSuc}
                                backdrop={true}


                                keyboard={false}
                                className="m_modal"
                            >
                                <Modal.Header closeButton className="border-0"></Modal.Header>
                                <Modal.Body>
                                    <div className="text-center">
                                        <img src={require("../Image/check-circle.png")} alt="" />
                                        <p className="mb-0 mt-2 h6 j-tbl-pop-1">Caja</p>
                                        <p className="opacity-75 j-tbl-pop-2">Los cambios han sido guardados exitosamente</p>
                                    </div>
                                </Modal.Body>
                            </Modal>

                            <Modal
                                show={show11}
                                onHide={handleClose11}
                                backdrop={true}
                                keyboard={false}
                                className="m_modal jay-modal"
                            >
                                <Modal.Header className="j-caja-border-bottom p-0 m-3 mb-0 pb-3">
                                    <Modal.Title
                                        className="modal-title j-caja-pop-up-text-1"
                                    >
                                        Cerrar Caja
                                    </Modal.Title>
                                    <Button
                                        variant="secondary"
                                        className="btn-close text-white"
                                        onClick={handleClose11}
                                    />
                                </Modal.Header>
                                <Modal.Body>
                                    <p className="j-caja-text-1">Completa el “Registro de efectivo” para comparar y detectar cualquier irregularidad en el cierre de caja </p>
                                    <label htmlFor="final" className="j-caja-text-1 mb-2" >Monto final</label>
                                    <input type="text" id="final" className="sj_modelinput j-tbl-information-input py-2 px-3 mb-3 opacity-75" value={`$${price}`}
                                        onChange={handleprice} /> <br />
                                    <label htmlFor="final" className="j-caja-text-1 mb-2" >Monto efectivo</label>
                                    <input type="text" id="final" className="sj_modelinput j-tbl-information-input py-2 px-3 opacity-75" value={`$${pricesecond}`}
                                        onChange={handlepricesecond} />
                                </Modal.Body>
                                <Modal.Footer className="sjmodenone">
                                    <Button
                                        variant="secondary"
                                        className="btn sjredbtn b_btn_close j-caja-text-1"
                                        onClick={handleClose11}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button
                                        variant="primary"
                                        className="btn j-btn-primary text-white j-caja-text-1"
                                        onClick={() => {
                                            handleShow12();
                                            handleClose11();
                                        }}
                                    >
                                        Generar reporte
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            {/* {/ <!-- Modal 5-->   */}
                            <Modal
                                show={showModal12}
                                onHide={handleClose12}
                                backdrop={true}
                                keyboard={false}
                                className="m_modal jay-modal"
                            >
                                <Modal.Header closeButton className="border-0"></Modal.Header>
                                <Modal.Body>
                                    <div className="text-center">
                                        <img src={require("../Image/check-circle.png")} alt="" />
                                        <p className="mb-0 mt-2 h6 j-tbl-pop-1">Caja</p>
                                        <p className="opacity-75 j-tbl-pop-2">Cierre de caja exitosamente</p>
                                    </div>
                                </Modal.Body>
                            </Modal>

                        </div>

                        <Tabs
                            activeKey={activeTab}
                            onSelect={(k) => setActiveTab(k)}
                            id="fill-tab-example"
                            className="mb-3  m_tabs m_bgblack px-2 border-0 p-4"
                            fill>
                            <Tab
                                eventKey="home"
                                title="Historial"
                                className=" text-white m_bgblack rounded"
                            >
                                {/* <div className="d-flex justify-content-between px-4  py-3 text-white sjd-flex">
                                    <div>
                                        <p className="mb-1 j-caja-text-1">Cantidad de pedidos</p>
                                        <input type="number" value={60} className="sjinput sj_full" />
                                    </div>
                                    <div className="d-flex justify-content-end gap-4">
                                        <div>
                                            <label className="mb-1 j-caja-text-1">Desde</label>

                                            <select
                                                className="form-select  b_select border-0 py-2  " style={{ borderRadius: "8px" }}
                                                aria-label="Default select example"
                                            >
                                                <option selected value="1">Enero</option>
                                                <option value="2">Febrero</option>
                                                <option value="3">Marzo</option>
                                                <option value="4">Abril</option>
                                                <option value="5">Mayo</option>
                                                <option value="6">Junio</option>
                                                <option value="7">Julio</option>
                                                <option value="8">Agosto</option>
                                                <option value="9">Septiembre</option>
                                                <option value="10">Octubre </option>
                                                <option value="11">Noviembre</option>
                                                <option value="12">Diciembre</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="mb-1 j-caja-text-1">Hasta</label>
                                            <select
                                                className="form-select  b_select border-0 py-2  " style={{ borderRadius: "8px" }}
                                                aria-label="Default select example"
                                            >
                                                <option selected value="1">Enero</option>
                                                <option value="2">Febrero</option>
                                                <option value="3">Marzo</option>
                                                <option value="4">Abril</option>
                                                <option value="5">Mayo</option>
                                                <option value="6">Junio</option>
                                                <option value="7">Julio</option>
                                                <option value="8">Agosto</option>
                                                <option value="9">Septiembre</option>
                                                <option value="10">Octubre </option>
                                                <option value="11">Noviembre</option>
                                                <option value="12">Diciembre</option>
                                            </select>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="row p-3 text-white sjd-flex j_caja_inputssss">
                                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                                        <p className="mb-1 j-caja-text-1">Cantidad de pedidos</p>
                                        <input type="number" defaultValue={60} className="form-control sjinput sj_full" />
                                    </div>
                                    <div className="col-12 col-md-8">
                                        <div className="row ">
                                            <div className="col-6 col-md-6 mb-3 mb-md-0 j_caja_inputssss_col_6">
                                                <label className="mb-1 j-caja-text-1">Desde</label>
                                                <select className="form-select b_select border-0 py-2" style={{ borderRadius: 8 }}>
                                                    <option selected value={1}>Enero</option>
                                                    <option value={2}>Febrero</option>
                                                    <option value={3}>Marzo</option>
                                                    <option value={4}>Abril</option>
                                                    <option value={5}>Mayo</option>
                                                    <option value={6}>Junio</option>
                                                    <option value={7}>Julio</option>
                                                    <option value={8}>Agosto</option>
                                                    <option value={9}>Septiembre</option>
                                                    <option value={10}>Octubre</option>
                                                    <option value={11}>Noviembre</option>
                                                    <option value={12}>Diciembre</option>
                                                </select>
                                            </div>
                                            <div className="col-6 col-md-6">
                                                <label className="mb-1 j-caja-text-1">Hasta</label>
                                                <select className="form-select b_select border-0 py-2" style={{ borderRadius: 8 }}>
                                                    <option selected value={1}>Enero</option>
                                                    <option value={2}>Febrero</option>
                                                    <option value={3}>Marzo</option>
                                                    <option value={4}>Abril</option>
                                                    <option value={5}>Mayo</option>
                                                    <option value={6}>Junio</option>
                                                    <option value={7}>Julio</option>
                                                    <option value={8}>Agosto</option>
                                                    <option value={9}>Septiembre</option>
                                                    <option value={10}>Octubre</option>
                                                    <option value={11}>Noviembre</option>
                                                    <option value={12}>Diciembre</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-white  py-3 b_table1">
                                    <table className="sj_table">
                                        <thead>
                                            <tr className="sjtable_dark flex-nowrap">
                                                <th className="p-3">Horario de apertura</th>
                                                <th>Horario de cierre</th>
                                                <th>Monto inicial</th>
                                                <th>Monto final</th>
                                                <th>Estado</th>
                                                <th>Acción</th>
                                                <th>Imprimir</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => (
                                                <tr key={user} className="sjbordergray j-caja-text-2">
                                                    <td>
                                                        <tr>
                                                            <td className="p-3">{user.horario}</td>
                                                            <td>{user.cierre}</td>
                                                        </tr>
                                                    </td>

                                                    <td>
                                                        <tr>
                                                            <td className="p-3">{user.horario}</td>
                                                            <td>{user.cierre}</td>
                                                        </tr>
                                                    </td>

                                                    <td>{user.inicial}</td>

                                                    <td>{user.final}</td>
                                                    <td><button className={`j-tbl-font-3 ${user.Estado === 'Cerrada' ? 'j-bgcolor-caja' : 'sj_lightsky'}`}>{user.Estado}</button></td>


                                                    <td>
                                                        <button
                                                            className="sjSky px-2 j-tbl-font-3"
                                                            onClick={user.Estado === 'Abierta' ? handleShow19 : handleShow17}
                                                        >
                                                            {user.Acción}
                                                        </button>
                                                    </td>

                                                    <td>
                                                        <svg className={` ${user.Estado === 'Cerrada' ? 'sj-button-xise' : 'sjtablewhite'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill-rule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z" clip-rule="evenodd" />
                                                        </svg>{user.Imprimir}</td>
                                                </tr>
                                            ))}
                                        </tbody>

                                        <Modal
                                            show={show19}
                                            onHide={handleClose19}
                                            backdrop={true}
                                            keyboard={false}
                                            className="m_modal s_model_newww"
                                        >
                                            <Modal.Header closeButton className="j-caja-border-bottom p-0 m-3 mb-0 pb-3">
                                                <Modal.Title
                                                    className="modal-title j-caja-pop-up-text-1 "
                                                >
                                                    Detalles caja
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    <div className="d-flex align-items-center mb-2 ">
                                                        <div className="j-caja-information"></div>
                                                        <p className="d-inline ps-2 sjtext mb-0">Caja abierta</p>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="quien-abrio" className="sjtext">Quién abrió caja</label>
                                                            <input type="text" id="quien-abrio" className="sj_modelinput mt-2 w-100" placeholder="Daniel Lopez" />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0">
                                                            <label htmlFor="quien-cerro" className="sjtext">Quién cerró caja</label>
                                                            <input type="text" id="quien-cerro" className="sj_modelinput mt-2 w-100" placeholder="-" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-2">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="fecha-apertura" className="sjtext">Fecha apertura</label>
                                                            <input type="text" id="fecha-apertura" className="sj_modelinput mt-2 w-100" placeholder="17/03/2024 " />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0" >
                                                            <label htmlFor="hora-apertura" className="sjtext">Hora apertura</label>
                                                            <input type="text" id="hora-apertura" className="sj_modelinput mt-2 w-100" placeholder="08:00 am" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="fecha-cierre" className="sjtext">Fecha cierre</label>
                                                            <input type="text" id="fecha-cierre" className="sj_modelinput mt-2 w-100" placeholder="20/03/2024" />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0">
                                                            <label htmlFor="hora-cierre" className="sjtext">Hora cierre</label>
                                                            <input type="text" id="hora-cierre" className="sj_modelinput mt-2 w-100" placeholder="03:00 pm" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="monto inicial" className="sjtext">Monto inicial</label>
                                                            <input type="text" id="monto inicial" className="sj_modelinput mt-2 w-100" placeholder="$100" />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0">
                                                            <label htmlFor="monto final" className="sjtext">Monto final</label>
                                                            <input type="text" id="monto final" className="sj_modelinput mt-2 w-100" placeholder="$200" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="ingreso" className="sjtext">Ingreso</label>
                                                            <input type="text" id="ingreso" className="sj_modelinput mt-2 w-100" placeholder="$100" />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0" >
                                                            <label htmlFor="efectivo" className="sjtext">Registro efectivo</label>
                                                            <input type="text" id="efectivo" className="sj_modelinput mt-2 w-100" placeholder="-" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 px-0">
                                                            <label htmlFor=" sjtext">Irregularidades</label>
                                                            <input type="text" className="sj_modelinput mt-2" placeholder="-" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Modal.Body>
                                        </Modal>

                                        <Modal
                                            show={show17}
                                            onHide={handleClose17}
                                            backdrop={true}
                                            keyboard={false}
                                            className="m_modal s_model_newww"
                                        >
                                            <Modal.Header closeButton className="j-caja-border-bottom p-0 m-3 mb-0 pb-3">
                                                <Modal.Title
                                                    className="modal-title j-caja-pop-up-text-1"
                                                >
                                                    Detalles caja
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <div>
                                                    <div className="mb-2">
                                                        <img src={fing} alt="" />
                                                        <p className="d-inline ps-2 sjtext">Caja cerrada</p>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="quien-abrio" className="sjtext">Quién abrió caja</label>
                                                            <input type="text" id="quien-abrio" className="sj_modelinput mt-2 w-100" placeholder="Daniel Lopez" />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0">
                                                            <label htmlFor="quien-cerro" className="sjtext">Quién cerró caja</label>
                                                            <input type="text" id="quien-cerro" className="sj_modelinput mt-2 w-100" placeholder="Damian Gonzales" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-2">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="fecha-apertura" className="sjtext">Fecha apertura</label>
                                                            <input type="text" id="fecha-apertura" className="sj_modelinput mt-2 w-100" placeholder="17/03/2024 " />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0">
                                                            <label htmlFor="hora-apertura" className="sjtext">Hora apertura</label>
                                                            <input type="text" id="hora-apertura" className="sj_modelinput mt-2 w-100" placeholder="08:00 am" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="fecha-cierre" className="sjtext">Fecha cierre</label>
                                                            <input type="text" id="fecha-cierre" className="sj_modelinput mt-2 w-100" placeholder="20/03/2024" />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0">
                                                            <label htmlFor="hora-cierre" className="sjtext">Hora cierre</label>
                                                            <input type="text" id="hora-cierre" className="sj_modelinput mt-2 w-100" placeholder="03:00 pm" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="monto inicial" className="sjtext">Monto inicial</label>
                                                            <input type="text" id="monto inicial" className="sj_modelinput mt-2 w-100" placeholder="$100" />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0">
                                                            <label htmlFor="monto final" className="sjtext">Monto final</label>
                                                            <input type="text" id="monto final" className="sj_modelinput mt-2 w-100" placeholder="$200" />
                                                        </div>
                                                    </div>
                                                    <div className="row pt-3">
                                                        <div className="col-12 col-md-6 mb-3 ps-0">
                                                            <label htmlFor="ingreso" className="sjtext">Ingreso</label>
                                                            <input type="text" id="ingreso" className="sj_modelinput mt-2 w-100" placeholder="$100" />
                                                        </div>
                                                        <div className="col-12 col-md-6 mb-3 pe-0">
                                                            <label htmlFor="efectivo" className="sjtext">Registro efectivo</label>
                                                            <input type="text" id="efectivo" className="sj_modelinput mt-2 w-100" placeholder="$300" />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-12 ps-0 pe-0">
                                                            <label htmlFor=" sjtext">Irregularidades</label>
                                                            <input type="text" className="sj_modelinput mt-2" placeholder="$-50" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </Modal.Body>
                                            <Modal.Footer className="sjmodenone">
                                                <button type="button" class="btn sjbtnskylight" onClick={handleClose17}>Imprimir reporte</button>
                                            </Modal.Footer>
                                        </Modal>
                                    </table>
                                </div>

                            </Tab>
                            <Tab eventKey="profile" title="Información" className="py-2" style={{ backgroundColor: "#1F2A37" }}>
                                {/* <div className="container-fluid"> */}
                                <div className="row mb-3">
                                    <div className="col-md-6 mb-2 mb-md-0">
                                        <label htmlFor="nombreCaja" className="form-label text-white">Nombre caja</label>
                                        <input type="text" id="nombreCaja" className="form-control sjw-50" value={4} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="fechaCreacion" className="form-label text-white">Fecha creación</label>
                                        <input type="text" id="fechaCreacion" className="form-control sjw-50" value={1} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-2 mb-md-0">
                                        <label htmlFor="aperturas" className="form-label text-white">Cuantas aperturas</label>
                                        <input type="text" id="aperturas" className="form-control sjw-50" value={12} />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="cierres" className="form-label text-white">Cuantos cierres</label>
                                        <input type="text" id="cierres" className="form-control sjw-50" value={11} />
                                    </div>
                                </div>
                                {/* </div> */}
                            </Tab>
                            <Tab
                                eventKey="longer-tab"
                                title="Movimientos"
                                className=" text-white m_bgblack rounded"
                            >
                                <div className="text-white sj_overflow mt-4 py-3 b_table1">
                                    <table className="sj_table flex-nowrap">
                                        <thead>
                                            <tr className="sjtable_dark">
                                                <th className="p-3">Pedido</th>
                                                <th>Sector</th>
                                                <th>Mesa</th>
                                                <th>Fecha</th>
                                                <th>Código transacción</th>
                                                <th>Estado</th>
                                                <th>Ver</th>
                                                <th>Imprimir</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {usersM.map((user) => (
                                                <tr key={user} className="sjbordergray">
                                                    <Link to={"/home_Pedidos/paymet"} >
                                                        <td className="p-2 "><button className="sjtablegeern j-tbl-font-3 ">{user.pedido}</button></td>
                                                    </Link>
                                                    <td className="j-caja-text-2 ">{user.sector}</td>
                                                    <td className="j-caja-text-2 ">{user.mesa}</td>
                                                    <td className="j-caja-text-2 ">{user.fecha}</td>
                                                    <td className="j-caja-text-2 ">{user.codigo}</td>
                                                    <td><button className={`j-btn-caja-final j-tbl-font-3  ${user.Estado === 'Recibido' ? 'b_indigo' : user.Estado === 'Preparado' ? 'b_ora ' : user.Estado === 'Entregado' ? 'b_blue' : user.Estado === 'Finalizado' ? 'b_green' : user.Estado === 'Retirar' ? 'b_indigo' : user.Estado === 'Local' ? 'b_purple' : 'text-danger'}`}>{user.Estado}</button></td>
                                                    <td><button className="sjSky px-2 j-tbl-font-3">{user.Acción}</button></td>
                                                    <td>
                                                        <svg className={` ${user.Estado === 'Entregado' ? 'sj-button-xise' : 'sjtablewhite'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                            <path fill-rule="evenodd" d="M8 3a2 2 0 0 0-2 2v3h12V5a2 2 0 0 0-2-2H8Zm-3 7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H5Zm4 11a1 1 0 0 1-1-1v-4h8v4a1 1 0 0 1-1 1H9Z" clip-rule="evenodd" />
                                                        </svg> {user.Imprimir}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>

            </div >

        </>
    )
}
export default Informacira;