import axios from 'axios'
import { API_URL } from '../../utils/ApiUrl';


export const GetUsers = (account,token) => async (dispatch) => {
  // dispatch({
  //   type: "loader",
  //   payload: true,
  // });

  if(account && token){
    // console.log("accccc in reduc",account)
    await axios.post(API_URL + "users/getUser", {walletAddress:account}, { headers: { "Authorization": `Bearer ${token}` } })
    .then(async (res) => {
      if (res.data.user != null ) {
        // loader=false
        // console.log("iff  s",res.data.user)
        dispatch({
          type: "GETUSER",
          payload: res.data.user,
        });
        // dispatch({
        //   type: "loader",
        //   payload: false,
        // });
      }else{
        // console.log('else')
        // loader=false
        dispatch({
          type: "GETUSER",
          payload: '',
        });
        // dispatch({
        //   type: "loader",
        //   payload: false,
        // });
      }
    })
    .catch((err) => {
      // loader=false
      return false;
    })
  }

};