import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://obscure-earth-34730.herokuapp.com",
});

export default customAxios;
