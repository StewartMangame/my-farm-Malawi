import React, { useState } from 'react';

export default function SubsidyApplication() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    otherName: '',
    email: '',
    item: 'seeds',
    equipment: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const applicationPeriod = {
    start: new Date('2024-06-01'),
    end: new Date('2024-06-30'),
  };

  const currentDate = new Date();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  const isWithinApplicationPeriod = currentDate >= applicationPeriod.start && currentDate <= applicationPeriod.end;
  return (
    <div className="relative min-h-screen bg-green-500 flex items-center justify-center">
      <a href="/" className="absolute top-4 left-4 text-white text-lg font-bold hover:underline">
        My Farm
      </a>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-green-700 mb-4">Subsidy Application</h1>
        {isSubmitted ? (
          <div className="text-green-600">
            You have successfully applied for the subsidy items.
          </div>
        ) : (
          <>
            <p className="text-gray-700 mb-6">
              Apply for seeds, fertilizer, and cheap equipment on subsidy.
            </p>
            <div className="text-gray-600 mb-6">
              <p>Application Period:</p>
              <p>Start: {applicationPeriod.start.toLocaleString()}</p>
              <p>End: {applicationPeriod.end.toLocaleString()}</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="surname">Surname</label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="otherName">Other Name</label>
                <input
                  type="text"
                  id="otherName"
                  name="otherName"
                  value={formData.otherName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700" htmlFor="item">Select Item</label>
                <select
                  id="item"
                  name="item"
                  value={formData.item}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="seeds">Seeds</option>
                  <option value="fertilizer">Fertilizer</option>
                  <option value="equipment">Equipment</option>
                </select>
              </div>
              {formData.item === 'equipment' && (
                <div className="mb-4">
                  <label className="block text-gray-700" htmlFor="equipment">Equipment</label>
                  <input
                    type="text"
                    id="equipment"
                    name="equipment"
                    value={formData.equipment}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition duration-300"
              >
                Apply
              </button>
            </form>
          </>
        )}
      </div>
      
    </div>
  )
}
