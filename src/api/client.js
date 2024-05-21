import axios from "axios";

const client = axios.create({ baseURL: "https://vapi.vnappmob.com" });

export default client;
