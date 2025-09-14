import React, { useEffect, useState } from "react";
import { getNews } from "./newsapi";
import "./News.css";

const News = ({ category }) => {
  const [newses, setNewses] = useState([]);
  const [error, setError] = useState(false);
  const [errormsg, setErrorMsg] = useState("");

  useEffect(() => {
    getNews(category)
      .then((response) => {
        setNewses(response.articles || []);
        console.log(response.articles);
        setError(false);
        setErrorMsg("");
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError(true);
        setErrorMsg("Something went wrong" || JSON.stringify(error));
      });
  }, [category]);

  return (
    <>
      <div className="card-container">
        {newses.map((news) => (
          <div className="card" style={{ width: "18rem" }} key={news.id}>
            <div className="card-body">
              <img src={news.image} alt="" />
              <h5 className="card-title">
                {news.title.length > 60
                  ? news.title.slice(0, 60) + "..."
                  : news.title}
              </h5>
              <p className="card-text">
                {news.description
                  ? news.description.slice(0, 100) + "..."
                  : "No description available."}
              </p>
              <a href={news.url} className="btn btn-primary">
                More
              </a>
            </div>
          </div>
        ))}
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {errormsg}
        </div>
      )}
    </>
  );
};

export default News;
