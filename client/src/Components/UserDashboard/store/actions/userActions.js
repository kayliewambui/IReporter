import axios from 'axios';

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://ireporter-server-hb42.onrender.com/api/user');
    dispatch({
      type: 'FETCH_USER_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
