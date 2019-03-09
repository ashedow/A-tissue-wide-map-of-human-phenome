let Actions = store => ({
  addTissueItem: (state, data)  => {
    return {
      ...state,
      list: [...state.list, data]
    }
  },

});

export default Actions;