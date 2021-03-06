import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom';
import LoginContext from '../context/loginContext';

export default function Login() {
    const [state, setState] = useState({
        email:'',
        pwd:"",
    })
    const handelsubmit=(event)=>{
        event.preventDefault();
        setState({
            email:'',
            pwd:"",
        })
    }
    const handelchange=(e)=>{
        setState(
            {[e.target.name]: e.target.value}
        )
    }
     const context = useContext(LoginContext)
    const history= useHistory()
    const logi=()=>{
       context.changeLogin(true)
       history.push("/")
        
    }
    return (
        <div className="container">
            <form onSubmit={handelsubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-danger">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={state.email} onChange={handelchange} aria-describedby="emailHelp"/>
                    <small id="emailHelp" className="form-text text-success">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label className="text-danger" htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"name="pwd" value={state.pwd} onChange={handelchange}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label text-danger" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-outline-danger" onClick={logi}>Submit</button>
            </form>
        </div>
    )
}
