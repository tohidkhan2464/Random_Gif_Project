import { useEffect, useState } from "react";
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
console.log("KEY", API_KEY);
console.log("TYPE", typeof(API_KEY));
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
console.log("URL", url);

const useGif = () => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');

    async function fetchData(tag) {
        setLoading(true);

        const { data } = await axios.get( url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    }, []);
    return { gif, loading, fetchData };
};

export default useGif;