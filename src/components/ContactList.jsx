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
    <table className="table-auto border-collapse border-spacing-0 border-amber-300">
      <thead>
        <tr>
          <th
            colSpan={3}
            className="text-3xl text-blue-600 text-shadow-blue-200 text-shadow-sm"
          >
            Contact List
          </th>
        </tr>
        <tr>
          <th className="text-2xl p-4 text-amber-400 text-shadow-amber-200 text-shadow-2xs">
            Name
          </th>
          <th
            className="text-2xl p-4 text-amber-400 text-shadow-amber-200 text-shadow-2xs">
            Email
          </th>
          <th className="text-2xl p-4 text-amber-400 text-shadow-amber-200 text-shadow-2xs">
            Phone
          </th>
        </tr>
      </thead>
      <tbody>
        <ContactRow contacts={contacts} setContacts={setContacts} />
      </tbody>
    </table>
  );
};

export default ContactList;
