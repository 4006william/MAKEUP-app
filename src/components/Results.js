import React, {Component} from 'react';

import logo from '../images/logo.jpg' 

import cars from '../makeup.json'

 

class Results extends Component {

 

       

  render(){

    

    const car = (props) => {

 

        const id = props.match.params.id

        const car = cars.find(c => c.id == id)

    }

 

    const productsRedirect = () =>{

        window.location.href="/all-products"

    }

    const homeRedirect = () =>{

        window.location.href="/"

    }

 

    return(

      <div className="brands">

             <nav className="nav">

             <button className="logo-btn" onClick={homeRedirect}>

                        <img className="logo" src={logo} />

                        <h3>Beauti<span>Center</span></h3>

                    </button>

                <button onClick={productsRedirect}>all products</button>

                <button onClick={homeRedirect}>deals</button>

                <button onClick={homeRedirect}>about us</button>

            </nav>

            <h1>results.....</h1>

            <div className="brands-body">
                
 

            </div>

      </div>

    )

  }

}

 

export default Results