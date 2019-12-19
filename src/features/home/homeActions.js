import axios from "axios";
import { FETCH_TOP, FETCH_RECENT, FETCH_UPCOMING } from "./homeConst";
import {
  asyncActionFinish,
  asyncActionStart,
  asyncActionError
} from "../async/asyncActions";

const proxy = "https://cors-anywhere.herokuapp.com/";

export const loadTop = () => {
  return dispatch => {
    axios({
      url: proxy + "https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "*",
        "user-key": "c90cb5de0b345a2d028c840c4d36d540"
      },
      data:
        "f name, rating, genres.name, cover.url;" +
        "where (rating > 90 & genres.name != null);" +
        "sort rating desc;"
    })
      .then(response => {
        let topGames = response.data;
        dispatch(asyncActionStart());
        dispatch({ type: FETCH_TOP, payload: { topGames } });
        dispatch(asyncActionFinish(topGames));
      })
      .catch(error => {
        console.log(error);
        dispatch(asyncActionError());
      });
  };
};

export const loadRecent = () => {
  let date = parseInt(Date.now() / 1000);
  return dispatch => {
    axios({
      url: proxy + "https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "*",
        "user-key": "c90cb5de0b345a2d028c840c4d36d540"
      },
      data:
        "f name, genres.name, cover.url, first_release_date;" +
        "sort first_release_date desc;" +
        `where (first_release_date < ${date} & cover.url != null & first_release_date != null & genres.name != null);`
    })
      .then(response => {
        let recentGames = response.data;
        dispatch(asyncActionStart());
        dispatch({ type: FETCH_RECENT, payload: { recentGames } });
        dispatch(asyncActionFinish(recentGames));
      })
      .catch(error => {
        console.log(error);
        dispatch(asyncActionError());
      });
  };
};
export const loadUpcoming = () => {
  let date = parseInt(Date.now() / 1000);
  return dispatch => {
    axios({
      url: proxy + "https://api-v3.igdb.com/games",
      method: "POST",
      headers: {
        Accept: "*",
        "user-key": "c90cb5de0b345a2d028c840c4d36d540"
      },
      data:
        "f name, genres.name, cover.url, first_release_date;" +
        "sort first_release_date asc;" +
        `where (first_release_date > ${date} & cover.url != null & first_release_date != null & genres.name != null);`
    })
      .then(response => {
        let upcomingGames = response.data;
        dispatch(asyncActionStart());
        dispatch({ type: FETCH_UPCOMING, payload: { upcomingGames } });
        dispatch(asyncActionFinish(upcomingGames));
      })
      .catch(error => {
        console.log(error);
        dispatch(asyncActionError());
      });
  };
};
