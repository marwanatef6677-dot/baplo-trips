# بابلو (Pablo)

> **منحة تعليمية من Replit**<br>
> **من إنشاء وتنفيذ:** Marwan Atef Abdelwahed Ali<br>
> **تحت إشراف المشروع:** Taha Mahmoud Metwally Nour El-Dein

<p align="center">
  <img src="artifacts/pablo-feature-presentation/public/replit-logo.svg" alt="شعار Replit" height="44">
  <img src="artifacts/pablo-feature-presentation/public/nordpoints-logo.png" alt="شعار Nordpoints" height="44">
  <img src="artifacts/pablo/public/logo.svg" alt="شعار بابلو" height="52">
</p>

بابلو تطبيق ويب عربي تجريبي يربط العملاء بالكباتن لطلب مشوار أو توصيل منتج، مع اختيار موقع الركوب والوجهة بالبحث أو بكتابة العنوان أو بتحريك الدبوس على الخريطة.

> **حالة المشروع:** نسخة تجريبية. ليست تطبيق متجر أصليًا، ولا ينبغي استخدامها لتشغيل رحلات تجارية أو تحصيل أموال حقيقية قبل إكمال المراجعات والاختبارات ومتطلبات التشغيل.

## فكرة المشروع

يهدف بابلو إلى تسهيل طلب الرحلات والتوصيل من واجهة عربية واحدة. يحدد العميل الخدمة وموقعي الركوب والوصول، ويراجع المسار والتكلفة التقديرية قبل إرسال الطلب. يتابع العميل والكابتن حالة الرحلة ويتواصلان من داخل التطبيق.

للتفاصيل: [فكرة المشروع](docs/project-idea.ar.md).

راجع أيضًا [مخطط بنية التطبيق](docs/app-architecture.ar.md).

## محتويات المستودع

| المسار | المحتوى |
| --- | --- |
| `artifacts/pablo/` | تطبيق بابلو للويب |
| `artifacts/api-server/` | واجهة الخادم البرمجية |
| `artifacts/pablo-feature-presentation/` | المصدر القابل للتحرير للعرض التقديمي |
| `docs/project-idea.ar.md` | فكرة المشروع ونطاقه |
| `docs/app-architecture.ar.md` | مخطط بنية التطبيق ومكوناته |
| `docs/pablo-product-description.ar.md` | الوصف الفني والوظائف |
| `docs/pablo-app-guide.ar.html` | دليل التطبيق |
| `docs/operating-readiness.ar.md` | متطلبات الجاهزية قبل التشغيل |
| `docs/pablo-ownership-declaration.ar.html` | مسودة إقرار وبيان فني؛ ليست شهادة رسمية |
| `docs/downloads/Pablo-Presentation.pptx` | نسخة PowerPoint قابلة للتعديل |
| `docs/downloads/Pablo-Presentation.pdf` | العرض التعريفي بصيغة PDF |

## أبرز الوظائف

- حسابات للعملاء والكباتن وواجهات عربية من اليمين إلى اليسار.
- طلب رحلة أو توصيل، مع البحث عن الموقع أو كتابة العنوان أو اختيار دبوس الخريطة.
- معاينة الطريق والسعر قبل إرسال الطلب.
- متابعة مراحل الرحلة وموقع الكابتن عند توفر مشاركة الموقع.
- تواصل وتقييمات ومساعدة داخل التطبيق.

تفاصيل حالة كل وظيفة ومتطلبات التشغيل موضحة في [الوصف الفني](docs/pablo-product-description.ar.md) و[متطلبات التشغيل](docs/operating-readiness.ar.md).

## التقنيات

- React وVite لواجهة الويب.
- Node.js وExpress لواجهة الخادم.
- PostgreSQL لبيانات التطبيق.
- خرائط ومسارات من خدمات خارجية؛ راجع متطلبات الاعتماد التجاري قبل الإطلاق.

## تشغيل المشروع في Replit

تُشغّل خدمات المشروع من الـ Workflows المُعدة في Replit:

- **API Server:** `pnpm --filter @workspace/api-server run dev`
- **Pablo Web:** `pnpm --filter @workspace/pablo run dev`
- **Presentation:** `pnpm --filter @workspace/pablo-feature-presentation run dev`

تتطلب نسخة مستقلة إعداد متغيرات البيئة والخدمات اللازمة. لا تضع مفاتيح أو كلمات مرور أو بيانات اتصال داخل المستودع؛ أضفها عبر إدارة الأسرار المناسبة.

## ملفات العرض

- [تنزيل عرض بابلو بصيغة PowerPoint](docs/downloads/Pablo-Presentation.pptx)
- [تنزيل عرض بابلو بصيغة PDF](docs/downloads/Pablo-Presentation.pdf)
- [المصدر القابل للتحرير للعرض](artifacts/pablo-feature-presentation/)

## الشعارات

شعار بابلو موجود في `artifacts/pablo/public/logo.svg`، وشعارا Replit وNordpoints الموجودان في العرض مرفقان ضمن ملفاته. لا يوجد ضمن الملفات المتاحة شعار شخصي منفصل للمشرف.

## تنبيه

هذه المستندات للتعريف بالمشروع والتطوير. وصف الوظائف أو متطلبات التشغيل لا يُعد تصريحًا قانونيًا أو إثبات ملكية أو تأكيدًا بأن خدمة مالية أو تشغيلية أصبحت مفعلة. راجع المستندات ذات الصلة واستكمل مراجعات التشغيل والخصوصية والقانون قبل الاستخدام التجاري.
