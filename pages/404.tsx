import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { GetStaticProps } from 'next';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/Seo';
import Button from '../components/ui/Button';
import { getMessages } from '../lib/getMessages';

export default function Custom404() {
  const t = useTranslations('common');
  
  return (
    <Layout>
      <Seo 
        pageTitle="404 - Page Not Found" 
        description="The page you are looking for does not exist."
      />
      
      <div className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="container text-center">
          <h1 className="text-9xl font-bold text-primary-navy mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            صفحة غير موجودة
          </h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
          </p>
          <Link href="/">
            <Button variant="primary">
              {t('navigation.home')}
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale = 'ar' }) => {
  const messages = await getMessages(locale, ['common']);
  
  return {
    props: {
      messages,
    },
  };
}; 