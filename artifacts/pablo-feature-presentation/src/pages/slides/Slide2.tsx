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
      <section className="absolute right-[7vw] top-[28vh] w-[86vw] rounded-[2vw] bg-[#0D9488]/10 px-[4vw] py-[4vh]">
        <p className="max-w-[78vw] text-[3vw] font-semibold leading-[1.4] text-primary">بابلو يجمع العميل بالكابتن لرحلة أو توصيل أسهل.</p>
      </section>
      <div className="absolute bottom-[13vh] right-[7vw] grid w-[86vw] grid-cols-3 gap-[2vw]">
        <div className="border-t-[0.5vh] border-accent pt-[2vh]"><p className="text-[2vw] font-semibold leading-relaxed">اختار الخدمة وحدّد نقطة الركوب والوجهة</p></div>
        <div className="border-t-[0.5vh] border-[#FFD000] pt-[2vh]"><p className="text-[2vw] font-semibold leading-relaxed">اعرف السعر التقديري قبل إرسال الطلب</p></div>
        <div className="border-t-[0.5vh] border-[#DD7253] pt-[2vh]"><p className="text-[2vw] font-semibold leading-relaxed">تابع الطلب وتواصل من داخل التطبيق</p></div>
      </div>
      <div className="absolute bottom-[3vh] right-[7vw] flex items-center gap-[1.8vw]">
        <img src={`${base}replit-logo.svg`} crossOrigin="anonymous" alt="شعار Replit" className="h-[2.8vh] w-auto object-contain" />
        <img src={`${base}nordpoints-logo.png`} crossOrigin="anonymous" alt="شعار Nordpoints" className="h-[2.5vh] w-auto object-contain" />
      </div>
      <div className="absolute bottom-[4vh] left-[7vw] text-[1.5vw] font-semibold text-muted">٠٢ / ١٢</div>
    </main>
  );
}