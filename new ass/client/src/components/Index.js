import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Index(){

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}};

        await axios.post("http://localhost:3002/Index",datastring,config)
        .then(function(res){
            if(res.data.status === 'error'){
                alert('Contact Admin');
                window.location.reload();
            }
            else if(res.data.status === 'invalid'){
                alert('Invalid user details');
                window.location.reload();
            }
            else{
                alert('Contact Admin');
                window.location.reload();
            }
          })
    }
    return(
        <>
        <div className="container">
            <div className="row mt-2">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <h2 className="text-center">Login Page</h2>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <label>Username :</label>
                    <input type="username" id="username" name="username" placeholder="Enter your name"/>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row mt-2">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-4">
                    <label >Password  :</label>
                    <input type="password" id=" password" name="password" placeholder="Enter your password"/>
                </div>
                <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-4">&nbsp;</div>
                <div className="col-lg-2">
                    <Link to="/newform">
                    <button type="button" name="signin" id="signin" value="signin" className="btn btn-success">Sign in</button>
                    </Link>
                </div>
                <div className="col-lg-2">
                    <Link to="/dashboard">
                    <button type="button" name="signup" id="signup" value="signup" className="btn btn-danger">Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}