import User from './User';

function AllUsers({ contactData, deleteUser, handleEdit }) {
  return (
    <>
      <div class='container'>
        <div className='row'>
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

export default AllUsers;
