import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useColors } from '@/hooks/useColors';

type Screen = 'home' | 'controls' | 'privacy';
type AppKey = 'whatsapp' | 'instagram' | 'facebook';
type Preferences = {
  dailyLimitMinutes: number;
  bedtimeEnabled: boolean;
  locationDemoEnabled: boolean;
  appLimits: Record<AppKey, boolean>;
};

const STORAGE_KEY = 'aman-parent-demo-preferences-v1';
const DEFAULTS: Preferences = {
  dailyLimitMinutes: 180,
  bedtimeEnabled: true,
  locationDemoEnabled: false,
  appLimits: { whatsapp: true, instagram: true, facebook: false },
};

const appUsage: { key: AppKey; title: string; minutes: number; icon: keyof typeof MaterialCommunityIcons.glyphMap }[] = [
  { key: 'whatsapp', title: 'واتساب', minutes: 45, icon: 'whatsapp' },
  { key: 'instagram', title: 'إنستغرام', minutes: 38, icon: 'instagram' },
  { key: 'facebook', title: 'فيسبوك', minutes: 27, icon: 'facebook' },
];

function formatDuration(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const remaining = minutes % 60;
  if (hours === 0) return `${remaining} دقيقة`;
  return remaining ? `${hours} س ${remaining} د` : `${hours} ساعة`;
}

