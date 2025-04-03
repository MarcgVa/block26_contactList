import ContactRow from "./ContactRow";

import { useEffect, useState } from "react";


const ContactList = () => {

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
  },[])

  return (
    <table className="table w-fit p-5 m-5 border-4 border-collapse border-blue-600">
      <thead className="table-header-group">
        <tr className="table-row">
          <th
            colSpan={3}
            className = "table-cell text-3xl p-5 text-blue-600 text-shadow-blue-200 text-shadow-sm bg-amber-300 border-4"
          >
            Contact List
          </th>
        </tr>
        <tr className="table-row bg-amber-500 border-3 border-collapse border-blue-600">
          <th className = "table-cell  text-center text-2xl p-4 text-blue-900 text-shadow-blue-200 text-shadow-sm">
            Name
          </th>
          <th
            className = "table-cell text-center  text-2xl p-4 text-blue-900 text-shadow-blue-200 text-shadow-sm">
            Email
          </th>
          <th className ="table-cell text-center  text-2xl p-4 text-blue-900 text-shadow-blue-200 text-shadow-sm">
            Phone
          </th>
        </tr>
      </thead>
      <tbody className="table-row-group">
          <ContactRow contacts={contacts} setContacts={setContacts} />
      </tbody>
    </table>
  );
};

export default ContactList;
