import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDataContext, useDataDispatch } from "../Contexts/MainContext";
import { Alert } from "flowbite-react";
import Card from "../Customs/CustomCard";
import { TbError404 } from "react-icons/tb";
import CustomDropdown from "../Customs/CustomDropdown";
import { LoadingCards } from "../LoadingScreens";
import api from "../api";

const sortingOptions = ["relevancy", "popularity", "publishedAt"];
function SearchPage() {
  const { query } = useParams();
  const { block_words, loader } = useDataContext();
  const dispatch = useDataDispatch();
  const [articles, setArticles] = useState([]);
  const [sorting, setSorting] = useState("publishedAt");
  const params = { q: query, sortBy: sorting, language: "en" };

  useEffect(() => {
    const fetchSources = async () => {
      dispatch({ type: "toggle_loader", loader: true });
      try {
        const response = await api.get("/everything", { params });
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
  }, [params.q, params.sortBy]);
  console.log(articles);

  return (
    <>
      {loader ? (
        <>
          <LoadingCards count={6} ></LoadingCards>
        </>
      ) : articles.length ? (
        <>
          <div className="px-4 py-2 flex justify-end">
            <CustomDropdown
              value={sorting}
              options={sortingOptions}
              changeHandler={(text) => setSorting(text)}
            ></CustomDropdown>
          </div>
          <div className="px-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, id) => (
              <Card
                key={id}
                title={article.title}
                description={article.description}
                articleUrl={article.url}
                imageUrl={article.urlToImage}
              >
              </Card>
            ))}
          </div>
        </>
      ) : (
        <NoArticles></NoArticles>
      )}
    </>
  );
}

function NoArticles() {
  return (
    <div className="px-3 py-2">
      <Alert color="failure" icon={TbError404}>
        <span>
          <p className="font-semibold text-xl font-info">
            No search results found!!.
          </p>
        </span>
      </Alert>
    </div>
  );
}

export default SearchPage;
