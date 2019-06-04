// You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this.
let state = [];

function record(order_id) {
  state = [...state, order_id];
  return `${order_id} inserted!`;
}

function get_last(i) {
  return state.slice(i, state.length);
}
