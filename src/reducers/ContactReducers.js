let initialStore = {
  contacts: [
    {
      name: "Terry",
      phone: "0209856784",
      location: "Accra",
      id: "1659431731207",
    },
    {
      name: "Ash",
      phone: "0504753457",
      location: "Kumasi",
      id: "1659431734534",
    },
  ],
};

let ContactReducer = (state = initialStore, action) => {
  switch (action.type) {
    case "ADD_NEW_CONTACT":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "DELETE_CONTACT":
      const tempContact = state.contacts.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, contacts: tempContact };
    case "EDIT_CONTACT":
      const temp = state.contacts.map((item) => {
        if (item.id === action.payload.data.id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      return { ...state, contacts: temp };
    default:
      return state;
  }
};

export default ContactReducer;
