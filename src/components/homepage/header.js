import React from "react";
import './header.css';
// import logo from './logo.png';
import { Link } from "react-router-dom";
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
                
                    <Link className="nav_list_iten" to="markets">Markets</Link>
                    <Link className="nav_list_iten" to="/loanshome">Loans</Link>
                    <Link className="nav_list_iten" to="consultation ">Consultation</Link>
                    <Link className="nav_list_iten" to="cooperatives">Cooperatives</Link>
                    <Link className="nav_list_iten " to="Subsidy-application">Subsidy-application</Link>
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