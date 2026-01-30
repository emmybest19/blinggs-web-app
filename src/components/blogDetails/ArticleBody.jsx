import React from "react";
import { articles } from "../../lib/data";
import { useParams } from "react-router-dom";

// Article Body Component
export function ArticleBody() {
  const { id } = useParams();
  const article = articles.find((p) => p.id === id);
  return (
    <section className="w-full flex justify-center px-4 pb-16">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg px-6 py-8 sm:px-10 sm:py-12">
        <div className="prose prose-gray max-w-none">
          <p>{article.description}</p>
        </div>
      </div>
    </section>
  );
}
