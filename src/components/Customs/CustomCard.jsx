import React from "react";
import { Card } from "flowbite-react";

function CustomCard({ title, description, imageUrl, articleUrl }) {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={imageUrl}
    >
      <h5 className="text-2xl font-article_title font-bold tracking-tight text-gray-900 dark:text-white">
        <a href={articleUrl} className="hover:underline">
          {title}
        </a>
      </h5>
      <p className="font-normal text-md font-article_title text-gray-700 dark:text-gray-400">
        <span>{description}</span>
      </p>
    </Card>
  );
}

export default CustomCard;
