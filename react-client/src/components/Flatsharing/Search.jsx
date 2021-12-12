import React from "react";
class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            City:'',
            maxPrice:0,
            gender:'',
        }
        this.handleChange=this.handleChange.bind(this)
        this.search=this.search.bind(this)
    }
    handleChange(event){
        // console.log(event.target.value)
        this.setState({
            [event.target.id]: event.target.value,
        })
    }
    search(){
        // console.log('this.state',this.state)
        this.props.search(this.state)
    }
    render(){
        return(
            <div className="search">
                <div className="form-outline mb-2">
                    <select
                            className="form-control"
                            id="City"
                            placeholder="City"
                            onChange={this.handleChange}
                        >
                            <option value>City..</option>
                            <option value="Ariana">Ariana</option>
                            <option value="Beja">Beja</option>
                            <option value="Ben-arous">Ben Arous</option>
                            <option value="Bizerte">Bizerte</option>
                            <option value="Gabes">Gabes</option>
                            <option value="Gafsa">Gafsa</option>
                            <option value="Jendouba">Jendouba</option>
                            <option value="Kairouan">Kairouan</option>
                            <option value="Kasserine">Kasserine</option>
                            <option value="Kebili">Kebili</option>
                            <option value="Kef">Kef</option>
                            <option value="Mahdia">Mahdia</option>
                            <option value="Manouba">Manouba</option>
                            <option value="Medenin">Mednin</option>
                            <option value="Monastir">Monastir</option>
                            <option value="Nabeul">Nabeul</option>
                            <option value="Sfax">Sfax</option>
                            <option value="Sidi-bouzid">Sidi Bouzid</option>
                            <option value="Siliana">Siliana</option>
                            <option value="Sousse">Sousse</option>
                            <option value="Tataouine">Tataouine</option>
                            <option value="Tozeur">Tozeur</option>
                            <option value="Tunis">Tunis</option>
                            <option value="Zaghouan">Zaghouan</option>
                        </select>
                        </div>
                        <div className="form-outline mb-2">
                    <select
                            className="form-control"
                            id="gender"
                            placeholder="Gender"
                            onChange={this.handleChange}
                        >
                            <option value>Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        </div>
                       
                      
                        <div className="form-outline mb-2">
                        <input
                            id="maxPrice"
                            type="number"
                            className="form-control"
                            placeholder="Max price"
                            onChange={this.handleChange}
                        />
                    </div>
     <div className="searchButtons">
     <button
          type="submit"
          className="btn btn-primary btn-block mb-2"
          onClick={this.search}
      >
          Search
      </button>
      <button
          type="submit"
          className="btn btn-primary btn-block mb-2"
          onClick={this.props.fetchData}
      >
          Get all
      </button>
     </div>
   
            </div>
     
        )
    }
}
export default Search;