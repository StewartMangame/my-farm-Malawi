import React from "react";
import './header.css';
// import logo from './logo.png';
import { NavLink } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';


function Header() {
    return (
        <div className="Header">
            <div className="logo_container_col1">
                <div className="logo_container_image">
                    {/* <img className="log" src={logo} alt="logo" /> */}
                </div>
                <p>My <span>Farm</span></p>
            </div>
            <div className="logo_container_col2">
                <ul className="nav_list">
                
                    <NavLink className="nav_list_iten" to="markets">Markets</NavLink>
                    <NavLink className="nav_list_iten" to="loans">Loans</NavLink>
                    <NavLink className="nav_list_iten" to="consultation ">Consultation</NavLink>
                    <NavLink className="nav_list_iten" to="cooperatives">Cooperatives</NavLink>
                    <NavLink className="nav_list_iten " to="Subsidy-application">Subsidy-application</NavLink>
                </ul>
                <div className="search_container">
                    <div className="search_input_wrapper">
                        <input className="search_input" type="text" placeholder="search..."></input>
                    </div>
                    <button className="search_input_btn">
                        {/* <SearchIcon /> */}
                    </button>
                </div>

            </div>
        </div>
    );
}
export default Header;