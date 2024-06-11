import React, { useState } from "react";
import Spinner from "./Spinner";
import UseGif from "../hooks/useGif";

const Tag = () => {

    const [tag, setTag] = useState();
    const { gif, loading, fetchData } = UseGif(tag);

    return (
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black
     flex flex-col items-center gap-y-5 mt-[15px] ">

            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
                Random {tag} Gif
            </h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width="450" alt="Gifhy" />)
            }

            <input
                className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
                onChange={(event) => { setTag(event.target.value); }} value={tag}
            />

            <button onClick={() => { fetchData(tag); }} className="w-10/12 bg-white bg-opacity-50 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    );
};

export default Tag;