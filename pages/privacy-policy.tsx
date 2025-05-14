import React from 'react';
import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import Layout from '../components/layout/Layout';
import Seo from '../components/common/Seo';
import { getMessages } from '../lib/getMessages';

export default function PrivacyPolicy() {
  const t = useTranslations('common');

  return (
    <Layout>
      <Seo 
        pageTitle={t('footer.privacyPolicy')} 
        description="سياسة الخصوصية لشركة نبع الخليج للنقل المبرد - نلتزم بحماية خصوصية بياناتك الشخصية وفقًا لأعلى المعايير العالمية"
      />

      <section className="pt-28 pb-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">سياسة الخصوصية</h1>
            <div className="h-1 w-32 bg-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              نلتزم في شركة نبع الخليج للنقل المبرد بحماية خصوصية معلوماتك الشخصية
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
                  تصف سياسة الخصوصية هذه كيفية جمع واستخدام المعلومات الشخصية التي تقدمها لنا عند استخدام موقعنا الإلكتروني أو خدماتنا. نحن نقدر ثقتك في تزويدنا بمعلوماتك الشخصية، ونحن ملتزمون بحماية خصوصيتك.
                </p>
                <p className="mb-4 text-gray-700">
                  عند استخدامك لموقعنا الإلكتروني أو خدماتنا، فإنك توافق على جمع واستخدام المعلومات وفقًا لهذه السياسة. نحتفظ بالحق في تعديل هذه السياسة في أي وقت، وسنخطرك بأي تغييرات عن طريق نشر السياسة المحدثة على هذه الصفحة.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">2</span>
                  المعلومات التي نجمعها
                </h2>
                <p className="mb-4 text-gray-700">
                  نجمع أنواعًا مختلفة من المعلومات لأغراض توفير وتحسين خدماتنا لك:
                </p>
                <h3 className="text-xl font-bold text-primary-navy mb-2">المعلومات الشخصية</h3>
                <p className="mb-4 text-gray-700">
                  قد نطلب منك تزويدنا بمعلومات شخصية معينة يمكن استخدامها للاتصال بك أو التعرف عليك، بما في ذلك:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>الاسم</li>
                  <li>عنوان البريد الإلكتروني</li>
                  <li>رقم الهاتف</li>
                  <li>العنوان</li>
                  <li>معلومات الشركة (للعملاء التجاريين)</li>
                </ul>
                
                <h3 className="text-xl font-bold text-primary-navy mb-2">معلومات الشحن</h3>
                <p className="mb-4 text-gray-700">
                  عند استخدام خدماتنا، نجمع معلومات متعلقة بالشحنات، مثل:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>عناوين الاستلام والتسليم</li>
                  <li>تفاصيل البضائع المشحونة</li>
                  <li>أوقات الاستلام والتسليم</li>
                  <li>تاريخ ومعلومات تتبع الشحنات</li>
                </ul>
                
                <h3 className="text-xl font-bold text-primary-navy mb-2">بيانات الاستخدام</h3>
                <p className="mb-4 text-gray-700">
                  نجمع أيضًا معلومات حول كيفية وصولك واستخدامك لموقعنا الإلكتروني ("بيانات الاستخدام"). قد تتضمن بيانات الاستخدام هذه معلومات مثل عنوان بروتوكول الإنترنت لجهاز الكمبيوتر الخاص بك (مثل عنوان IP)، ونوع المتصفح، وإصدار المتصفح، وصفحات موقعنا التي تزورها، ووقت وتاريخ زيارتك، والوقت الذي تقضيه على تلك الصفحات، ومعرفات الجهاز الفريدة، وغيرها من البيانات التشخيصية.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">3</span>
                  كيف نستخدم المعلومات
                </h2>
                <p className="mb-4 text-gray-700">
                  نستخدم المعلومات التي نجمعها للأغراض التالية:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>توفير وصيانة خدماتنا</li>
                  <li>إخطارك بالتغييرات في خدماتنا</li>
                  <li>السماح لك بالمشاركة في الميزات التفاعلية لخدماتنا عندما تختار القيام بذلك</li>
                  <li>توفير خدمة العملاء والدعم</li>
                  <li>توفير تحليلات أو معلومات قيمة حتى نتمكن من تحسين خدماتنا</li>
                  <li>مراقبة استخدام خدماتنا</li>
                  <li>اكتشاف ومنع ومعالجة المشكلات الفنية</li>
                  <li>تنفيذ التزاماتنا التعاقدية وتوفير الخدمات التي طلبتها</li>
                </ul>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">4</span>
                  مشاركة البيانات والإفصاح عنها
                </h2>
                <p className="mb-4 text-gray-700">
                  قد نشارك معلوماتك الشخصية في الحالات التالية:
                </p>
                <h3 className="text-xl font-bold text-primary-navy mb-2">مع مقدمي الخدمة</h3>
                <p className="mb-4 text-gray-700">
                  قد نشارك معلوماتك الشخصية مع مقدمي الخدمة الذين نستخدمهم لدعم أعمالنا. هؤلاء الأطراف الثالثة لديهم حق الوصول إلى بياناتك الشخصية فقط لأداء هذه المهام نيابة عنا، وهم ملزمون بعدم الكشف عنها أو استخدامها لأي غرض آخر.
                </p>
                
                <h3 className="text-xl font-bold text-primary-navy mb-2">للامتثال القانوني</h3>
                <p className="mb-4 text-gray-700">
                  قد نفصح عن معلوماتك الشخصية إذا كنا مطالبين قانونًا بالقيام بذلك، أو استجابة لطلبات قانونية صحيحة من السلطات العامة (مثل محكمة أو وكالة حكومية).
                </p>
                
                <h3 className="text-xl font-bold text-primary-navy mb-2">لحماية الحقوق والسلامة</h3>
                <p className="mb-4 text-gray-700">
                  قد نفصح عن معلوماتك الشخصية إذا اعتقدنا بحسن نية أن مثل هذا الإجراء ضروري لحماية وممارسة حقوقنا القانونية، أو للدفاع عن أنفسنا ضد المطالبات القانونية، أو لحماية سلامتك أو سلامة الآخرين، أو للتحقيق في الاحتيال، أو الاستجابة لطلب من الحكومة.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">5</span>
                  أمن البيانات
                </h2>
                <p className="mb-4 text-gray-700">
                  أمن معلوماتك مهم بالنسبة لنا، ولكن تذكر أنه لا توجد طريقة نقل عبر الإنترنت أو طريقة تخزين إلكتروني آمنة بنسبة 100٪. بينما نسعى جاهدين لاستخدام وسائل مقبولة تجاريًا لحماية معلوماتك الشخصية، لا يمكننا ضمان أمنها المطلق.
                </p>
                <p className="mb-4 text-gray-700">
                  نحن نتخذ تدابير مناسبة لحماية المعلومات الشخصية التي تقدمها من الوصول غير المصرح به أو الإفصاح عنها. هذه التدابير تشمل تنفيذ ضمانات مناسبة للمساعدة في حماية أمن وسرية وسلامة البيانات الشخصية التي تقدمها.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">6</span>
                  الاحتفاظ بالبيانات
                </h2>
                <p className="mb-4 text-gray-700">
                  سنحتفظ بمعلوماتك الشخصية فقط طالما كان ذلك ضروريًا للأغراض المنصوص عليها في سياسة الخصوصية هذه. سنحتفظ بمعلوماتك الشخصية ونستخدمها بالقدر اللازم للامتثال لالتزاماتنا القانونية (على سبيل المثال، إذا كنا مطالبين بالاحتفاظ ببياناتك للامتثال للقوانين المعمول بها)، ولحل النزاعات، ولإنفاذ اتفاقياتنا القانونية وسياساتنا.
                </p>
                <p className="mb-4 text-gray-700">
                  سنحتفظ أيضًا ببيانات الاستخدام لأغراض التحليل الداخلي. عادةً ما يتم الاحتفاظ ببيانات الاستخدام لفترة زمنية أقصر، إلا عندما تُستخدم هذه البيانات لتعزيز الأمان أو لتحسين وظائف خدماتنا، أو نحن ملزمون قانونًا بالاحتفاظ بهذه البيانات لفترات زمنية أطول.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">7</span>
                  حقوقك
                </h2>
                <p className="mb-4 text-gray-700">
                  وفقًا لبعض القوانين واللوائح المعمول بها، قد يكون لديك مجموعة متنوعة من الحقوق فيما يتعلق بمعالجة معلوماتك الشخصية، بما في ذلك:
                </p>
                <ul className="list-disc mr-8 mb-4 text-gray-700 space-y-2">
                  <li>الحق في الوصول إلى معلوماتك الشخصية وتصحيحها وتحديثها</li>
                  <li>الحق في حذف معلوماتك الشخصية ("الحق في النسيان")</li>
                  <li>الحق في الاعتراض على معالجة معلوماتك الشخصية</li>
                  <li>الحق في تقييد معالجة معلوماتك الشخصية</li>
                  <li>الحق في نقل البيانات</li>
                  <li>الحق في سحب الموافقة</li>
                </ul>
                <p className="mb-4 text-gray-700">
                  يرجى ملاحظة أن هذه الحقوق قد تكون مقيدة في بعض الحالات، مثل عندما يكون لدينا سبب قانوني أو تنظيمي لمعالجة بياناتك، أو عندما يكون ذلك ضروريًا للدفاع عن مطالبات قانونية.
                </p>
              </div>

              <div className="mb-10">
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">8</span>
                  التعديلات على سياسة الخصوصية
                </h2>
                <p className="mb-4 text-gray-700">
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة ويمكن أن نخطرك عبر البريد الإلكتروني و/أو إشعار بارز على خدماتنا.
                </p>
                <p className="mb-4 text-gray-700">
                  نشجعك على مراجعة سياسة الخصوصية هذه بشكل دوري للبقاء على اطلاع بأي تغييرات. التغييرات على سياسة الخصوصية هذه تصبح سارية المفعول عندما يتم نشرها على هذه الصفحة.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-navy mb-4 flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-amber-400 text-primary-navy text-sm font-bold ml-2">9</span>
                  اتصل بنا
                </h2>
                <p className="mb-4 text-gray-700">
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:
                </p>
                <ul className="list-none space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <div>هاتف: <a href="tel:+966561475554" className="text-primary-navy hover:text-amber-500">0561475554</a></div>
                      <div>هاتف: <span className="text-primary-navy">054 126 6640</span></div>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-amber-400 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>البريد الإلكتروني: <a href="mailto:nabealkhalij2025@gmail.com" className="text-primary-navy hover:text-amber-500">nabealkhalij2025@gmail.com</a></span>
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