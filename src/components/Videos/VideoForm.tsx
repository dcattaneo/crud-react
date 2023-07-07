import React, {useState, useEffect} from 'react'
import {Video} from './Video'
import * as videoService from './VideoService'
import {toast} from 'react-toastify'
import {useNavigate, useParams} from 'react-router-dom'


type InputChange = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type FormSubmit = React.FormEvent<HTMLFormElement>

const VideoForm = () => {
  const navigate = useNavigate();
  const params = useParams<Record<string, string | undefined>>();
  // console.log(params)


  const initialState = {title: '', description: '', url: ''};

  const [video, setVideo] = useState<Video>(initialState);

  const handleChange = (e: InputChange) => {
    setVideo({...video, [e.target.name]: e.target.value})

  }
  
  const handleSubmit = async (e: FormSubmit)=> {
        e.preventDefault();

        if (!params.id) {
          await videoService.createVideo(video);
          toast.success('New video added');
         setVideo(initialState);

        } else {
          await videoService.updateVideo(params.id, video)
        }
     

       navigate('/')
  };

  const getVideo = async (id:string) => {
    const res =  await videoService.getVideo(id);
    const {title, description, url} =  res.data;
    setVideo({title, description, url})
  };

  useEffect(()=> {
      if (params.id) getVideo(params.id) 
  },[])

  return (
    <div className="grid grid-cols-1 h-screen w-screen py-6 bg-gray-700  pt-[50px]">
      <div className="flex flex-col">
        <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto p-12 rounded-lg">
          <h2 className="text-4xl font-bold text-center text-slate-100">New Video</h2>

          <div className="flex flex-col  text-gray-700 font-semibold  py-2">
            <input className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 text-center focus:outline-none"
              type="text"
              name="title"
              placeholder="Write a title for this video"
              autoFocus
              onChange={handleChange}
              value={video.title}
            />
          </div>

          <div className="flex flex-col text-gray-700 font-semibold  py-2">
            <input className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 text-center focus:outline-none"
              type="text" 
              name="url" 
              placeholder="https://somesite.com"
              onChange={handleChange}
              value={video.url}
               />
          </div>

          <div className="flex flex-col text-gray-700 font-semibold  py-2">
            <textarea className="rounded-lg bg-gray-300 mt-2 p-2 focus:border-blue-500 focus:bg-gray-100 text-center focus:outline-none resize-none"
              name="description"
              placeholder="Write a description "
              onChange={handleChange}
              value={video.description}
            />
          </div>

            {params.id ? 
              <button className="w-full my-5 py-2 bg-teal-600 rounded-lg shadow-lg shadow-teal-500/10
                               hover:shadow-teal-500/5 text-white font-semibold">
                             Edit 
              </button> 
                      :
              <button className="w-full my-5 py-2 bg-teal-600 rounded-lg shadow-lg shadow-teal-500/10
                             hover:shadow-teal-500/5 hover:bg-teal-700 text-white font-semibold">
                          Create
             </button> 

          
          }

          

        </form>
      </div>
    </div>
  );
};

export default VideoForm;
