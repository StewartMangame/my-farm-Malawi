import { NavLink } from "react-router-dom";
import barner from "../markets/barner-image.jpeg";
import etg from "../markets/etg.jpeg";
import admarc from "../markets/admarc.jpeg";
import farmersworld from "../markets/farmersworld.jpeg";

const Marketlist = () => {
  return (
    <div>
      <div className="h-[70vh] relative bg-[green]">
        <div style={{ height: "100%" }}>
          <img
            src={barner}
            className="w-full h-[inherit] object-cover"
            alt="banner_image"
            preload
          />
        </div>
        <div className="bg-gray-300 justify-center p-[0.7em]">
          <h2 className="text-8xl text-[green] text-center font-[bold] items-center border-b-2 border-b-[green] border-solid">
            Available Markets
          </h2>
        </div>
      </div>
      <div>
        <div className="bg-gray-300 grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-[60px] pt-[10%] pb-[0%] px-[5%] pl-[10%] pr-[10%]">
          <NavLink to="/admarc">
            <img
              src={admarc}
              alt="Market-images"
              className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
            />
            <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
              <u>ADMARC</u>
            </h2>
          </NavLink>
          <NavLink to="/etgproducts">
            <img
              src={etg}
              alt="Market-images"
              className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
            />
            <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
              <u>ETG</u>
            </h2>
          </NavLink>
          <NavLink to="/farmersworld">
            <img
              src={farmersworld}
              alt="Market-images"
              className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
            />
            <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
              <u>FARMER'S WORLD</u>
            </h2>
          </NavLink>
        </div>

        <div className="bg-gray-300 justify-center pl-[42%] pt-[3%] p-[1em]">
          <div className="bg-[orange] border w-[200px] h-[40px] items-center rounded-[6px] border-solid border-[green] pt-[0%]">
            <NavLink to="/pricedetails">
              <div className="text-[green] font-[bold]">
                <h1 className="text-center pt-[.6em]">SELL YOUR PRODUCTS</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Marketlist;
