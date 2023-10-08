import axios from 'axios';
const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;

export const fetchSections = async () => {
  try {
    const response = await axios.get(`${apiEndpoint}/sections`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
