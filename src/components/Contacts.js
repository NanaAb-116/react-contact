import { useSelector } from "react-redux";
import User from "./User";

function AllContacts({ deleteUser, handleEdit }) {
  const { contacts } = useSelector((store) => store);

  return (
    <>
      <div className="container">
        <div className="row">
          {contacts.map((item, index) => {
            return (
              <User
                key={index}
                contactData={item}
                deleteUser={deleteUser}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllContacts;
