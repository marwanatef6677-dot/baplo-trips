import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, MessageCircle, Phone, Route, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { PabloMap } from "@/components/pablo-map";

type WelcomeProps = { onContinue: () => void };

export default function Welcome({ onContinue }: WelcomeProps) {
  const reduceMotion = useReducedMotion();
  const appear = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.65, delay },
  });

  return (
    <div dir="rtl" className="welcome-page relative isolate overflow-hidden">
      <div aria-hidden="true" className="welcome-grain" />
      <div aria-hidden="true" className="welcome-orbit welcome-orbit-one" />
      <div aria-hidden="true" className="welcome-orbit welcome-orbit-two" />

      <div className="welcome-inner">
        <section className="welcome-hero">
          <div className="welcome-copy">
            <motion.div {...appear(0.05)} className="welcome-kicker" data-testid="text-welcome-eyebrow">
              <span className="welcome-live-dot" />
              تجربة بابلو في مصر
            </motion.div>

            <motion.h1 {...appear(0.15)} className="welcome-title" data-testid="text-welcome-title">
              مشوارك
              <span>على مزاجك.</span>
            </motion.h1>

            <motion.p {...appear(0.25)} className="welcome-description" data-testid="text-welcome-description">
              اطلب رحلتك وإنت في فرشتك 👌🏻
              <br />
              مع بابلو، سلامتك تهمنا علشان مفيش أوفر مننا.
            </motion.p>

            <motion.div {...appear(0.35)} className="welcome-actions">
              <button
                type="button"
                onClick={onContinue}
                data-testid="button-welcome-continue"
                className="welcome-cta press"
              >
                خلّينا نبدأ
                <ArrowLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <Link
                href="/sign-in"
                onClick={onContinue}
                data-testid="link-welcome-signin"
                className="welcome-signin"
              >
                عندك حساب؟ <span>ادخل</span>
              </Link>
            </motion.div>

            <motion.div {...appear(0.45)} className="welcome-reassurance" data-testid="text-welcome-reassurance">
              <ShieldCheck aria-hidden="true" className="h-[17px] w-[17px]" />
              <span>خطوات واضحة، وكباتن محليين في محافظتك</span>
            </motion.div>
          </div>

          <motion.div
            {...appear(0.2)}
            className="welcome-art"
            aria-label="رسم توضيحي لطريق رحلة في المدينة"
            role="img"
            data-testid="illustration-welcome-route"
          >
            <div className="art-topline">
              <span>معاينة خريطة القاهرة</span>
              <span className="art-coordinate">30°02′N&nbsp; 31°14′E</span>
            </div>
            <PabloMap
              pickup={{ lat: 30.0444, lng: 31.2357 }}
              destination={{ lat: 30.0372, lng: 31.2137 }}
              interactive={false}
              showControls={false}
              className="welcome-live-map"
            />
            <div aria-hidden="true" className="welcome-map-shade" />

            <motion.div
              className="trip-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <span className="trip-card-icon"><Route aria-hidden="true" /></span>
              <span className="trip-card-copy">
                <strong>خريطة فعلية لشوارع المدينة</strong>
                <small>حدد الركوب والوجهة وشوف الطريق بوضوح</small>
              </span>
              <span className="trip-card-arrow"><ArrowLeft aria-hidden="true" /></span>
            </motion.div>
            <span className="art-index">01 / 03</span>
          </motion.div>
        </section>

        <motion.div {...appear(0.55)} className="welcome-bottom">
          <div className="welcome-steps" data-testid="text-welcome-how-it-works">
            <span className="step-mark">١</span><span>حدّد مشوارك</span>
            <i />
            <span className="step-mark">٢</span><span>كابتن يقبل</span>
            <i />
            <span className="step-mark">٣</span><span>توصل بالسلامة</span>
          </div>
          <button
            type="button"
            onClick={onContinue}
            className="welcome-skip"
            data-testid="button-welcome-skip"
          >
            تخطّي المقدمة
          </button>
        </motion.div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#15232a]/10 py-4" data-testid="section-welcome-support">
          <span className="text-xs font-semibold text-[#15232a]/60">محتاج مساعدة؟ خدمة عملاء بابلو</span>
          <div className="flex gap-2">
            <a href="tel:+201210108856" data-testid="link-welcome-support-call" className="inline-flex min-h-10 items-center gap-2 rounded-xl bg-[#15232a] px-3 text-xs font-bold text-[#f7c928]"><Phone className="h-4 w-4" />اتصل</a>
            <a href="https://wa.me/201210108856" target="_blank" rel="noreferrer" data-testid="link-welcome-support-whatsapp" className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-[#15232a]/15 px-3 text-xs font-bold text-[#15232a]"><MessageCircle className="h-4 w-4" />واتساب</a>
          </div>
        </div>
      </div>
    </div>
  );
}
