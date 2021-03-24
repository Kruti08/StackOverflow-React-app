import React, { Component } from 'react'
import "./Header.css"
import img_s from "./stack.png"

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <i class="fa fa-bars fa-1x" aria-hidden="true" style={{ marginLeft: "60px" }}></i>

                    <img src={img_s} width="40" height="40" className="d-inline-block align-top" alt="" style={{ marginLeft: "20px" }} />
                    <span>stack<strong>overflow</strong></span>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "30px" }}>

                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item " style={{ marginLeft: "10px" }}>
                                <a className="nav-link" href="#"><small>About</small> <span className="sr-only">(current)</span></a>
                            </li>

                            <li className="nav-item" style={{ marginLeft: "10px" }}>
                                <a className="nav-link" href="#"><small>Products</small></a>
                            </li>


                            <li className="nav-item" style={{ marginLeft: "10px" }}>
                                <a className="nav-link" href="#"><small>For Teams</small></a>
                            </li>
                            <li className="nav-item" style={{ marginLeft: "10px" }}>
                                <form className="form-inline my-2 my-lg-0">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text bg-white border-right-0"><i className="fa fa-search" aria-hidden="true"></i></span>

                                        </div>
                                        <input className="form-control mr-sm-2 border-left-0 " size="70" type="search" placeholder="Search..." aria-label="Search" />
                                    </div>
                                    <button className="btn btn-info btn-sm" style={{ background: "#e1ecf4",color:"#39739d", marginLeft: "10px" }} >Login</button>&nbsp;
                                    <button className="btn btn-primary btn-sm" style={{ marginLeft: "10px",color:"#fdfeff" }}>Sign up</button>
                                </form>


                            </li>
                        </ul>

                    </div>
                </nav>



            </div>
        )
    }
}

export default Header