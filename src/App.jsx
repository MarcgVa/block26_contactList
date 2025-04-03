import ContactList from './components/ContactList'
import Contact from './components/Contact'
import { useState } from 'react'
import './App.css'

function App() {
 
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <div>
        <ContactList />
      </div>
    </>
  );
}

export default App
