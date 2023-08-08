import React, { useState, useEffect } from "react";
import api from "../api";
import { useDataContext, useDataDispatch } from "../Contexts/MainContext";
import { TbArrowNarrowRight } from "react-icons/tb";
import Card from "../Customs/CustomCard";
import { LoadingCards } from "../LoadingScreens";

function TopSources() {
  const { block_words, loader, indian_sources } = useDataContext();
  const dispatch = useDataDispatch();
  const [sourceArticles, setSourceArticles] = useState({});
  const params = { country: "in" };

  useEffect(() => {
    const fetchSources = async () => {
      dispatch({ type: "toggle_loader", loader: true });
      try {
        const response = await api.get("/top-headlines/sources", { params });
        const all_sources = response.data.sources;
        dispatch({
          type: "update_indian_sources",
          indian_sources: all_sources,
        });
        dispatch({ type: "toggle_loader", loader: false });
      } catch (error) {
        console.error(error);
        dispatch({ type: "toggle_loader", loader: false });
      }
    };
    fetchSources();
  }, []);

  useEffect(() => {
    const data = {};
    const fetchArticles = async (source) => {
      dispatch({ type: "toggle_loader", loader: true });
      try {
        const response = await api.get("/top-headlines", {
          params: { sources: source.id },
        });
        const all_articles = response.data.articles;
        data[source.name] = all_articles.filter(
          (article) =>
            !block_words.some((word) =>
              String(article.content).toLowerCase().includes(word.toLowerCase())
            ) && article.urlToImage !== null
        );
        setSourceArticles(data);
        dispatch({ type: "toggle_loader", loader: false });
      } catch (error) {
        console.error(error);
        dispatch({ type: "toggle_loader", loader: false });
      }
    };
    indian_sources.forEach((source) => fetchArticles(source));
  }, [indian_sources]);
  return (
    <>
      <div className="flex justify-between rounded-md shadow-lg p-4 mx-3 mt-3 bg-gray-200">
        <h3 className="text-xl font-bold font-heading leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">
          Top Sources of India
        </h3>
        <button className="text-white font-accent bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <span className="flex items-center">
            Show More <TbArrowNarrowRight />
          </span>
        </button>
      </div>
      {loader ? (
        <div className="rounded-md shadow-lg p-4 mx-3 mt-3 bg-gray-200">
          <LoadingCards count={3}></LoadingCards>
        </div>
      ) : (
        Object.entries(sourceArticles).map(
          ([source, articles], id) =>
            articles.length !== 0 && (
              <div
                key={"wrapper" + id}
                className="rounded-md shadow-lg p-4 mx-3 mt-3 bg-gray-200"
              >
                <div className="flex justify-center">
                  <h3 className="text-md font-medium font-sub_heading leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">
                    {source}
                  </h3>
                </div>
                <hr className="h-px my-2 bg-gray-300 border-0 dark:bg-gray-700" />
                <div className="grid gap-4 grid-cols-3">
                  {articles.slice(0, 3).map((article, id) => (
                    <Card
                      key={"card" + id}
                      description={article.description}
                      imageUrl={article.urlToImage}
                      articleUrl={article.url}
                      title={article.title}
                    ></Card>
                  ))}
                </div>
              </div>
            )
        )
      )}
    </>
  );
}

export default TopSources;
