import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';


"https://api.github.com/search/users?q"

/**
 * Fetches users from GitHub based on the query parameters.
 * @param {Object} params - Query parameters including username, location, and minRepos.
 * @returns {Promise} - Axios response promise.
 */
export const fetchUsers = async ({ username, location, minRepos }) => {
  try {
    // Build the query string
    let query = `${username ? `${username} in:login` : ''}`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>${minRepos}`;

    // Make the API request
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users from GitHub:', error);
    throw error;
  }
};
