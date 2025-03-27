import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard , {WithBorderVideoCard} from "./VideoCard.jsx";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeQuery } from "../utils/searchQuerySlice.jsx";
const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [filteredVideos,setFilteredVideos]=useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const BorderVideoCard=WithBorderVideoCard(VideoCard);

    const currentQuery = useSelector(store => store.searchQuery);
    
    useEffect(() => {
        getVideos();
    }, []);

    useEffect(() => {
        if (currentQuery.length > 0) {
            const filtered = videos.filter((video) => {
                const { title } = video.snippet.localized;
                const lowerTitle = title.toLowerCase();
                const lowerQuery = currentQuery.toLowerCase();
                return lowerTitle.includes(lowerQuery);
            });
            setFilteredVideos(filtered);
        } else {
            setFilteredVideos(videos); // When query is empty, show all videos
        }
    }, [currentQuery]);

    const getVideos = async () => {
        setLoading(true);
        try {
            const response = await fetch(YOUTUBE_API);
            const data = await response.json();
            setVideos(data.items);
            setFilteredVideos(data.items);
        } catch (err) {
            setError('Failed to fetch videos');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    const dispatch=useDispatch();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    // if(currentQuery.length>0){
    //     setVideos(videos.filter((video)=>{
    //         const {title}=video.snippet.localized;
    //         const lowerTitle=title.toLowerCase();
    //         const lowerQuery=currentQuery.toLowerCase();
    //         return lowerTitle.includes(lowerQuery);
    //     }));
    //     dispatch(removeQuery());
    // }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 overflow-y-auto">
            {
            filteredVideos.map((item) => (
                <Link key={item.id} to={"/watch?v="+item.id}><VideoCard key={item.id} info={item} /></Link>
            ))}
        </div>
    );
}

export default VideoContainer;
