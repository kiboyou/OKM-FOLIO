"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { L } from "@/lib/i18n";
import type { BlogPost } from "@/lib/types";

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const { t, lang } = useLanguage();
  const locale = lang === "fr" ? "fr-FR" : "en-US";

  return (
    <section className="section">
      <div className="container section-title">
        <h2>{t.blog.title}</h2>
        <p>{t.blog.intro}</p>
      </div>
      <div className="container">
        {posts.length === 0 ? (
          <p className="text-center">{t.blog.empty}</p>
        ) : (
          <div className="row gy-4">
            {posts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div
                  className="service-item position-relative d-flex flex-column"
                  style={{ height: "100%" }}
                >
                  {post.cover_image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.cover_image_url}
                      className="img-fluid mb-3"
                      alt={L(post, "title", lang)}
                    />
                  )}
                  <h3>{L(post, "title", lang)}</h3>
                  <p>{L(post, "excerpt", lang)}</p>
                  {post.published_at && (
                    <small className="text-muted mb-3">
                      {t.blog.publishedOn}{" "}
                      {new Date(post.published_at).toLocaleDateString(locale)}
                    </small>
                  )}
                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="btn btn-success see-more-btn"
                    >
                      {t.blog.readMore}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
