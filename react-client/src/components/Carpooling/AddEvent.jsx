import React from "react";
import Axios from "axios";
class AddEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userData._id,
            userName: this.props.userData.userName,
            userPic: this.props.userData.image,
            destinationFrom:"",
            from:"",
            to:"",
            date:"",
            numberOfPlaces: 0,
            carType:"",
            price : 0,
            phoneNumber: "",
            image: "",
            createdAt: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.uploadImage=this.uploadImage.bind(this)

    }
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value,
        });
    }
    uploadImage(e) {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "easy-life");
       
        Axios.post("https://api.cloudinary.com/v1_1/REZmed/image/upload", data)
          .then(({ data }) => {
              console.log({data})
            this.setState({
                image:data.secure_url
            })
          })
          .catch((err) => console.error(err));
      }

    saveEvent(event) {
        event.preventDefault();
        this.props.saveEvent(this.state);
    }

    render() {
        return (
            <div id="addFlatsharingContainer">
                <form>
                    <div className="divs">
                        from:
                    <div className="col-md-4 mb-3">
                        <select
                            className="form-control"
                            id="from"
                            placeholder="destinationFrom"
                            onChange={this.handleChange}
                        >
                            <option value>City</option>
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
                    to:
                    <div className="col-md-4 mb-3">
                        <select
                            className="form-control"
                            id="to"
                            placeholder="to"
                            onChange={this.handleChange}
                        >
                            <option value>City</option>
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
                    </div>
                 
                    <div className="form-outline mb-2">
                        <input
                            id="date"
                            type="date"
                            className="form-control"
                            placeholder="time"
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-outline mb-2">
                        <input
                            id="numberOfPlaces"
                            type="number"
                            className="form-control"
                            placeholder="nb of places"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-outline mb-2">
                        <input 
                            id="carType"
                            type="text"
                            className="from-control"
                            placeholder="car type"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='divs'>
                    <div className="col-md-6 mb-3">
                        <input
                            id="price"
                            type="number"
                            className="form-control"
                            placeholder="Price"
                            onChange={this.handleChange}
                        />
                    </div>
                    
                    </div>
                    <div className="form-outline mb-2">
                        <input
                            id="phoneNumber"
                            type="text"
                            className="form-control"
                            placeholder="Phone number"
                            onChange={this.handleChange}
                        />
                    </div>

                    

                    <div className="form-outline mb-2">
                    {this.state.image===''?(
                        <div></div>
                    ):(
                        <img src={this.state.image} id='imgUploaded' />
                    )
                    }
                    </div>
                    <div className="form-outline mb-2">
                    <input
                            className="form-control"
                            name="image"
                            required
                            type="file"
                            name="image"
                            placeholder="Upload an image"
                            onChange={this.uploadImage}
                    />
                    </div>
                  
                 
                 <div className="form-outline mb-2">
                    <button
                    id='saveBtn'
                        type="submit"
                        className="btn btn-primary btn-block mb-2"
                        onClick={   this.saveEvent}
                    >
                        Publish
                    </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddEvent;
