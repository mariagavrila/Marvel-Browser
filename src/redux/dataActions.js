import axios from "axios";

let proxy = "https://europe-west1-marvel-869e2.cloudfunctions.net/api";

// Obtener los heroes
export const getHeroes = (character) => (dispatch) => {
  return axios
    .get(`${proxy}/${character}`)
    .then((res) => {
      console.log(res.data.data.results);
      dispatch({ type: "SET_HEROES", payload: res.data.data.results });
    })
    .catch((err) => {
      //For local testing
      // dispatch({
      //   type: "SET_HEROES",
      //   payload: [
      //     { id: 1011401, name: "H.A.M.M.E.R.", description: "lorem  impsahdfi ahdf s" },
      //     { id: 1011402, name: "H.A.M.M.E.R." },
      //     { id: 1011403, name: "H.A.M.M.E.R." },
      //     { id: 1011404, name: "H.A.M.M.E.R." },
      //     { id: 1011405, name: "H.A.M.M.E.R." },
      //     { id: 1011406, name: "H.A.M.M.E.R." },
      //   ],
      // });
        dispatch({
          type: "FAIL_HEROES",
          payload: "Hero not found! Please try again...",
        });
    });
};