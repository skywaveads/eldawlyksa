import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Seo from '../components/common/Seo';
import Layout from '../components/layout/Layout';

const MeccaPage = () => {
  return (
    <>
      <Seo
        pageTitle="خدمات النقل المبرد في مكة المكرمة - شركة نبع الخليج"
        description="خدمات نقل مبرد آمنة وموثوقة في مكة المكرمة. متخصصون في نقل الأغذية والأدوية والمواد الحساسة للحرارة مع الالتزام بأعلى معايير الجودة"
        canonicalUrl="https://nabaaalkhaleej.com/refrigerated-transport-in-mecca"
      />
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              خدمات النقل المبرد في مكة المكرمة
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              خدمات نقل مخصصة تلبي احتياجات عملائنا في مكة المكرمة مع الالتزام بأعلى معايير الجودة والسلامة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Image
                src="/images/more/refrigerated-transport-in-makkah.png"
                alt="خدمات النقل المبرد في مكة المكرمة"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">
                لماذا تختار خدمات النقل المبرد في مكة المكرمة؟
              </h2>
              <p className="mb-4">
                مع تزايد الطلب على توصيل المواد الغذائية والأدوية والمنتجات الحساسة للحرارة في مكة المكرمة، تقدم شركة نبع الخليج حلولًا متكاملة للنقل المبرد تضمن وصول البضائع بحالة ممتازة.
              </p>
              <p>
                نحن ندرك أهمية الحفاظ على سلسلة التبريد وخصوصًا في أجواء مكة المكرمة الحارة، ولذلك نستخدم أحدث التقنيات والمركبات المجهزة خصيصًا لهذا الغرض.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              مميزات خدمات النقل المبرد في مكة المكرمة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">أسطول حديث</h3>
                <p>شاحنات مبردة حديثة مجهزة بأنظمة تبريد متطورة تناسب جميع أنواع البضائع والمنتجات.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">تتبع مباشر</h3>
                <p>نظام تتبع إلكتروني يتيح للعملاء متابعة شحناتهم ومراقبة درجات الحرارة في الوقت الفعلي.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">طاقم محترف</h3>
                <p>سائقون وفنيون مدربون على أعلى مستوى للتعامل مع المنتجات الحساسة وإجراءات السلامة.</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              خدماتنا في مكة المكرمة
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border border-gray-200 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">نقل المواد الغذائية</h3>
                <p>نقل المواد الغذائية الطازجة والمجمدة مع الحفاظ على الجودة والسلامة.</p>
              </div>
              <div className="border border-gray-200 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">نقل الأدوية</h3>
                <p>نقل الأدوية والمستلزمات الطبية وفق المعايير العالمية للنقل الطبي.</p>
              </div>
              <div className="border border-gray-200 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">توصيل للمطاعم</h3>
                <p>خدمات توصيل منتظمة للمطاعم والفنادق في مكة المكرمة والمناطق المحيطة.</p>
              </div>
              <div className="border border-gray-200 p-5 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">عقود شهرية</h3>
                <p>عقود نقل شهرية وسنوية مخصصة لتلبية احتياجات الشركات والمؤسسات.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              تواصل معنا لخدمات النقل المبرد في مكة المكرمة
            </h2>
            <p className="mb-6">
              نحن جاهزون لتقديم حلول النقل المبرد المثلى لكم في مكة المكرمة والمناطق المحيطة. 
              تواصل معنا اليوم للحصول على عرض سعر مخصص يناسب احتياجاتكم.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                اتصل بنا
              </Link>
              <Link
                href="/track-order"
                className="bg-secondary text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary-dark transition-colors"
              >
                تتبع شحنتك
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MeccaPage;

export async function getStaticProps() {
  return {
    props: {}
  };
} 