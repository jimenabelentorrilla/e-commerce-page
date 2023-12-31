import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

/**assets*/
import Product1 from "./assets/image-product-1.jpg";
import Product1XS from "./assets/image-product-1-thumbnail.jpg";
import Product2 from "./assets/image-product-2.jpg";
import Product2XS from "./assets/image-product-2-thumbnail.jpg";
import Product3 from "./assets/image-product-3.jpg";
import Product3XS from "./assets/image-product-3-thumbnail.jpg";
import Product4 from "./assets/image-product-4.jpg";
import Product4XS from "./assets/image-product-4-thumbnail.jpg";
import Minus from "./assets/icon-minus.svg";
import Plus from "./assets/icon-plus.svg";
import IconDelete from "./assets/icon-delete.svg";
import Logo from "./assets/logo.svg";
import Cart from "./assets/icon-cart.svg";
import Menu from "./assets/icon-menu.svg";
import Avatar from "./assets/image-avatar.png";

function App() {
    const [count, setCount] = useState(1);
    const [foto, setFoto] = useState(Product1);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showA, setShowA] = useState(false);
    const [carrito, setCarrito] = useState(0);
    const [carritoVacio, setCarritoVacio] = useState(true);
    const resultado = (count * 125).toFixed(2);

    const handleFotos = (index) => {
        setFoto(fotos[index].foto);
        
    };




    const [showNav, setShowNav] = useState(false);

    const handleCloseNav = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);





    const fotos = [
        {
            foto: Product1,
            xs: Product1XS
        },
        {
            foto: Product2,
            xs:Product2XS
        },
        {
            foto: Product3,
            xs: Product3XS
        },
        {
            foto: Product4,
            xs: Product4XS
        }
    ];

    function handleDelete() {
        setCarrito(0)
        setCarritoVacio(true);
      }

    function toggleShowA () {
        setShowA(!showA);
        setCarrito(count);

        if (carritoVacio) {
            setCarritoVacio(false);
          }
    }

    function handleMinus() {
        if (count > 1) {
           return setCount(count - 1);
        }
      }

    function handlePlus() {
        setCount(count + 1);
    }
    
    return (
    <>
    <Container fluid>
        <Row>
            <Col>
                <div className="nav-1005">
                    <div className="nav-flex">
                        <div className="menu-hmb">
                            <img src={Menu} onClick={handleShowNav}/>
                        </div>
                        <div>
                            <img src={Logo} className="logo"/>
                        </div>
                        <ul className="ul-flex">
                            <li className="navigation-item">Collections</li>
                            <li className="navigation-item">Men</li>
                            <li className="navigation-item">Women</li>
                            <li className="navigation-item">About</li>
                            <li className="navigation-item">Contact</li>
                        </ul>
                    </div>
                    
                    <div className="icons-container">
                        <div className="cart-cont" onClick={handleShow}>                        
                            <div>
                                <img src={Cart} className="cart-icon" />
                            </div>
                            <div className='or-count'>
                                <p>{carrito}</p>
                            </div>
                            
                        </div>
                        <div>                        
                            <img src={Avatar} className="avatar"/>
                        </div>
                    </div>
                </div>
                
            </Col>
        </Row>
        <Row className='main-cont'>
            <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div className="image-container">
                        <div className="image-wrapper">
                            <img src={foto}/>
                        </div>
                        <div className="product-images">
                            
                        
                        {fotos.map((pic, index) => (
                            <div key={index}>
                                <div className="product-image" onMouseOver={() => handleFotos(index)}>
                                    <img src={pic.xs}/>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6} xxl={6} className="image-container">
                <div >
                    <div className="text-container">
                        <span>Sneaker Company</span>
                        <h1>Fall Limited Edition Sneakers</h1>
                    </div>
                    <div className="product-details">
                        <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                        <div className='product-price-container'>
                            <p className="product-price">$125.00</p>
                            <span className="product-discount">50%</span>
                        </div>
                        <p className="product-original-price">$250.00</p>
                    </div>
                    <div className="product-actions">
                        <div className="rating-container">
                            <div className="rating-icon" onClick={handleMinus}>
                                <img src={Minus}   />
                            </div>
                                <div className="rating-value">
                                    <p>{count}</p>
                            </div>
                            <div className="rating-icon" onClick={handlePlus}>
                                <img src={Plus}  />
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <button className="icon-button" onClick={toggleShowA}>
                                <img src={Cart} />
                                <p>Add to cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>

    <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className='hr-cart' closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {carritoVacio ? (
                <div className='empt-flex'>
                    <p className='empt-par'>Your cart is empty.</p>
                </div>
            
                ) : (
                    <div>
                        <div className="offcn-container">
                            <div className="offcn-image-container">
                                <div>
                                    <img src={Product1XS} className="offcn-product-image" />
                                </div>
                                <div className="offcn-product-details">
                                    <p className="offcn-product-name">Fall Limited Edition Sneakers</p>
                                    <p className="offcn-product-count">$125.00 x {count}</p>
                                    <p className='result-count'> Total: ${resultado}</p>
                                </div>
                                <div className="offcn-icon-container" >
                                    <img src={IconDelete} onClick={handleDelete} className="offcn-icon-image" />
                                </div>
                            </div>
                            <div>
                                <button className="offcn-checkout-button">Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
        </Offcanvas.Body>
    </Offcanvas>
    <ToastContainer position="top-end">
        <Toast show={showA} onClose={toggleShowA} delay={3000} autohide>
            <Toast.Header>
            <strong className="me-auto">Woohoo!</strong>
            </Toast.Header>
            <Toast.Body>Your product has been added to the cart!</Toast.Body>
        </Toast>
    </ToastContainer>
    <Offcanvas show={showNav} onHide={handleCloseNav}>
        <Offcanvas.Header closeButton>
            
        </Offcanvas.Header>
            <Offcanvas.Body>
            <ul className="ul-flex-mb">
                <li className="navigation-item-mb">Collections</li>
                <li className="navigation-item-mb">Men</li>
                <li className="navigation-item-mb">Women</li>
                <li className="navigation-item-mb">About</li>
                <li className="navigation-item-mb">Contact</li>
            </ul>
        </Offcanvas.Body>
    </Offcanvas>
    </>
);
}

export default App;
