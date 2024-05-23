import React from "react";

const Productdetails = () => {
  const products = [
    { name: "Maize", price: 2600 },
    { name: "Rice", price: 2200 },
    { name: "Beans", price: 3400 },
    { name: "Cassava", price: 1800 },
    { name: "G/nuts", price: 3400 },
    { name: "Potatoes", price: 1500 },
    { name: "Soya Beans", price: 2800 },
    { name: "Tobacco", price: 7500 },
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
        MALAWI GOVERNMENT AGRI-PRODUCTS PRICES
      </h1>
      <table className="w-full bg-gray-300 rounded-lg shadow-md">
        <thead>
          <tr className="bg-[green]">
            <th className="py-2 px-4 text-left">Product Name:</th>
            <th className="py-2 px-4 text-left">Price:</th>
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
