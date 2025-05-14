import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Button from '../ui/Button';

interface ArticleAuthor {
  name: string;
  image: string;
  bio?: string;
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  date?: string;
  excerpt?: string;
}

interface ArticleTag {
  id: string;
  name: string;
  slug: string;
}

export interface ArticleTemplateProps {
  title: string;
  content: string;
  date: string;
  readTime?: string;
  coverImage: string;
  author: ArticleAuthor;
  slug: string;
  excerpt: string;
  category?: string;
  tags?: ArticleTag[];
  relatedPosts: RelatedPost[];
}

const ArticleTemplate = ({
  title,
  content,
  date,
  readTime = '5 دقائق',
  coverImage,
  author,
  slug,
  excerpt,
  category,
  tags = [],
  relatedPosts,
}: ArticleTemplateProps) => {
  const t = useTranslations('common');
  const blog = useTranslations('blog');

  return (
    <article className="bg-[#00022b] text-white">
      {/* Breadcrumbs & Header Section */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={coverImage}
            alt={title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-navy/90 via-primary-navy/80 to-primary-navy/90"></div>
        </div>

        {/* Header Content */}
        <div className="relative container py-16 pt-24">
          {/* Breadcrumbs */}
          <div className="text-sm mb-6 text-gray-300 flex items-center">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              الرئيسية
            </Link>
            <span className="mx-2">&lt;</span>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">
              المدونة
            </Link>
            <span className="mx-2">&lt;</span>
            <span className="text-amber-400 truncate max-w-[250px]">{title}</span>
          </div>

          {/* Category Tag */}
          {category && (
            <div className="mb-4">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                {category}
              </span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
            {title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center text-gray-300 gap-3 mb-6">
            <div className="flex items-center">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ml-2">
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{author.name}</span>
            </div>
            <span className="mx-2 text-gray-500">•</span>
            <span>{date}</span>
            {readTime && (
              <>
                <span className="mx-2 text-gray-500">•</span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  قراءة {readTime}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on large screens */}
          <div className="lg:col-span-2">
            {/* Featured Image for smaller screens */}
            <div className="relative h-[40vh] w-full mb-10 rounded-lg overflow-hidden shadow-lg lg:hidden">
              <Image
                src={coverImage}
                alt={title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h3 className="text-lg font-bold mb-3">الوسوم:</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag.id}
                      href={`/blog/tag/${tag.slug}`}
                      className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h3 className="text-lg font-bold mb-3">شارك المقال:</h3>
              <div className="flex space-x-4 rtl:space-x-reverse">
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://www.eldawlyksa.com/blog/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-facebook hover:opacity-80 transition-opacity"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                
                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?url=https://www.eldawlyksa.com/blog/${slug}&text=${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-twitter hover:opacity-80 transition-opacity"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.eldawlyksa.com/blog/${slug}&title=${encodeURIComponent(title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-linkedin hover:opacity-80 transition-opacity"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title)} https://www.eldawlyksa.com/blog/${slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp hover:opacity-80 transition-opacity"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Author Bio */}
            {author.bio && (
              <div className="mt-8 pt-6 border-t border-gray-800 bg-gray-900/50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ml-4">
                    <Image
                      src={author.image}
                      alt={author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{author.name}</h3>
                    <p className="text-gray-300">{author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar - 1/3 width on large screens */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-8">
              {/* Primary CTA */}
              <div className="rounded-lg bg-gradient-to-r from-primary-navy to-primary-cyan p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-white">
                  تحتاج حلول نقل مبرد؟
                </h3>
                <p className="text-gray-300 mb-4">
                  احصل على أفضل الأسعار والخدمات المتميزة من نبع الخليج للنقل المبرد
                </p>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full text-center"
                  onClick={() => window.location.href = '/contact'}
                >
                  اطلب عرض سعر الآن
                </Button>
              </div>

              {/* Search Bar */}
              <div className="rounded-lg bg-gray-900/50 p-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ابحث في المدونة..."
                    className="w-full bg-gray-800 text-white rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Recent Posts */}
              <div className="rounded-lg bg-gray-900/50 p-6">
                <h3 className="text-xl font-bold mb-4 text-white">أحدث المقالات</h3>
                <ul className="space-y-4">
                  {relatedPosts.slice(0, 3).map((post) => (
                    <li key={post.id} className="border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                      <Link href={`/blog/${post.slug}`} className="group">
                        <h4 className="font-medium text-gray-200 group-hover:text-primary-cyan transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        {post.date && <p className="text-sm text-gray-400 mt-1">{post.date}</p>}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Media Links */}
              <div className="rounded-lg bg-gray-900/50 p-6">
                <h3 className="text-xl font-bold mb-4 text-white">تابعنا</h3>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black hover:bg-gray-800 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-800 hover:bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <div className="bg-gray-900/30 py-16">
          <div className="container">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              مقالات ذات صلة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`}>
                  <div className="bg-gray-900/70 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02] group h-full">
                    <div className="relative h-48 w-full">
                      <Image
                        src={related.coverImage}
                        alt={related.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-white group-hover:text-primary-cyan transition-colors">
                        {related.title}
                      </h3>
                      {related.excerpt && (
                        <p className="text-gray-300 mt-2 line-clamp-2 text-sm">
                          {related.excerpt}
                        </p>
                      )}
                      {related.date && (
                        <p className="text-gray-400 mt-3 text-sm">{related.date}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
};

export default ArticleTemplate; 