import createStore from "unistore";

const initialState = {
    TissueItem: {},
    allTissueItems: [
    {}
  ]
};

export let store = createStore(initialState);