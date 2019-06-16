import axios from 'axios';

export default class ApiClient {
  constructor({ config }) {
    this.apiKey = config.apiKey;
    this.hostName = config.hostName;
  }

  get(opts) {
    const params = {
      appId: this.apiKey,
      ...opts,
    }
    return axios.get(this.hostName, { params })
  } 
}
