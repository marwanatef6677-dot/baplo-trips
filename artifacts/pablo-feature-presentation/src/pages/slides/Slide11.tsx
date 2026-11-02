const base = import.meta.env.BASE_URL;
export default function Slide11() {
  return (
    <main className="w-screen h-screen overflow-hidden relative bg-bg text-text" dir="rtl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAFBFC_0%,#F3F7F8_100%)]" />
      <div className="blob blob-gold right-[1vw] top-[1vh] h-[22vw] w-[22vw]" />
      <div className="blob blob-teal left-[1vw] bottom-[1vh] h-[22vw] w-[22vw]" />
      <header className="absolute right-[7vw] top-[7vh] w-[86vw]">
        <h1 className="mt-[1.4vh] text-[3.8vw] font-bold leading-tight text-primary">النسخة الحالية وما قبل الإطلاق</h1>
      </header>
      <section className="absolute right-[7vw] top-[26vh] w-[86vw] space-y-[3.4vh]">
        <div className="flex items-start gap-[1.8vw] border-b border-primary/15 pb-[2.2vh]"><span className="mt-[0.8vh] h-[1.4vw] w-[1.4vw] rounded-full bg-accent" /><p className="text-[2vw] leading-relaxed">بابلو تطبيق ويب قابل للتثبيت، وليس تطبيق متجر أصليًا حتى الآن</p></div>
        <div className="flex items-start gap-[1.8vw] border-b border-primary/15 pb-[2.2vh]"><span className="mt-[0.8vh] h-[1.4vw] w-[1.4vw] rounded-full bg-[#FFD000]" /><p className="text-[2vw] leading-relaxed">الدفع النقدي متاح؛ الدفع الإلكتروني للعميل غير مفعّل</p></div>
        <div className="flex items-start gap-[1.8vw] border-b border-primary/15 pb-[2.2vh]"><span className="mt-[0.8vh] h-[1.4vw] w-[1.4vw] rounded-full bg-[#DD7253]" /><p className="text-[2vw] leading-relaxed">شحن المحفظة عبر فوري ينتظر الموافقة واستكمال التجهيز</p></div>
        <div className="flex items-start gap-[1.8vw]"><span className="mt-[0.8vh] h-[1.4vw] w-[1.4vw] rounded-full bg-primary" /><p className="text-[2vw] leading-relaxed">قبل الإطلاق: تأكيد SMS، واختبار الأجهزة، ومراجعة قانونية</p></div>
      </section>
      <div className="absolute bottom-[3vh] right-[7vw] flex items-center gap-[1.8vw]">
        <img src={`${base}replit-logo.svg`} crossOrigin="anonymous" alt="شعار Replit" className="h-[2.8vh] w-auto object-contain" />
        <img src={`${base}nordpoints-logo.png`} crossOrigin="anonymous" alt="شعار Nordpoints" className="h-[2.5vh] w-auto object-contain" />
      </div>
      <div className="absolute bottom-[4vh] left-[7vw] text-[1.5vw] font-semibold text-muted">١١ / ١٢</div>
    </main>
  );
}