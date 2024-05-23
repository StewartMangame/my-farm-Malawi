import React from "react";
import { Link } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';
import logo from "./logo.png";

function Header() {
  return (
    <div className="@apply flex justify-between items-center text-center bg-[rgb(226,214,214)] mb-[2px_solid_green] px-[1%]">
      <div className="@apply w-[10%] flex items-center justify-between">
        <div className="logo_container_image">
          <img className="@apply w-[70px] h-11" src={logo} alt="logo" />
        </div>
        <p>
          My <span className="@apply text-[green] font-bold">Farm</span>
        </p>
      </div>
      <div className="@apply w-4/5 flex justify-between">
        <ul className="nav_list">
          <Link className="nav_list_iten" to="/markets">
            Markets
          </Link>
          <Link className="nav_list_iten" to="/loans">
            Loans
          </Link>
          <Link className="nav_list_iten" to="/consultation">
            Consultation
          </Link>
          <Link className="nav_list_iten" to="cooperatives">
            Cooperatives
          </Link>
          <Link className="nav_list_iten " to="Subsidy-application">
            Subsidy-application
          </Link>
          <Link className="nav_list_iten " to="login">
            Login
          </Link>
          <Link className="nav_list_iten " to="register">
            Register
          </Link>
        </ul>
        <div className="@apply flex justify-center items-center w-[30%]">
          <div className="@apply w-4/5">
            <input
              className=" @apply w-[95%] h-7 rounded-[10px_0_0_10px]"
              type="text"
              placeholder="search..."
            ></input>
          </div>
          <button className="@apply w-1/5 bg-[rgb(60,201,60)] cursor-pointer rounded-[0_10px_10px_0]"></button>
        </div>
      </div>
    </div>
  );
}
export default Header;
