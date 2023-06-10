import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
/**assets*/
import Product1 from "../assets/image-product-1.jpg";
import Product1XS from "../assets/image-product-1-thumbnail.jpg";
import Product2 from "../assets/image-product-2.jpg";
import Product2XS from "../assets/image-product-2-thumbnail.jpg";
import Product3 from "../assets/image-product-3.jpg";
import Product3XS from "../assets/image-product-3-thumbnail.jpg";
import Product4 from "../assets/image-product-4.jpg";
import Product4XS from "../assets/image-product-4-thumbnail.jpg";
import Minus from "../assets/icon-minus.svg";
import Plus from "../assets/icon-plus.svg";
import Cart from "../assets/icon-cart.svg";
import IconDelete from "../assets/icon-delete.svg";



const Main = () => {
    const [count, setCount] = useState(1);
    const [foto, setFoto] = useState(Product1);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
      const handleFotos = (index) => {
        setFoto(fotos[index].foto);
      };

    function handleMinus() {
        if (count > 1) {
           return setCount(count - 1);
        }
      }

    function handlePlus() {
        setCount(count + 1);
    }
    
    const resultado = count * 125;

  return (
    <>
        <Container fluid>
            <Row className='main-cont'>
                <Col>
                    <div className="image-container">
                        <div className="image-wrapper">
                            <img src={foto}/>
                        </div>
                        <div className="product-images">
                            
                        
                        {fotos.map((pic, index) => (
                            <div key={index}>
                                <div className="product-image" onClick={() => handleFotos(index)}>
                                    <img src={pic.xs}/>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </Col>
                <Col>
                    <div>
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
                                <button className="icon-button" onClick={handleShow}>
                                    <img src={Cart} />
                                    Add to cart
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
                    <div className="offcn-icon-container">
                        <img src={IconDelete} className="offcn-icon-image" />
                    </div>
                </div>
                <div>
                    <button className="offcn-checkout-button">Checkout</button>
                </div>
            </div>
        </Offcanvas.Body>
    </Offcanvas>
    </>
  );
}

export default Main;