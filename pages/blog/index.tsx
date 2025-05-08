import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Layout from '../../components/layout/Layout';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../../components/common/Seo';
import BlogCard, { BlogPostSummary } from '../../components/common/BlogCard';
import TrustStats from '../../components/common/TrustStats';
import { getMessages } from '../../lib/getMessages';
import { BreadcrumbJsonLd } from 'next-seo';

interface BlogProps {
  posts: BlogPostSummary[];
  featuredPosts: BlogPostSummary[];
  categories: string[];
}

export default function Blog({ posts, featuredPosts, categories }: BlogProps) {
  const t = useTranslations('blog');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPostSummary[]>(posts);
  
  // Lazy loading state
  const [visiblePosts, setVisiblePosts] = useState<BlogPostSummary[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const postsPerBatch = 6; // Number of posts to load at once
  const observer = useRef<IntersectionObserver>();
  const lastPostElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMorePosts();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);
  
  // Filter posts when search query changes
  useEffect(() => {
    let result = posts;
    
    // Filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter((post) => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(result);
    setVisiblePosts([]); // Reset visible posts when filter changes
    setHasMore(true); // Reset hasMore flag
    loadMorePosts(true); // Load first batch immediately
  }, [searchQuery, posts]);
  
  // Function to load more posts
  const loadMorePosts = useCallback((initial = false) => {
    setLoading(true);
    // Simulate network delay
    setTimeout(() => {
      const currentLength = initial ? 0 : visiblePosts.length;
      const nextBatch = filteredPosts.slice(currentLength, currentLength + postsPerBatch);
      
      if (initial) {
        setVisiblePosts(nextBatch);
      } else {
        setVisiblePosts(prev => [...prev, ...nextBatch]);
      }
      
      setHasMore(currentLength + nextBatch.length < filteredPosts.length);
      setLoading(false);
    }, 500);
  }, [filteredPosts, visiblePosts.length]);
  
  return (
    <Layout>
      <Seo 
        pageTitle={t('title')}
        description={t('metaDescription')}
        canonicalUrl="https://www.nabaaalkhaleej.com/blog"
      />
      
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: 'https://www.nabaaalkhaleej.com',
          },
          {
            position: 2,
            name: t('title'),
            item: 'https://www.nabaaalkhaleej.com/blog',
          },
        ]}
      />
      
      {/* Global Styles */}
      <GlobalStyle />
      
      {/* Enhanced Blog Header with Prominent Image */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Main Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/blog/نقل_مبرد.png"
            alt="نقل مبرد - نبع الخليج"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Overlay Gradient - Less Opacity */}
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(to bottom, rgba(0,2,43,0.7) 0%, rgba(0,2,43,0.5) 100%)',
        }}></div>
        
        {/* Content Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 shadow-text">
              {t('title')}
            </h1>
            <div className="w-32 h-2 bg-primary-cyan mx-auto mb-8"></div>
            <p className="text-white text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto shadow-text">
              {t('description')}
            </p>
            
            {/* Search Bar */}
            <div className="mt-10 relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="ابحث في المدونة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-6 pr-12 rounded-full bg-white/90 backdrop-blur-sm text-right focus:outline-none focus:ring-2 focus:ring-primary-cyan shadow-lg"
              />
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-primary-navy">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      {/* Featured Articles Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary-navy mb-8 text-right">المقالات المميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* المقال الرئيسي (الكبير) في القسم المميز */}
              <div 
                className="relative overflow-hidden rounded-xl shadow-lg md:col-span-2 md:row-span-2 h-[500px] group"
              >
                <div className="absolute inset-0">
                  <Image
                    src={featuredPosts[0].coverImage}
                    alt={featuredPosts[0].title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-8 w-full">
                  {featuredPosts[0].category && (
                    <span className="bg-primary-cyan text-white text-sm font-semibold px-4 py-1 rounded-full mb-4 inline-block">
                      {featuredPosts[0].category}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-3">{featuredPosts[0].title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-white/80 text-sm">{featuredPosts[0].date}</span>
                    <Link href={`/blog/${featuredPosts[0].slug}`} className="text-primary-cyan hover:text-white transition-colors">
                      اقرأ المزيد
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* المقالات الثانوية في القسم المميز */}
              {featuredPosts.slice(1).map((post) => (
                <Link 
                  key={post.id} 
                  href={`/blog/${post.slug}`}
                  className="relative overflow-hidden rounded-xl shadow-lg h-[240px] group block"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/90 via-primary-navy/50 to-transparent"></div>
                  <div className="absolute bottom-0 right-0 p-5 w-full">
                    {post.category && (
                      <span className="bg-primary-cyan text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
                        {post.category}
                      </span>
                    )}
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-white/80 text-sm">{post.date}</span>
                      <span className="text-primary-cyan group-hover:text-white transition-colors text-sm">
                        اقرأ المزيد
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Trust Stats Section */}
      <TrustStats />
      
      {/* "كل المقالات" Section - Replaces the Category Filter */}
      <section className="py-10 bg-white border-b">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-navy mb-3">كل المقالات</h2>
            <p className="text-gray-600">استكشف مجموعة متنوعة من المقالات والأدلة حول خدمات النقل المبرد واللوجستيات في المملكة</p>
          </div>
        </div>
      </section>
      
      {/* Main Blog Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {filteredPosts.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {visiblePosts.map((post, index) => {
                      // Check if this is the last post to add a ref for infinite scroll
                      if (index === visiblePosts.length - 1) {
                        return (
                          <div key={post.id} ref={lastPostElementRef}>
                            <BlogCard post={post} />
                          </div>
                        );
                      } else {
                        return <BlogCard key={post.id} post={post} />;
                      }
                    })}
                  </div>
                  
                  {/* Loading indicator */}
                  {loading && (
                    <div className="mt-8 text-center">
                      <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary-navy border-solid border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
                      <p className="mt-2 text-gray-600">جاري تحميل المزيد من المقالات...</p>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <Image 
                    src="/images/blog/no-results.svg" 
                    alt="لا توجد نتائج"
                    width={150}
                    height={150}
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">لا توجد مقالات</h3>
                  <p className="text-gray-500">لا توجد مقالات تطابق بحثك. جرّب كلمات بحث أخرى أو تصفّح جميع المقالات.</p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="mt-6 px-8 py-3 bg-primary-navy text-white rounded-lg hover:bg-primary-cyan transition-colors"
                  >
                    عرض جميع المقالات
                  </button>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Search in Blog */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-primary-navy mb-4 text-right">البحث في المدونة</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="ابحث عن مقال..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-cyan text-right"
                    />
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Popular Posts - Improved */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-primary-navy mb-5 text-right">الأكثر قراءة</h3>
                  <div className="space-y-5">
                    {posts.slice(0, 5).map((post, index) => (
                      <Link 
                        href={`/blog/${post.slug}`} 
                        key={post.id}
                        className="flex gap-4 group"
                      >
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                            <span className="text-white text-xs font-medium">قراءة المزيد</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <span className="text-xs text-primary-cyan font-medium bg-primary-cyan/10 px-2 py-1 rounded-full">#{index + 1}</span>
                          <h4 className="font-medium text-primary-navy group-hover:text-primary-cyan transition-colors line-clamp-2 mt-1">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">{post.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                
                {/* Authors Section */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-primary-navy mb-5 text-right">الكتّاب</h3>
                  <div className="space-y-4">
                    {[
                      { name: "سعود العتيبي", image: "/images/blog/author/Saud_Alotaibi.png", role: "خبير النقل المبرد" },
                      { name: "نورة الصبيحي", image: "/images/blog/author/Noura_Alsobaihi.png", role: "متخصصة اللوجستيات" },
                      { name: "عبدالرحمن القحطاني", image: "/images/blog/author/Abdulrahman Alqahtani.png", role: "مدير العمليات" }
                    ].map((author, index) => (
                      <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-cyan">
                          <Image
                            src={author.image}
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-primary-navy">{author.name}</h4>
                          <p className="text-xs text-gray-500">{author.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Categories - Enhanced */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-primary-navy mb-5 text-right">التصنيفات</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSearchQuery('')}
                      className={`flex items-center justify-between w-full p-3 rounded-lg transition-all bg-primary-navy text-white`}
                    >
                      <span className="text-sm font-medium">جميع المقالات</span>
                      <span className={`text-xs px-2 py-1 rounded-full bg-white/20 text-white`}>
                        {posts.length}
                      </span>
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSearchQuery(category)}
                        className={`flex items-center justify-between w-full p-3 rounded-lg transition-all hover:bg-gray-50 text-gray-700`}
                      >
                        <span className="text-sm font-medium">{category}</span>
                        <span className={`text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600`}>
                          {posts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Tags Cloud */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                  <h3 className="text-xl font-bold text-primary-navy mb-5 text-right">الوسوم</h3>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {[
                      "النقل المبرد", "شاحنات التبريد", "سلسلة التبريد", "نقل الأغذية", 
                      "اللوجستيات", "نقل الأدوية", "التخزين المبرد", "النقل اللوجستي",
                      "شركات النقل", "نقل اللحوم", "المملكة", "نقل المواد الغذائية"
                    ].map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-block text-xs bg-gray-100 hover:bg-primary-navy hover:text-white px-3 py-1 rounded-full cursor-pointer transition-colors"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA Box - Enhanced */}
                <div className="bg-primary-navy rounded-xl p-6 text-center relative overflow-hidden shadow-lg">
                  <div className="absolute inset-0 opacity-10">
                    <Image 
                      src="/images/blog/نقل_مبرد.png" 
                      alt="نقل مبرد" 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 relative z-10">احصل على خدمات النقل المبرد</h3>
                  <p className="text-white/80 mb-6 relative z-10">نوفر لك أفضل خدمات النقل المبرد بين مدن المملكة</p>
                  <div className="space-y-3">
                    <Link 
                      href="/contact" 
                      className="block w-full bg-primary-cyan hover:bg-white hover:text-primary-navy text-white font-medium py-3 px-6 rounded-lg transition-colors relative z-10"
                    >
                      تواصل معنا الآن
                    </Link>
                    <Link 
                      href="/services" 
                      className="block w-full bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium py-3 px-6 rounded-lg transition-colors relative z-10"
                    >
                      استكشف خدماتنا
                    </Link>
                  </div>
                </div>
                
                {/* Download Guide CTA */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 relative overflow-hidden shadow-md border border-blue-200">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-primary-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-lg font-bold text-primary-navy mb-3">دليل اختيار شركة النقل المبرد</h3>
                    <p className="text-gray-600 text-sm mb-5">حمّل الدليل المجاني لاختيار أفضل شركة نقل مبرد تناسب احتياجاتك</p>
                    <button className="w-full bg-primary-navy hover:bg-primary-cyan text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                      تحميل الدليل المجاني
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-navy mb-4">اشترك في النشرة البريدية</h2>
            <p className="text-gray-600 mb-8">احصل على أحدث المقالات والنصائح حول النقل المبرد مباشرة إلى بريدك الإلكتروني</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="flex-1 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-cyan text-right"
              />
              <button className="px-6 py-3 bg-primary-navy text-white rounded-lg hover:bg-primary-cyan transition-colors">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// Add Shadow Text CSS Class
export const GlobalStyle = () => (
  <style jsx global>{`
    .shadow-text {
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  `}</style>
);

export const getStaticProps: GetStaticProps = async ({ locale = 'ar' }) => {
  const messages = await getMessages(locale, ['common', 'blog']);
  
  // Author data
  const authors = [
    { name: "سعود العتيبي", image: "/images/blog/author/Saud_Alotaibi.png" },
    { name: "نورة الصبيحي", image: "/images/blog/author/Noura_Alsobaihi.png" },
    { name: "عبدالرحمن القحطاني", image: "/images/blog/author/Abdulrahman Alqahtani.png" }
  ];
  
  // تحديد أشهر السنة بالعربية
  const arabicMonths = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  
  // تعريف فئات المقالات
  const categories = ['النقل المبرد', 'نصائح ومعلومات', 'الخدمات اللوجستية'];
  
  // New blog posts data with specific image paths
  const articles = [
    { arabicTitle: 'أفضل شركة نقل مبرد في السعودية: مقارنة بين الخدمات والأسعار', blogUrl: '/blog/best_refrigerated_transport_company_in_saudi_arabia', imagePath: '/images/blog/best_refrigerated_transport_company_in_saudi_arabia.jpeg' },
    { arabicTitle: 'كيف تختار شركة نقل مبرد موثوقة في الرياض؟', blogUrl: '/blog/how_to_choose_reliable_refrigerated_transport_in_riyadh', imagePath: '/images/blog/how_to_choose_reliable_refrigerated_transport_in_riyadh.jpeg' },
    { arabicTitle: 'أهمية التبريد في نقل الأدوية واللقاحات داخل المملكة', blogUrl: '/blog/importance_of_cold_chain_in_pharma_transport_saudi', imagePath: '/images/blog/importance_of_cold_chain_in_pharma_transport_saudi.jpeg' },
    { arabicTitle: 'شروط نقل اللحوم المجمدة في السعودية ومواصفات الدينات', blogUrl: '/blog/frozen_meat_transport_requirements_in_saudi_arabia', imagePath: '/images/blog/frozen_meat_transport_requirements_in_saudi_arabia.jpeg' },
    { arabicTitle: 'هل تحتاج إلى شاحنة تبريد خاصة؟ متى يجب استئجارها؟', blogUrl: '/blog/when_to_rent_a_refrigerated_truck_in_saudi_arabia', imagePath: '/images/blog/when_to_rent_a_refrigerated_truck_in_saudi_arabia.png' },
    { arabicTitle: 'ما الفرق بين النقل المبرد والنقل المجمد؟ ولماذا يهم؟', blogUrl: '/blog/difference_between_chilled_and_frozen_transport', imagePath: '/images/blog/difference_between_chilled_and_frozen_transport.jpeg' },
    { arabicTitle: 'خدمة تتبع الشحنات المبردة: كيف تعمل وما فوائدها؟', blogUrl: '/blog/how_cold_chain_tracking_works_and_its_benefits', imagePath: '/images/blog/how_cold_chain_tracking_works_and_its_benefits.jpg' },
    { arabicTitle: 'توصيل المنتجات الحساسة للحرارة في جدة: الحلول المتوفرة', blogUrl: '/blog/temperature_sensitive_delivery_solutions_in_jeddah', imagePath: '/images/blog/temperature_sensitive_delivery_solutions_in_jeddah.jpeg' },
    { arabicTitle: 'دليلك لاختيار أفضل دينات مبردة في الدمام', blogUrl: '/blog/best_refrigerated_trucks_for_delivery_in_dammam', imagePath: '/images/blog/best_refrigerated_trucks_for_delivery_in_dammam.jpg' },
    { arabicTitle: '5 أخطاء شائعة في نقل البضائع المبردة وكيف تتجنبها', blogUrl: '/blog/common_mistakes_in_cold_chain_shipping_saudi', imagePath: '/images/blog/common_mistakes_in_cold_chain_shipping_saudi.jpeg' },
    { arabicTitle: 'مميزات شركات النقل المبرد التي تعمل بالعقود الشهرية', blogUrl: '/blog/monthly_refrigerated_transport_contracts_saudi', imagePath: '/images/blog/monthly_refrigerated_transport_contracts_saudi.jpeg' },
    { arabicTitle: 'هل يؤثر تغير درجة الحرارة على جودة المنتجات الطبية؟', blogUrl: '/blog/temperature_fluctuations_affect_medical_products', imagePath: '/images/blog/temperature_fluctuations_affect_medical_products.jpeg' },
    { arabicTitle: 'أسعار النقل المبرد في السعودية 2025: ما الجديد؟', blogUrl: '/blog/refrigerated_transport_prices_saudi_arabia_2025', imagePath: '/images/blog/refrigerated_transport_prices_saudi_arabia_2025.jpeg' },
    { arabicTitle: 'كيف تحافظ شركات النقل المبرد على سلامة المنتجات؟', blogUrl: '/blog/how_companies_ensure_safe_cold_chain_delivery', imagePath: '/images/blog/how_companies_ensure_safe_cold_chain_delivery.jpg' },
    { arabicTitle: 'أسرع حلول لوجستية للنقل المبرد بين مدن المملكة', blogUrl: '/blog/fastest_intercity_cold_transport_solutions_ksa', imagePath: '/images/blog/fastest_intercity_cold_transport_solutions_ksa.jpeg' },
  ];

  // وظيفة لتوليد تاريخ عشوائي في الماضي
  const generatePastDate = () => {
    // إنشاء تاريخ من الأشهر الستة الماضية
    const today = new Date();
    const pastMonths = Math.floor(Math.random() * 6); // 0-5 أشهر في الماضي
    const pastDays = Math.floor(Math.random() * 30); // 0-29 يوم
    
    const date = new Date(today);
    date.setMonth(date.getMonth() - pastMonths);
    date.setDate(date.getDate() - pastDays);
    
    const day = date.getDate();
    const month = arabicMonths[date.getMonth()];
    const year = date.getFullYear();
    
    return `${day} ${month} ${year}`;
  };

  // وظيفة لحساب وقت القراءة المقدر
  const calculateReadingTime = (title: string) => {
    // تقدير عدد الكلمات بناءً على طول العنوان (عادةً يكون المحتوى أطول)
    const wordsPerMinute = 200; // معدل القراءة المتوسط باللغة العربية
    const titleLength = title.length;
    // افتراض أن محتوى المقال حوالي 20-30 مرة أطول من العنوان
    const contentMultiplier = Math.floor(Math.random() * 10) + 20;
    const estimatedContentLength = titleLength * contentMultiplier;
    // تقدير عدد الكلمات (متوسط طول كلمة عربية حوالي 4-5 أحرف)
    const estimatedWords = estimatedContentLength / 4.5;
    // حساب وقت القراءة بالدقائق
    let readingTime = Math.round(estimatedWords / wordsPerMinute);
    
    // التأكد من أن وقت القراءة منطقي (بين 3 و15 دقيقة)
    if (readingTime < 3) readingTime = 3;
    if (readingTime > 15) readingTime = 15;
    
    return readingTime;
  };

  // Map articles data to match the BlogPostSummary interface structure
  const posts: BlogPostSummary[] = articles.map((article, index) => {
    // Get slug from the URL
    const slug = article.blogUrl.split('/').pop() || '';
    
    // Assign an author randomly to each post
    const authorIndex = index % authors.length;
    
    return {
      id: (index + 1).toString(),
      title: article.arabicTitle,
      excerpt: 'اقرأ المزيد عن هذا الموضوع...',
      slug,
      coverImage: article.imagePath,
      date: generatePastDate(),
      readingTime: calculateReadingTime(article.arabicTitle),
      category: categories[Math.floor(Math.random() * categories.length)],
      author: authors[authorIndex]
    };
  });
  
  // اختيار 3 مقالات مميزة بشكل عشوائي
  const shuffled = [...posts].sort(() => 0.5 - Math.random());
  const featuredPosts = shuffled.slice(0, 3);
  
  return {
    props: {
      messages,
      posts,
      featuredPosts,
      categories
    },
  };
}; 