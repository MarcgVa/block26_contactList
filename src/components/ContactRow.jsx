import React from 'react'

const ContactRow = ({contacts,setContacts }) => {
  return (
    contacts &&
    contacts.map((contact) => {
      return (
        <tr>
          <td className='p-4'>{contact.name}</td>
          <td className='p-4'>{contact.email}</td>
          <td className='p-4'>{contact.phone}</td>
        </tr> 
      )
    }
  ))
}

export default ContactRow