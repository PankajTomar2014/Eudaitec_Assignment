import { ApiList } from "../Services/ApiList";
import ApiRequest from "../Services/ApiRequest";

export const type = {
  FETCH_DATA_SUCCESS: 'FETCH_DATA_SUCCESS',
  FETCH_DATA_FAILED: 'FETCH_DATA_FAILED',
};

export const listApiAction = (payload = {}) => async (dispatch) => {   
  try {
    const response = await ApiRequest(ApiList.listApi, 'get');
    dispatch({ type: type.FETCH_DATA_SUCCESS, payload: response.results });
  } catch (error) {
    dispatch({ type: type.FETCH_DATA_FAILED, payload: error.message });
  }
}