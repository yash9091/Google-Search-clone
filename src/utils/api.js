import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
    key: "AIzaSyBo6kZq9wtoupERVUpNCHDTFscfVAOmH6I",
    cx: "520473f056e1e4bee",
};

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: { ...params, ...payload },
    });
    return data;
};
