export type Lang = 'en' | 'fa'

export interface Project {
  id: string
  name: { en: string; fa: string }
  category: { en: string; fa: string }
  location: { en: string; fa: string }
  year: string
  scope: { en: string; fa: string }
  description: { en: string; fa: string }
  img: string
  imgDetail: string
}

export interface Service {
  id: string
  icon: string
  name: { en: string; fa: string }
  description: { en: string; fa: string }
  steps: { en: string; fa: string }[]
  price: { en: string; fa: string }
}

export interface TeamMember {
  name: string
  role: { en: string; fa: string }
  bio: { en: string; fa: string }
  img: string
}

// ─── NAV ──────────────────────────────────────────────────────────────────
export const nav = {
  home:      { en: 'Home',      fa: 'خانه'     },
  services:  { en: 'Services',  fa: 'خدمات'    },
  portfolio: { en: 'Portfolio', fa: 'پورتفولیو' },
  about:     { en: 'About',     fa: 'درباره ما' },
  contact:   { en: 'Contact',   fa: 'تماس'      },
}

// ─── HERO ─────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow:  { en: 'Interior Design Studio — Tehran', fa: 'استودیو طراحی داخلی — تهران' },
  line1:    { en: 'Space,',        fa: 'فضا،'   },
  line2:    { en: 'considered.',   fa: 'با دقت.' },
  tagline:  {
    en: 'We design spaces that respond to how people actually live. Every project begins with listening.',
    fa: 'فضاهایی طراحی می‌کنیم که با زندگی واقعی آدم‌ها هماهنگ باشن. هر پروژه با گوش دادن شروع می‌شه.',
  },
  cta1: { en: 'View Portfolio',       fa: 'پورتفولیو'      },
  cta2: { en: 'Start a Project',      fa: 'شروع پروژه'     },
  img:  '/images/hero.jpg',
}

// ─── SERVICES TEASER (homepage strip) ────────────────────────────────────
export const serviceTeaser = [
  {
    icon: '⬜',
    title: { en: 'Residential',   fa: 'مسکونی'  },
    desc:  { en: 'Apartments, villas, private homes.', fa: 'آپارتمان، ویلا، خانه شخصی.' },
  },
  {
    icon: '◻',
    title: { en: 'Commercial',    fa: 'تجاری'    },
    desc:  { en: 'Offices, restaurants, boutiques.', fa: 'دفتر، رستوران، بوتیک.' },
  },
  {
    icon: '◇',
    title: { en: 'Consultation',  fa: 'مشاوره'   },
    desc:  { en: 'One session. One clear direction.', fa: 'یه جلسه. یه مسیر مشخص.' },
  },
]

