import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import Link from 'next/link';

const ErrorPage = () => {
  const router = useRouter();
  
  return (
    <Layout>
      <Seo 
        pageTitle="Error" 
        description="An error occurred"
      />
      
      <div className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="container text-center">
          <h1 className="text-9xl font-bold text-primary-navy mb-4">:(</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            حدث خطأ
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            عذراً، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary"
              onClick={() => router.reload()}
            >
              إعادة تحميل الصفحة
            </Button>
            <Link href="/" passHref>
              <Button variant="outline">
                العودة للصفحة الرئيسية
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage; 