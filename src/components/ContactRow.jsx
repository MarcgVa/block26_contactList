
const ContactRow = ({ contacts }) => {
  
  return (
    contacts &&
    contacts.map((contact, index) => {
      return (
        <tr className={`table-row ${index%2==0? 'bg-gray-200' : null}`} key={contact.id}>
          <td className='table-cell text-center p-4'>{contact.name}</td>
          <td className='table-cell text-center p-4'>{contact.email}</td>
          <td className='table-cell text-center p-4'>{contact.phone}</td>
        </tr> 
      )
    }
  ))
}

export default ContactRow