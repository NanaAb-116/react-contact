import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AddNewContact } from "./actions/contactActions";
import { db } from "./firebase/firebaseConfig";
import AddContactsForm from "./components/AddContactsForm";
import Contacts from "./components/Contacts";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  querySnapshot,
} from "firebase/firestore";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const readData = async () => {
      const q = query(collection(db, "contacts"), orderBy("timestamp", "asc"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const contactArr = [];
        querySnapshot.forEach((doc) => {
          contactArr.push(doc.data());
        });
        dispatch(AddNewContact(contactArr));
        console.log(contactArr);
      });
    };

    readData();
  }, []);

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