// ─── PROJECTS ────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'p1',
    name:     { en: 'Elahiyeh Residence',    fa: 'خانه الهیه'          },
    category: { en: 'Residential',           fa: 'مسکونی'              },
    location: { en: 'Elahiyeh, Tehran',      fa: 'الهیه، تهران'        },
    year:     '2023',
    scope:    { en: '240 m² · Full renovation', fa: '۲۴۰ متر · بازسازی کامل' },
    description: {
      en: 'A complete interior overhaul of a 1990s apartment in Elahiyeh. Structural walls were opened to create a fluid living-dining volume. Natural materials — oak, concrete plaster, aged brass — run throughout.',
      fa: 'بازسازی کامل یه آپارتمان دهه ۷۰ در الهیه. دیوارهای باربر باز شدن تا یه فضای یکپارچه نشیمن-پذیرایی بسازیم. مصالح طبیعی — بلوط، سیمان‌کاری، برنج کهنه — در سراسر خونه جاری‌ان.',
    },
    img:       '/images/project-elahiyeh.jpg',
    imgDetail: '/images/project-elahiyeh.jpg',
  },
  {
    id: 'p2',
    name:     { en: 'Vanak Legal Office',    fa: 'دفتر وکالت ونک'       },
    category: { en: 'Commercial',            fa: 'تجاری'                },
    location: { en: 'Vanak, Tehran',         fa: 'ونک، تهران'           },
    year:     '2023',
    scope:    { en: '180 m² · Office fit-out', fa: '۱۸۰ متر · طراحی دفتر' },
    description: {
      en: 'A legal practice requiring authority without intimidation. Dark walnut joinery, curated library walls, and controlled natural light create an atmosphere of calm confidence.',
      fa: 'یه دفتر حقوقی که باید هم اقتدار داشت هم صمیمی باشه. چوب‌کاری گردوی تیره، کتابخانه‌های کیوریت‌شده و نور طبیعی کنترل‌شده حس اطمینان آروم می‌سازن.',
    },
    img:       '/images/project-vanak.jpg',
    imgDetail: '/images/project-vanak.jpg',
  },
  {
    id: 'p3',
    name:     { en: 'Shahrak Gharb Villa',   fa: 'ویلای شهرک غرب'       },
    category: { en: 'Residential',           fa: 'مسکونی'              },
    location: { en: 'Shahrak Gharb, Tehran', fa: 'شهرک غرب، تهران'     },
    year:     '2022',
    scope:    { en: '420 m² · New build interior', fa: '۴۲۰ متر · طراحی داخلی ساختمان نو' },
    description: {
      en: 'A newly built villa with a brief demanding warmth despite its scale. A neutral palette of limestone, linen and matte metal grounds the space, while indoor greenery brings movement and life.',
      fa: 'یه ویلای تازه‌ساز که با وجود ابعاد بزرگ باید گرم به نظر می‌رسید. پالت خنثی از سنگ آهک، کتان و فلز مات فضا رو ثابت نگه می‌داره و سبزی‌های داخلی زندگی بهش می‌بخشن.',
    },
    img:       '/images/project-shahrak.jpg',
    imgDetail: '/images/project-shahrak.jpg',
  },
  {
    id: 'p4',
    name:     { en: 'Parsé Café',            fa: 'کافه پارسه'           },
    category: { en: 'Commercial',            fa: 'تجاری'               },
    location: { en: 'Jordan, Tehran',        fa: 'جردن، تهران'         },
    year:     '2024',
    scope:    { en: '95 m² · Café concept & fit-out', fa: '۹۵ متر · کانسپت و اجرا' },
    description: {
      en: 'A café that needed to feel both minimal and inviting. Raw concrete ceiling meets warm terrazzo floors and custom millwork. Every surface was considered for its texture at close range.',
      fa: 'یه کافه که باید هم مینیمال باشه هم دلنشین. سقف بتن خام کنار کف تراورتن گرم و کارهای چوبی سفارشی. هر سطح از نزدیک از نظر بافتش بررسی شد.',
    },
    img:       '/images/project-parse.jpg',
    imgDetail: '/images/project-parse.jpg',
  },
  {
    id: 'p5',
    name:     { en: 'Zafaraniyeh Penthouse', fa: 'پنت‌هاوس زعفرانیه'    },
    category: { en: 'Residential',           fa: 'مسکونی'              },
    location: { en: 'Zafaraniyeh, Tehran',   fa: 'زعفرانیه، تهران'     },
    year:     '2023',
    scope:    { en: '310 m² + terrace · Renovation', fa: '۳۱۰ متر + تراس · بازسازی' },
    description: {
      en: 'A penthouse renovation maximising its panoramic views of northern Tehran. A monochromatic palette keeps the eye focused on the city. Custom steel-and-glass partitions divide without closing.',
      fa: 'بازسازی پنت‌هاوسی که باید از دیدهای پانورامیک شمال تهران بیشترین استفاده رو می‌کرد. پالت مونوکروم چشم رو روی شهر نگه می‌داره. پارتیشن‌های فولاد و شیشه تقسیم می‌کنن بدون اینکه ببندن.',
    },
    img:       '/images/project-zafaraniyeh.jpg',
    imgDetail: '/images/project-zafaraniyeh.jpg',
  },
  {
    id: 'p6',
    name:     { en: 'Negar Boutique',        fa: 'بوتیک نگار'           },
    category: { en: 'Commercial',            fa: 'تجاری'               },
    location: { en: 'Tajrish, Tehran',       fa: 'تجریش، تهران'        },
    year:     '2022',
    scope:    { en: '75 m² · Retail concept', fa: '۷۵ متر · کانسپت فروشگاهی' },
    description: {
      en: 'A women\'s fashion boutique in Tajrish square. The brief: make the garments feel like art. Curved plaster walls, recessed lighting, and minimal fixtures allow the clothing to take centre stage.',
      fa: 'یه بوتیک مد زنانه در میدان تجریش. خواسته: لباس‌ها مثل هنر به نظر برسن. دیوارهای گچی منحنی، نورپردازی مخفی و فیکسچرهای مینیمال به لباس‌ها اجازه می‌دن مرکز توجه باشن.',
    },
    img:       '/images/project-negar.jpg',
    imgDetail: '/images/project-negar.jpg',
  },
]

