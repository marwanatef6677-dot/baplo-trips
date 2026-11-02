const base = import.meta.env.BASE_URL;
export default function Slide2() {
  return (
    <main className="w-screen h-screen overflow-hidden relative bg-bg text-text" dir="rtl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAFBFC_0%,#F4F8F8_100%)]" />
      <div className="blob blob-teal right-[1vw] top-[1vh] h-[22vw] w-[22vw]" />
      <div className="blob blob-coral left-[1vw] bottom-[1vh] h-[22vw] w-[22vw]" />
      <header className="absolute right-[7vw] top-[7vh]">
        <h1 className="mt-[1.6vh] text-[3.9vw] font-bold leading-tight text-primary">الفكرة في جملة واحدة</h1>
      </header>
      <div className="absolute left-[7vw] top-[24vh] h-[58vh] w-[40vw] overflow-hidden rounded-[2.2vw] shadow-lg">
        <img src={`${base}pablo-concept-photo.png`} crossOrigin="anonymous" alt="عميل وكابتن يلتقيان بجوار سيارة في شارع بالقاهرة" className="h-full w-full object-cover" />
      </div>
      <section className="absolute right-[7vw] top-[27vh] w-[42vw]">
        <p className="text-[2.85vw] font-semibold leading-[1.4] text-primary">بابلو يربط العميل بالكابتن لطلب رحلة أو توصيل منتج.</p>
        <div className="mt-[4vh] space-y-[3vh]">
          <div className="flex items-start gap-[1.4vw]"><span className="mt-[1.2vh] h-[1.2vw] w-[1.2vw] shrink-0 rounded-full bg-accent" /><p className="text-[2vw] leading-relaxed">اختار الخدمة وحدّد مكان الركوب والوجهة</p></div>
          <div className="flex items-start gap-[1.4vw]"><span className="mt-[1.2vh] h-[1.2vw] w-[1.2vw] shrink-0 rounded-full bg-[#FFD000]" /><p className="text-[2vw] leading-relaxed">اعرف الأجرة التقديرية قبل إرسال الطلب</p></div>
          <div className="flex items-start gap-[1.4vw]"><span className="mt-[1.2vh] h-[1.2vw] w-[1.2vw] shrink-0 rounded-full bg-[#DD7253]" /><p className="text-[2vw] leading-relaxed">تابع الرحلة وتواصل من داخل التطبيق</p></div>
        </div>
      </section>
      <div className="absolute bottom-[3vh] right-[7vw] flex items-center gap-[1.8vw]">
        <img src={`${base}replit-logo.svg`} crossOrigin="anonymous" alt="شعار Replit" className="h-[2.8vh] w-auto object-contain" />
        <img src={`${base}nordpoints-logo.png`} crossOrigin="anonymous" alt="شعار Nordpoints" className="h-[2.5vh] w-auto object-contain" />
      </div>
      <div className="absolute bottom-[4vh] left-[7vw] text-[1.5vw] font-semibold text-muted">٠٢ / ١٢</div>
    </main>
  );
}