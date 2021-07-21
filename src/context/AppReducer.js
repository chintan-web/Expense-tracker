export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transections: state.transections.filter(
          (transection) => transection.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transections: [action.payload, ...state.transections],
      };

    default:
      return state;
  }
};
