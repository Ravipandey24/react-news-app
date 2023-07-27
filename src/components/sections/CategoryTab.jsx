import React from "react";
import { useDataContext } from "../Contexts/MainContext";
import { LoadingImages } from "../LoadingScreens";
// import Logo from '@'

function CategoryTab() {
  const { categories, loader } = useDataContext();
  return (
    <div className="bg-gray-200 shadow-lg p-4 rounded-md grid gap-4 lg:grid-cols-7 md:grid-cols-4 sm:grid-cols-1 mt-3 mx-4">
      {loader ? (
        <LoadingImages count={7}></LoadingImages>
      ) : (
        categories.map((cat, id) => (
          <figure
            key={id}
            className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
          >
            <a href="#">
              <img
                className="h-40 rounded-lg"
                src={"/category_images/" + cat + ".jpg"}
              />
            </a>
            <figcaption className="absolute px-4 text-bold text-xl text-white font-accent bottom-6 uppercase">
              <p>{cat}</p>
            </figcaption>
          </figure>
        ))
      )}
    </div>
  );
}

export default CategoryTab;
