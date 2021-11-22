type State = {
  name: string;
  email: string;
};

type Action = {
  type: string;
  payload: string;
};

const initialState = {
  name: "",
  email: "",
};

export const userReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "SET_USER": {
    }
    default: {
      return state;
    }
  }
};
