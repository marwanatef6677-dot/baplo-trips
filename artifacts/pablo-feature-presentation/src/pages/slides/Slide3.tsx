const base = import.meta.env.BASE_URL;
export default function Slide3() {
  return (
    <main className="w-screen h-screen overflow-hidden relative bg-bg text-text" dir="rtl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAFBFC_0%,#F1F6F7_100%)]" />
      <div className="blob blob-gold left-[1vw] top-[1vh] h-[22vw] w-[22vw]" />
      <div className="blob blob-teal right-[1vw] bottom-[1vh] h-[22vw] w-[22vw]" />
      <header className="absolute right-[7vw] top-[7vh] w-[86vw]">
        <h1 className="mt-[1.4vh] text-[3.6vw] font-bold leading-tight text-primary">من اختيار الموقع إلى إرسال الطلب</h1>
      </header>
      <div className="absolute left-[7vw] top-[25vh] h-[58vh] w-[39vw] overflow-hidden rounded-[2.2vw] shadow-lg">
        <img src={`${base}pablo-map-photo.png`} crossOrigin="anonymous" alt="خريطة جوية واقعية للقاهرة مع نقطة انطلاق ووجهة ومسار" className="h-full w-full object-cover" />
      </div>
      <section className="absolute right-[7vw] top-[27vh] w-[43vw] space-y-[4vh]">
        <div className="flex items-start gap-[1.8vw]"><span className="font-display text-[3vw] font-bold text-accent">١</span><p className="pt-[0.6vh] text-[2vw] leading-relaxed">ابحث بالاسم أو حدّد الموقع على الخريطة</p></div>
        <div className="flex items-start gap-[1.8vw]"><span className="font-display text-[3vw] font-bold text-accent">٢</span><p className="pt-[0.6vh] text-[2vw] leading-relaxed">اكتب العنوان يدويًا إذا احتجت</p></div>
        <div className="flex items-start gap-[1.8vw]"><span className="font-display text-[3vw] font-bold text-accent">٣</span><p className="pt-[0.6vh] text-[2vw] leading-relaxed">اختار المحافظة والخدمة والمركبة</p></div>
        <div className="flex items-start gap-[1.8vw]"><span className="font-display text-[3vw] font-bold text-accent">٤</span><p className="pt-[0.6vh] text-[2vw] leading-relaxed">راجع المسار والسعر ثم أرسل الطلب</p></div>
      </section>
      <div className="absolute bottom-[3vh] right-[7vw] flex items-center gap-[1.8vw]">
        <img src={`${base}replit-logo.svg`} crossOrigin="anonymous" alt="شعار Replit" className="h-[2.8vh] w-auto object-contain" />
        <img src={`${base}nordpoints-logo.png`} crossOrigin="anonymous" alt="شعار Nordpoints" className="h-[2.5vh] w-auto object-contain" />
      </div>
      <div className="absolute bottom-[4vh] left-[7vw] text-[1.5vw] font-semibold text-muted">٠٣ / ١٢</div>
    </main>
  );
}