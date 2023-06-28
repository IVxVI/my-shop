function reducer(state, action) {
  if (action.type === 'incremented_qty') {
    return {
      qty: state.qty + 1
    };
  } else if (action.type === 'decremented_qty') {
    return {
      qty: state.qty - 1
    };
  }
  throw new Error('Unknown action');
}

export default reducer;