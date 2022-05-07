import {SERVER_IP} from './env';
const development = {
  apiHost: `https://${SERVER_IP}/`,
};

const production = {
  apiHost: '',
};
const getEnvVars = () => {
  return development;
};

export default getEnvVars();
