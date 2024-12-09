import React, { useEffect, useRef, useState } from 'react'
import Sidenav from './Sidenav'
import { Link } from 'react-router-dom'
import { FaCircleCheck, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6'
import { FaCalendarAlt, FaSearch } from 'react-icons/fa'
import img1 from "../Image/cheese-soup.png";
import img2 from "../Image/crispy-fry-chicken.png";
import img3 from "../Image/Strawberry-gelatin.png";
import OrderCart from './OrderCart'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { MdOutlineAccessTimeFilled, MdRoomService } from 'react-icons/md'
import Header from './Header'
import { Button, Modal } from 'react-bootstrap'

const TableCounter1 = () => {
    const [date, setDate] = useState("00 min 00 sg");

    const [categories, setCategories] = useState([
        "Todo",
        "Bebidas",
        "Snacks",
        "Postres",
        "Almuerzos",
        "Desayunos",
        "Cenas",
        "Gelatinas",
        "Pasteles",
        "Frutas con crema",
        "Pasteles1",
        "Gelatinas1",
    ]);

    const [subcategories, setSubCategories] = useState({
        "Bebidas": ["Soda", "Juice", "Water"],
        "Snacks": ["Chips", "Nuts", "Popcorn"],
        "Postres": ["Soda", "Juice", "Water"],
        "Almuerzos": ["Chips", "Nuts", "Popcorn"],
        "Desayunos": ["Soda", "Juice", "Water"],
        "Cenas": ["Chips", "Nuts", "Popcorn"],
        "Gelatinas": ["Soda", "Juice", "Water"],
        "Pasteles": ["Chips", "Nuts", "Popcorn"],
        "Frutas con crema": ["Soda", "Juice", "Water"],
        "Pasteles1": ["Chips", "Nuts", "Popcorn"],
        "Gelatinas1": ["Soda", "Juice", "Water"],
    });

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);

    const renderItems = () => {
        let itemsToRender;
        if (selectedCategory === "Todo") {
            itemsToRender = [...item1, ...item2];
        } else if (selectedCategory === "Bebidas") {
            itemsToRender = item1;
        } else if (selectedCategory === "Snacks") {
            itemsToRender = item2;
        } else if (selectedCategory === "Postres") {
            itemsToRender = item1;
        } else if (selectedCategory === "Almuerzos") {
            itemsToRender = item2;
        } else if (selectedCategory === "Desayunos") {
            itemsToRender = item2;
        } else if (selectedCategory === "Cenas") {
            itemsToRender = item1;
        } else if (selectedCategory === "Gelatinas") {
            itemsToRender = item2;
        } else if (selectedCategory === "Pasteles") {
            itemsToRender = item1;
        } else if (selectedCategory.startsWith("Frutas con crema")) {
            itemsToRender = item2;
        } else if (selectedCategory === "Pasteles1") {
            itemsToRender = item2;
        } else if (selectedCategory === "Gelatinas1") {
            itemsToRender = item1;
        } else {
            itemsToRender = [];
        }

        if (selectedSubCategory) {
            itemsToRender = itemsToRender.filter(item => item.subcategory === selectedSubCategory);
        }

        return itemsToRender.map((e, index) => (
            <div className="col-4 g-3 mb-3" key={index}>
                <OrderCart
                    image={e.image}
                    name={e.name}
                    price={e.price}
                    code={e.code}
                    addItemToCart={addItemToCart}
                />
            </div>
        ));
    };

    const [cartItems, setCartItems] = useState([]);
    const [countsoup, setCountsoup] = useState([]);

    const [itemToDelete, setItemToDelete] = useState(null);
    const [showAllItems, setShowAllItems] = useState(false);
    const toggleShowAllItems = () => {
        setShowAllItems(!showAllItems);
    };

    const [showEditFamDel, setShowEditFamDel] = useState(false);
    const handleCloseEditFamDel = () => setShowEditFamDel(false);
    const handleShowEditFamDel = () => setShowEditFamDel(true);

    const [showEditFam, setShowEditFam] = useState(false);
    const handleCloseEditFam = () => setShowEditFam(false);
    const handleShowEditFam = () => setShowEditFam(true);

    const [isEditing, setIsEditing] = useState(Array(cartItems.length).fill(false));

    const handleNoteChange = (index, note) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].note = note;
        setCartItems(updatedCartItems);
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Enter') {
            const updatedIsEditing = [...isEditing];
            updatedIsEditing[index] = false;
            setIsEditing(updatedIsEditing);
        }
    };

    const handleAddNoteClick = (index) => {
        const updatedIsEditing = [...isEditing];
        updatedIsEditing[index] = true;
        setIsEditing(updatedIsEditing);
        const updatedCartItems = [...cartItems];
        if (!updatedCartItems[index].note) {
            updatedCartItems[index].note = 'Nota: ';
            setCartItems(updatedCartItems);
        }
    };

    const item1 = [
        {
            id: 1,
            image: img1,
            name: "Sopa de queso",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Soda"
        },
        {
            id: 2,
            image: img1,
            name: "Sopa de queso",
            price: "2.00",
            note: '',
            code: "01234",
            subcategory: "Juice"
        },
        {
            id: 3,
            image: img1,
            name: "Sopa de queso",
            note: '',
            price: "2.00",
            code: "01234",
            subcategory: "Water"
        }
    ];

    const item2 = [
        {
            id: 4,
            image: img2,
            name: "Pollo frito crujiente",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Chips"
        },
        {
            id: 5,
            image: img2,
            name: "Pollo frito crujiente",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Chips"
        },
        {
            id: 6,
            image: img2,
            name: "Pollo frito crujiente",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Nuts"
        },
        {
            id: 7,
            image: img3,
            name: "Gelatina fresa",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Nuts"
        },
        {
            id: 8,
            image: img3,
            name: "Gelatina fresa",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Popcorn"
        },
        {
            id: 9,
            image: img3,
            name: "Gelatina fresa",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Popcorn"
        },
        {
            id: 10,
            image: img3,
            name: "Gelatina fresa",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "chip"
        },
        {
            id: 11,
            image: img3,
            name: "Gelatina fresa",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Nuts"
        },
        {
            id: 12,
            image: img3,
            name: "Gelatina fresa",
            price: "2.00",
            code: "01234",
            note: '',
            subcategory: "Popcorn"
        },
    ];

    const increment = (index) => {
        setCountsoup((prevCounts) =>
            prevCounts.map((count, i) => (i === index ? count + 1 : count))
        );
    };

    const decrement = (index) => {
        setCountsoup((prevCounts) =>
            prevCounts.map((count, i) =>
                i === index ? (count > 1 ? count - 1 : 1) : count
            )
        );
    };

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
        setCountsoup([...countsoup, 1]);
    };

    const removeItemFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
        const newCountsoup = [...countsoup];
        newCountsoup.splice(index, 1);
        setCountsoup(newCountsoup);
    };

    const getTotalCost = () => {
        return cartItems.reduce((total, item, index) => total + parseInt(item.price) * countsoup[index], 0);
    };

    const totalCost = getTotalCost();
    const discount = 1.0;
    const finalTotal = totalCost - discount;

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (scrollContainer) {
            const handleWheel = (e) => {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
            };
            scrollContainer.addEventListener("wheel", handleWheel, {
                passive: false
            });
            return () => {
                if (scrollContainer) {
                    scrollContainer.removeEventListener("wheel", handleWheel);
                }
            };
        }
        return () => { }; // Return an empty cleanup function if scrollContainer is null
    }, []);

    const handleDeleteConfirmation = (id) => {
        removeItemFromCart(id);
        handleCloseEditFam();
        handleShowEditFamDel();

        setTimeout(() => {
            setShowEditFamDel(false);
        }, 2000);
    };
    return (
        <>
            <Header />
            <div>
                <section className="j-counter">
                    <div className="j-sidebar-nav j-bg-color">
                        <Sidenav />
                    </div>
                    <div className="j-counter-menu sidebar">
                        <div className="j-counter-header">
                            <h2 className="text-white mb-3 j-counter-text-1">Mostrador</h2>
                            <div className="j-menu-bg-color ">
                                <div className="j-tracker-mar d-flex justify-content-between ">
                                    <div className="line1  flex-grow-1">
                                        <Link className="text-decoration-none px-2 j-counter-path-color">
                                            <FaCircleCheck className="j-counter-icon-size" />
                                            <span className="j-counter-text-2">Productos</span>
                                        </Link>
                                    </div>
                                    <div className="  flex-grow-1 text-center">
                                        <Link
                                            to={"/table/datos"}
                                            className="text-decoration-none px-2 sj_text_dark"
                                        >
                                            <FaCircleCheck className="j-counter-icon-size" />
                                            <span className="j-counter-text-2">Datos</span>
                                        </Link>
                                    </div>
                                    <div className="line2  flex-grow-1 text-end">
                                        <Link className="text-decoration-none px-2 sj_text_dark">
                                            <FaCircleCheck className="j-counter-icon-size" />
                                            <span className="j-counter-text-2">Pago</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="j-counter-head">
                            <div className="j-search-input">
                                <FaSearch className="j-table-icon-size" />
                                <input
                                    type="email"
                                    className="form-control j-table_input"
                                    id="email"
                                    placeholder="Buscar "
                                />
                            </div>
                            <div className="j-show-items">
                                <ul className="nav j-nav-scroll"
                                    ref={scrollRef}
                                    onMouseDown={handleMouseDown}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseUp}
                                    onMouseMove={handleMouseMove}
                                    style={{
                                        overflowX: "hidden",
                                        whiteSpace: "nowrap",
                                        cursor: isDragging ? "grabbing" : "grab",
                                        userSelect: "none",
                                        height: "54px",
                                        flexWrap: "nowrap"
                                    }}
                                >
                                    {categories.map((category, index) => (
                                        <li
                                            className={`nav-item ${selectedCategory === category ? "active" : ""}`}
                                            key={index}
                                            onClick={() => {
                                                setSelectedCategory(category);
                                                setSelectedSubCategory(null);
                                            }}
                                        >
                                            <a className="nav-link sjfs-12" aria-current="page">
                                                {category}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {subcategories[selectedCategory] && (
                                <div className="j-show-items">
                                    <ul className="nav j-nav-scroll">
                                        {subcategories[selectedCategory].map((subcategory, index) => (
                                            <li
                                                className={`nav-item ${selectedSubCategory === subcategory ? "active" : ""}`}
                                                key={index}
                                                onClick={() => setSelectedSubCategory(subcategory)}
                                            >
                                                <a className="nav-link sjfs-12" aria-current="page">
                                                    {subcategory}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="j-counter-body">
                            <div className="j-card-item-1 j-border-bottom">
                                <h2 className="text-white j-tbl-text-17 ">{selectedCategory}</h2>
                                <div className="j-counter-card">
                                    <div className="row">{renderItems()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="j-counter-price position-sticky" style={{ top: '77px' }}>
                        <div className='j_position_fixed j_b_hd_width'>
                            <div className="b-summary-center mb-4 align-items-center text-white d-flex justify-content-between">
                                <h2 className="mb-0 j-tbl-font-5">Resumen</h2>
                                <FaXmark className="b-icon x-icon-size" />
                            </div>

                            <div className="j-counter-price-data mt-4">
                                <h3 className="text-white j-tbl-text-13 mb-3">Datos</h3>
                                {cartItems.length === 0 ? (
                                    <>
                                        <h4 className='j-table-co4 j-tbl-text-13'>Mesa 1</h4>
                                        <div className="d-flex align-items-center justify-content-between my-3">
                                            <div className="j-busy-table d-flex align-items-center">
                                                <div className="j-a-table">
                                                </div>
                                                <p className="j-table-color j-tbl-btn-font-1">Disponible</p>
                                            </div>

                                            <div className="b-date-time d-flex align-items-center">
                                                <svg className="j-canvas-svg-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                                </svg>

                                                <p className="mb-0 ms-2 me-3 text-white j-tbl-btn-font-1">00 min 00 sg</p>
                                            </div>
                                        </div>
                                        <div className="j-orders-inputs">
                                            <div className="j-orders-code">
                                                <label className="j-label-name text-white j-tbl-btn-font-1 mb-2">
                                                    Quién registra
                                                </label>
                                                <input className="j-input-name" type="text" placeholder="Lucia Lopez" />
                                            </div>
                                            <div className="j-orders-code">
                                                <label className="j-label-name j-tbl-btn-font-1 text-white mb-2">
                                                    Personas
                                                </label>
                                                <div>
                                                    <input className="j-input-name630" type="text" placeholder="5" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="b-product-order text-center">
                                            <MdRoomService className="i-product-order" />
                                            <h6 className="h6-product-order text-white j-tbl-pop-1">Mesa disponible</h6>
                                            <p className="p-product-order j-tbl-btn-font-1 ">Agregar producto para empezar<br />
                                                con el pedido de la mesa</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <h4 className='j-table-co4 j-tbl-text-13'>Mesa 2</h4>
                                        <div className="d-flex align-items-center justify-content-between my-3">
                                            <div className="j-busy-table d-flex align-items-center">
                                                <div className="j-a-table">
                                                </div>
                                                <p className="j-table-color j-tbl-btn-font-1">Disponible</p>
                                            </div>

                                            <div className="b-date-time d-flex align-items-center">
                                                <svg className="j-canvas-svg-i" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                                                </svg>

                                                <p className="mb-0 ms-2 me-3 text-white j-tbl-btn-font-1">{date}</p>
                                            </div>
                                        </div>
                                        <div className="j-orders-inputs">
                                            <div className="j-orders-code">
                                                <label className="j-label-name text-white mb-2 j-tbl-btn-font-1">
                                                    Quién registra
                                                </label>
                                                <input className="j-input-name" type="text" placeholder="Lucia Lopez" />
                                            </div>
                                            <div className="j-orders-code">
                                                <label className="j-label-name j-tbl-btn-font-1 text-white mb-2">
                                                    Personas
                                                </label>
                                                <div>
                                                    <input className="j-input-name630" type="text" placeholder="5" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="j-counter-order">
                                            <h3 className="text-white j-tbl-pop-1">Pedido </h3>
                                            <div className="j-counter-order-data j_counter_order_width">
                                                {cartItems.slice(0, showAllItems ? cartItems.length : 3).map((item, index) => (
                                                    <div className="j-counter-order-border-fast j_border_width" key={index}>
                                                        <div className="j-counter-order-img j_counter_order_final">
                                                            <div className="j_d_flex_aic">
                                                                <img src={item.image} alt="" />
                                                                <h5 className="text-white j-tbl-font-5">{item.name}</h5>
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                <div className="j-counter-mix">
                                                                    <button className="j-minus-count" onClick={() => decrement(index)}>
                                                                        <FaMinus />
                                                                    </button>
                                                                    <h3> {countsoup[index]}</h3>
                                                                    <button className="j-plus-count" onClick={() => increment(index)}>
                                                                        <FaPlus />
                                                                    </button>
                                                                </div>
                                                                <h4 className="text-white fw-semibold d-flex">
                                                                    ${parseInt(item.price) * countsoup[index]}
                                                                </h4>
                                                                <button className="j-delete-btn me-2" onClick={() => {
                                                                    setItemToDelete(item.id);
                                                                    handleShowEditFam();
                                                                }}>
                                                                    <RiDeleteBin6Fill />
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div key={index} className="text-white j-order-count-why">
                                                            {isEditing[index] ? (
                                                                <div>
                                                                    <span className="j-nota-blue">Nota: </span>
                                                                    <input
                                                                        className="j-note-input"
                                                                        type="text"
                                                                        value={item.note ? item.note.substring(6) : ''}
                                                                        onChange={(e) => handleNoteChange(index, `Nota: ${e.target.value}`)}
                                                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                                                    />
                                                                </div>
                                                            ) : (
                                                                <div>
                                                                    {item.note ? (
                                                                        <p className="j-nota-blue">{item.note}</p>
                                                                    ) : (
                                                                        <button className="j-note-final-button" onClick={() => handleAddNoteClick(index)}>
                                                                            + Agregar nota
                                                                        </button>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                ))}
                                                {cartItems.length > 3 && (
                                                    <Link onClick={toggleShowAllItems} className="sjfs-14">
                                                        {showAllItems ? 'Ver menos' : 'Ver más'}
                                                    </Link>
                                                )}
                                            </div>
                                            <div className="j-counter-total">
                                                <h5 className="text-white j-tbl-text-15">Costo total</h5>
                                                <div className="j-total-discount d-flex justify-content-between">
                                                    <p className="j-counter-text-2">Artículos</p>
                                                    <span className="text-white">${totalCost.toFixed(2)}</span>
                                                </div>
                                                <div className="j-border-bottom-counter">
                                                    <div className="j-total-discount d-flex justify-content-between">
                                                        <p className="j-counter-text-2">Descuentos</p>
                                                        <span className="text-white">${discount.toFixed(2)}</span>
                                                    </div>

                                                </div>
                                                <div className="j-total-discount my-2 d-flex justify-content-between">
                                                    <p className="text-white bj-delivery-text-153 ">Total</p>
                                                    <span className="text-white bj-delivery-text-153 ">
                                                        ${finalTotal.toFixed(2)}
                                                    </span>
                                                </div>
                                                <Link to={"/table"} class="btn w-100 j-btn-primary text-white m-articles-text-2">Enviar a Cocina</Link>
                                            </div>
                                        </div>
                                    </>
                                )}

                                <Modal
                                    show={showEditFam}
                                    onHide={handleCloseEditFam}
                                    backdrop={true}
                                    keyboard={false}
                                    className="m_modal jay-modal"
                                >
                                    <Modal.Header closeButton className="border-0">
                                    </Modal.Header>
                                    <Modal.Body className="border-0">
                                        <div className="text-center">
                                            <img
                                                className="j-trash-img-late"
                                                src={require("../Image/trash-outline-secondary.png")}
                                                alt=""
                                            />
                                            <p className="mb-0 mt-2 j-kds-border-card-p">Seguro deseas eliminar este pedido</p>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer className="border-0 justify-content-center">
                                        <Button
                                            className="j-tbl-btn-font-1 "
                                            variant="danger"
                                            onClick={() => handleDeleteConfirmation(itemToDelete)}
                                        >
                                            Si, seguro
                                        </Button>
                                        <Button
                                            className="j-tbl-btn-font-1 "
                                            variant="secondary"
                                            onClick={() => {
                                                handleCloseEditFam();
                                            }}
                                        >
                                            No, cancelar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Modal
                                    show={showEditFamDel}
                                    onHide={handleCloseEditFamDel}
                                    backdrop={true}
                                    keyboard={false}
                                    className="m_modal jay-modal"
                                >
                                    <Modal.Header closeButton className="border-0"></Modal.Header>
                                    <Modal.Body>
                                        <div className="j-modal-trash text-center">
                                            <img
                                                src={require("../Image/trash-outline.png")}
                                                alt=""
                                            />
                                            <p className="mb-0 mt-3 h6 j-tbl-pop-1">Pedido eliminado</p>
                                            <p className="opacity-75 j-tbl-pop-2">
                                                El Pedido ha sido eliminado correctamente
                                            </p>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default TableCounter1

