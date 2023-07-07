import { Video } from "./Video";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import * as videoService from "./VideoService";
import { Edit, X, Youtube } from "lucide-react";

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <div
      className="md:col-span-1  bg-slate-800  font-bold text-slate-100   shadow-lg p-3
                  rounded-lg border border-gray-700 hover:cursor-pointer hover:transition-colors hover:duration-500 hover:border-teal-600"
    >
      <div className="flex justify-between text-center items-center w-full">
        <div>
          <Youtube className="h-5 w-5" />
        </div>

        <h1 className="p-4 text-center font-bold  text-sm sm:text-sm md:text-base lg:text-base 2xl:text-lg">{video.title}</h1>

        <div className="flex">
          <p
            className="mr-2 hover:text-teal-200"
            onClick={() => navigate(`/update/${video._id}`)}
          >
            <Edit className="h-5 w-5"/>
          </p>
          <p
            className="hover:text-teal-200"
            onClick={() => video._id && handleDelete(video._id)}
          >
            <X className="h-5 w-5" />
          </p>
        </div>
      </div>

      <div className="text-center mx-auto my-auto">
        <div className="rounded-xl border border-teal-900 overflow-hidden">
          <ReactPlayer url={video.url} />
        </div>
       
        <p className="p-4 text-center font-semibold text-xs rounded-xl">
          {video.description}
        </p>
        
      </div>
    </div>
  );
};

export default VideoItem;
