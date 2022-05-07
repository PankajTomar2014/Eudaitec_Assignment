import axios from 'axios';
import { timeOut } from '../Utils/CommanFunctions';
import development from '../Services/ApiPort';



// API Calling method for API request for all Api's
export default (async function ApiRequest(method, type, query = {}) {
  
  const url = `${development.apiHost}${method}`;
  console.log("API URL==>",url,'Method=>',type)

  return timeOut(axios
    .get(url)
    .then(({data}) => {
      return data;
    }))
    .catch(error => {
      throw error;
    });
});





