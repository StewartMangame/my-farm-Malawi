import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../homepage/footer";
import Header from "../homepage/header";

const EtgProducts = () => {
  return (
    <div className="bg-[lightgray]">
      <Header />
      <div className="bg-[white]">
        <NavLink to="https://www.etgworld.com/farm-extension-services-malawi.html">
          <img
            src="https://th.bing.com/th/id/OIP.eCFvewiUcdRCRDV6VGeRhwAAAA?rs=1&pid=ImgDetMain"
            alt="ETG logo"
            className="items-center pl-[38%] h-[120px]"
          />
        </NavLink>
        <h1 className="text-[3em] text-[green] font-[bold] text-center">
          AFFORDABLE & RELIABLE PRODUCTS{" "}
        </h1>
      </div>
      <div className="bg-[lightgray] flex justify-between gap-5 px-[3em] py-[1em]">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
          <NavLink to="https://www.etgworld.com/farm-extension-services-malawi.html">
            <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
              <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                <h4 className="text-[white] font-[bold] text-center">
                  PROCESSING MACHINES
                </h4>
              </div>

              <div className="p-[1em]">
                <img
                  src="https://4.imimg.com/data4/NM/JR/MY-4061419/corn-grinding-mill-machine-1000x1000.jpg"
                  alt="Crop Processing"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
          <NavLink to="https://www.etgworld.com/farm-extension-services-malawi.html">
            <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
              <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                <h4 className="text-[white] font-[bold] text-center">
                  FERTILIZERS
                </h4>
              </div>
              <div className="p-[1em]">
                <img
                  src="https://scontent-jnb2-1.xx.fbcdn.net/v/t1.18169-9/10628182_305288013012674_4253292111303363358_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFMPIwSLmWenuqi2dYON0ZLLZTQeoOtNpgtlNB6g602mNwV2ri4AH0JI-3aKXTg96a1DTkykPDgoIZoSc_eI6yZ&_nc_ohc=0TmG5rTEolUQ7kNvgHhReIX&_nc_ht=scontent-jnb2-1.xx&oh=00_AYCHK_kezA8kEAr4xGsktiD4snDdVxIxQO6EglwDziu9lQ&oe=667366F0"
                  alt="Fertilizer"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
          <NavLink to="https://www.etgworld.com/farm-extension-services-malawi.html">
            <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
              <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                <h4 className="text-[white] font-[bold] text-center">
                  PESTICIDES
                </h4>
              </div>

              <div className="p-[1em]">
                <img
                  src="https://th.bing.com/th/id/OIP.D6xBYqsWyNe_tFmkZiwfcQAAAA?w=400&h=400&rs=1&pid=ImgDetMain"
                  alt="Pesticides"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
          <NavLink to="https://www.etgworld.com/farm-extension-services-malawi.html">
            <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
              <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                <h4 className="text-[white] font-[bold] text-center">
                  HYBRID MAIZE SEEDS
                </h4>
              </div>

              <div className="p-[1em]">
                <img
                  src="https://th.bing.com/th/id/OIP.66PyKPJARfanBitM7uvzywHaEZ?rs=1&pid=ImgDetMain"
                  alt="Hybrid maize seeds"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EtgProducts;
