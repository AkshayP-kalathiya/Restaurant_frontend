import React, { useEffect, useState } from 'react'
import Sidenav from './Sidenav'
import { HiOutlineArrowLeft } from 'react-icons/hi'
import { Button, Modal, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from './Header'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6'
import ReactApexChart from 'react-apexcharts'

const TableInformation = () => {

    const [showModal12, setShowModal12] = useState(false);

    const handleClose12 = () => setShowModal12(false);
    const handleShow12 = () => {
        setShowModal12(true);
        setTimeout(() => {
            setShowModal12(false);
        }, 2000);
    };

    const [show15, setShow15] = useState(false);

    const handleClose15 = () => setShow15(false);
    const handleShow15 = () => setShow15(true);

    const [data, setData] = useState([
        {
            pedido: '01234',
            fecha: '24/05/2023',
            hora: '11:00 AM',
            cliente: 'Damian Gonzales',
            estado: 'Recibido',
        },

        {
            pedido: '01234',
            fecha: '24/05/2023',
            hora: '11:00 AM',
            cliente: 'Damian Gonzales',
            estado: 'Recibido',
        },

        {
            pedido: '01234',
            fecha: '24/05/2023',
            hora: '11:00 AM',
            cliente: 'Damian Gonzales',
            estado: 'Preparado',
        },

        {
            pedido: '01234',
            fecha: '24/05/2023',
            hora: '11:00 AM',
            cliente: 'Damian Gonzales',
            estado: 'Entregado',
        },

        {
            pedido: '01234',
            fecha: '24/05/2023',
            hora: '11:00 AM',
            cliente: 'Damian Gonzales',
            estado: 'Finalizado',
        },
        {
            pedido: '01234',
            fecha: '24/05/2023',
            hora: '11:00 AM',
            cliente: 'Damian Gonzales',
            estado: 'Preparado',
        },
        {
            pedido: '01234',
            fecha: '24/05/2023',
            hora: '11:00 AM',
            cliente: 'Damian Gonzales',
            estado: 'Recibido',
        },

        {
            pedido: '01234',
            fecha: '24/05/2023',
            hora: '11:00 AM',
            cliente: 'Damian Gonzales',
            estado: 'Finalizado',
        },

    ]);


    const [activeTab, setActiveTab] = useState("home");

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



    const [chartState, setChartState] = useState({
        series: [{
            name: 'Estadisticas',
            data: [19.6, 40, 28, 30, 22]
        }],
        options: {
            chart: {
                height: 350,
                type: 'area',
                toolbar: {
                    show: false,
                    tools: {
                        download: false,
                        resetZoom: false,
                    }
                }
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'category',
                categories: ["S 1", "S 2", "S 3", "S 4", "S 5"],
                labels: {
                    style: {
                        colors: '#d0d5db',
                        fontSize: '14px',
                    },
                    offsetY: 5
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            grid: {
                borderColor: '#dee2e62a',
                opacity: 0.1,
                yaxis: {
                    lines: {
                        show: true,
                        interval: 1
                    }
                },
                row: {
                    colors: ['transparent', 'transparent'], // Optional: set background colors for rows
                    opacity: 0.5
                }
            },
            yaxis: {
                show: false,
                tickAmount: 5// This will add 4 horizontal lines
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.1,
                    stops: ['0,0,0']
                }
            },
            colors: ['#008FFB']
        },
    });
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = `
            .apexcharts-gridline:last-of-type {
                display: none;
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    const [analysis, setAnalysis] = useState('');
    const [isProgressing, setIsProgressing] = useState(null);

    useEffect(() => {
        generateAnalysis(chartState.series[0].data);
    }, [chartState.series]);

    const generateAnalysis = (data) => {
        const initial = data[0];
        const final = data[data.length - 1];
        const percentageChange = ((final - initial) / initial) * 100;

        setIsProgressing(percentageChange >= 0);
        const analysisText = ` ${Math.abs(percentageChange).toFixed(2)}% `;

        setAnalysis(analysisText);
    };


    return (
        <div >
            <Header />
            <div className="d-flex">
                <Sidenav />
                <div className=" flex-grow-1 sidebar" style={{ width: "50%" }}>
                    <div className="m_bgblack text-white m_borbot  b_border_bb j-tbl-font-1">
                        <div className="j-table-datos-btn">
                            <Link to={"/table"}>
                                <Button variant="outline-primary" className='j-tbl-btn-font-1 b_border_out '>
                                    <HiOutlineArrowLeft className='j-table-datos-icon ' /> <span className='b_ttt'>Regresar</span>
                                </Button>
                            </Link>
                        </div>
                        <div className='j-table-information-head-buttons'>
                            <h5 className="j-table-information-1 j-table-text-23 ">Datos mesa 1</h5>

                            <div className="j-table-information-btn-1">
                                <Button data-bs-theme="dark"
                                    className="j-canvas-btn2 j-tbl-font-3 b_back_neww text-center "
                                    style={{ borderRadius: "8px" }}
                                    onClick={handleShow15}
                                    variant="primary">
                                    <div className="d-flex align-items-center">
                                        <svg className="j-canvas-btn-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd" />
                                        </svg>
                                        <span className=''> Generar reporte</span>
                                    </div>
                                </Button>

                                <Modal
                                    show={show15}
                                    onHide={handleClose15}
                                    backdrop={true}
                                    keyboard={false}
                                    className="m_modal"
                                >
                                    <Modal.Header closeButton className="j-caja-border-bottom p-0 m-3 mb-0 pb-3">
                                        <Modal.Title
                                            className="modal-title j-caja-pop-up-text-1"
                                        >
                                            Generar reporte cajas
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleFormControlInput1"
                                                className="form-label j-tbl-btn-font-1"
                                            >
                                                Nombre
                                            </label>
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
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleFormControlInput1"
                                                className="form-label j-tbl-btn-font-1"
                                            >
                                                Número de mesas
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control j-table_input"
                                                id="exampleFormControlInput1"
                                                placeholder="10"
                                            />
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer className="sjmodenone justify-content-between pt-0">
                                        <div>
                                            <Button
                                                variant="primary"
                                                className="btn j-btn-primary text-white j-caja-text-1 me-2"
                                                onClick={() => {
                                                    handleShow12();
                                                    handleClose15();
                                                }}
                                            >
                                                Guardar combios
                                            </Button>
                                            <Button
                                                className="btn j-btn-White text-white j-caja-text-1"
                                                onClick={() => {
                                                    handleClose15();
                                                }}
                                            >
                                                Cancelar
                                            </Button>
                                        </div>

                                        <Button
                                            variant="secondary"
                                            className="btn sjredbtn b_btn_close j-caja-text-1"
                                            onClick={handleClose15}

                                        >
                                            Eliminar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Modal
                                    show={showModal12}
                                    onHide={handleClose12}
                                    backdrop={true}
                                    keyboard={false}
                                    className="m_modal"
                                >
                                    <Modal.Header closeButton className="border-0"></Modal.Header>
                                    <Modal.Body>
                                        <div className="text-center">
                                            <img src={require("../Image/check-circle.png")} alt="" />
                                            <p className="mb-0 mt-2 h6 j-tbl-pop-1">mesa</p>
                                            <p className="opacity-75 j-tbl-pop-2">Informe de tabla creado con éxito</p>
                                        </div>
                                    </Modal.Body>
                                </Modal>


                                <Button
                                    data-bs-theme="dark"
                                    className="j-canvas-btn2 j-tbl-font-3 b_border_out"
                                    style={{ borderRadius: "8px" }}
                                    variant="outline-primary"
                                >
                                    <div className="d-flex align-items-center">
                                        <svg className="j-canvas-btn-i j-table-datos-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd" />
                                            <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd" />
                                        </svg>
                                        <span className='b_ttt'>Editar</span>
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>

                    <Tabs
                        activeKey={activeTab}
                        onSelect={(k) => setActiveTab(k)}
                        id="fill-tab-example"
                        className="mb-3  m_tabs m_bgblack px-2 border-0 p-4"
                        fill>
                        <Tab
                            eventKey="home"
                            title="information"
                            className=" text-white m_bgblack mt-2 rounded"
                        >
                            <div className="j-table-information-body">
                                <form className='j_ti_form'>
                                    <div className="row">
                                        <div className="col-6 mb-3 ">
                                            <label
                                                htmlFor="exampleFormControlInput1"
                                                className="form-label text-white j-tbl-font-11"
                                            >
                                                Creador mesa
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control j-tbl-information-input"
                                                id="exampleFormControlInput1"
                                                placeholder="Damian Lopez"
                                            />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label
                                                htmlFor="exampleFormControlInput1"
                                                className="form-label text-white j-tbl-font-11"
                                            >
                                                Fecha creación
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control j-tbl-information-input"
                                                id="exampleFormControlInput1"
                                                placeholder="20/03/2024"
                                            />
                                        </div>
                                        <div className="col-6 ">
                                            <label
                                                htmlFor="exampleFormControlInput1"
                                                className="form-label text-white j-tbl-font-11"
                                            >
                                                Sector
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control j-tbl-information-input"
                                                id="exampleFormControlInput1"
                                                placeholder="4"
                                            />
                                        </div>
                                        <div className="col-6">
                                            <label
                                                htmlFor="exampleFormControlInput1"
                                                className="form-label text-white j-tbl-font-11"
                                            >
                                                Número mesa
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control j-tbl-information-input"
                                                id="exampleFormControlInput1"
                                                placeholder="1"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>

                        </Tab>
                        <Tab eventKey="profile" title="Historial" style={{ backgroundColor: "#1F2A37" }} className='py-2 mt-2'>
                            <div className="j-table-information-body">

                                <form>
                                    <div className="j_ti_center">
                                        <div className="j_ti_margin">
                                            <label
                                                htmlFor="vendidosInput"
                                                className="form-label text-white j-tbl-font-11"
                                            >
                                                Vendidos
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control j-input-width j-tbl-information-input"
                                                id="vendidosInput"
                                                placeholder="60"
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between gap-3">
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="desdeSelect"
                                                    className="form-label text-white j-tbl-font-11"
                                                >
                                                    Desde
                                                </label>
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
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="hastaSelect"
                                                    className="form-label text-white j-tbl-font-11"
                                                >
                                                    Hasta
                                                </label>
                                                <select
                                                    className="form-select  b_select border-0 py-2  " style={{ borderRadius: "8px" }}
                                                    aria-label="Default select example"
                                                >
                                                    <option value="1">Enero</option>
                                                    <option value="2">Febrero</option>
                                                    <option selected value="3">Marzo</option>
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
                                    </div>
                                </form>




                                <div className='b_table1'>
                                    <table className='b_table '>
                                        <thead>
                                            <tr className='b_thcolor'>
                                                <th>Pedido</th>
                                                <th>Fecha </th>
                                                <th>Hora</th>
                                                <th>Cliente</th>
                                                <th>Estado</th>
                                                <th>Ver</th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-white b_btnn '>
                                            {data.map((order) => (
                                                <tr key={order.id} className='b_row'>
                                                    <Link to={"/home_Pedidos/paymet"}>
                                                        <div className='b_idbtn j-tbl-font-3 ' style={{ borderRadius: "10px", fontSize: "12px" }}>{order.pedido}</div>
                                                    </Link>
                                                    <td className='j-tbl-text-8'>{order.fecha}</td>
                                                    <td className='text-nowrap j-tbl-text-8'>{order.hora}</td>
                                                    <td className='text-nowrap j-tbl-text-8' >{order.cliente}</td>
                                                    <td style={{ fontSize: "12px" }} className={`b_btn1 mb-3 ms-3 text-nowrap d-flex j-tbl-font-3  align-items-center justify-content-center ${order.estado == 'Recibido' ? 'b_bl' : order.estado === 'Preparado' ? 'b_or' : order.estado === 'Entregado' ? 'b_er' : order.estado === 'Finalizado' ? 'b_gr' : 'text-denger'}`}>{order.estado}</td>
                                                    <td>
                                                        <Link to={"/home_Pedidos/paymet"}>
                                                            <td style={{ fontSize: "12px" }} className='b_idbtn j-btn-primary text-nowrap j-tbl-font-3 '>ver details</td>
                                                        </Link>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </Tab>

                        <Tab
                            eventKey="longer-tab"
                            title="Estadísticas"
                            className=" text-white m_bgblack rounded mx-3"
                        >
                            <div className="j-table-statistics-body">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="j-statistics-form">
                                            <div className="j_ti_d_flex gap-3">
                                                <div className="mb-3 j-input-width2">
                                                    <label
                                                        htmlFor="desdeSelect"
                                                        className="form-label text-white j-tbl-font-11"
                                                    >
                                                        Desde
                                                    </label>
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
                                                <div className="mb-3  j-input-width2">
                                                    <label
                                                        htmlFor="hastaSelect"
                                                        className="form-label text-white j-tbl-font-11"
                                                    >
                                                        Hasta
                                                    </label>
                                                    <select
                                                        className="form-select  b_select border-0 py-2  " style={{ borderRadius: "8px" }}
                                                        aria-label="Default select example"
                                                    >
                                                        <option value="1">Enero</option>
                                                        <option value="2">Febrero</option>
                                                        <option selected value="3">Marzo</option>
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
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="j-statistics-form">
                                            <div style={{ position: 'relative' }} className='py-3 j-table-chart'>
                                                <div id="chart" className='m_chart'>
                                                    <ReactApexChart options={chartState.options} series={chartState.series} type="area" height={350} />
                                                </div>
                                                <div
                                                    id="analysis"
                                                    style={{
                                                        position: 'absolute',
                                                        top: '5px',
                                                        right: '20px',
                                                        fontSize: '16px',
                                                        color: isProgressing ? 'green' : 'red',
                                                        fontWeight: 700
                                                    }}
                                                >
                                                    {analysis} {isProgressing ? <FaArrowUp /> : <FaArrowDown />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Tab>
                    </Tabs>
                </div>
            </div >
        </div>

    )
}

export default TableInformation;
