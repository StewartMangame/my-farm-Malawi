import React from "react";

const Productdetails = () => {
  const products = [
    { name: "Chimanga", price: 2600 },
    { name: "Mpunga", price: 2200 },
    { name: "Nyemba", price: 3400 },
    { name: "Chinangwa", price: 1800 },
    { name: "Mtedza", price: 3400 },
    { name: "Nandolo", price: 1500 },
    { name: "Soya", price: 2800 },
    { name: "Mawere", price: 800 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-[bold] text-[2.5em] text-center text-[green]">
        {" "}
        <img
          src="https://th.bing.com/th/id/OIP.rMyXRPUMXozV-k2r3__AcAHaHq?w=184&h=191&c=7&r=0&o=5&pid=1.7"
          alt="malawi logo"
          className="align-left pl-[38%] h-[120px] pl-[45%]"
        />
        MALAWI GOVERNMENT LEGAL AGRI-PRODUCTS PRICES
      </h1>
      <table className="w-full bg-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-green-300">
            <th className="py-2 px-4 text-left">Product Name</th>
            <th className="py-2 px-4 text-left">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">K {product.price}/kg</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-end">
        <a
          href="https://www.admarc.co.mw"
          className="text-indigo-600 hover:underline"
        >
          View Market Details
        </a>
      </div>
    </div>
  );
};

export default Productdetails;
