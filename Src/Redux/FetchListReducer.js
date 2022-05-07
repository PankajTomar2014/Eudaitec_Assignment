import {type} from './FetchListAction';

const initialState = {
    list:[],
    error:'',
    isLoading:true,
};

export default function listApiReducer(state = initialState, action) {
    console.log("listApiReducer===>",action);
    switch (action.type) {
        case type.FETCH_DATA_SUCCESS:
          return {...state, list: action.payload,error:'',isLoading:false};
          case type.FETCH_DATA_FAILED:
            return {...state,list:[], error: action.payload,isLoading:false};
        default:
          return state;
      }
} 
