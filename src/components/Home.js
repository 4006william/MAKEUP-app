import React, {Component} from 'react'
import makeup from '../makeup.json'
import logo from '../images/logo.jpg' 

 

class Home extends Component {
    state = {
        search: "",
        results: []
    }
    
    handleInput = (e) => {
        this.setState({search: e.target.value})
    }
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.search}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.setState({search: '', results: data.hits})
    //     })
    // }

 

    render(){
        let filteredResults = makeup.filter(
            (ans) => {
                    return ans.description.indexOf(this.state.search) !== -1;
            }
        )
 

        const brandsRedirect = () =>{

            window.location.href="/brands"

        }

        const homeRedirect = () =>{

            window.location.href="/"

        }

        const productsRedirect = () =>{

            window.location.href="/all-products"

        }
        const resultsRedirect = (e) =>{
            e.preventDefault()
            window.location.href="/results"

        }
  

      return(

        <div className="home">

             <nav className="nav">

             <button className="logo-btn" onClick={homeRedirect}>

                        <img className="logo" src={logo} />

                        <h3>Beauti<span>Center</span></h3>

                    </button>

                <button onClick={productsRedirect}>all products</button>

                <button onClick={brandsRedirect}>brands</button>

                <button onClick={homeRedirect}>deals</button>

                <button onClick={homeRedirect}>about us</button>

            </nav>

            <h3>Discover reviews from real people about real nontoxic beauty care!

                <hr />

            <div className="home-body">

                <form className="search" onSubmit={resultsRedirect}>

                    <h2>LOOK GOOD, FEEL GOOD</h2>

                    <p>Search the largest Organic/Nontoxic Beauty Database</p>

                    <input name="search" value={this.state.search}
                    onChange={this.handleInput} 
                    placeholder="Search products, brands, etc..."/>

                </form>

                <div className="home-pieces">
                    {filteredResults.map((ans,id) =>{
                        if(!this.state.search){
                            return '';
                        }else{
                        return (
                            <div key={id} className="filtered results">
                                <h3>{ans.name}</h3>
                                <p>{ans.description}</p>
                                <a href={ans.product_link} target="blank">
                                    Details
                                </a>
                            </div>
                        )}
                    })}
                </div>

            </div>

 

                </h3>

        </div>

      )

    }

  }

  

  export default Home

