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

    default:
      return state;
  }
};

export default ContactReducer;
