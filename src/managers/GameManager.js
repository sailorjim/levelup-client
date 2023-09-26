import { getToken } from "../utils/getToken"

export const getAllGames = () => {
    return fetch("https://levelup-server-3e8eea3dff27.herokuapp.com/games", {
      headers: {
        Authorization: `Token ${getToken()}`
      }
    })
      .then(res => res.json())
  }

  export const createGame = (game) => {
    return fetch("https://levelup-server-3e8eea3dff27.herokuapp.com/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
      body: JSON.stringify(game)
    })
      .then(res => res.json())
  }
  export const getGameById = (id) => {
    return fetch(`https://levelup-server-3e8eea3dff27.herokuapp.com/games/${id}`, {
      headers: {
        Authorization: `Token ${getToken()}`
      }
    })
      .then(res => res.json())
  }
export const getGameTypes = () => {
  return fetch("https://levelup-server-3e8eea3dff27.herokuapp.com/gametypes", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
export const getAllGametypes = () => {
  return fetch("https://levelup-server-3e8eea3dff27.herokuapp.com/gametypes", {
    headers: {
      Authorization: `Token ${getToken()}`
    }
  })
    .then(res => res.json())
}
export const updateGame = (updatedGame, gameId) => {
  return fetch(`https://levelup-server-3e8eea3dff27.herokuapp.com/games/${gameId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${getToken()}`
    },
    body: JSON.stringify(updatedGame)
  })
  .then(res => {
    if (!res.ok) {
      throw Error(res.statusText);
    }
    return res.json();
  })
  .catch(error => console.log(error));
};
export const deleteGame = (id) => {
  return fetch(`https://levelup-server-3e8eea3dff27.herokuapp.com/games/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${getToken()}`
    }
  }
  )
}