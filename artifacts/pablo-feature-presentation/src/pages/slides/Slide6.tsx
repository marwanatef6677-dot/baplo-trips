const base = import.meta.env.BASE_URL;
export default function Slide6() {
  return (
    <main className="w-screen h-screen overflow-hidden relative bg-bg text-text" dir="rtl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAFBFC_0%,#F4F8F7_100%)]" />
      <div className="blob blob-coral left-[1vw] top-[1vh] h-[22vw] w-[22vw]" />
      <div className="blob blob-gold right-[1vw] bottom-[1vh] h-[22vw] w-[22vw]" />
      <header className="absolute right-[7vw] top-[7vh] w-[86vw]">
        <h1 className="mt-[1.4vh] text-[3.7vw] font-bold leading-tight text-primary">الموتوسيكل للركاب والمنتجات</h1>
      </header>
      <div className="absolute right-[7vw] top-[26vh] h-[58vh] w-[41vw] overflow-hidden rounded-[2.2vw] shadow-lg">
        <img src={`${base}pablo-delivery-photo.png`} crossOrigin="anonymous" alt="كابتن توصيل بخوذة يسلم طردًا صغيرًا في شارع مصري" className="h-full w-full object-cover" />
      </div>
      <section className="absolute left-[7vw] top-[28vh] w-[39vw] space-y-[4.2vh]">
        <p className="border-b border-primary/15 pb-[2vh] text-[2.15vw] font-semibold">رحلات ركاب بالموتوسيكل</p>
        <p className="border-b border-primary/15 pb-[2vh] text-[2.15vw] font-semibold">توصيل المنتجات داخل المحافظة</p>
        <p className="border-b border-primary/15 pb-[2vh] text-[2vw] leading-relaxed">أدخل بيانات المستلم ووصف المنتج</p>
        <p className="text-[2vw] leading-relaxed">راجع السعر قبل إرسال الطلب</p>
      </section>
      <div className="absolute bottom-[3vh] right-[7vw] flex items-center gap-[1.8vw]">
        <img src={`${base}replit-logo.svg`} crossOrigin="anonymous" alt="شعار Replit" className="h-[2.8vh] w-auto object-contain" />
        <img src={`${base}nordpoints-logo.png`} crossOrigin="anonymous" alt="شعار Nordpoints" className="h-[2.5vh] w-auto object-contain" />
      </div>
      <div className="absolute bottom-[4vh] left-[7vw] text-[1.5vw] font-semibold text-muted">٠٦ / ١٢</div>
    </main>
  );
}