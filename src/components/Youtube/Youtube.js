import Favoris from "./Favoris";

function Youtube() {
    
  const ArrYoutube = JSON.parse(localStorage.getItem("Youtube"));
//   console.log(ArrYoutube);
  return (
    <>
     <h2>Your Youtube last liked videos</h2>
      <div className="Youtube">
       
        {ArrYoutube.map((video) => <Favoris key={video.id} video={video} />)}
      </div>
    </>    
  )
      
 
}

export default Youtube;