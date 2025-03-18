
const VideoCard = ({ info }) => {
    const { channelTitle, thumbnails, localized } = info?.snippet;
    const { viewCount } = info?.statistics;

    return (
        <div className='m-2 shadow-lg p-4 rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer'>
            <img className='rounded-xl mb-2' src={thumbnails?.medium?.url} alt={localized?.title} />
            <h1 className="text-lg font-bold">{channelTitle}</h1>
            <h3 className="truncate w-52 text-gray-600">{localized?.title}</h3>
            <p className="text-gray-500">{viewCount} Views</p>
        </div>
    );
}

export default VideoCard;
