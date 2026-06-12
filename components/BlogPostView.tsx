"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { L } from "@/lib/i18n";
import Markdown from "./Markdown";
import type { BlogPost } from "@/lib/types";

export default function BlogPostView({ post }: { post: BlogPost }) {
  const { t, lang } = useLanguage();
  const locale = lang === "fr" ? "fr-FR" : "en-US";

  return (
    <main className="main">
      <div className="page-title">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">{L(post, "title", lang)}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/blog">{t.blog.title}</Link>
              </li>
              <li className="current">{L(post, "title", lang)}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {post.cover_image_url && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.cover_image_url}
              className="img-fluid mb-4"
              alt={L(post, "title", lang)}
            />
          )}
          {post.published_at && (
            <p className="text-muted">
              {t.blog.publishedOn}{" "}
              {new Date(post.published_at).toLocaleDateString(locale)}
            </p>
          )}
          <div className="portfolio-description">
            <Markdown content={L(post, "content", lang)} />
          </div>
          <div className="mt-4">
            <Link href="/blog" className="btn btn-success see-more-btn">
              {t.blog.backToBlog}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