function SectionTitle({ title, action, onAction }: { title: string; action?: string; onAction?: () => void }) {
  const colors = useColors();
  return (
    <View style={styles.sectionHeading}>
      <Text style={[styles.sectionTitle, { color: colors.foreground }]}>{title}</Text>
      {action ? (
        <Pressable onPress={onAction} accessibilityRole="button">
          <Text style={[styles.sectionAction, { color: colors.primary }]}>{action}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

function DemoNotice({ compact = false }: { compact?: boolean }) {
  const colors = useColors();
  return (
    <View style={[styles.notice, { backgroundColor: colors.warningSoft, borderColor: colors.border }]}>
      <Feather name="info" size={17} color={colors.warning} />
      <Text style={[styles.noticeText, { color: colors.foreground }]}>
        {compact
          ? 'نموذج تجريبي: لا يتصل هذا التطبيق بجهاز الطفل.'
          : 'البيانات والإعدادات هنا تجريبية ومحفوظة على هذا الهاتف فقط، ولا تصل إلى جهاز الطفل.'}
      </Text>
    </View>
  );
}

function UsageRow({ item }: { item: (typeof appUsage)[number] }) {
  const colors = useColors();
  return (
    <View style={styles.usageRow}>
      <View style={[styles.appIcon, { backgroundColor: colors.secondary }]}>
        <MaterialCommunityIcons name={item.icon} size={21} color={colors.primary} />
      </View>
      <View style={styles.usageInfo}>
        <Text style={[styles.rowTitle, { color: colors.foreground }]}>{item.title}</Text>
        <Text style={[styles.rowSubtitle, { color: colors.mutedForeground }]}>مدة الاستخدام فقط</Text>
      </View>
      <Text style={[styles.usageTime, { color: colors.foreground }]}>{formatDuration(item.minutes)}</Text>
    </View>
  );
}

function SettingSwitch({
  title,
  subtitle,
  icon,
  value,
  onValueChange,
  testID,
}: {
  title: string;
  subtitle: string;
  icon: keyof typeof Feather.glyphMap;
  value: boolean;
  onValueChange: (value: boolean) => void;
  testID: string;
}) {
  const colors = useColors();
  return (
    <View style={styles.settingRow}>
      <View style={[styles.settingIcon, { backgroundColor: colors.secondary }]}>
        <Feather name={icon} size={18} color={colors.primary} />
      </View>
      <View style={styles.settingCopy}>
        <Text style={[styles.rowTitle, { color: colors.foreground }]}>{title}</Text>
        <Text style={[styles.rowSubtitle, { color: colors.mutedForeground }]}>{subtitle}</Text>
      </View>
      <Switch
        testID={testID}
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: colors.border, true: colors.primary }}
        thumbColor={colors.card}
      />
    </View>
  );
}

function Dashboard({ preferences, onScreen }: { preferences: Preferences; onScreen: (screen: Screen) => void }) {
  const colors = useColors();
  return (
    <>
      <View style={[styles.childCard, { backgroundColor: colors.primary }]}>
        <View style={styles.childTopLine}>
          <View style={styles.childAvatar}>
            <Feather name="user" size={22} color={colors.primary} />
          </View>
          <View style={styles.childCopy}>
            <Text style={styles.childName}>يوسف</Text>
            <Text style={styles.childLabel}>ملف تجريبي للطفل</Text>
          </View>
          <View style={styles.demoPill}>
            <View style={styles.demoDot} />
            <Text style={styles.demoPillText}>تجريبي</Text>
          </View>
        </View>
        <View style={styles.childDivider} />
        <View style={styles.usageSummary}>
          <View>
            <Text style={styles.childLabel}>وقت الشاشة اليوم · مثال</Text>
            <Text style={styles.bigUsage}>٢ س ١٨ د</Text>
          </View>
          <View style={styles.circleProgress}>
            <Text style={styles.circlePercent}>٧٦٪</Text>
          </View>
        </View>
        <View style={styles.limitLine}>
          <View style={styles.limitTrack}>
            <View style={styles.limitFill} />
          </View>
          <Text style={styles.limitText}>من حدّ {formatDuration(preferences.dailyLimitMinutes)}</Text>
        </View>
      </View>

      <DemoNotice />

      <SectionTitle title="وقت التطبيقات" action="الإعدادات" onAction={() => onScreen('controls')} />
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {appUsage.map((item, index) => (
          <React.Fragment key={item.key}>
            {index > 0 ? <View style={[styles.separator, { backgroundColor: colors.border }]} /> : null}
            <UsageRow item={item} />
          </React.Fragment>
        ))}
        <View style={[styles.privacyHint, { backgroundColor: colors.infoSoft }]}>
          <Feather name="eye-off" size={16} color={colors.info} />
          <Text style={[styles.privacyHintText, { color: colors.foreground }]}>
            نعرض المدة فقط؛ لا نطّلع على الرسائل أو الصور أو كلمات المرور.
          </Text>
        </View>
      </View>

      <SectionTitle title="إعدادات السلامة" action="عرض الكل" onAction={() => onScreen('controls')} />
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <SettingSwitch
          title="وقت النوم"
          subtitle="جدولة مقترحة · إعداد تجريبي"
          icon="moon"
          value={preferences.bedtimeEnabled}
          onValueChange={() => onScreen('controls')}
          testID="dashboard-bedtime"
        />
        <View style={[styles.separator, { backgroundColor: colors.border }]} />
        <SettingSwitch
          title="مشاركة الموقع"
          subtitle="متوقفة · لا يوجد جهاز مرتبط"
          icon="map-pin"
          value={false}
          onValueChange={() => onScreen('controls')}
          testID="dashboard-location"
        />
      </View>

      <Pressable onPress={() => onScreen('privacy')} style={[styles.safetyLink, { borderColor: colors.border }]} accessibilityRole="button">
        <Feather name="shield" size={18} color={colors.primary} />
        <Text style={[styles.safetyLinkText, { color: colors.foreground }]}>اعرف بالضبط ما يمكن للتطبيق رؤيته</Text>
        <Feather name="chevron-left" size={18} color={colors.mutedForeground} />
      </Pressable>
    </>
  );
}

function Controls({
  preferences,
  update,
}: {
  preferences: Preferences;
  update: (next: Partial<Preferences>) => void;
}) {
  const colors = useColors();
  return (
    <>
      <View style={styles.pageIntro}>
        <Text style={[styles.pageTitle, { color: colors.foreground }]}>إعدادات الاستخدام</Text>
        <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
          جرّب الحدود التي تريدها. في هذه النسخة لا تُطبّق على جهاز آخر.
        </Text>
      </View>
      <DemoNotice />

      <SectionTitle title="الحد اليومي المقترح" />
      <View style={[styles.limitCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.limitCardTop}>
          <View style={[styles.settingIcon, { backgroundColor: colors.successSoft }]}>
            <Feather name="clock" size={19} color={colors.primary} />
          </View>
          <View style={styles.settingCopy}>
            <Text style={[styles.rowTitle, { color: colors.foreground }]}>إجمالي وقت الشاشة</Text>
            <Text style={[styles.rowSubtitle, { color: colors.mutedForeground }]}>قيمة تجريبية قابلة للتعديل</Text>
          </View>
        </View>
        <View style={styles.stepper}>
          <Pressable
            testID="limit-decrease"
            accessibilityRole="button"
            accessibilityLabel="تقليل الحد اليومي"
            onPress={() => update({ dailyLimitMinutes: Math.max(30, preferences.dailyLimitMinutes - 30) })}
            style={[styles.stepButton, { backgroundColor: colors.secondary }]}
          >
            <Feather name="minus" size={20} color={colors.primary} />
          </Pressable>
          <Text style={[styles.limitValue, { color: colors.foreground }]}>{formatDuration(preferences.dailyLimitMinutes)}</Text>
          <Pressable
            testID="limit-increase"
            accessibilityRole="button"
            accessibilityLabel="زيادة الحد اليومي"
            onPress={() => update({ dailyLimitMinutes: Math.min(360, preferences.dailyLimitMinutes + 30) })}
            style={[styles.stepButton, { backgroundColor: colors.secondary }]}
          >
            <Feather name="plus" size={20} color={colors.primary} />
          </Pressable>
        </View>
        <Text style={[styles.helperText, { color: colors.mutedForeground }]}>يمكن ضبطه من ٣٠ دقيقة إلى ٦ ساعات.</Text>
      </View>

      <SectionTitle title="حدود التطبيقات" />
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {appUsage.map((item, index) => (
          <React.Fragment key={item.key}>
            {index > 0 ? <View style={[styles.separator, { backgroundColor: colors.border }]} /> : null}
            <SettingSwitch
              title={item.title}
              subtitle={preferences.appLimits[item.key] ? 'اقتراح حدّ يومي' : 'بلا حدّ مقترح'}
              icon="smartphone"
              value={preferences.appLimits[item.key]}
              onValueChange={(value) => update({ appLimits: { ...preferences.appLimits, [item.key]: value } })}
              testID={`app-limit-${item.key}`}
            />
          </React.Fragment>
        ))}
      </View>

      <SectionTitle title="الراحة والموقع" />
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <SettingSwitch
          title="وقت النوم"
          subtitle={preferences.bedtimeEnabled ? 'مفعّل في النموذج' : 'متوقف في النموذج'}
          icon="moon"
          value={preferences.bedtimeEnabled}
          onValueChange={(value) => update({ bedtimeEnabled: value })}
          testID="bedtime-toggle"
        />
        <View style={[styles.separator, { backgroundColor: colors.border }]} />
        <SettingSwitch
          title="تجربة مشاركة الموقع"
          subtitle={preferences.locationDemoEnabled ? 'مفعّلة محليًا فقط' : 'متوقفة'}
          icon="map-pin"
          value={preferences.locationDemoEnabled}
          onValueChange={(value) => update({ locationDemoEnabled: value })}
          testID="location-demo-toggle"
        />
        {preferences.locationDemoEnabled ? (
          <View style={[styles.inlineWarning, { backgroundColor: colors.infoSoft }]}>
            <Feather name="info" size={16} color={colors.info} />
            <Text style={[styles.inlineWarningText, { color: colors.foreground }]}>
              هذا التبديل يحفظ اختيارك على هاتف التجربة فقط؛ لا يرسل موقعًا.
            </Text>
          </View>
        ) : null}
      </View>
      <View style={styles.bottomSpace} />
    </>
  );
}

function Privacy({ onReset }: { onReset: () => void }) {
  const colors = useColors();
  const allowed = [
    ['bar-chart-2', 'مدة استخدام التطبيقات', 'ستحتاج النسخة الفعلية إلى موافقة Android الواضحة.'],
    ['map-pin', 'الموقع عند تفعيله', 'يجب أن يعرف الطفل متى تتم مشاركة موقعه.'],
    ['sliders', 'إعدادات النموذج', 'تُحفظ على هذا الهاتف فقط في النسخة الحالية.'],
  ] as const;
  const blocked = [
    ['message-circle', 'محتوى الرسائل والمحادثات'],
    ['image', 'الصور والملفات الخاصة'],
    ['key', 'كلمات المرور وضغطات المفاتيح'],
    ['phone', 'تسجيل المكالمات أو الاستماع إليها'],
  ] as const;
  return (
    <>
      <View style={styles.pageIntro}>
        <Text style={[styles.pageTitle, { color: colors.foreground }]}>الخصوصية أولًا</Text>
        <Text style={[styles.pageSubtitle, { color: colors.mutedForeground }]}>
          متابعة واضحة ومحدودة، بدون فتح محتوى الحسابات.
        </Text>
      </View>
      <DemoNotice />
      <View style={[styles.privacyHero, { backgroundColor: colors.successSoft }]}>
        <View style={[styles.privacyHeroIcon, { backgroundColor: colors.card }]}>
          <Feather name="shield" size={27} color={colors.primary} />
        </View>
        <Text style={[styles.privacyHeroTitle, { color: colors.foreground }]}>لا قراءة للمحادثات</Text>
        <Text style={[styles.privacyHeroText, { color: colors.mutedForeground }]}>
          لا يفتح التطبيق واتساب أو إنستغرام أو فيسبوك، ولا يعرض محتوى الرسائل أو الصور.
        </Text>
      </View>

      <SectionTitle title="ما قد يدعمه تطبيق رقابة واضح" />
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {allowed.map(([icon, title, subtitle], index) => (
          <React.Fragment key={title}>
            {index > 0 ? <View style={[styles.separator, { backgroundColor: colors.border }]} /> : null}
            <View style={styles.permissionRow}>
              <View style={[styles.permissionStatus, { backgroundColor: colors.successSoft }]}>
                <Feather name={icon} size={17} color={colors.primary} />
              </View>
              <View style={styles.permissionCopy}>
                <Text style={[styles.rowTitle, { color: colors.foreground }]}>{title}</Text>
                <Text style={[styles.rowSubtitle, { color: colors.mutedForeground }]}>{subtitle}</Text>
              </View>
            </View>
          </React.Fragment>
        ))}
      </View>

      <SectionTitle title="ما لا يجمعه هذا التطبيق" />
      <View style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border }]}>
        {blocked.map(([icon, title], index) => (
          <React.Fragment key={title}>
            {index > 0 ? <View style={[styles.separator, { backgroundColor: colors.border }]} /> : null}
            <View style={styles.blockedRow}>
              <Feather name={icon} size={17} color={colors.mutedForeground} />
              <Text style={[styles.blockedText, { color: colors.foreground }]}>{title}</Text>
              <Feather name="x" size={17} color={colors.destructive} />
            </View>
          </React.Fragment>
        ))}
      </View>

      <Pressable
        testID="reset-demo"
        onPress={onReset}
        accessibilityRole="button"
        style={[styles.resetButton, { borderColor: colors.border }]}
      >
        <Feather name="rotate-ccw" size={17} color={colors.primary} />
        <Text style={[styles.resetText, { color: colors.primary }]}>إعادة ضبط إعدادات النموذج</Text>
      </Pressable>
      <View style={styles.bottomSpace} />
    </>
  );
}

