import React, { useState } from 'react';

const VideoPlayer = (searchResults) => {
    return(
       <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/GZdiyMlPQDM?autoplay=1&origin=http://example.com"
        frameborder="0"></iframe>
    )

}

export default VideoPlayer;

// import React from 'react';
// import './videoPlayer.css'

// function VideoPlayer(props) {
//     // let currentVideoId = props.id
//     // let sourceURL= "https://www.youtube.com/embed/"+currentVideoId
//     // console.log(sourceURL)
//     return (
//         <div class="Frame">
//             <iframe class="Frame" src={`https://www.youtube.com/embed/${props.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
//         </div>
//     );
// }
// export default VideoPlayer;