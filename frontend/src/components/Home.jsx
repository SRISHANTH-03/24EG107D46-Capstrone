import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axiosClient";
import {
  pageWrapper,
  headingClass,
  bodyText,
  cardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  ghostBtn,
  loadingClass,
  mutedText,
} from "../styles/common";

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await api.get("/user-api/articles");
        setArticles(res.data.payload || []);
      } catch (err) {
        setError(err.response?.data?.error || "Unable to load articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="space-y-16">
      <section className={`${pageWrapper} grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center`}>
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0066cc]">MyBlog</p>
          <h1 className={`${headingClass} max-w-2xl`}>
            Publish stories that matter and discover fresh voices every day.
          </h1>
          <p className={bodyText}>
            A clean writing platform for readers, authors, and admins. Write your first article, connect with your audience, and manage your content in one polished experience.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/register" className="bg-[#0066cc] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#004499] transition-colors text-sm inline-flex items-center justify-center">
              Create account
            </Link>
            <Link to="/login" className="text-[#0066cc] font-medium hover:text-[#004499] transition-colors text-sm">
              Already have an account?
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white border border-[#e8e8ed] p-8 shadow-sm">
          <div className="space-y-6">
            <div className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6e6e73]">Fast access</div>
            <p className="text-[#1d1d1f] text-lg leading-relaxed">
              Browse the latest articles, publish as an author, or manage content as an admin—all from a modern dashboard.
            </p>
            <div className="grid gap-4">
              <div className="rounded-3xl bg-[#f5f5f7] p-5">
                <p className="text-sm font-semibold">Flexible author workflows</p>
                <p className={mutedText}>Write, edit, and publish with confidence.</p>
              </div>
              <div className="rounded-3xl bg-[#f5f5f7] p-5">
                <p className="text-sm font-semibold">Reader-friendly layout</p>
                <p className={mutedText}>Enjoy articles with clean type and crisp spacing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${pageWrapper}`}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0066cc]">Featured articles</p>
            <h2 className="text-3xl font-semibold text-[#1d1d1f] mt-3">Stories to inspire your next post.</h2>
          </div>
          <Link to="/register" className={ghostBtn}>
            Join MyBlog
          </Link>
        </div>

        {loading ? (
          <p className={loadingClass}>Loading articles...</p>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : articles.length === 0 ? (
          <p className="text-[#6e6e73]">No articles available yet.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 6).map((article) => (
              <article key={article._id} className={cardClass}>
                <span className={articleMeta}>{article.category || "General"}</span>
                <h3 className={articleTitle}>{article.title}</h3>
                <p className={articleExcerpt}>{article.content.slice(0, 120)}...</p>
                <p className={mutedText}>{new Date(article.createdAt).toLocaleDateString()}</p>
                <Link to={`/article/${article._id}`} className={`${ghostBtn} mt-4 inline-flex items-center`}>
                  Read story →
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
