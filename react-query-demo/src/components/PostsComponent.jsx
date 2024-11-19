import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
};

const PostsComponent = () => {
    const { data, isLoading, isError, error, refetch } = useQuery("posts", fetchPosts);

    "cacheTime", "staleTime", "refetchOnWindowFocus", "keepPreviousData"
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Posts</h2>
            <button onClick={refetch}>Refetch Posts</button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;
