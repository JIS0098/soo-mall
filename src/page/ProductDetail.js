import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="detail-screen">
      <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <div className="product-choice">
              {product?.choice === true ? "Conscious choice" : ""}
            </div>
            <div className="product-new">
              {product?.new === true ? "new" : ""}
            </div>
            <div className="product-title">{product?.title}</div>
            <div className="product-price">￦{product?.price}</div>
            <Dropdown >
            <Dropdown.Toggle  id="dropdown-but">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="add-but"> 추가</button>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
