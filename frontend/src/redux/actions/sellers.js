import axios from "axios";
import { server } from "../../server";

// get all sellers --- admin
export const getAllSellers = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllSellersRequest",
    });

    const { data } = await axios.get(`${server}/shop/admin-all-sellers`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllSellersSuccess",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "getAllSellerFailed",
    //   payload: error.response.data.message,
    });
  }
};

// get all agents --- user
export const getAllAgents = () => async (dispatch) => {
  try {
    dispatch({
      type: "getAllAgentsRequest",
    });

    const { data } = await axios.get(`${server}/agents`, {
      withCredentials: true,
    });

    dispatch({
      type: "getAllAgentsSuccess",
      payload: data.sellers,
    });
  } catch (error) {
    dispatch({
      type: "getAllAgentsFailed",
    //   payload: error.response.data.message,
    });
  }
};