export default function AmanHomeScreen() {
  const colors = useColors();
  const insets = useSafeAreaInsets();
  const [screen, setScreen] = useState<Screen>('home');
  const [preferences, setPreferences] = useState<Preferences>(DEFAULTS);
  const [loaded, setLoaded] = useState(false);
  const [storageError, setStorageError] = useState(false);

  useEffect(() => {
    let active = true;
    AsyncStorage.getItem(STORAGE_KEY)
      .then((raw) => {
        if (!active) return;
        if (raw) {
          try {
            const saved = JSON.parse(raw) as Partial<Preferences>;
            setPreferences({
              ...DEFAULTS,
              ...saved,
              appLimits: { ...DEFAULTS.appLimits, ...saved.appLimits },
            });
          } catch {
            setStorageError(true);
          }
        }
        setLoaded(true);
      })
      .catch(() => {
        if (!active) return;
        setStorageError(true);
        setLoaded(true);
      });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(preferences)).catch(() => setStorageError(true));
  }, [preferences, loaded]);

  const update = (next: Partial<Preferences>) => setPreferences((current) => ({ ...current, ...next }));
  const reset = () => setPreferences(DEFAULTS);
  const topInset = Platform.OS === 'web' ? 67 : insets.top;
  const bottomInset = Platform.OS === 'web' ? 34 : Math.max(insets.bottom, 10);

  if (!loaded) {
    return (
      <View style={[styles.loading, { backgroundColor: colors.background }]}>
        <ActivityIndicator color={colors.primary} />
        <Text style={[styles.loadingText, { color: colors.mutedForeground }]}>جارٍ فتح النموذج…</Text>
      </View>
    );
  }

  return (
    <View style={[styles.screen, { backgroundColor: colors.background, paddingTop: topInset }]}>
      <View style={styles.header}>
        <View style={styles.brandMark}>
          <MaterialCommunityIcons name="shield-check" size={25} color={colors.primary} />
        </View>
        <View style={styles.headerCopy}>
          <Text style={[styles.brandTitle, { color: colors.foreground }]}>أمان</Text>
          <Text style={[styles.brandSubtitle, { color: colors.mutedForeground }]}>رقابة أبوية واضحة</Text>
        </View>
        <View style={[styles.headerStatus, { backgroundColor: colors.warningSoft }]}>
          <View style={[styles.statusDot, { backgroundColor: colors.warning }]} />
          <Text style={[styles.headerStatusText, { color: colors.warning }]}>نسخة تجريبية</Text>
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {storageError ? (
          <View style={[styles.inlineWarning, { backgroundColor: colors.warningSoft }]}>
            <Feather name="alert-circle" size={16} color={colors.warning} />
            <Text style={[styles.inlineWarningText, { color: colors.foreground }]}>تعذر حفظ إعدادات النموذج على هذا الهاتف.</Text>
          </View>
        ) : null}
        {screen === 'home' ? (
          <Dashboard preferences={preferences} onScreen={setScreen} />
        ) : screen === 'controls' ? (
          <Controls preferences={preferences} update={update} />
        ) : (
          <Privacy onReset={reset} />
        )}
      </ScrollView>

      <View style={[styles.tabBar, { backgroundColor: colors.card, borderColor: colors.border, bottom: bottomInset }]}>
        {([
          ['home', 'ملخص', 'home'],
          ['controls', 'الحدود', 'sliders'],
          ['privacy', 'الخصوصية', 'shield'],
        ] as const).map(([key, label, icon]) => {
          const active = screen === key;
          return (
            <Pressable
              key={key}
              testID={`tab-${key}`}
              accessibilityRole="tab"
              accessibilityState={{ selected: active }}
              onPress={() => setScreen(key)}
              style={styles.tabItem}
            >
              {key === 'privacy' ? (
                <Ionicons name={active ? 'shield-checkmark' : 'shield-outline'} size={21} color={active ? colors.primary : colors.mutedForeground} />
              ) : (
                <Feather name={icon as keyof typeof Feather.glyphMap} size={20} color={active ? colors.primary : colors.mutedForeground} />
              )}
              <Text style={[styles.tabLabel, { color: active ? colors.primary : colors.mutedForeground }]}>{label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  loading: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  loadingText: { fontSize: 14, fontFamily: 'Inter_500Medium' },
  header: { minHeight: 68, flexDirection: 'row-reverse', alignItems: 'center', paddingHorizontal: 20, gap: 10 },
  brandMark: { width: 42, height: 42, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(22,123,112,0.10)' },
  headerCopy: { flex: 1 },
  brandTitle: { fontFamily: 'Inter_700Bold', fontSize: 20, textAlign: 'right' },
  brandSubtitle: { fontFamily: 'Inter_400Regular', fontSize: 11, textAlign: 'right', marginTop: 1 },
  headerStatus: { flexDirection: 'row-reverse', alignItems: 'center', gap: 6, paddingHorizontal: 10, paddingVertical: 7, borderRadius: 14 },
  statusDot: { width: 6, height: 6, borderRadius: 3 },
  headerStatusText: { fontFamily: 'Inter_600SemiBold', fontSize: 11 },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 18, paddingTop: 8, paddingBottom: 150, gap: 15 },
  childCard: { borderRadius: 26, padding: 19, overflow: 'hidden' },
  childTopLine: { flexDirection: 'row-reverse', alignItems: 'center', gap: 11 },
  childAvatar: { width: 46, height: 46, borderRadius: 16, backgroundColor: '#E5F5EF', alignItems: 'center', justifyContent: 'center' },
  childCopy: { flex: 1 },
  childName: { color: '#FFFFFF', fontFamily: 'Inter_700Bold', fontSize: 17, textAlign: 'right' },
  childLabel: { color: 'rgba(255,255,255,0.72)', fontFamily: 'Inter_400Regular', fontSize: 12, textAlign: 'right', marginTop: 3 },
  demoPill: { flexDirection: 'row-reverse', alignItems: 'center', gap: 5, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 12, paddingHorizontal: 9, paddingVertical: 6 },
  demoDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#F2CE8B' },
  demoPillText: { color: '#FFFFFF', fontFamily: 'Inter_500Medium', fontSize: 10 },
  childDivider: { height: 1, backgroundColor: 'rgba(255,255,255,0.16)', marginVertical: 16 },
  usageSummary: { flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between' },
  bigUsage: { color: '#FFFFFF', fontFamily: 'Inter_700Bold', fontSize: 31, textAlign: 'right', marginTop: 3 },
  circleProgress: { width: 58, height: 58, borderWidth: 4, borderColor: '#9BDED0', borderRadius: 30, alignItems: 'center', justifyContent: 'center' },
  circlePercent: { color: '#FFFFFF', fontFamily: 'Inter_700Bold', fontSize: 12 },
  limitLine: { marginTop: 14, flexDirection: 'row-reverse', alignItems: 'center', gap: 10 },
  limitTrack: { flex: 1, height: 7, borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.20)', overflow: 'hidden' },
  limitFill: { width: '76%', height: '100%', borderRadius: 5, backgroundColor: '#E8C98A' },
  limitText: { color: 'rgba(255,255,255,0.78)', fontFamily: 'Inter_500Medium', fontSize: 10 },
  notice: { flexDirection: 'row-reverse', alignItems: 'flex-start', gap: 9, borderWidth: 1, borderRadius: 16, padding: 12 },
  noticeText: { flex: 1, fontFamily: 'Inter_500Medium', fontSize: 12, lineHeight: 19, textAlign: 'right' },
  sectionHeading: { minHeight: 26, flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between', marginTop: 2 },
  sectionTitle: { fontFamily: 'Inter_700Bold', fontSize: 16, textAlign: 'right' },
  sectionAction: { fontFamily: 'Inter_600SemiBold', fontSize: 12 },
  card: { borderWidth: 1, borderRadius: 21, paddingHorizontal: 14, overflow: 'hidden' },
  usageRow: { minHeight: 67, flexDirection: 'row-reverse', alignItems: 'center', gap: 11 },
  appIcon: { width: 39, height: 39, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  usageInfo: { flex: 1 },
  rowTitle: { fontFamily: 'Inter_600SemiBold', fontSize: 13, textAlign: 'right' },
  rowSubtitle: { fontFamily: 'Inter_400Regular', fontSize: 11, textAlign: 'right', marginTop: 4, lineHeight: 16 },
  usageTime: { fontFamily: 'Inter_600SemiBold', fontSize: 12 },
  separator: { height: 1, marginLeft: 1 },
  privacyHint: { flexDirection: 'row-reverse', alignItems: 'center', gap: 8, borderRadius: 13, padding: 10, marginTop: 5, marginBottom: 12 },
  privacyHintText: { flex: 1, fontFamily: 'Inter_500Medium', fontSize: 10, lineHeight: 16, textAlign: 'right' },
  settingRow: { minHeight: 76, flexDirection: 'row-reverse', alignItems: 'center', gap: 10 },
  settingIcon: { width: 38, height: 38, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  settingCopy: { flex: 1 },
  safetyLink: { minHeight: 54, flexDirection: 'row-reverse', alignItems: 'center', gap: 10, borderWidth: 1, borderRadius: 17, paddingHorizontal: 14 },
  safetyLinkText: { flex: 1, fontFamily: 'Inter_600SemiBold', fontSize: 12, textAlign: 'right' },
  pageIntro: { gap: 6, paddingTop: 4, paddingBottom: 2 },
  pageTitle: { fontFamily: 'Inter_700Bold', fontSize: 24, textAlign: 'right' },
  pageSubtitle: { fontFamily: 'Inter_400Regular', fontSize: 13, lineHeight: 20, textAlign: 'right' },
  limitCard: { borderWidth: 1, borderRadius: 21, padding: 16 },
  limitCardTop: { flexDirection: 'row-reverse', alignItems: 'center', gap: 10 },
  stepper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 18 },
  stepButton: { width: 43, height: 43, borderRadius: 15, alignItems: 'center', justifyContent: 'center' },
  limitValue: { fontFamily: 'Inter_700Bold', fontSize: 19 },
  helperText: { fontFamily: 'Inter_400Regular', fontSize: 11, textAlign: 'right', marginTop: 11 },
  inlineWarning: { flexDirection: 'row-reverse', alignItems: 'flex-start', gap: 8, borderRadius: 13, padding: 11, marginTop: 10, marginBottom: 12 },
  inlineWarningText: { flex: 1, fontFamily: 'Inter_500Medium', fontSize: 11, lineHeight: 18, textAlign: 'right' },
  privacyHero: { borderRadius: 23, padding: 20, alignItems: 'center', gap: 10 },
  privacyHeroIcon: { width: 56, height: 56, borderRadius: 19, alignItems: 'center', justifyContent: 'center' },
  privacyHeroTitle: { fontFamily: 'Inter_700Bold', fontSize: 17, textAlign: 'center' },
  privacyHeroText: { fontFamily: 'Inter_400Regular', fontSize: 12, lineHeight: 20, textAlign: 'center' },
  permissionRow: { minHeight: 76, flexDirection: 'row-reverse', alignItems: 'center', gap: 11 },
  permissionStatus: { width: 38, height: 38, borderRadius: 13, alignItems: 'center', justifyContent: 'center' },
  permissionCopy: { flex: 1 },
  blockedRow: { minHeight: 53, flexDirection: 'row-reverse', alignItems: 'center', gap: 11 },
  blockedText: { flex: 1, fontFamily: 'Inter_500Medium', fontSize: 12, textAlign: 'right' },
  resetButton: { flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'center', gap: 9, minHeight: 49, borderWidth: 1, borderRadius: 15 },
  resetText: { fontFamily: 'Inter_600SemiBold', fontSize: 12 },
  bottomSpace: { height: 8 },
  tabBar: { position: 'absolute', left: 16, right: 16, height: 66, borderWidth: 1, borderRadius: 23, flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 8, elevation: 7, shadowColor: '#000000', shadowOpacity: 0.07, shadowRadius: 18, shadowOffset: { width: 0, height: 5 } },
  tabItem: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 4, minHeight: 58 },
  tabLabel: { fontFamily: 'Inter_600SemiBold', fontSize: 10 },
});
