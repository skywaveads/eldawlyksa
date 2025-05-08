import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/Seo';
import { getMessages } from '../lib/getMessages';

export default function Terms() {
  const t = useTranslations('common');

  return (
    <Layout>
      <Seo 
        pageTitle={t('navigation.terms')} 
        description="الشروط والأحكام لشركة نبع الخليج للنقل المبرد - تعرف على شروط استخدام خدماتنا وحقوق ومسؤوليات الأطراف"
      />

      <section className="pt-28 pb-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">الشروط والأحكام</h1>
            <div className="h-1 w-32 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نرجو قراءة الشروط والأحكام بعناية قبل استخدام خدمات نبع الخليج للنقل المبرد
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden p-8 mb-12">
            <div className="prose prose-lg max-w-none rtl">
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">1</span>
                  مقدمة
                </h2>
                <p className="mb-4 text-gray-700">
                  مرحباً بكم في شركة نبع الخليج للنقل المبرد. تنطبق هذه الشروط والأحكام على جميع الخدمات المقدمة من قبل شركتنا. باستخدامك لخدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدماتنا.
                </p>
                <p className="mb-4 text-gray-700">
                  تحتفظ شركة نبع الخليج للنقل المبرد بالحق في تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. سيتم نشر أي تعديلات على موقعنا الإلكتروني، ويعتبر استمرارك في استخدام خدماتنا بعد نشر التعديلات بمثابة موافقة منك على هذه التعديلات.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">2</span>
                  وصف الخدمات
                </h2>
                <p className="mb-4 text-gray-700">
                  توفر شركة نبع الخليج للنقل المبرد خدمات النقل المبرد والمجمد للبضائع والمواد الغذائية والأدوية والمستحضرات التجميلية وغيرها من المنتجات التي تتطلب النقل في ظروف درجة حرارة محكومة داخل المملكة العربية السعودية.
                </p>
                <p className="mb-4 text-gray-700">
                  تشمل خدماتنا، على سبيل المثال لا الحصر:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>نقل البضائع المبردة والمجمدة</li>
                  <li>نقل المواد الغذائية الطازجة</li>
                  <li>نقل الأدوية والمستلزمات الطبية</li>
                  <li>نقل المستحضرات التجميلية</li>
                  <li>خدمات التتبع والرصد للشحنات</li>
                  <li>خدمات النقل السريع</li>
                  <li>التأجير الشهري للشاحنات المبردة</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">3</span>
                  التزاماتنا
                </h2>
                <p className="mb-4 text-gray-700">
                  تلتزم شركة نبع الخليج للنقل المبرد بتقديم الخدمات المذكورة أعلاه بأعلى معايير الجودة والكفاءة. نحن نسعى جاهدين لضمان:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>الالتزام بمواعيد التسليم المتفق عليها</li>
                  <li>الحفاظ على سلامة البضائع أثناء النقل</li>
                  <li>التحكم الدقيق في درجات الحرارة بما يتناسب مع متطلبات كل نوع من البضائع</li>
                  <li>توفير خدمات تتبع موثوقة للشحنات</li>
                  <li>الاستجابة السريعة لاستفسارات وطلبات العملاء</li>
                  <li>الالتزام بجميع اللوائح والأنظمة المتعلقة بنقل البضائع في المملكة العربية السعودية</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">4</span>
                  التزامات العميل
                </h2>
                <p className="mb-4 text-gray-700">
                  يتعهد العميل بما يلي:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>تقديم معلومات دقيقة وصحيحة عن البضائع المراد نقلها، بما في ذلك طبيعتها وكميتها ومتطلبات درجة الحرارة الخاصة بها</li>
                  <li>ضمان أن البضائع المراد نقلها مطابقة للقوانين واللوائح السارية في المملكة العربية السعودية</li>
                  <li>دفع الرسوم المتفق عليها في الوقت المحدد وفقاً لشروط الدفع المتفق عليها</li>
                  <li>التعاون مع فريق عمل الشركة لتسهيل عمليات الاستلام والتسليم</li>
                  <li>إبلاغ الشركة فوراً بأي تغييرات في متطلبات الشحن أو أي مشكلات قد تنشأ</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">5</span>
                  الأسعار والدفع
                </h2>
                <p className="mb-4 text-gray-700">
                  تحدد أسعار خدماتنا وفقاً لعدة عوامل، منها:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>نوع البضائع المراد نقلها</li>
                  <li>الكمية والحجم</li>
                  <li>المسافة بين نقطة الاستلام والتسليم</li>
                  <li>متطلبات درجة الحرارة والتخزين</li>
                  <li>أي خدمات إضافية مطلوبة</li>
                </ul>
                <p className="mb-4 text-gray-700">
                  سيتم تزويد العميل بتفاصيل الأسعار والرسوم قبل تقديم الخدمة. يتم الدفع وفقاً للشروط المتفق عليها في العقد أو أمر الشحن.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">6</span>
                  المسؤولية والتعويض
                </h2>
                <p className="mb-4 text-gray-700">
                  تكون شركة نبع الخليج للنقل المبرد مسؤولة عن البضائع أثناء النقل وفقاً للشروط المحددة في عقد النقل. في حالة حدوث أي ضرر أو فقدان للبضائع بسبب إهمال من جانبنا، سيتم التعويض وفقاً للأنظمة والقوانين المعمول بها في المملكة العربية السعودية وبما لا يتجاوز القيمة المصرح بها للبضائع.
                </p>
                <p className="mb-4 text-gray-700">
                  ومع ذلك، لن تكون الشركة مسؤولة عن أي ضرر أو فقدان ناتج عن:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>معلومات غير دقيقة أو مضللة مقدمة من العميل</li>
                  <li>عيوب طبيعية أو ذاتية في البضائع</li>
                  <li>ظروف قاهرة خارجة عن سيطرة الشركة</li>
                  <li>أي سبب آخر لا يمكن تجنبه رغم اتخاذ جميع التدابير المعقولة</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">7</span>
                  الإلغاء والتعديل
                </h2>
                <p className="mb-4 text-gray-700">
                  في حالة رغبة العميل في إلغاء أو تعديل طلب النقل، يجب إشعار الشركة في أقرب وقت ممكن. قد تنطبق رسوم إلغاء أو تعديل وفقاً للوقت المتبقي قبل موعد النقل المحدد والموارد التي تم تخصيصها بالفعل.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">8</span>
                  القانون الحاكم وتسوية النزاعات
                </h2>
                <p className="mb-4 text-gray-700">
                  تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية. في حالة نشوء أي نزاع، سيتم السعي لحله ودياً. إذا تعذر ذلك، يتم إحالة النزاع إلى الجهات القضائية المختصة في المملكة العربية السعودية.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">9</span>
                  اتصل بنا
                </h2>
                <p className="mb-4 text-gray-700">
                  إذا كان لديك أي استفسارات أو ملاحظات بخصوص هذه الشروط والأحكام، يرجى التواصل معنا عبر:
                </p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>هاتف: <a href="tel:+966561475554" className="text-primary-navy hover:text-amber-500">0561475554</a></span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>البريد الإلكتروني: <a href="mailto:info@nabaaalkhaleej.com" className="text-primary-navy hover:text-amber-500">info@nabaaalkhaleej.com</a></span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>العنوان: طريق الملك فهد، الرياض، المملكة العربية السعودية</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-primary-navy rounded-xl shadow-md overflow-hidden p-8">
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-4">هل تحتاج إلى مساعدة؟</h3>
              <p className="mb-6">فريق خدمة العملاء لدينا متاح للإجابة على جميع استفساراتك</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+966561475554"
                  className="inline-flex items-center justify-center bg-white text-primary-navy px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
                >
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  اتصل بنا
                </a>
                <a
                  href="https://wa.me/+966561475554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-whatsapp text-white px-6 py-3 rounded-full font-bold hover:bg-whatsapp/90 transition duration-300"
                >
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ 
  locale = 'ar' 
}) => {
  const messages = await getMessages(locale, ['common']);
  
  return {
    props: {
      messages,
      locale,
    },
  };
}; 