// ─── SERVICES ────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    id: 's1',
    icon: '⬜',
    name: { en: 'Residential Design', fa: 'طراحی مسکونی' },
    description: {
      en: 'Full interior design for apartments, villas, and private homes. We handle everything from spatial planning to material selection, custom furniture, and project management through to handover.',
      fa: 'طراحی داخلی کامل برای آپارتمان، ویلا و خانه شخصی. از برنامه‌ریزی فضایی تا انتخاب مصالح، مبلمان سفارشی و مدیریت پروژه تا تحویل — همه چیز با ما.',
    },
    steps: [
      { en: 'Discovery & brief — one or two sessions to understand the client\'s life, not just their taste.', fa: 'کشف و بریف — یک یا دو جلسه برای فهمیدن زندگی مشتری، نه فقط سلیقه‌اش.' },
      { en: 'Concept & design — spatial layouts, mood boards, material palette, 3D renders.', fa: 'کانسپت و طراحی — پلان‌های فضایی، مود بورد، پالت مصالح، رندر سه‌بعدی.' },
      { en: 'Execution & handover — coordinating contractors, site visits, final styling.', fa: 'اجرا و تحویل — هماهنگی پیمانکاران، بازدید از سایت، استایلینگ نهایی.' },
    ],
    price: { en: 'Starting from 45,000,000 T', fa: 'از ۴۵ میلیون تومان' },
  },
  {
    id: 's2',
    icon: '◻',
    name: { en: 'Commercial Design', fa: 'طراحی تجاری' },
    description: {
      en: 'Interior design for offices, restaurants, cafés, retail, and hospitality spaces. We balance brand identity with functional performance — spaces that look intentional and work hard.',
      fa: 'طراحی داخلی برای دفاتر، رستوران‌ها، کافه‌ها، فروشگاه‌ها و فضاهای مهمان‌نوازی. تعادل بین هویت برند و عملکرد فضا — طراحی‌هایی که هم هدفمند به نظر می‌رسن هم خوب کار می‌کنن.',
    },
    steps: [
      { en: 'Brand alignment — understanding the client\'s visual identity, target audience, and operational needs.', fa: 'هم‌راستایی با برند — فهمیدن هویت بصری، مخاطب هدف و نیازهای عملیاتی.' },
      { en: 'Space planning & concept — flow analysis, zoning, furniture layout, material scheme.', fa: 'برنامه‌ریزی فضا و کانسپت — آنالیز مسیر حرکت، زون‌بندی، چیدمان مبلمان، طرح مصالح.' },
      { en: 'Build & launch support — contractor management, punch list, opening styling.', fa: 'حمایت ساخت و راه‌اندازی — مدیریت پیمانکار، لیست نقص، استایلینگ افتتاح.' },
    ],
    price: { en: 'Starting from 30,000,000 T', fa: 'از ۳۰ میلیون تومان' },
  },
  {
    id: 's3',
    icon: '◇',
    name: { en: 'Space Consultation', fa: 'مشاوره فضا' },
    description: {
      en: 'A focused two-hour session for clients who need a clear direction but are not ready for a full project. We walk through the space together, identify priorities, and deliver a written action plan.',
      fa: 'یه جلسه دو ساعته متمرکز برای مشتریانی که نیاز به یه مسیر مشخص دارن اما آماده یه پروژه کامل نیستن. باهم فضا رو بررسی می‌کنیم، اولویت‌ها رو شناسایی می‌کنیم و یه برنامه عملیاتی مکتوب تحویل می‌دیم.',
    },
    steps: [
      { en: 'Pre-session brief — client fills a short questionnaire about the space and goals.', fa: 'بریف قبل از جلسه — مشتری یه پرسشنامه کوتاه درباره فضا و اهداف پر می‌کنه.' },
      { en: 'On-site session — two-hour walkthrough, photography, priority mapping.', fa: 'جلسه حضوری — بازدید دو ساعته، عکاسی، اولویت‌بندی.' },
      { en: 'Written action plan delivered within 3 business days.', fa: 'برنامه عملیاتی مکتوب ظرف ۳ روز کاری تحویل داده می‌شه.' },
    ],
    price: { en: '4,500,000 T / session', fa: '۴.۵ میلیون تومان / جلسه' },
  },
]

// ─── TEAM ─────────────────────────────────────────────────────────────────
export const team: TeamMember[] = [
  {
    name: 'Sara Eslami',
    role: { en: 'Principal Designer & Founder', fa: 'طراح ارشد و بنیان‌گذار' },
    bio:  {
      en: 'Sara founded ARAYE in 2018 after a decade working across Tehran and Milan. Her work is guided by one belief: that a well-designed space changes how you feel in it every single day.',
      fa: 'سارا آرایه رو در ۱۳۹۷ بعد از یه دهه کار در تهران و میلان تأسیس کرد. کارش بر یه باور استواره: یه فضای خوب طراحی‌شده هر روز حس تو توش رو عوض می‌کنه.',
    },
    img: '/images/team-sara.jpg',
  },
  {
    name: 'Dariush Sohrab',
    role: { en: 'Senior Architect', fa: 'معمار ارشد' },
    bio:  {
      en: 'Dariush brings structural thinking to interior space. He translates ARAYE\'s design concepts into buildable, code-compliant realities — without losing any of the intention.',
      fa: 'داریوش تفکر سازه‌ای رو به فضای داخلی می‌آره. مفاهیم طراحی آرایه رو به واقعیت‌های قابل ساخت تبدیل می‌کنه — بدون اینکه چیزی از نیت اصلی گم بشه.',
    },
    img: '/images/team-dariush.jpg',
  },
  {
    name: 'Mina Karimi',
    role: { en: 'Project Coordinator', fa: 'هماهنگ‌کننده پروژه' },
    bio:  {
      en: 'Mina keeps every project moving with clarity and calm. She is the point of contact for clients from first meeting to final handover — nothing falls between the cracks.',
      fa: 'مینا هر پروژه رو با وضوح و آرامش پیش می‌بره. از اولین جلسه تا تحویل نهایی، نقطه تماس مشتریانه — هیچ چیزی از لا به لا نمی‌افته.',
    },
    img: '/images/team-mina.jpg',
  },
]

// ─── ABOUT ────────────────────────────────────────────────────────────────
export const aboutPage = {
  title:   { en: 'The Studio', fa: 'استودیو' },
  story: [
    {
      en: 'ARAYE was founded in 2018 with a simple conviction: that interior design should respond to how people actually live, not how designers think they should. We are a small studio — intentionally. Every project gets our full attention.',
      fa: 'آرایه در ۱۳۹۷ با یه باور ساده تأسیس شد: طراحی داخلی باید به زندگی واقعی آدم‌ها پاسخ بده، نه به اونچه طراحان فکر می‌کنن باید باشه. ما عمداً یه استودیو کوچیکیم. هر پروژه توجه کامل ما رو می‌گیره.',
    },
    {
      en: 'Our work spans residential and commercial projects across Tehran. We don\'t have a signature style — we have a rigorous process. The result is always specific to the client, the site, and the light.',
      fa: 'کارمون پروژه‌های مسکونی و تجاری در سراسر تهران رو شامل می‌شه. سبک خاص امضادار نداریم — یه فرآیند دقیق داریم. نتیجه همیشه خاص مشتری، سایت و نور اونجاست.',
    },
    {
      en: 'We believe the best interior design is invisible — you feel it, but you can\'t quite name it. That tension between craft and subtlety is what drives us.',
      fa: 'ما باور داریم بهترین طراحی داخلی نامرئیه — حسش می‌کنی ولی نمی‌تونی اسمش رو بذاری. این تنش بین دست‌ساز بودن و ظرافت چیزیه که ما رو پیش می‌بره.',
    },
  ],
  values: [
    { en: 'Process over style',   fa: 'فرآیند به جای سبک'    },
    { en: 'Materials that age',   fa: 'مصالحی که با زمان پخته‌تر می‌شن' },
    { en: 'Rooms that listen',    fa: 'اتاق‌هایی که گوش می‌دن'    },
    { en: 'Nothing unnecessary',  fa: 'هیچ چیز اضافه‌ای نه'      },
  ],
  studioImg: '/images/about-studio.jpg',
}

// ─── CONTACT ─────────────────────────────────────────────────────────────
export const contactPage = {
  title: { en: 'Start a Project', fa: 'شروع یه پروژه' },
  intro: {
    en: 'Tell us about your space and what you\'re hoping to achieve. We review all inquiries and respond within two business days.',
    fa: 'از فضاتون و اینکه دنبال چی هستید بگید. همه درخواست‌ها رو بررسی می‌کنیم و ظرف دو روز کاری جواب می‌دیم.',
  },
  projectTypes: {
    en: ['Residential — apartment', 'Residential — villa', 'Commercial — office', 'Commercial — restaurant / café', 'Commercial — retail', 'Space consultation', 'Other'],
    fa:  ['مسکونی — آپارتمان', 'مسکونی — ویلا', 'تجاری — دفتر', 'تجاری — رستوران / کافه', 'تجاری — فروشگاه', 'مشاوره فضا', 'سایر'],
  },
  form: {
    name:        { en: 'Full name',        fa: 'نام و نام خانوادگی' },
    email:       { en: 'Email address',    fa: 'آدرس ایمیل'        },
    projectType: { en: 'Project type',     fa: 'نوع پروژه'         },
    message:     { en: 'Tell us more',     fa: 'بیشتر توضیح بده'   },
    submit:      { en: 'Send Inquiry',     fa: 'ارسال درخواست'     },
    placeholder: {
      name:        { en: 'Sara Hosseini',         fa: 'سارا حسینی'            },
      email:       { en: 'sara@example.com',       fa: 'sara@example.com'      },
      message:     { en: 'We are renovating a 200m² apartment in Elahiyeh…', fa: 'داریم یه آپارتمان ۲۰۰ متری در الهیه بازسازی می‌کنیم…' },
    },
    selectDefault: { en: 'Select project type', fa: 'نوع پروژه رو انتخاب کن' },
  },
  success: {
    title:   { en: 'Inquiry received.',           fa: 'درخواستتون دریافت شد.' },
    message: { en: 'We review all requests carefully and will be in touch within two business days.', fa: 'همه درخواست‌ها رو با دقت بررسی می‌کنیم و ظرف دو روز کاری با شما در تماس خواهیم بود.' },
  },
  info: {
    address:   { en: 'Unit 4, No. 18, Golestan St., Vanak, Tehran', fa: 'تهران، ونک، خیابان گلستان، پلاک ۱۸، واحد ۴' },
    phone:     '+98 21 8800 0000',
    email:     'hello@araye.studio',
    instagram: '@araye.studio',
    response:  { en: 'We respond within 2 business days.', fa: 'ظرف ۲ روز کاری پاسخ می‌دیم.' },
  },
}

// ─── FOOTER ──────────────────────────────────────────────────────────────
export const footer = {
  tagline: { en: 'Space, considered.', fa: 'فضا، با دقت.' },
  address: { en: 'Vanak, Tehran', fa: 'ونک، تهران' },
  copy:    { en: '© 2024 ARAYE Studio. All rights reserved.', fa: '© ۱۴۰۳ استودیو آرایه. تمام حقوق محفوظ است.' },
}
