import React from "react";

export default function ConsultationPage() {
  return (
    <div className=  "bg-green-500">
      <p className="text-center text-2xl text-black">BOOKING APPOINTMENT</p>
      <div className="flex flex-col items-center justify-center">
        <form className="flex flex-col gap-3 w-[500px] bg-gray-50 ">
          <div className=" border border-black p-3 m-4 flex flex-col">
            <label htmlFor="fName" id="fNameLabel" className=" text-lg">
              First Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
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
            <select className="border border-black rounded p-3 bg-white">
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
              onClick={() => alert("you have successfully book apointment")}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
