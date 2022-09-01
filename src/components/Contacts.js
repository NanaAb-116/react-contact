import User from "./User";

function AllContacts({ contactData, deleteUser, handleEdit }) {
  return (
    <>
      <div className="container">
        <div className="row">
          {contactData.map((item, index) => {
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
