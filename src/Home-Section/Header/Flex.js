import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { happy } from "../../components/Api";

const Flex = () => {
    
    const [data] =useContext(happy)

    return (

        <div className='topHomeContainer'>
            <div className='topHomeContainer-1'>
                {data.filter((value) => (value.id === 31) && (value.name === "Bollywood")).map((val) => (

                    <Link to={`/article/${val.name}/${val.id}`}>
                        <img src={val.urlToImage} className='topHomeImg1' alt="" />
                        <div className='topHomeContent1'>
                            <p className='topHomeTitle1'>{val.title}</p>
                            <p className='topHomeCat1'>{val.name} / {val.publishedAt}</p>
                        </div>
                    </Link>
                    
                ))}
            </div>


            <div className='topHomeContainer-2'>
                {data.filter((value) => (value.id === 52) && (value.name === "sports" || value.name === "Business")).map((val) => (
                    <div className='box'>
                        <Link to={`/article/${val.name}/${val.id}`}>
                            <img src={val.urlToImage} className='topHomeImg2' alt='' />
                            <div className='topHomeContent2'>
                                <p className='topHomeTitle2'>{val.title.substring(0, 59)}.</p>
                                <p className='topHomeCat2'>{val.name} / {val.publishedAt}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>


     

    );
}

export default Flex;