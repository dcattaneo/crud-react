import {useState, useEffect} from 'react';
import {Video} from './Video';
import * as videoService from './VideoService';
import VideoItem from './VideoItem';

const VideoList = () => {

    
    const [videos, setVideos] = useState<Video[]>([]);

    const loadVideos = async ()=> {
       const res = await videoService.getVideos();

     const formattedVideos =  res.data.map(video => {
         return {
            ...video, 
            createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
            updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
         }
      }).sort((a,b)=> b.createdAt.getTime() - a.createdAt.getTime())
       setVideos(formattedVideos);
    };

    useEffect(()=> {
        loadVideos();
        

    },[])

    return ( 
              
          
            <div className="bg-gray-700 h-screen w-full">
            <div className="pt-[80px] gap-6 bg-gray-700 h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center ">
               {videos.map((video)=> {
                  return <VideoItem  key={video._id} video={video} loadVideos={loadVideos}/>


               } )}

            </div>
            </div>
        
        
        
     );
};
 
export default VideoList;