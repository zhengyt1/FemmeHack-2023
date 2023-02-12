import axios from 'axios';

// mockAPI URL
const rootURL = 'https://63e6f305c865e1f2443484c0.mockapi.io/';

export const getEvents = async () => {
    try {
        const response = await axios.get(`${rootURL}/events`);
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
}

export const getEvent = async (eventID) => {
    try {
        const response = await axios.get(`${rootURL}/events/${eventID}`);
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
}

export const deleteEvent = async (eventID) => {
    try {
        const response = await axios.delete(`${rootURL}/events/${eventID}`);
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
}

export const createEvent = async (eventObject) => {
    try {
        const response = await axios.post(
            `${rootURL}/events`, eventObject
        );
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
}

export const getCommentsByEventID = async (eventID) => {
    try {
        const response = await axios.get(`${rootURL}/comments?event=${eventID}`);
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
}

export const createComment = async (commentObject) => {
    try {
        const response = await axios.post(
            `${rootURL}/comments`, commentObject
        );
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
}
export const updateEvent = async (id, value) => {
    try {
        const response = await axios.put(
            `${rootURL}/events/${id}`, value
        );
        return response.data;
    }
    catch (err) {
        console.error(err);
    }
}







