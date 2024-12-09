import React, { useState } from "react";
import { fetchUser } from "../services/githubService";

const SearchBar = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const data = await fetchUser(username);
            setUserData(data);
            setError(null);
        } catch (err) {
            setError("User not found");
            setUserData(null);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {userData && (
                <div>
                    <h2>{userData.name}</h2>
                    <p>{userData.bio}</p>
                    <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default SearchBar;
