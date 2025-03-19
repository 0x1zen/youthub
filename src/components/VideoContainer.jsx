import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard , {WithBorderVideoCard} from "./VideoCard.jsx";
import { Link } from "react-router";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const BorderVideoCard=WithBorderVideoCard(VideoCard);
    
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
            {
            videos.map((item) => (
                <Link key={item.id} to={"/watch?v="+item.id}><VideoCard key={item.id} info={item} /></Link>
            ))}
        </div>
    );
}

export default VideoContainer;
