import {
  ADD_PLACE,
  SELECT_PLACE,
  DELETE_PLACE,
  DESELECT_PLACE
} from './../actions/types';

const initialState = {
  places: [],
  selectedPlace: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: 'uniq key is: ' + Math.random(),
          name: action.placeName,
          image: {
            uri:
              'https://upload.wikimedia.org/wikipedia/commons/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg'
          }
        })
      };
    case DELETE_PLACE: {
      return {
        ...state,
        places: state.places.filter(element => {
          return element.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
    }
    case SELECT_PLACE: {
      return {
        ...state,
        selectedPlace: state.places.find(element => {
          return element.key === action.placeKey;
        })
      };
    }
    case DESELECT_PLACE: {
      return {
        ...state,
        selectedPlace: null
      };
    }

    default:
      return state;
  }
};
export default reducer;
