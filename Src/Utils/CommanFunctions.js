import NetInfo from "@react-native-community/netinfo";

export const timeOut = (promise) => {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error('Server Connection Timeout Error!'));
      }, 30000);
      promise.then(resolve, reject);
    });
  };


export const checkInternet = async()=> {
  const internetState = await NetInfo.fetch();
  return internetState.isConnected;
}