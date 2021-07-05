import { HYDRATE } from "next-redux-wrapper";

export const Types = {
  ADD_ITEM: "cart/ADD_ITEM",
  REMOVE_ITEM: "cart/REMOVE_ITEM",
};

// Reducer

const initialState = {
  items: [],
  total: 0,
};

export default function reducer(state = initialState, action) {
  let items;
  let item;
  let newItem;

  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case Types.ADD_ITEM:
      item = action.payload;

      newItem = undefined;
      newItem = state.items.find((i) => i.id === item.id);

      if (!newItem) {
        item.quantity = 1;

        return {
          ...state,
          items: [...state.items, item],
          total: state.total + item.price,
        };
      } else {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === newItem.id
              ? Object.assign({}, item, { quantity: item.quantity + 1 })
              : item
          ),
          total: state.total + item.price,
        };
      }
    case Types.REMOVE_ITEM:
      item = action.payload;
      newItem = undefined;
      newItem = state.items.find((i) => i.id === item.id);
      if (newItem.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === newItem.id
              ? Object.assign({}, item, { quantity: item.quantity - 1 })
              : item
          ),
          total: state.total - item.price,
        };
      } else {
        items = [...state.items];
        const index = items.findIndex((i) => i.id === newItem.id);

        items.splice(index, 1);

        return {
          ...state,
          items: items,
          total: state.total - item.price,
        };
      }
    default:
      return state;
  }
}

// Action Creators

export function add_item(item) {
  return {
    type: Types.ADD_ITEM,
    payload: item,
  };
}

export function remove_item(item) {
  return {
    type: Types.REMOVE_ITEM,
    payload: item,
  };
}
