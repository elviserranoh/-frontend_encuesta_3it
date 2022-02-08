import axios from 'axios';

const API_URL = 'https://survey-3it.herokuapp.com/survey';

export const getMusicalStyles = () => {
  return axios
    .get(`${API_URL}/musical/styles`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

export const getResults = () => {
  return axios
    .get(`${API_URL}/answers/statistics`)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

export const vote = async body => {
  try {
    const response = await axios.post(`${API_URL}/vote`, body);
    return response.data;
  } catch ({response}) {
    throw response.data.message;
  }
};
