import axios from "axios";

class Apiservice {
  get = async (url) => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BACKEND_SERVER_URL + url
      );
      return { data: response.data };
    } catch (error) {
      console.log("Error ::" + error);
    }
  };
}

export default new Apiservice();
