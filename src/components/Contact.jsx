import { React, useEffect, useState } from 'react'


const Contact = ({ selectedContactId, setSelectedContactId }) => {

  const [contact, setContact] = useState({});
  
  const getContact = async () => {
    try{
      const response = await fetch(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );  
      const json = await response.json();
      
      setContact(json);

      if (json.error) {
        throw new Error(json.error.message);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getContact();
  },[]);


  return (
    <div className="flex flex-col gap-2 mt-40 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 justify-center items-center">
      {Contact && (
        <div className="space-y-2 text-center sm:text-left border rounded-2xl shadow-md shadow-blue-700 px-10 pb-2 justify-center items-center ">
          <div className="space-y-0.5 justify-center items-center">
            <p className="text-lg text-center font-semibold rounded-full p-0.5 m-3 box-decoration-slice bg-linear-to-r from-indigo-600 to-pink-500 px-2 text-white">
              {contact.name}
            </p>
            <p className="text-md font-medium">
              <span className="text-blue-700 font-bold pr-2">Email: </span>
              {contact.email}
            </p>
            <p className="text-md font-medium">
              <span className="text-blue-700 font-bold pr-2">Phone: </span>
              {contact.phone}
            </p>
            <p className="text-md font-medium">
              <span className="text-blue-700 font-bold pr-2">Website: </span>
              <a href={`http://${contact.website}`}>{contact.website}</a>
            </p>
          </div>
          <div className="flex justify-center items-end pt-5 pb-0">
            <button
              className="border rounded-full px-4 border-blue-500 text-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white active:bg-blue-700"
              onClick={() => setSelectedContactId(null)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact