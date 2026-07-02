export type ProjectType = "ساخته‌شده" | "مفهومی";

export interface GalleryItem {
  /** Caption shown beneath the image placeholder */
  caption: string;
  /** Aspect ratio class: "aspect-[4/3]" | "aspect-[3/4]" | "aspect-square" */
  aspect: string;
  /** Background color used as placeholder until real image is provided */
  color: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  type: ProjectType;
  year: string;
  location: string;
  area: string;
  status: string;
  /** Design role vs. execution role clarification */
  roleNote?: string;
  scope: string[];
  materials: string[];
  gallery: GalleryItem[];
  description: string;
  designerNote: string;
  coverColor: string;
  accentColor: string;
}

export const projects: Project[] = [
  {
    slug: "villa-shemiran",
    title: "ویلا شمیران",
    subtitle: "فضایی آرام در دامنه کوه",
    type: "ساخته‌شده",
    year: "۱۴۰۲",
    location: "شمیران، تهران",
    area: "۶۵۰ متر مربع",
    status: "اجراشده و تحویل‌داده‌شده",
    scope: [
      "طراحی معماری",
      "نقشه‌های اجرایی",
      "مدیریت پروژه",
      "هماهنگی مشاوران",
    ],
    materials: ["سنگ ترکیبی", "چوب بلوط", "شیشه کم‌انعکاس", "بتن اکسپوز"],
    roleNote: "طراحی کامل + مدیریت اجرا تا تحویل",
    gallery: [
      { caption: "نمای اصلی از باغ", aspect: "aspect-[16/9]", color: "#c8c4bc" },
      { caption: "تراس معلق — دید به دره", aspect: "aspect-[4/3]", color: "#d4d1cc" },
      { caption: "فضای نشیمن با سقف بلند", aspect: "aspect-[3/4]", color: "#bab6ae" },
      { caption: "جزئیات سنگ و چوب", aspect: "aspect-square", color: "#ccc8c0" },
    ],
    description:
      "این ویلا بر دامنه‌ی شمالی تهران طراحی شده تا رابطه‌ای پیوسته میان فضای داخلی و منظر کوه برقرار کند. حجم ساختمان از سطح زمین کنده شده و یک تراس معلق ایجاد می‌کند که دید ۱۸۰ درجه به دره دارد.",
    designerNote:
      "چالش اصلی حفظ سکوت بصری در عین ارائه تمام رفاه مدرن بود. راه‌حل در پنهان‌سازی تأسیسات و سادگی جداره‌ها نهفته است.",
    coverColor: "#d4d1cc",
    accentColor: "#5c6148",
  },
  {
    slug: "penthouse-elahieh",
    title: "پنت‌هاوس الهیه",
    subtitle: "شهر از بالا، آرامش از درون",
    type: "ساخته‌شده",
    year: "۱۴۰۱",
    location: "الهیه، تهران",
    area: "۳۸۰ متر مربع",
    status: "اجراشده و تحویل‌داده‌شده",
    scope: ["طراحی معماری", "طراحی داخلی", "مدیریت اجرا", "نظارت کارگاهی"],
    materials: ["مرمر ایتالیایی", "فولاد سیاه‌شده", "بتن سفید", "چوب گردو"],
    roleNote: "طراحی معماری + طراحی داخلی",
    gallery: [
      { caption: "فضای نشیمن با دیوار شیشه‌ای", aspect: "aspect-[16/9]", color: "#dedad4" },
      { caption: "آشپزخانه — جزیره مرمری", aspect: "aspect-[4/3]", color: "#e4e0da" },
      { caption: "سوئیت اصلی — نور صبحگاهی", aspect: "aspect-[3/4]", color: "#d6d2cc" },
      { caption: "جزئیات فولاد سیاه‌شده", aspect: "aspect-square", color: "#ccc8c2" },
    ],
    description:
      "در طبقه‌ی آخر یک برج لوکس، پنت‌هاوسی طراحی شده که با سقف‌های دوارتفاعه و جداره‌های تمام شیشه، منظر شهر را به بخشی از معماری داخلی تبدیل می‌کند.",
    designerNote:
      "تقسیم‌بندی فضا بدون دیوار باربر، با استفاده از جزایر سنگی و سطح‌های معلق انجام شده. نور طبیعی در تمام ساعات روز در هر گوشه‌ای حضور دارد.",
    coverColor: "#eae8e5",
    accentColor: "#7a6b5a",
  },
  {
    slug: "residence-lavasan",
    title: "مسکونی لواسان",
    subtitle: "یکپارچگی با طبیعت",
    type: "ساخته‌شده",
    year: "۱۴۰۰",
    location: "لواسان، البرز",
    area: "#۱۲۰۰ متر مربع",
    status: "اجراشده و تحویل‌داده‌شده",
    scope: [
      "طراحی معماری",
      "نقشه‌های اجرایی",
      "مدیریت پروژه",
      "طراحی محوطه",
    ],
    materials: ["سنگ بازالت", "چوب دوگلاس", "مس اکسیدشده", "آجر دستساز"],
    roleNote: "طراحی + مدیریت اجرا + طراحی محوطه",
    gallery: [
      { caption: "نمای شرقی — سنگ بازالت", aspect: "aspect-[16/9]", color: "#b4b0a8" },
      { caption: "ورودی و دیوار سنگی قدیمی", aspect: "aspect-[3/4]", color: "#c0bcb4" },
      { caption: "حیاط مرکزی و درختان اصیل", aspect: "aspect-[4/3]", color: "#bab6ae" },
    ],
    description:
      "این ساختمان مسکونی در دل باغی قدیمی در لواسان قرار دارد. هدف اصلی حفظ درختان موجود و ادغام معماری با بافت طبیعی بوده است. دیوارهای سنگی موجود در طرح جدید جذب شده‌اند.",
    designerNote:
      "معماری خوب گاهی یعنی کمتر ساختن. اینجا هر عنصر اضافه‌ای حذف شد تا طبیعت بیشتر دیده شود.",
    coverColor: "#c8c4bc",
    accentColor: "#5c6148",
  },
  {
    slug: "concept-floating-house",
    title: "خانه معلق",
    subtitle: "تجربه‌ای از وزن‌رهایی",
    type: "مفهومی",
    year: "۱۴۰۳",
    location: "طراحی نظری",
    area: "۲۸۰ متر مربع",
    status: "مطالعه طراحی",
    scope: ["مطالعه طراحی", "مدل‌سازی دیجیتال", "پژوهش مصالح"],
    materials: ["سازه فولادی معلق", "شیشه لمینیت", "آلومینیوم آنودایزشده"],
    roleNote: "مطالعه طراحی — بدون اجرا",
    gallery: [
      { caption: "رندر — نمای جنوبی", aspect: "aspect-[16/9]", color: "#a8a4a0" },
      { caption: "رندر — کف شیشه‌ای از زیر", aspect: "aspect-[4/3]", color: "#b0acaa" },
      { caption: "دیاگرام سازه‌ای", aspect: "aspect-square", color: "#aca8a4" },
    ],
    description:
      "یک آزمایش طراحی در حد فاصل مسکن و مجسمه. ساختمان از چهار نقطه لنگرگاه آویزان است و کف آن در همه‌ی اتاق‌ها شیشه‌ای است — تجربه‌ای از شناوری کامل.",
    designerNote:
      "این پروژه پرسشی درباره‌ی ارتباط ساختمان با زمین است. وقتی تماس با خاک را قطع کنی، چه اتفاقی برای معماری می‌افتد؟",
    coverColor: "#b8b4ac",
    accentColor: "#6B7280",
  },
  {
    slug: "concept-courtyard-tower",
    title: "برج حیاط‌مرکزی",
    subtitle: "معماری ایرانی در قامت مدرن",
    type: "مفهومی",
    year: "۱۴۰۲",
    location: "طراحی نظری",
    area: "۴ طبقه | ۱۸۰۰ متر مربع",
    status: "مطالعه طراحی",
    scope: ["مطالعه طراحی", "مدل‌سازی دیجیتال", "تحقیق تاریخی"],
    materials: ["آجر مخصوص", "بتن معروق", "فولاد کورتن", "آب و نور طبیعی"],
    roleNote: "مطالعه طراحی — بدون اجرا",
    gallery: [
      { caption: "رندر — نمای عمودی حیاط", aspect: "aspect-[3/4]", color: "#c4c0ba" },
      { caption: "رندر — مقطع عمودی", aspect: "aspect-[16/9]", color: "#ccc8c2" },
      { caption: "دیاگرام سازمان فضایی", aspect: "aspect-square", color: "#c0bcb6" },
    ],
    description:
      "بازخوانی معاصر از سازمان‌فضایی خانه‌های ایرانی — حیاط مرکزی به‌جای قرارگیری در کف، به ارتفاع می‌رود و هر طبقه را با فضای باز عمودی متصل می‌کند.",
    designerNote:
      "هویت معماری ایرانی در درون‌گرایی و رابطه با آسمان است، نه در نقوش سطحی. اینجا سعی کرده‌ام آن جوهر را در زبانی کاملاً معاصر بازگو کنم.",
    coverColor: "#d0ccc6",
    accentColor: "#7a6b5a",
  },
  {
    slug: "villa-damavand",
    title: "ویلا دماوند",
    subtitle: "سادگی در برابر عظمت",
    type: "ساخته‌شده",
    year: "۱۳۹۹",
    location: "دماوند، مازندران",
    area: "۸۵۰ متر مربع",
    status: "اجراشده و تحویل‌داده‌شده",
    scope: ["طراحی معماری", "نقشه‌های اجرایی", "نظارت کارگاهی"],
    materials: ["چوب سدر", "سنگ آهک محلی", "فولاد نمک‌خورده", "سرامیک بومی"],
    roleNote: "طراحی معماری + نظارت اجرا",
    gallery: [
      { caption: "پنجره قاب‌کننده دماوند", aspect: "aspect-[16/9]", color: "#b8b4ac" },
      { caption: "نمای اصلی — سنگ آهک محلی", aspect: "aspect-[4/3]", color: "#c0bcb4" },
      { caption: "فضای معیشت — سادگی مطلق", aspect: "aspect-[3/4]", color: "#b0aca4" },
    ],
    description:
      "این ویلا در مقابل دماوند نشسته و کم‌ترین تظاهر معمارانه را دارد — چون هیچ ساختمانی نمی‌تواند با آن کوه رقابت کند. فرم ساده، مصالح بومی، و پنجره‌های گسترده که کوه را قاب می‌کنند.",
    designerNote:
      "شاید بزرگ‌ترین درس معماری که آموختم این است: گاهی بهترین کار این است که کنار بکشی و اجازه بدهی طبیعت صحبت کند.",
    coverColor: "#c4c0b8",
    accentColor: "#5c6148",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getBuiltProjects(): Project[] {
  return projects.filter((p) => p.type === "ساخته‌شده");
}

export function getConceptProjects(): Project[] {
  return projects.filter((p) => p.type === "مفهومی");
}
