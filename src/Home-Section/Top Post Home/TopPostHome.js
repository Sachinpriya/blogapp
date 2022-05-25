import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { happy } from '../../components/Api';


const TopPostHome = () => {

    const [data] = useContext(happy)


    return (
        <div>
            <p className='mainCategory'>Top Post</p>
            <hr className='mainCategoryHr' />
            <div>

                {data.filter((value) => value.id === 31 && value.name === "Bollywood").map((val) => (
                    <div>
                        <Link to={`/article/${val.name}/${val.id}`}>

                            <div className='LatestContainer'>
                                <img src={val.urlToImage} className='LatestImg' alt='' />
                                <div className='flexBox'>
                                    <div>
                                        <p className='blogTitle'>{val.title}</p>
                                        <p className='blogCategory'>{val.name}</p>
                                    </div>
                                    <p className='Latesid'>{val.id}</p>
                                </div>
                            </div>
                            <hr className='blogLine' />
                        </Link>
                    </div>
                ))}


                {data.filter((value) => ((value.id === 51 && value.name === "Bollywood") || (value.id === 51 && value.name === "sports") ||  (value.id === 51 && value.name === "Health"))).map((val) => (
                    <div>
                        <Link to={`/article/${val.name}/${val.id}`}>

                            <div className='SubContainer'>
                                <img src={val.urlToImage} className='SubImg' alt='' />
                                <div>
                                    <p className='blogTitle'>{val.title}</p>
                                    <p className='blogCategory'>{val.name}</p>
                                </div>
                                {/* <p className='LatestId'>{val.id}</p> */}
                            </div>
                            <hr className='blogLine' />
                        </Link>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default TopPostHome;