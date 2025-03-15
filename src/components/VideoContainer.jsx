const VideoContainer= () =>{
    const videos = async()=>{
        const response =await  fetch("https://www.googleapis.com/youtube/v3/videos");
        const data=await response.json();
        console.log(data);
    }
    videos();
    return (
        <div>
            <h1>VideoContainer</h1>
        </div>
    );
}
export default VideoContainer;