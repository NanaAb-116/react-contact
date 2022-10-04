import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import AddContactsForm from "./components/AddContactsForm";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <AddContactsForm />
          </div>
          <div className="col-md-6">
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
