import axios from "axios";

const URL = process.env.REACT_APP_API_URL;

function addManuscriptToOverlay(manuscript) {
  return axios.post(`${URL}/cart`, manuscript);
}

function removeFromOverlay(id) {
  return axios.delete(`${URL}/cart/${id}`);
}

export default {
    addManuscriptToOverlay,
    removeFromOverlay
}
