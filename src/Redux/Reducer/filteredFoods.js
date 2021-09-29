const FILTEREDFOODS = 'FILTEREDFOODS';

export const INITIAL_STATE = {
  foodCards: [],
};

const filteredFoods = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case FILTEREDFOODS:
    return {
      state,
      foodCards: payload.foodCards,
    };
  default:
    return state;
  }
};

export default filteredFoods;
