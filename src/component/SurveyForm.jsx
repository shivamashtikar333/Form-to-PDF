import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const SurveyForm = () => {

  const [formData,setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    preferences: {
      option1: false,
      option2: false,
      option3: false,
    }
  })

  const [submitted, setSubmitted] = useState(false);


  const handledownload = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.text('Kaleidoscope Survey Response', 10, 10);

    doc.setFont("helvetica", "normal");
    
    doc.text(`Name: ${formData.name}`, 10, 20);
    doc.text(`Contact: ${formData.contact}`, 10, 30);
    doc.text(`Address:`, 10, 40);
    
    // Wrap the address text
    const splitAddress = doc.splitTextToSize(formData.address, 180); // 180 is the width in units
    doc.text(splitAddress, 10, 50);
    
    doc.text(`Preferences:`, 10, 60 + splitAddress.length * 10);
    Object.keys(formData.preferences).forEach((key, index) => {
      doc.text(`${key}: ${formData.preferences[key] ? 'Yes' : 'No'}`, 10, 70 + splitAddress.length * 10 + index * 10);
    });
  
    doc.save('survey_responses.pdf');
  };

  const handleChange = (e) =>{
    const {name, value, type, checked} = e.target;
    if(type==='checkbox'){
      setFormData((prevData)=>({
        ...prevData,
        preferences:{
          [name]:checked,
        },
      }));
    }
    else{
      setFormData((prevData)=>({
        ...prevData,
        [name]:value,
      }))
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    setSubmitted(true)

  }

  return (
    <div>
      <div className='max-w-md mx-auto p-4 bg-white shadow-lg rounded-md mt-14'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Kaleidoscope Survey </h2>
        {submitted ? (
          <div className='text-center'>
          <p className='text-green-500 font-medium mb-4 text-xl'> Form Submitted Succesfully!</p>
          <button 
          onClick={handledownload}
          className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Download response as PDF
          </button>
          </div>
        ):(
          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Preferences</label>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="option1"
                name="option1"
                checked={formData.preferences.option1}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="option1" className="ml-2 block text-gray-700">Option 1</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="option2"
                name="option2"
                checked={formData.preferences.option2}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="option2" className="ml-2 block text-gray-700">Option 2</label>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="option3"
                name="option3"
                checked={formData.preferences.option3}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="option3" className="ml-2 block text-gray-700">Option 3</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
        )}
      </div>
    </div>
  )
}

export default SurveyForm