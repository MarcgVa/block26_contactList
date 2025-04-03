import React from 'react'

const ContactRow = ({contacts}) => {
  return (
    contacts &&
    contacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td className='p-4'>{contact.name}</td>
          <td className='p-4'>{contact.email}</td>
          <td className='p-4'>{contact.phone}</td>
        </tr> 
      )
    }
  ))
}

export default ContactRow