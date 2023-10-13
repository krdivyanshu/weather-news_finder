import React, { useState, useEffect } from 'react'
import axios from "axios";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CircularProgress from '@material-ui/core/CircularProgress';
const TopStories = () => {
    const [news, setNews] = useState([]);


    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "....." : string
    }


    useEffect(async () => {
        try {
            const res = await axios.get("https://gnews.io/api/v4/top-headlines?&country=in&token=e9c933f627e10607abe21df19bf8c188");
            //// console.log(res.data.articles);
            setNews(res.data.articles);
        } catch (error) {
            console.log(error);
        }

    }, []);
    return (
        <div className="px-2 pt-3">
            <p className="h6 fw-bold">TOP STORIES.</p>
            <hr />
            {
                news.map((news) => {
                    return (
                        <div className="news">
                            <p className="h5 bg-danger text-white p-2">{news.source.name}</p>
                            <p className="h6">{news.title}</p>
                            <img src={news.image} className="img-fluid mt-2 mb-2" alt="Sorry Image not available" /><br />
                            <small>{truncate(news.description, 150)}</small>
                            <p className="h6 mt-2">{news.publishedAt}</p>
                            <p className="text-end"><a className="moreButton" target="_blank" href={news.url}>More <ArrowForwardIcon /> </a></p>
                            <hr />
                        </div>
                    )
                }).reverse()
            }
        </div>

    )
}

export default TopStories
