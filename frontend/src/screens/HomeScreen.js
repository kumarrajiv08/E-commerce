import React from 'react'
import { useState, useEffect } from 'react';
import {Col, Row} from 'react-bootstrap'
import Product from '../components/Product'
//import products from '../products.js'
import axios from 'axios';


const HomeScreen = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () =>{
      const { data } = await axios.get('/api/products')

      setProducts(data)
    }
    fetchProducts()

},[])

    return (
        <>
        <h1>LATEST PRODUCTS</h1>
          <Row>
            {products.map(product =>(
              <Col key ={product._id} sm={12} md={6} lg={4} xl={3}>   {/*In small screen, it will take full width, in medium it will take half*/}
                <Product product={product}/>

              </Col>
            ))}
          </Row>
        </>
    )
}

export default HomeScreen
