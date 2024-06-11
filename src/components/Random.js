import Spinner from "./Spinner";
import UseGif from "../hooks/useGif";

const Random = () => {

    const { gif, loading, fetchData } = UseGif();

    return (
        <div className="w-1/2 bg-green-500 rounded-lg border border-black
     flex flex-col items-center gap-y-5 mt-[15px] ">

            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">
                A Random Gif
            </h1>

            {
                loading ? (<Spinner />) : (<img src={gif} width="450" alt="Gifhy" />)
            }

            <button onClick={() => { fetchData(); }} className="w-10/12 bg-white bg-opacity-50 text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    );
};

export default Random;