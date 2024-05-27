import { useState } from "react";


export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    date: "",
    ctype: "farming",
  });
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have successfully booked an appointment");
  };

  return (
    <div className=  "bg-green-500">
      <p className="text-center text-2xl text-black">BOOKING APPOINTMENT</p>

      <div className="border-r-gray-200">
        <p className="text-center">
          <strong>NOTE: </strong>you will receive email informing you about the time and person you will have discussion with
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <form
          className="flex flex-col gap-3 w-[500px] bg-gray-50 " 
          onSubmit={handleSubmit} 
        >
          <div className=" border border-black p-3 m-4 flex flex-col">
            <label htmlFor="fName" id="fNameLabel" className=" text-lg">
              First Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              value = {FormData.fName}
              onChange={handleChange}
              required
              placeholder="..."
              className=" border border-black rounded p-3"
            />
          </div>

          <div className=" border border-black p-3 m-4 flex flex-col">
            <label htmlFor="lName" id="lNameLabel" className=" text-lg">
              Last Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              value={formData.lName}
              onChange={handleChange}
              required
              placeholder="..."
              className=" border border-black rounded p-3"
            />
          </div>

          <div className=" border border-black p-3 m-4 flex flex-col">
            <label htmlFor="email" id="emailLabel" className=" text-lg">
              Email Address <span className="text-red-800">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="enter valid email"
              className=" border border-black rounded p-3"
            />
          </div>

          <div className=" border border-black p-3 m-4 flex flex-col">
            <label htmlFor="date" id="dateLabel" className=" text-lg">
              choose date for consultation{" "}
              <span className="text-red-800">*</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              required
              placeholder="date for consultation"
              className="border border-black rounded p-3"
            />
          </div>
          <div className=" border border-black p-3 m-4 flex flex-col">
            <label
              htmlFor="consultationtype"
              id="consultationtypelabel"
              className=" text-lg"
            >
              Consultation type
            </label>
            <select 
            name="ctype"
            value={formData.ctype}
            onChange={handleChange}
            required
            className="border border-black rounded p-3 bg-white"
            >
              <option value="farming">animal farming</option>
              <option value="diseases">animal diseases</option>
              <option value="extension">crop extension workers</option>
              <option value="poultry">poultry</option>
            </select>
          </div>
          <div className=" border border-black p-3 m-4 flex flex-col">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-hold py-2 px-4 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
