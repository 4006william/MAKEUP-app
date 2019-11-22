import React from 'react'

import allProducts from '../makeup.json'

import logo from '../images/logo.jpg' 




const AllProducts = (props) => {

 

    const brandsRedirect = () =>{

        window.location.href="/brands"

    }

    const homeRedirect = () =>{

        window.location.href="/"

    }

 

    return (

        <div className="products">

                <nav className="nav">

                    <button className="logo-btn" onClick={homeRedirect}>

                        <img className="logo" src={logo} />

                        <h3>Beauti<span>Center</span></h3>

                    </button>

                    <button onClick={brandsRedirect}>brands</button>

                    <button onClick={homeRedirect}>deals</button>

                    <button onClick={homeRedirect}>about us</button>

                </nav>

 

                <h1>All Products</h1>

 

                <div className="brands-body">

                    {allProducts.map((product, idx) => (          

                    <div className="product-item">

                        

                        <img src={product.image_link} alt={product.name}/>

                        

                        <div className="product-links">

                            

                            <a href={product.product_link} key={idx} target="blank">{product.name}</a>

                            <p href="#" key={idx}>{product.price_sign}{product.price}</p>

                        </div>

                    </div>

            

        ))}

                </div>

                <hr />

      </div>

 )

}

 

export default AllProducts