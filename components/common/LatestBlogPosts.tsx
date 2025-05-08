import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPostSummary } from './BlogCard';
import Button from '../ui/Button';

interface LatestBlogPostsProps {
  posts: BlogPostSummary[];
}

const LatestBlogPosts: React.FC<LatestBlogPostsProps> = ({ posts }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-navy mb-4">مقالات ونصائح مفيدة</h2>
          <div className="h-1 w-24 bg-primary-cyan mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            أحدث المقالات والنصائح حول خدمات النقل المبرد وكل ما يهمك في مجال الشحن والتوصيل
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {posts.slice(0, 6).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="relative group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              {/* صورة المقالة مع الخلفية المظلمة */}
              <div className="relative w-full h-64">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00022b] via-[#00022b]/70 to-transparent opacity-90"></div>
                
                {/* العنوان والقسم */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div>
                    {post.category && (
                      <span className="inline-block bg-primary-cyan text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md mb-4">
                        {post.category}
                      </span>
                    )}
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {post.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-white/90">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs">{post.date}</span>
                      </div>
                      
                      <div className="flex items-center text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>دقائق للقراءة {Math.ceil(post.title.length / 100) + 2}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex items-center text-primary-cyan group-hover:text-amber-400 transition-colors text-sm font-medium">
                      <span>اقرأ المزيد</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 transform transition-transform group-hover:translate-x-[-4px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="primary"
            size="lg"
            className="min-w-[200px] inline-flex items-center justify-center"
            onClick={() => window.location.href = '/blog'}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
              <span>زيارة المدونة</span>
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts; 