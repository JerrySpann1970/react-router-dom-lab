import { useState } from "react"
import MailboxList from "./components/MailboxList/MailboxList"
import NavBar from './components/NavBar/Navbar'
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"
import MailboxForm from "./components/MailboxForm/MailboxForm"
import { Routes, Route } from "react-router"
import "./App.css"

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newMailbox) => {
    newMailbox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailbox]);
  }

  return (
    <>
      <h1>ReactVille Post Office 93637</h1>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<h2>Post Office</h2>} />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
         <Route
          path="/mailboxes/new"
          element={<MailboxForm addBox={addBox} />}
        />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>

    </>
  )
}

export default App