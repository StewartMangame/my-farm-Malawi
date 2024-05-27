import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../homepage/footer";
import Header from "../homepage/header";

const Admarc = () => {
  return (
    <div>
      <Header />
      <div className="bg-[lightgray]">
        <div className="bg-[white]">
          <div className="bg-white">
            <NavLink to="https://www.admarc.co.mw">
              <img
                src="https://th.bing.com/th/id/OIP.zXQHDWwqueL7PZf6sL9dNAHaCy?w=1149&h=433&rs=1&pid=ImgDetMain"
                alt="Admarc logo"
                className="items-center pl-[38%] h-[120px]"
              />
            </NavLink>
          </div>
          <h1 className="text-[3em] text-[green] font-[bold] text-center">
            Unbiased, Robust and Market Intelligence for agricultural Industry{" "}
          </h1>
        </div>
        <div className="bg-[lightgray] flex justify-between gap-5 px-[3em] py-[2em]">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
            <NavLink to="https://www.admarc.co.mw">
              <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
                <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                  <h4 className="text-[white] font-[bold] text-center">
                    SEEDS
                  </h4>
                </div>

                <div className="p-[1em]">
                  <img
                    src="https://pictures-nigeria.jijistatic.com/96600473_MzAwLTQwMC0yMDRiYjU4MDk1.jpg"
                    alt="Seeds"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
            <NavLink to="ahttps://www.admarc.co.mw">
              <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
                <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                  <h4 className="text-[white] font-[bold] text-center">
                    FERTILIZERS
                  </h4>
                </div>
                <div className="p-[1em]">
                  <img
                    src="https://th.bing.com/th/id/R.a0ed58bcc088df775cd1e6cf97c16a84?rik=rIa3aqxd4WUntQ&pid=ImgRaw&r=0"
                    alt="Fertilizer"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
            <NavLink to="https://www.admarc.co.mw">
              <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
                <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                  <h4 className="text-[white] font-[bold] text-center">
                    PESTICIDES
                  </h4>
                </div>

                <div className="p-[1em]">
                  <img
                    src="https://th.bing.com/th/id/R.0c724d01bbce9fd9287a958cac40f8c5?rik=Bn2SNYv%2br9871g&riu=http%3a%2f%2f4.imimg.com%2fdata4%2fWR%2fNC%2fNSDMERP-4956141%2fagriculturepesticide-250x250.png&ehk=mBz4SSyyVYPA7tSrbJq5NeYUnhC%2fjd1MpI8qmro%2f5ms%3d&risl=&pid=ImgRaw&r=0"
                    alt="pesticides"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            </NavLink>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
            <NavLink to="https://www.admarc.co.mw">
              <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
                <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                  <h4 className="text-[white] font-[bold] text-center">
                    TOOLS & IMPLEMENTS
                  </h4>
                </div>

                <div className="p-[1em]">
                  <img
                    src="https://th.bing.com/th/id/OIP.3nJfZiaLlfQebLlLoIvRrAHaFi?rs=1&pid=ImgDetMain"
                    alt="Tools and implements"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Admarc;
