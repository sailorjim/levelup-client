import { getToken } from "../utils/getToken"

export const getAllEvents = () => {
    return fetch("https://levelup-server-3e8eea3dff27.herokuapp.com/events", {
      headers: {
        Authorization: `Token ${getToken()}`
      }
    })
      .then(res => res.json())
  }

  export const getEventById = (id) => {
    return fetch(`https://levelup-server-3e8eea3dff27.herokuapp.com/events/${id}`, {
      headers: {
        Authorization: `Token ${getToken()}`
      }
    })
      .then(res => res.json())
  }

  export const createEvent = (event) => {
    return fetch("https://levelup-server-3e8eea3dff27.herokuapp.com/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
      body: JSON.stringify(event)
    })
      .then(res => res.json())
  }
  export const updateEvent = (updatedEvent, eventId) => {
    return fetch(`https://levelup-server-3e8eea3dff27.herokuapp.com/events/${eventId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
      body: JSON.stringify(updatedEvent)
    })
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .catch(error => console.log(error));
  };
  export const deleteEvent = (id) => {
    return fetch(`https://levelup-server-3e8eea3dff27.herokuapp.com/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${getToken()}`
      }
    }
    )
  }
  export const leaveEvent = (eventId) => {
    return fetch(`https://levelup-server-3e8eea3dff27.herokuapp.com/events/${eventId}/leave`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${getToken()}`
      }
    }
    )
  }
  export const joinEvent = (eventId) => {
    return fetch(`https://levelup-server-3e8eea3dff27.herokuapp.com/events/${eventId}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${getToken()}`
      },
      body: JSON.stringify()
    })
      .then(res => res.json())
  }