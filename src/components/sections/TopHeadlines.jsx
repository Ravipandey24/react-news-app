import React, { useState, useEffect } from "react";
import Card from "../Customs/CustomCard";
import api from "../api";
import { useDataContext, useDataDispatch } from "../Contexts/MainContext";
import { TbArrowNarrowRight } from "react-icons/tb";
import { LoadingCards } from "../LoadingScreens";


function TopHeadlines() {
  const { block_words, loader } = useDataContext();
  const dispatch = useDataDispatch();
  const [articles, setArticles] = useState([]);
  const params = { country: "in" };

  useEffect(() => {
    const fetchSources = async () => {
      dispatch({ type: "toggle_loader", loader: true });
      try {
        const response = await api.get("/top-headlines", { params });
        const all_articles = response.data.articles;
        setArticles(
          all_articles.filter(
            (article) =>
              !block_words.some((word) =>
                String(article.content)
                  .toLowerCase()
                  .includes(word.toLowerCase())
              ) && article.urlToImage !== null
          )
        );
        dispatch({ type: "toggle_loader", loader: false });
      } catch (error) {
        console.error(error);
        dispatch({ type: "toggle_loader", loader: false });
      }
    };
    fetchSources();
  }, []);

  return (
    <div className="rounded-md shadow-lg p-4 mx-3 mt-3 bg-gray-200">
      <div className="flex justify-between">
        <h3 className="text-xl font-bold font-heading leading-none tracking-tight text-gray-900 md:text-3xl dark:text-white">
          Top Headlines in India
        </h3>
        <button className="text-white font-accent bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-md text-sm px-2 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <span className="flex items-center">
            Show More <TbArrowNarrowRight />
          </span>
        </button>
      </div>
      <hr className="h-px my-2 bg-gray-300 border-0 dark:bg-gray-700" />
      {loader ? (
        <LoadingCards count={3}></LoadingCards>
      ) : (
        <div className="grid gap-4 grid-cols-3">
          {articles.slice(0, 3).map((article, id) => (
            <Card
              key={"card" + id}
              description={article.description}
              imageUrl={article.urlToImage}
              articleUrl={article.url}
              title={article.title}
            >
            </Card>
          ))}
        </div>
      )}
      {/* <hr className="h-px mb-2 bg-gray-200 border-0 dark:bg-gray-700" /> */}
      {/* <div>
                    heyy
                </div> */}
      {/* {totalCardSets.map(set => <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               { set.map(article => <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={article.urlToImage}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <p>
                            {article.title}
                        </p>
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <p>
                            {article.description}
                        </p>
                    </p>
                </Card>)}
                </div>)} */}
    </div>
  );
}

export default TopHeadlines;
