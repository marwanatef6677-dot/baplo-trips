const base = import.meta.env.BASE_URL;
export default function Slide5() {
  return (
    <main className="w-screen h-screen overflow-hidden relative bg-bg text-text" dir="rtl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAFBFC_0%,#F2F7F7_100%)]" />
      <div className="blob blob-teal right-[1vw] top-[1vh] h-[22vw] w-[22vw]" />
      <div className="blob blob-gold left-[1vw] bottom-[1vh] h-[22vw] w-[22vw]" />
      <header className="absolute right-[7vw] top-[7vh] w-[86vw]">
        <h1 className="mt-[1.4vh] text-[3.8vw] font-bold leading-tight text-primary">رحلة أوضح للعميل</h1>
      </header>
      <section className="absolute right-[7vw] top-[27vh] w-[43vw] space-y-[3.2vh]">
        <p className="text-[2vw] leading-relaxed">تابع الطلب من الانتظار حتى وصول الكابتن وإتمام الرحلة</p>
        <p className="text-[2vw] leading-relaxed">بعد القبول، تواصل مع الكابتن عبر دردشة «شريك الرحلة» أو الاتصال</p>
        <p className="text-[2vw] leading-relaxed">تابع موقع الكابتن أثناء الرحلة عند تفعيل المشاركة</p>
        <p className="text-[2vw] leading-relaxed">الدفع نقدًا في النسخة الحالية</p>
      </section>
      <div className="absolute left-[7vw] top-[25vh] h-[59vh] w-[38vw] overflow-hidden rounded-[2.2vw] shadow-lg">
        <img src={`${base}pablo-tracking-refined.png`} crossOrigin="anonymous" alt="عميل يتابع اقتراب سيارة على هاتفه" className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-[18vh] bg-gradient-to-t from-[#14233D]/60 to-transparent" />
      </div>
      <div className="absolute bottom-[3vh] right-[7vw] flex items-center gap-[1.8vw]">
        <img src={`${base}replit-logo.svg`} crossOrigin="anonymous" alt="شعار Replit" className="h-[2.8vh] w-auto object-contain" />
        <img src={`${base}nordpoints-logo.png`} crossOrigin="anonymous" alt="شعار Nordpoints" className="h-[2.5vh] w-auto object-contain" />
      </div>
      <div className="absolute bottom-[4vh] left-[7vw] text-[1.5vw] font-semibold text-muted">٠٥ / ١٢</div>
    </main>
  );
}