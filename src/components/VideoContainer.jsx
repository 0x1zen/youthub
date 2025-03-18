import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard.jsx";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        setLoading(true);
        try {
            const response = await fetch(YOUTUBE_API);
            const data = await response.json();
            setVideos(data.items);
        } catch (err) {
            setError('Failed to fetch videos');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto">
            {videos.map((item) => (
                <VideoCard key={item.id} info={item} />
            ))}
        </div>
    );
}

export default VideoContainer;
