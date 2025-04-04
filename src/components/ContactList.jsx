import ContactRow from "./ContactRow";

import { useEffect, useState } from "react";


const ContactList = ({setSelectedContactId }) => {

  const [contacts, setContacts] = useState(null);
  
  

  const getContacts = async () => {
    try {
      const response = await fetch(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
      );
      const json = await response.json();
      if (json.error) {
        throw new Error(json.error.message);
      }

      setContacts(json);

    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getContacts();
  }, [])
  
  return (
    <div className="flex flex-col justify-center items-center mt-40 gap-2 p-6">
      <table className="table w-fit gap-2 justify-center items-center p-5 m-5 border-4 border-collapse border-blue-600 shadow-lg shadow-blue-800">
        <thead className="table-header-group">
          <tr className="table-row bg-blue-300">
            <th
              colSpan={3}
              className="table-cell border-4 text-3xl p-5 text-blue-600 text-shadow-blue-50 text-shadow-md tracking-widest"
            >
              Contact List
            </th>
          </tr>
          <tr className="table-row border-3 bg-blue-200  border-collapse border-blue-600">
            <th className="table-cell  text-center text-2xl p-4 text-blue-900 text-shadow-blue-200 text-shadow-sm tracking-widest">
              Name
            </th>
            <th className="table-cell text-center  text-2xl p-4 text-blue-900 text-shadow-blue-200 text-shadow-sm tracking-widest">
              Email
            </th>
            <th className="table-cell text-center  text-2xl p-4 text-blue-900 text-shadow-blue-200 text-shadow-sm tracking-widest">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="table-row-group">
          <ContactRow
            contacts={contacts}
            setSelectedContactId={setSelectedContactId}
          />
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
