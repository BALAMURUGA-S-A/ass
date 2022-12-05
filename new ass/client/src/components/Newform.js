import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Newform(){

    const formsubmit = async(event) => {
        event.preventDefault();
        var datastring=new FormData(event.target);
        var config={Headers:{"enctype":"multipart/form-data"}}

        var firstname = document.getElementById("firstname").value
        var lastname = document.getElementById("lastname").value
        var email = document.getElementById("email").value
        var phonenumber = document.getElementById("phonenumber").value
        var password = document.getElementById("password").value
        var pass = /^[A-Z]{1}[a-z]{3,10}[@]{1}$/;
        var teststring =/^[a-zA-z]{2,20}$/;

        if(firstname === '' || firstname === null){
            alert("enter the firstnamae")
        }
        else if(!teststring.test(firstname)){
            alert("enter tha name with pattern checking")
        }
        else if(lastname === '' || lastname === null){
            alert("enter the lastnamae")
        }
        else if(!teststring.test(lastname)){
            alert("enter tha name with pattern checking")
        }
        else if(password === '' || password === null){
            alert("enter the lastnamae")
        }
        else if(!pass.test(password)){
            alert("enter tha password with pattern checking")
        }
        else{

            await axios.post('http://localhost:3002/Newform',datastring,config)
                  .then(function(result){
                    if(result.data.status === 'error'){
                        alert('Please try again');
                        window.location.reload();
                    }
                    else if(result.data.status === 'success'){
                        alert('Login completed');
                        window.location.reload();
                    }
                  })
                  .catch(function(error){
                    alert(error);
                    window.location.reload();
                  })

        }
}


    return(
        <>
        <div className="container"> 
            <div className="row mt-3">
                <div className="col-lg-12">
                    <h4 className="text-center">New Register Login</h4>
                </div>
            </div>
            <form onSubmit={formsubmit}>
            <div className="row mt-2">
                <div className="col-lg-3">&nbsp;</div>
                <div className="col-lg-6 ml-5">
                    <div className="col-lg-4">
                        <label>Firstname</label> 
                    </div>
                    <div className="col-lg-6">
                        <input type="text" name="firstname" id="firstname" className="form-control"/>
                    </div>
                    <div className="col-lg-6">
                        <label>Lastname</label> 
                    </div>
                    <div className="col-lg-6">
                        <input type="text" name="lastname" id="lastname" className="form-control"/>
                    </div>
                    <div className="col-lg-6">
                        <label>Email</label> 
                    </div>
                    <div className="col-lg-6">
                        <input type="email" name="email" id="email" className="form-control"/>
                    </div>
                    <div className="col-lg-6">
                        <label>PhoneNumber</label> 
                    </div>
                    <div className="col-lg-6">
                        <input type="number" name="phonenumber" id="phonenumber" className="form-control"/>
                    </div>
                    <div className="col-lg-6">
                        <label>Password</label> 
                    </div>
                    <div className="col-lg-6">
                        <input type="password" name="password" id="password" className="form-control"/>
                    </div>
                    <div className="col-lg-3">&nbsp;</div>
                    <div className="col-lg-3">
                    <Link to="/dashboard">
                    <button type="button" name="signin" id="signin" value="signin" className="btn btn-success">Sign in</button>
                    </Link>
                    </div>
                    <div className="col-lg-3">&nbsp;</div>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}