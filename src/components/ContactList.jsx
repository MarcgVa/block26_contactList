import ContactRow from "./ContactRow";
import { useState } from "react";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];



const ContactList = () => {

  const [contacts, setContacts] = useState(dummyContacts);




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
