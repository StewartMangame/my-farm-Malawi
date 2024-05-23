import React from "react";
import logo from "../homepage/logo.png";
const Footer = () => {
  return (
    <div className="pt-[2%]">
      <div className="flex bg-[green] text-[white]">
        <div className="flex-grow: 1 pt-[1%] pl-[5%]">
          <a href="#">
            {" "}
            <img
              src={logo}
              alt="My App Farm Logo"
              className="w-[50px] h-auto"
            />
            <p className="text-[white] font-[bold]">
              My-Farm Malawi
              <br />A Free Society for Malawians
            </p>
          </a>
        </div>
        <div className="flex-grow: 1 pl-[22%] pt-[2%]">
          <h3 className="font-[bold]">Quick links</h3>
          <ul className="list-none">
            <li>
              <a
                href="https://www.admarc.co.mw"
                className="text-[white] hover:text-orange-500"
              >
                Contact us
              </a>
            </li>
            <li>
              <a
                href="https://www.admarc.co.mw"
                className="text-[white] hover:text-orange-500"
              >
                Our team
              </a>
            </li>
            <li>
              <a
                href="https://www.admarc.co.mw"
                className="text-[white] hover:text-orange-500"
              >
                Our Story
              </a>
            </li>
          </ul>
        </div>
        <div className="flex-grow: 1 pl-[28%] pt-[2%]">
          <h3>Contact Info.</h3>
          <p>
            Malawi My Farm,
            <br />
            P.O. Box 91,
            <br />
            Zomba, Malawi
          </p>
          <p>Follow us Now!!!!</p>
          <div>
            <a href="https://www.facebook.com" className="inline-block mr-2.5">
              <img
                src="https://img.icons8.com/?size=48&id=13912&format=png"
                alt="facebook"
              />
            </a>
            <a href="https://www.twitter.com" className="inline-block mr-2.5">
              <img
                src="https://img.icons8.com/?size=48&id=13963&format=png"
                alt="Twitter"
              />
            </a>
            <a href="https://www.instagram.com" className="inline-block mr-2.5">
              <img
                src="https://img.icons8.com/?size=48&id=32323&format=png"
                alt="instagram"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-[orange] pb-[0%] px-[0%] p-[0.1%]">
        <div className="font-[bold] text-center">
          <p>©2024 My Farm Malawi. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
