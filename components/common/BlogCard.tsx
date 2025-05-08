import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';

export interface BlogPostSummary {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  category?: string;
  readingTime?: number;
  author?: {
    name: string;
    image: string;
  };
}

interface BlogCardProps {
  post: BlogPostSummary;
  className?: string;
}

const BlogCard = ({ post, className }: BlogCardProps) => {
  const t = useTranslations('blog');

  const readingTime = post.readingTime || Math.floor(Math.random() * 8) + 3;

  return (
    <Link href={`/blog/${post.slug}`}>
      <article 
        className={clsx(
          "relative rounded-xl shadow-md overflow-hidden transition-all duration-300 h-[280px]",
          "hover:shadow-xl hover:scale-[1.03] group",
          className
        )}
      >
        {/* صورة الخلفية */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* طبقة التدرج اللوني */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/95 via-primary-navy/70 to-transparent"></div>
        
        {/* محتوى البطاقة */}
        <div className="absolute inset-0 p-5 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            {/* فئة المقال - تحسين وضوح التصنيف */}
            {post.category && (
              <span className="bg-primary-cyan text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md backdrop-blur-sm">
                {post.category}
              </span>
            )}
          </div>
          
          <div className="text-white mt-auto">
            {/* عنوان المقال */}
            <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary-cyan transition-colors">
              {post.title}
            </h2>
            
            {/* تفاصيل المقال */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-primary-cyan"></span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-cyan ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readingTime} دقائق للقراءة
                </span>
              </div>
              <div className="text-primary-cyan group-hover:text-white transition-colors text-sm font-medium flex items-center">
                اقرأ المزيد
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform transition-transform group-hover:translate-x-[-4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard; 