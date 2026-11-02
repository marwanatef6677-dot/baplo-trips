const base = import.meta.env.BASE_URL;
export default function Slide7() {
  return (
    <main className="w-screen h-screen overflow-hidden relative bg-bg text-text" dir="rtl">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#FAFBFC_0%,#F0F6F7_100%)]" />
      <div className="blob blob-teal left-[1vw] top-[1vh] h-[22vw] w-[22vw]" />
      <div className="blob blob-coral right-[1vw] bottom-[1vh] h-[22vw] w-[22vw]" />
      <header className="absolute right-[7vw] top-[7vh] w-[86vw]">
        <h1 className="mt-[1.4vh] text-[3.7vw] font-bold leading-tight text-primary">اعتماد الكابتن قبل قبول الرحلات</h1>
      </header>
      <section className="absolute right-[7vw] top-[27vh] w-[43vw] space-y-[3.8vh]">
        <p className="text-[2vw] leading-relaxed">يستكمل بياناته وبيانات المركبة</p>
        <p className="text-[2vw] leading-relaxed">يرفع صورته مع المركبة وصور الرخص المطلوبة</p>
        <p className="text-[2vw] leading-relaxed">تراجع الإدارة المستندات وتصدر قرارها</p>
        <p className="rounded-[1.2vw] bg-[#FFD000]/30 px-[1.6vw] py-[1.7vh] text-[2vw] font-semibold leading-relaxed">لا يقبل رحلات قبل اعتماد الإدارة</p>
      </section>
      <div className="absolute left-[7vw] top-[25vh] h-[59vh] w-[38vw] overflow-hidden rounded-[2.2vw] shadow-lg">
        <img src={`${base}pablo-captain-refined.png`} crossOrigin="anonymous" alt="كابتن بجوار مركبته في مشهد حضري موثوق" className="h-full w-full object-cover" />
      </div>
      <div className="absolute bottom-[3vh] right-[7vw] flex items-center gap-[1.8vw]">
        <img src={`${base}replit-logo.svg`} crossOrigin="anonymous" alt="شعار Replit" className="h-[2.8vh] w-auto object-contain" />
        <img src={`${base}nordpoints-logo.png`} crossOrigin="anonymous" alt="شعار Nordpoints" className="h-[2.5vh] w-auto object-contain" />
      </div>
      <div className="absolute bottom-[4vh] left-[7vw] text-[1.5vw] font-semibold text-muted">٠٧ / ١٢</div>
    </main>
  );
}