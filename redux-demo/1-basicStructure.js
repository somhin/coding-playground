const redux = require("redux");
const createStore = redux.createStore;

// state
const initialState = {
	numOfCakes: 10,
};

// actions

const BUY_CAKE = "BUY_CAKE";

function buyCake() {
	return {
		type: BUY_CAKE,
		info: "First redux action",
	};
}

// reducers

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		default:
			return state;
	}
};

const store = createStore(reducer);
console.log("initial state ", store.getState());

const unsubscribe = store.subscribe(() =>
	console.log("updated state ", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
