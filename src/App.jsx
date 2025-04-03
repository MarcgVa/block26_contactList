import ContactList from './components/ContactList'
import Contact from './components/Contact'
import { useState } from 'react'
import './App.css'

function App() {
 
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      <div>
        {selectedContactId ? (
          <Contact
            selectedContactId={selectedContactId}
            setSelectedContactId={setSelectedContactId}
          />
        ) : (
          <ContactList
            setSelectedContactId={setSelectedContactId}
          />
        )}
      </div>
    </>
  );
}

export default App
