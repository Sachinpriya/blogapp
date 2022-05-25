import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { happy } from "../../components/Api";

const LatestStories = () => {
    const [data] = useContext(happy)

    const [load, setLoad] = useState(true)

    return (


        <div className='TheLatestContainer'>
            <p className='mainCategory'>Latest Stories</p>
            <hr className='mainCategoryHr' />
            <hr />
            <div className='TheLatestBox'>
                {data.filter((value) => (load ? (value.id === 51) : (value.id <= 52)) && (value.name === "sports" || value.name === "Health" || value.name === "Business")).map((val) => (
                    <>
                        <Link to={`/article/${val.name}/${val.id}`} className='TheLatestStories'>
                            <p className='title'>{val.title}</p>
                            <p className='body'>{val.description.substring(0, 200)}...</p>
                            <p className='body'><strong>{val.name}</strong>/ {val.publishedAt}</p>
                        </Link>
                
                    </>

                ))}
            </div>
            <div className='btn'>
                <button onClick={() => setLoad(!load)} className='btn'>{(load ? "View More" : "View Less")}</button>
            </div>

        </div>


    );
}


export default LatestStories;