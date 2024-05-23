import { NavLink } from "react-router-dom";

const Marketlist = () => {
  return (
    <div>
      <div className="h-[70vh] relative bg-[green]">
        <div style={{ height: "100%" }}>
          <img
            src="https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/407313250_917556193420404_2395591532201109262_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGuZID_R85c7AFld1umqi3ude0ILaJF9nt17QgtokX2e2yYaYspPZqebe8dMY3XRUN2DfWyU0B4pDeaQ7WGLrf-&_nc_ohc=dperfPRAFIIQ7kNvgF9QRoh&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&oh=00_AYCKz5TDSqg1Qw0fMESEOqS9Bl1SJbLZ8lXholxRFsZ7bQ&oe=6652CAEB"
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
        <div className="bg-gray-300 grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-[60px] pt-[10%] pb-[0%] px-[5%]">
          <NavLink to="/admarc">
            <img
              src="https://www.future-agricultures.org/wp-content/uploads/2020/10/Melissa-Cooperman-IFPRI-Malawi-Trader-Feature.jpg"
              alt="Market-images"
              className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
            />
            <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
              <u>ADMARC</u>
            </h2>
          </NavLink>
          <NavLink to="/etgproducts">
            <img
              src="https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/439867295_1010487444127278_2631811285208005899_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFUavzoJucJ4CkIQ-4HPfBEWGrWpVgRYFhYatalWBFgWMwWmiThSCOCDNauoR5QdTZHXBhLcI4PdYEMksIUGRAw&_nc_ohc=Q2wuFR0NXmMQ7kNvgH9qRZO&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&oh=00_AYAtiucSY8AuyGmdkRHuw_CcEmFzau_urCSmSXZ37_HdZA&oe=664BCEBF"
              alt="Market-images"
              className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
            />
            <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
              <u>ETG</u>
            </h2>
          </NavLink>
          <NavLink to="/farmersworld">
            <img
              src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/346027494_1355291938384225_7419107079963108793_n.jpg?stp=dst-jpg_p526x296&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG84MqS0hgcC6u_inF9Fc4uNaU0eT0Boxw1pTR5PQGjHEYyfbazfxFCXHvXwV9WUCkxCcF5sEXBkh1wWjcX8_3u&_nc_ohc=t93GSLsVEjkQ7kNvgEUeF-y&_nc_ht=scontent-jnb2-1.xx&oh=00_AYAaNAElojjf4nspn3ib3Pqk04PI8nYsdXuzk06Ug7F3gg&oe=6651DFE6"
              alt="Market-images"
              className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
            />
            <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
              <u>FARMER'S WORLD</u>
            </h2>
          </NavLink>
        </div>

        <div className="bg-gray-300 justify-center pl-[42%] pt-[3%] p-[1em]">
          <div className="bg-[orange] border w-[200px] h-[60px] items-center rounded-[50%] border-solid border-[green] pt-[0%]">
            <NavLink to="/pricedetails">
              <div className="text-[green] font-[bold]">
                <h1 className="text-center pt-[1em]">SELL YOUR PRODUCTS</h1>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Marketlist;
