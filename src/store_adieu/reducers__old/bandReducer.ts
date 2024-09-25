import { Band } from "../../types/band.type";
import { CREATE_BAND, DELETE_BAND, SET_ALL } from "../actions/bandActions";

type BandType = {
  bands: Band[];
};
const initialState: BandType = {
  bands: [],
};

const bandReducer = (
  state = initialState,
  action: {
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any;
  }
) => {
  switch (action.type) {
    case SET_ALL:
      return {
        ...state,
        bands: action.payload as Band[],
      };
      break;
    case CREATE_BAND:
      break;
    case DELETE_BAND:
      break;
    default:
      return state;
  }
};

export default bandReducer;
