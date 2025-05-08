import React from 'react';
import { NextPageContext } from 'next';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import Link from 'next/link';

interface ErrorProps {
  statusCode: number;
}

const Error = ({ statusCode }: ErrorProps) => {
  return (
    <Layout>
      <Seo 
        pageTitle={`Error ${statusCode}`} 
        description="An error occurred"
      />
      
      <div className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="container text-center">
          <h1 className="text-9xl font-bold text-primary-navy mb-4">{statusCode}</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {statusCode === 404 ? 'صفحة غير موجودة' : 'حدث خطأ'}
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            {statusCode === 404
              ? 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.'
              : 'عذراً، حدث خطأ أثناء معالجة طلبك. يرجى المحاولة مرة أخرى لاحقاً.'}
          </p>
          <Link href="/" passHref>
            <Button variant="primary">
              العودة للصفحة الرئيسية
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 