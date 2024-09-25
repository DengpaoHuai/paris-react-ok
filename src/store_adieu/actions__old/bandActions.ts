import { Band } from "../../types/band.type";

export const SET_ALL = "SET_ALL";
export const CREATE_BAND = "CREATE_BAND";
export const DELETE_BAND = "DELETE_BAND";

export const setAllBands = (payload: Band[]) => {
  console.log(payload);
  return {
    type: SET_ALL,
    payload,
  };
};
