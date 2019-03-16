// import createStore from "unistore";

// const initialState = {
//     TissueItem: {},
//     allTissueItems: [
//     {}
//   ]
// };

// export let store = createStore(initialState);

const store = {
  TissueItems: {},
  filter: TODO_FILTERS.SHOW_ALL,
  ...actions
}
export store;