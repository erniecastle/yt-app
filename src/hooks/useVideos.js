import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = (defualtSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defualtSearchTerm);
  }, [defualtSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
