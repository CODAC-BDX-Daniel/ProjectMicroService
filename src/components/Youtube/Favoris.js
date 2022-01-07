function Favoris(props){
    const video = props.video.snippet
    console.log(video)
    return (
        <div className="favori">
            <p>{video.channelTitle}</p>
            <p>{video.title}</p>
            <p>{video.publishedAt.substring(0, 10)}</p>
            <img src={video.thumbnails.default.url} alt={video.title} />
        </div>
    )
}

export default Favoris;