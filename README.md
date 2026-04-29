# Ahmed Abdulhakim — Portfolio

موقع شخصي لعرض المشاريع والمدونة وصفحة About ومعرض صور. مبني على قالب [Magic Portfolio](https://once-ui.com/products/magic-portfolio) مع [Once UI](https://once-ui.com) و [Next.js](https://nextjs.org).

![Portfolio preview](public/images/og/home.jpg)

## المتطلبات

- **Node.js** 20 أو أحدث (متوافق مع Next.js 16)
- **npm** (أو pnpm / yarn)

## التشغيل محليًا

```bash
npm install
cp .env.example .env
# عدّل القيم في .env ثم:
npm run dev
```

يفتح الموقع على [http://localhost:3000](http://localhost:3000).

## السكربتات

| الأمر | الوظيفة |
|--------|---------|
| `npm run dev` | خادم التطوير |
| `npm run build` | بناء الإنتاج |
| `npm run start` | تشغيل البناء بعد `build` |
| `npm run lint` | ESLint |
| `npm run biome-write` | تنسيق الملفات عبر Biome |

## أهم ملفات الإعداد والمحتوى

| الملف | الاستخدام |
|--------|------------|
| [`src/resources/content.tsx`](src/resources/content.tsx) | الاسم، السيرة، الروابط الاجتماعية، نصوص الصفحات، صفحة الشروط (`terms`) |
| [`src/resources/once-ui.config.ts`](src/resources/once-ui.config.ts) | عنوان الموقع (`baseURL`)، الثيم، الخطوط، تفعيل المسارات، تأثيرات الخلفية، مخطط البيانات المنظمة |
| [`src/resources/custom.css`](src/resources/custom.css) | تخصيص إضافي فوق توكنز Once UI |

## المحتوى الديناميكي

- **تدوينات:** أضف ملف `.mdx` تحت [`src/app/blog/posts`](src/app/blog/posts).
- **مشاريع العمل:** أضف ملف `.mdx` تحت [`src/app/work/projects`](src/app/work/projects).
- **معرض الصور:** مصفوفة الصور في [`src/resources/content.tsx`](src/resources/content.tsx) ضمن كائن `gallery`.

يمكن تعطيل صفحات من لوحة المسارات داخل `once-ui.config.ts` (`routes`).

## المتغيرات البيئية

 انسخ `.env.example` إلى `.env` واملأ القيم. ملخص سريع:

- **`NEXT_PUBLIC_SITE_URL`** — الرابط الكامل للموقع (بدون شرطة مائية أخيرة)، للـ SEO والـ RSS والـ Open Graph.
- **`GITHUB_USERNAME`** / **`GITHUB_TOKEN`** — اختياري لعرض مساهمات GitHub في صفحة About؛ بدون توكن قد لا يظهر الـ heatmap.
- **`PAGE_ACCESS_PASSWORD`** — اختياري لحماية مسارات معينة عبر `protectedRoutes` في الإعداد.

لا ترفع ملف `.env` أو مفاتيح حقيقية إلى Git.

## النشر

مناسب للنشر على [Vercel](https://vercel.com) أو أي استضافة تدعم Next.js. عيّن `NEXT_PUBLIC_SITE_URL` في لوحة المتغيرات البيئية للإنتاج وحدّث `baseURL` في `once-ui.config.ts` أو وحّدهما على نفس النطاق.

## الإسناد والترخيص

- هذا المستودع يعتمد على قالب **Magic Portfolio** تحت ترخيص **CC BY-NC 4.0** — الإسناد للمصدر مطلوب؛ الاستخدام التجاري للقالب محظور ما لم يتوفر ترخيص موسّع من جهة Once UI. التفاصيل في [`LICENSE`](LICENSE).
- واجهة المستخدم مبنية على حزمة **`@once-ui-system/core`**؛ يُعرض إسناد مختصر في تذييل الموقع وفق شروط القالب.

للمزيد عن القالب الرسمي: [توثيق Magic Portfolio](https://docs.once-ui.com/docs/magic-portfolio/quick-start).
