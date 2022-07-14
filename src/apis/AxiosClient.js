import axios from "axios";
import { TOKEN_KEY } from "../constants";

const BASE_URL = "http://139.59.244.105:8000/api";

const token = localStorage.getItem(TOKEN_KEY);
export class AxiosClient {
  constructor(configs) {
    this.instance = axios.create({
      baseURL: `${BASE_URL}${configs.endpoint}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? "Bearer " + token : "",
      },
      ...configs,
    });
  }
  handleResponse(response) {
    return {
      status: response.status,
      data: response.data,
    };
  }
  handleError(error) {
    return {
      error,
    };
  }

  get = async (url, params, configs) => {
    return await this.instance
      .get(url, { params, ...configs })
      .then(this.handleResponse)
      .catch(this.handleError);
  };
  post = async (url, body) => {
    return await this.instance
      .post(url, body)
      .then(this.handleResponse)
      .catch(this.handleError);
  };
  put = async (url, body) => {
    return await this.instance
      .put(url, body)
      .then(this.handleResponse)
      .catch(this.handleError);
  };
  delete = async (url, body) => {
    return await this.instance
      .delete(url, {
        data: body,
      })
      .then(this.handleResponse)
      .catch(this.handleError);
  };
}
