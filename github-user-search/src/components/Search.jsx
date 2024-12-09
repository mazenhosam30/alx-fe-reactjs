import React, { useState } from "react";
import { fetchAdvancedSearchResults } from "../services/githubService";
import { fetchUsers } from '../services/githubService';

// Example: Call the function with advanced search criteria
const handleSearch = async () => {
  const searchParams = {
    username: 'john',
    location: 'San Francisco',
    minRepos: 10,
  };
  
  try {
    const data = await fetchUsers(searchParams);
    console.log(data); // Display search results
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};


const Search = () => {
    const [formData, setFormData] = useState({
        username: "",
        location: "",
        minRepos: "",
    });
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSearchResults([]);

        try {
            const results = await fetchAdvancedSearchResults(formData);
            setSearchResults(results.items || []);
        } catch (err) {
            setError("An error occurred while fetching search results.");
        } finally {
            setLoading(false);
        }
    };



    return (
        <div className="search-container max-w-4xl mx-auto p-4">
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg space-y-4">
                <div>
                    <label htmlFor="username" className="block font-medium text-gray-700">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter GitHub username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Enter location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="minRepos" className="block font-medium text-gray-700">Minimum Repositories</label>
                    <input
                        type="number"
                        id="minRepos"
                        name="minRepos"
                        placeholder="Enter minimum repository count"
                        value={formData.minRepos}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Search
                </button>
            </form>

            {loading && <p className="text-center text-gray-500 mt-4">Loading...</p>}
            {error && <p className="text-center text-red-500 mt-4">{error}</p>}

            {searchResults.length > 0 && (
                <div className="mt-6 space-y-4">
                    {searchResults.map((user) => (
                        <div
                            key={user.id}
                            className="flex items-center bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition-shadow"
                        >
                            <img
                                src={user.avatar_url}
                                alt={`${user.login}'s avatar`}
                                className="w-16 h-16 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-800">{user.login}</h2>
                                {user.location && (
                                    <p className="text-sm text-gray-600">Location: {user.location}</p>
                                )}
                                <p className="text-sm text-gray-600">
                                    Repositories: {user.public_repos || "Not available"}
                                </p>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-800 text-sm"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
