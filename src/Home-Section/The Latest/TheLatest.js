import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { happy } from "../../components/Api";


const TheLatest = () => {

    const [data] = useContext(happy);

    return(

        <div className='TheLatestContainer'>
            <p className='mainCategory'>The Latest</p>
            <hr className='mainCategoryHr' />

            <div className='TheLatestBox'>
                {data.filter((value) => (value.id === 51) && (value.name === "Bollywood" || value.name === "sports" || value.name === "Health")).map((val) => (

                    <Link to={`/article/${val.name}/${val.id}`} className='TheLatestContent'>
                        <img src={val.urlToImage} className='TheLatestImg' alt='' />
                        <p className='title'>{val.title}</p>
                        <p className='body'>{val.description.substring(0, 150)}...</p>
                        <p className='body'><strong>{val.name}</strong>/ {val.publishedAt}</p>
                    </Link>
                ))}
            </div>



        </div>


    );
}

export default TheLatest;