import axios from "axios";

// Function to send an email
export const sendEmail = async (formData) => {
  try {
    const response = await axios.post(`/api/email`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response && error.response.data.message ? error.response.data.message : error.message);
  }
};

export const fetchCryptosData = async () => {
  try {
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
      params: {
        vs_currency: "usd",
        ids: "ethereum,bitcoin,cardano",
      },
    });

    return response.data;
  } catch (error) {
    console.log("Error fetching cryptocurrency prices:", error);
    return [];
  }
};
