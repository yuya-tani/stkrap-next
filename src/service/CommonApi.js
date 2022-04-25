import axios from "axios";

export const baseApiUrl = "https://asia-northeast2-stk-rap.cloudfunctions.net";

export const getApi = (url) => axios.get(url).then((res) => res.data);
export const postApi = (url, data, option) => axios.post(url, data, { ...option }).then((res) => res.data);
