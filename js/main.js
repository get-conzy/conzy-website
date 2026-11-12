/* ═══════════════════════════════════════════════════════════
   CONZY — main.js
   ═══════════════════════════════════════════════════════════ */

'use strict';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── CUSTOM CURSOR ─────────────────────────────────────── */
const curDot  = document.getElementById('cur-dot');
const curRing = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

window.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  curDot.style.left = mx + 'px';
  curDot.style.top  = my + 'px';
});

if (!prefersReducedMotion) (function animRing() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  curRing.style.left = rx + 'px';
  curRing.style.top  = ry + 'px';
  requestAnimationFrame(animRing);
})();

document.querySelectorAll('a, button, .feat-card, .sec-card, .price-card, .plan-cta, .channel, .sector-tab').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('c-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('c-hover'));
});

/* ─── NAV SCROLL ─────────────────────────────────────────── */
const nav = document.getElementById('nav');
const langDd = document.getElementById('lang-dd');
const heroLogo = document.getElementById('hero-logo');
const mobileHeader = document.getElementById('mobile-header');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  const pastHero = window.scrollY > 80;
  if (langDd)       langDd.classList.toggle('hidden', pastHero);
  if (heroLogo)     heroLogo.classList.toggle('hidden', pastHero);
  if (mobileHeader) mobileHeader.classList.toggle('hidden', pastHero);
}, { passive: true });

/* Match header contrast to the section directly behind the logo. */
const darkHeaderSections = Array.from(document.querySelectorAll('.section.dark, footer'));
let headerThemeFrame = null;
function updateHeaderTheme() {
  headerThemeFrame = null;
  const logo = window.matchMedia('(max-width: 768px)').matches
    ? document.querySelector('.mobile-logo') : heroLogo;
  const rect = logo?.getBoundingClientRect();
  const sampleY = rect ? rect.top + rect.height / 2 : 48;
  const onDark = darkHeaderSections.some(section => {
    const bounds = section.getBoundingClientRect();
    return bounds.top <= sampleY && bounds.bottom > sampleY;
  });
  document.body.classList.toggle('header-on-dark', onDark);
}
function scheduleHeaderTheme() {
  if (headerThemeFrame === null) headerThemeFrame = requestAnimationFrame(updateHeaderTheme);
}
window.addEventListener('scroll', scheduleHeaderTheme, { passive: true });
window.addEventListener('resize', scheduleHeaderTheme, { passive: true });
window.addEventListener('load', scheduleHeaderTheme);
updateHeaderTheme();

/* ─── MOBILE HAMBURGER + DRAWER ────────────────────────── */
const hamburger    = document.getElementById('hamburger');
const mobileMenu   = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-overlay');

function openDrawer() {
  hamburger?.classList.add('open');
  mobileMenu?.classList.add('open');
  mobileOverlay?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  hamburger?.classList.remove('open');
  mobileMenu?.classList.remove('open');
  mobileOverlay?.classList.remove('open');
  document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () => {
  mobileMenu?.classList.contains('open') ? closeDrawer() : openDrawer();
});

document.getElementById('mmenu-close')?.addEventListener('click', closeDrawer);
mobileOverlay?.addEventListener('click', closeDrawer);

document.querySelectorAll('.mmenu-links a').forEach(link => {
  link.addEventListener('click', closeDrawer);
});

/* ─── MOBILE LANG TRIGGER ───────────────────────────────── */
const mobileLangTrigger = document.getElementById('mobile-lang-trigger');
const mobileLangMenu    = document.getElementById('mobile-lang-menu');

mobileLangTrigger?.addEventListener('click', e => {
  e.stopPropagation();
  const opening = !mobileLangMenu.classList.contains('open');
  mobileLangMenu.classList.toggle('open', opening);
  mobileLangTrigger.classList.toggle('open', opening);
});

document.addEventListener('click', () => {
  mobileLangMenu?.classList.remove('open');
  mobileLangTrigger?.classList.remove('open');
});

/* ─── SECTOR DATA ────────────────────────────────────────── */
const SECTOR_DATA = {
  klinik: {
    greeting:    'Merhaba! Kliniğimize hoş geldiniz. Size nasıl yardımcı olabilirim?',
    buttons:     [' Randevu Al', ' Tedavi Bilgisi', ' Fiyat Öğren'],
    customerMsg: 'Konsültasyon için randevu almak istiyorum',
    flowBadge:   ' RANDEVU FORMU',
    flowCardTxt: 'Randevu almak için formu açınız...',
    formTitle:   'Randevu Bilgileri',
    formSub:     'Formu doldurun, hemen onaylayalım',
    service:     'Saç Ekimi Konsültasyon',
    dates:       [['Sal','20'],['Çar','21'],['Per','22'],['Cum','23']],
    times:       ['10:00','11:30','14:00'],
    btn:         'Randevuyu Onayla ✓',
    dash: {
      stats: [
        { count: 47, suffix: '',  label: 'Bugün mesaj', trend: '↑ %23' },
        { count: 12, suffix: '',  label: 'Randevu',     trend: '↑ %8'  },
        { count: 91, suffix: '%', label: 'Otomasyon',   trend: '✓ hedef' },
        { text: '3s',             label: 'Ort. yanıt',  trend: '✓'     },
      ],
      section: 'Bugünkü Randevular',
      rows: [
        { name: 'Ayşe Demir',  time: '10:00 · Konsültasyon', badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
        { name: 'Emre Çelik',  time: '11:30 · FUE Saç',      badge: 'Bekliyor',dot: 'dot-y', bg: 'bg-y' },
        { name: 'Fatma Kaya',  time: '14:00 · Kaş Ekimi',    badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
      ]
    }
  },
  restoran: {
    greeting:    'Merhaba! Hoş geldiniz. Bugün size nasıl yardımcı olabiliriz?',
    buttons:     [' Rezervasyon Al', ' Menüyü İncele', ' Konum & Saatler'],
    customerMsg: '4 kişilik masa istiyorum. Hangi saatler uygun?',
    flowBadge:   ' REZERVASYON FORMU',
    flowCardTxt: 'Kişi sayısı, tarih ve saati seçin. Masanızı burada onaylayalım.',
    formTitle:   'Masa Rezervasyonu',
    formSub:     'Kişi sayısı ve saat seçin',
    service:     ' 4 Kişilik Masa',
    dates:       [['Paz','15'],['Pts','16'],['Sal','17'],['Çar','18']],
    times:       ['19:00','20:00','21:00'],
    btn:         'Rezervasyonu Onayla ✓',
    dash: {
      stats: [
        { count: 63, suffix: '',  label: 'Bugün mesaj',  trend: '↑ %31' },
        { count: 18, suffix: '',  label: 'Rezervasyon',  trend: '↑ %15' },
        { count: 94, suffix: '%', label: 'Otomasyon',    trend: '✓ hedef' },
        { text: '2s',             label: 'Ort. yanıt',   trend: '✓'     },
      ],
      section: 'Bugünkü Rezervasyonlar',
      rows: [
        { name: 'Masa 4',  time: '19:30 · 4 kişi', badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
        { name: 'Masa 7',  time: '20:00 · 2 kişi', badge: 'Bekliyor',dot: 'dot-y', bg: 'bg-y' },
        { name: 'Masa 12', time: '21:00 · 6 kişi', badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
      ]
    }
  },
  guzellik: {
    greeting:    'Merhaba! Salonumuza hoş geldiniz. Ne yapmak istersiniz?',
    buttons:     [' Seans Rezervasyonu', ' Hizmetlerimiz', ' Fiyat Listesi'],
    customerMsg: 'Saç boyama için seans randevusu istiyorum',
    flowBadge:   ' SEANS FORMU',
    flowCardTxt: 'Güzellik seansı için formu açınız...',
    formTitle:   'Güzellik Seansı',
    formSub:     'Hizmet ve zamanınızı seçin',
    service:     'Saç Boyama & Refleks',
    dates:       [['Pts','16'],['Sal','17'],['Çar','18'],['Per','19']],
    times:       ['10:30','13:00','15:30'],
    btn:         'Randevuyu Onayla ✓',
    dash: {
      stats: [
        { count: 38, suffix: '',  label: 'Bugün mesaj', trend: '↑ %17' },
        { count: 9,  suffix: '',  label: 'Seans',       trend: '↑ %12' },
        { count: 89, suffix: '%', label: 'Otomasyon',   trend: '✓ hedef' },
        { text: '4s',             label: 'Ort. yanıt',  trend: '✓'     },
      ],
      section: 'Bugünkü Seanslar',
      rows: [
        { name: 'Zeynep Arslan', time: '10:30 · Saç Boyama',   badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
        { name: 'Selin Yıldız',  time: '13:00 · Manikür',      badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
        { name: 'Canan Demir',   time: '15:30 · Kaş Şekli',   badge: 'Bekliyor',dot: 'dot-y', bg: 'bg-y' },
      ]
    }
  },
  servis: {
    greeting:    'Merhaba! Servisimize hoş geldiniz. Aracınız için ne yapabiliriz?',
    buttons:     [' Servis Randevusu', ' Araç Sorgula', ' Fiyat Al'],
    customerMsg: 'Aracım için bakım randevusu almak istiyorum',
    flowBadge:   ' SERVİS FORMU',
    flowCardTxt: 'Servis randevusu için formu açınız...',
    formTitle:   'Araç Kabul Formu',
    formSub:     'Bilgileri girin, randevu oluşturalım',
    service:     'Periyodik Bakım, 15.000 km',
    dates:       [['Pts','16'],['Sal','17'],['Per','19'],['Cum','20']],
    times:       ['09:00','11:00','14:00'],
    btn:         'Randevuyu Onayla ✓',
    dash: {
      stats: [
        { count: 29, suffix: '',  label: 'Bugün mesaj', trend: '↑ %11' },
        { count: 7,  suffix: '',  label: 'Araç',        trend: '↑ %6'  },
        { count: 88, suffix: '%', label: 'Otomasyon',   trend: '✓ hedef' },
        { text: '3s',             label: 'Ort. yanıt',  trend: '✓'     },
      ],
      section: 'Bugünkü Araçlar',
      rows: [
        { name: '34 ABC 123', time: '09:00 · Yağ Değişimi', badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
        { name: '06 XYZ 456', time: '11:00 · Fren Bakımı',  badge: 'Bekliyor',dot: 'dot-y', bg: 'bg-y' },
        { name: '35 DEF 789', time: '14:00 · Lastik Değ.',  badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
      ]
    }
  },
  emlak: {
    greeting:    'Merhaba! Hoş geldiniz. Hayalinizdeki mülkü bulmak için buradayız!',
    buttons:     [' Ziyaret Planla', ' İlanları Gör', ' Danışmana Bağlan'],
    customerMsg: 'Satılık 3+1 daire için bilgi almak istiyorum',
    flowBadge:   ' ZİYARET FORMU',
    flowCardTxt: 'Gayrimenkul ziyareti için formu açınız...',
    formTitle:   'Ziyaret Randevusu',
    formSub:     'Tercih ve zamanınızı seçin',
    service:     '3+1 Daire, Kadıköy',
    dates:       [['Sal','17'],['Çar','18'],['Per','19'],['Cum','20']],
    times:       ['11:00','14:00','16:00'],
    btn:         'Ziyareti Onayla ✓',
    dash: {
      stats: [
        { count: 22, suffix: '',  label: 'Bugün mesaj', trend: '↑ %9'  },
        { count: 5,  suffix: '',  label: 'Ziyaret',     trend: '↑ %4'  },
        { count: 85, suffix: '%', label: 'Otomasyon',   trend: '✓ hedef' },
        { text: '5s',             label: 'Ort. yanıt',  trend: '✓'     },
      ],
      section: 'Bugünkü Ziyaretler',
      rows: [
        { name: 'Mehmet Kaya',  time: '11:00 · 3+1 Kadıköy',    badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
        { name: 'Aylin Şahin',  time: '14:00 · 2+1 Beşiktaş',   badge: 'Onaylı',  dot: 'dot-g', bg: 'bg-g' },
        { name: 'Can Erdoğan',  time: '16:00 · Daire Ataşehir',  badge: 'Bekliyor',dot: 'dot-y', bg: 'bg-y' },
      ]
    }
  }
};

/* ─── SECTOR DATA (EN) ───────────────────────────────────── */
const SECTOR_DATA_EN = {
  klinik: {
    greeting:    'Hello! Welcome to our clinic. How can I help you?',
    buttons:     [' Book Appointment', ' Treatment Info', ' Get Prices'],
    customerMsg: 'I\'d like to book a consultation',
    flowBadge:   ' APPOINTMENT FORM',
    flowCardTxt: 'Please open the form to book...',
    formTitle:   'Appointment Details',
    formSub:     'Fill in the form, we\'ll confirm right away',
    service:     'Hair Transplant Consultation',
    dates:       [['Tue','20'],['Wed','21'],['Thu','22'],['Fri','23']],
    times:       ['10:00','11:30','14:00'],
    btn:         'Confirm Appointment ✓',
    dash: {
      stats: [
        { count: 47, suffix: '',  label: 'Today\'s messages', trend: '↑ 23%' },
        { count: 12, suffix: '',  label: 'Appointments',      trend: '↑ 8%'  },
        { count: 91, suffix: '%', label: 'Automation',        trend: '✓ target' },
        { text: '3s',             label: 'Avg. response',     trend: '✓'     },
      ],
      section: 'Today\'s Appointments',
      rows: [
        { name: 'Emma Johnson',  time: '10:00 · Consultation', badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
        { name: 'James Smith',   time: '11:30 · FUE Hair',     badge: 'Pending',   dot: 'dot-y', bg: 'bg-y' },
        { name: 'Sophia Davis',  time: '14:00 · Eyebrow',      badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
      ]
    }
  },
  restoran: {
    greeting:    'Hello! Welcome. How can we help you today?',
    buttons:     [' Make Reservation', ' View Menu', ' Location & Hours'],
    customerMsg: 'A table for 4, please. What times are available?',
    flowBadge:   ' RESERVATION FORM',
    flowCardTxt: 'Choose your party size, date and time. We’ll confirm your table here.',
    formTitle:   'Table Reservation',
    formSub:     'Select party size and time',
    service:     ' Table for 4',
    dates:       [['Sun','15'],['Mon','16'],['Tue','17'],['Wed','18']],
    times:       ['19:00','20:00','21:00'],
    btn:         'Confirm Reservation ✓',
    dash: {
      stats: [
        { count: 63, suffix: '',  label: 'Today\'s messages', trend: '↑ 31%' },
        { count: 18, suffix: '',  label: 'Reservations',      trend: '↑ 15%' },
        { count: 94, suffix: '%', label: 'Automation',        trend: '✓ target' },
        { text: '2s',             label: 'Avg. response',     trend: '✓'     },
      ],
      section: 'Today\'s Reservations',
      rows: [
        { name: 'Table 4',  time: '19:30 · 4 guests', badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
        { name: 'Table 7',  time: '20:00 · 2 guests', badge: 'Pending',   dot: 'dot-y', bg: 'bg-y' },
        { name: 'Table 12', time: '21:00 · 6 guests', badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
      ]
    }
  },
  guzellik: {
    greeting:    'Hello! Welcome to our salon. What would you like?',
    buttons:     [' Book Session', ' Our Services', ' Price List'],
    customerMsg: 'I\'d like to book a hair coloring session',
    flowBadge:   ' SESSION FORM',
    flowCardTxt: 'Please open the form to book your session...',
    formTitle:   'Beauty Session',
    formSub:     'Choose your service and time',
    service:     'Hair Coloring & Highlights',
    dates:       [['Mon','16'],['Tue','17'],['Wed','18'],['Thu','19']],
    times:       ['10:30','13:00','15:30'],
    btn:         'Confirm Appointment ✓',
    dash: {
      stats: [
        { count: 38, suffix: '',  label: 'Today\'s messages', trend: '↑ 17%' },
        { count: 9,  suffix: '',  label: 'Sessions',          trend: '↑ 12%' },
        { count: 89, suffix: '%', label: 'Automation',        trend: '✓ target' },
        { text: '4s',             label: 'Avg. response',     trend: '✓'     },
      ],
      section: 'Today\'s Sessions',
      rows: [
        { name: 'Emma Wilson',  time: '10:30 · Hair Coloring',   badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
        { name: 'Sarah Lee',    time: '13:00 · Manicure',        badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
        { name: 'Mia Taylor',   time: '15:30 · Eyebrow Shaping', badge: 'Pending',   dot: 'dot-y', bg: 'bg-y' },
      ]
    }
  },
  servis: {
    greeting:    'Hello! Welcome to our service center. How can we help your vehicle?',
    buttons:     [' Book Service', ' Vehicle Lookup', ' Get Quote'],
    customerMsg: 'I\'d like to book a maintenance appointment',
    flowBadge:   ' SERVICE FORM',
    flowCardTxt: 'Please open the form to book a service...',
    formTitle:   'Vehicle Intake Form',
    formSub:     'Enter details and we\'ll schedule your appointment',
    service:     'Periodic Maintenance, 15,000 km',
    dates:       [['Mon','16'],['Tue','17'],['Thu','19'],['Fri','20']],
    times:       ['09:00','11:00','14:00'],
    btn:         'Confirm Appointment ✓',
    dash: {
      stats: [
        { count: 29, suffix: '',  label: 'Today\'s messages', trend: '↑ 11%' },
        { count: 7,  suffix: '',  label: 'Vehicles',          trend: '↑ 6%'  },
        { count: 88, suffix: '%', label: 'Automation',        trend: '✓ target' },
        { text: '3s',             label: 'Avg. response',     trend: '✓'     },
      ],
      section: 'Today\'s Vehicles',
      rows: [
        { name: '34 ABC 123', time: '09:00 · Oil Change',    badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
        { name: '06 XYZ 456', time: '11:00 · Brake Service', badge: 'Pending',   dot: 'dot-y', bg: 'bg-y' },
        { name: '35 DEF 789', time: '14:00 · Tire Change',   badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
      ]
    }
  },
  emlak: {
    greeting:    'Hello! Welcome. We\'re here to help you find your dream property!',
    buttons:     [' Schedule Viewing', ' View Listings', ' Talk to Agent'],
    customerMsg: 'I\'d like info on a 3-bedroom apartment for sale',
    flowBadge:   ' VIEWING FORM',
    flowCardTxt: 'Please open the form to schedule a viewing...',
    formTitle:   'Viewing Appointment',
    formSub:     'Choose your preferences and time',
    service:     '3 bedroom Apartment, Kadıköy',
    dates:       [['Tue','17'],['Wed','18'],['Thu','19'],['Fri','20']],
    times:       ['11:00','14:00','16:00'],
    btn:         'Confirm Viewing ✓',
    dash: {
      stats: [
        { count: 22, suffix: '',  label: 'Today\'s messages', trend: '↑ 9%' },
        { count: 5,  suffix: '',  label: 'Viewings',          trend: '↑ 4%' },
        { count: 85, suffix: '%', label: 'Automation',        trend: '✓ target' },
        { text: '5s',             label: 'Avg. response',     trend: '✓'    },
      ],
      section: 'Today\'s Viewings',
      rows: [
        { name: 'Michael Brown',  time: '11:00 · 3 bedroom Kadıköy',   badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
        { name: 'Jessica Miller', time: '14:00 · 2 bedroom Beşiktaş',  badge: 'Confirmed', dot: 'dot-g', bg: 'bg-g' },
        { name: 'Daniel Clark',   time: '16:00 · Apt. Ataşehir',   badge: 'Pending',   dot: 'dot-y', bg: 'bg-y' },
      ]
    }
  }
};

/* ─── HERO PHONE ANIMATOR ───────────────────────────────── */
class HeroPhone {
  constructor() {
    this.screens       = Array.from(document.querySelectorAll('.pscreen'));
    this.dots          = Array.from(document.querySelectorAll('.pdot'));
    this.currentSector = 'restoran';
    this.paused = prefersReducedMotion;
    this.current       = 0;
    window.heroPhone   = this;
    this.timers    = [];
    this.nextTimer = null; // tracked separately so switchSector can cancel it
    this.durations = [8500, 9000, 15500, 7000]; // ms each screen stays visible

    if (!this.screens.length) return;
    this.buildControls();
    this.demoVisible = !document.getElementById('live-demo');
    const demoSection = document.getElementById('live-demo');
    if (demoSection) {
      this.visibilityObserver = new IntersectionObserver(entries => {
        const visible = entries[0].isIntersecting;
        if (visible === this.demoVisible) return;
        this.demoVisible = visible;
        if (visible) this.goTo(this.current);
        else this.clearTimers();
      }, { threshold: 0.12 });
      this.visibilityObserver.observe(demoSection);
    }
    this.switchSector('restoran');

    // Sector tab switching
    document.querySelectorAll('.sector-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.sector-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.switchSector(tab.dataset.sector);
      });
    });
  }

  clearTimers() {
    this.timers.forEach(clearTimeout);
    this.timers = [];
    clearTimeout(this.nextTimer);
    this.nextTimer = null;
  }

  buildControls() {
    const steps = document.querySelector('.demo-steps');
    steps.innerHTML = [0,1,2,3].map(i => `<button type="button" data-demo-step="${i}">${i+1}</button>`).join('');
    steps.addEventListener('click', event => {
      const button = event.target.closest('[data-demo-step]');
      if (button) this.goTo(Number(button.dataset.demoStep));
    });
    document.querySelector('.demo-pause').addEventListener('click', () => {
      this.paused = !this.paused;
      if (this.paused) this.clearTimers();
      else this.goTo(this.current);
      this.updateControls();
    });
    document.querySelector('.demo-replay').addEventListener('click', () => this.goTo(0));
    document.querySelector('.hero-screen-area').addEventListener('click',event => {
      if (event.target.closest('.wa-card-action')) this.openBookingFlow();
      if (event.target.closest('.flow-close')) this.closeBookingFlow();
      if (event.target.closest('.flow-btn-gr')) this.goTo(2);
    });
  }

  updateControls() {
    const en = window.currentLang === 'en';
    document.querySelector('.hero-visual').classList.toggle('demo-paused',this.paused);
    const labels = en ? ['Customer message','Choose the details','Instant confirmation','Your dashboard'] : ['Müşteri mesajı','Bilgileri seçin','Anında onay','İşletme paneliniz'];
    const descriptions = en ? ['Conzy understands the request and offers the right form.', 'Choose a date and time without leaving WhatsApp.', 'The customer receives a clear booking summary.', 'The booking appears in your team’s overview automatically.'] : ['Conzy talebi anlar ve doğru formu sunar.', 'WhatsApp’tan çıkmadan tarih ve saat seçilir.', 'Müşteriye rezervasyon özeti ve onayı iletilir.', 'Kayıt otomatik olarak ekibinizin paneline eklenir.'];
    document.querySelector('.demo-step-label').textContent = `${en ? 'STEP' : 'ADIM'} ${this.current+1} / 4 · ${labels[this.current]}`;
    document.querySelector('.demo-step-description').textContent = descriptions[this.current];
    document.querySelectorAll('[data-demo-step]').forEach((button,i) => {
      button.classList.toggle('active',i === this.current);
      button.setAttribute('aria-current',i === this.current ? 'step' : 'false');
      button.setAttribute('aria-label',labels[i]);
    });
    const pause = document.querySelector('.demo-pause');
    pause.textContent = this.paused ? (en ? 'Play' : 'Oynat') : (en ? 'Pause' : 'Duraklat');
    pause.setAttribute('aria-label',en ? (this.paused ? 'Play demo' : 'Pause demo') : (this.paused ? 'Demoyu oynat' : 'Demoyu duraklat'));
    document.querySelector('.demo-replay').textContent = en ? '↺ Replay' : '↺ Tekrar';
  }

  schedule() {
    if (this.paused || !this.demoVisible) return;
    this.nextTimer = setTimeout(() => this.current === 0 ? this.openBookingFlow() : this.goTo((this.current+1) % this.screens.length),this.durations[this.current]);
  }

  openBookingFlow() {
    if (this.current !== 0 || this.openingFlow) return;
    this.clearTimers();
    this.openingFlow = true;
    const button = this.screens[0].querySelector('.wa-card-action');
    button?.classList.add('is-opening');
    button?.setAttribute('aria-busy','true');
    this.after(prefersReducedMotion ? 0 : 320, () => {
      this.goTo(1);
      this.screens[0].classList.add('flow-backdrop');
      this.screens[1].classList.add('flow-opening');
      this.after(450, () => this.screens[1].querySelector('.flow-close')?.focus({preventScroll:true}));
    });
  }

  closeBookingFlow() {
    this.goTo(0);
    // Closing a Flow returns to the same conversation, without sending a reply.
    this.clearTimers();
    const screen = this.screens[0];
    screen.querySelectorAll('[data-chat]').forEach(message => message.classList.add('show'));
    screen.querySelectorAll('.wa-ticks').forEach(ticks => { ticks.textContent = '✓✓'; ticks.classList.add('read'); });
    const input = screen.querySelector('.wa-inp');
    input.textContent = window.currentLang === 'en' ? 'Message' : 'Mesaj';
    input.classList.remove('is-typing');
    this.setTyping(screen,false);
    this.scrollChat(screen);
    screen.querySelector('.wa-card-action')?.focus({preventScroll:true});
    // Leave the conversation ready to reopen instead of immediately replaying it.
  }

  goTo(index) {
    this.clearTimers();
    this.openingFlow = false;
    this.screens.forEach(screen => screen.classList.remove('flow-backdrop','flow-opening'));
    this.screens[0].querySelector('.wa-card-action')?.classList.remove('is-opening');
    this.screens[0].querySelector('.wa-card-action')?.removeAttribute('aria-busy');
    this.screens.forEach(screen => screen.classList.remove('active','exiting'));
    this.current = index;
    this.activate(index);
    this.schedule();
  }

  activate(idx) {
    const screen = this.screens[idx];
    document.querySelector('.hero-visual').dataset.demoStage = idx;
    this.screens.forEach((item,i) => {
      item.inert = i !== idx;
      item.setAttribute('aria-hidden',String(i !== idx));
    });
    this.restartAnims(screen);
    screen.classList.add('active');
    this.dots[idx]?.classList.add('active');

    // Screen-specific logic
    if (idx === 0) this.runChatSequence(screen);
    if (idx === 1) this.runFlowSequence(screen);
    if (idx === 2) this.runConfirmationSequence(screen);
    if (idx === 3) this.runDashSequence(screen);
    this.updateControls();
    if (this.paused) {
      this.clearTimers();
      screen.querySelectorAll('[data-anim], [data-chat]').forEach(el => el.classList.add('show'));
      this.setTyping(screen,false);
      screen.querySelectorAll('.wa-ticks').forEach(ticks => { ticks.textContent='✓✓'; ticks.classList.add('read'); });
      const input = screen.querySelector('.wa-inp');
      if (input) input.textContent = window.currentLang === 'en' ? 'Message' : 'Mesaj';
      screen.querySelectorAll('.dash-row').forEach(el => el.classList.add('show'));
      screen.querySelectorAll('[data-count]').forEach(el => el.textContent = el.dataset.count + (el.dataset.suffix || ''));
      screen.querySelectorAll('.date-row').forEach(row => row.children[1]?.classList.add('sel'));
      this.scrollChat(screen);
    }
  }

  restartAnims(el) {
    el.querySelectorAll('[data-anim]').forEach(child => {
      child.classList.remove('show');
      child.style.animation = 'none';
      void child.offsetHeight; // force reflow
      child.style.animation  = '';
    });
    el.querySelectorAll('[data-chat]').forEach(child => child.classList.remove('show'));
    this.setTyping(el,false);
    // Reset dashboard rows
    el.querySelectorAll('.dash-row').forEach(r => r.classList.remove('show'));
    // Reset chip selections to default
    el.querySelectorAll('.date-chip').forEach(c => c.classList.remove('sel'));
    // Remove glows
    el.querySelectorAll('.glow, .pulse').forEach(c => c.classList.remove('glow', 'pulse'));
    // Reset counters
    el.querySelectorAll('[data-count]').forEach(c => { c.textContent = '0'; });
    // Remove highlights
    el.querySelectorAll('.flow-val.hl').forEach(v => v.classList.remove('hl'));
    el.querySelectorAll('.flow-outlined.is-focused').forEach(v => v.classList.remove('is-focused'));
    const flowBody = el.querySelector('.flow-body');
    if (flowBody) flowBody.scrollTop = 0;
  }

  after(ms, fn) {
    const t = setTimeout(fn, ms);
    this.timers.push(t);
    return t;
  }

  switchSector(key) {
    const isEn = window.currentLang === 'en';
    const d = (isEn ? SECTOR_DATA_EN : SECTOR_DATA)[key];
    if (!d) return;
    this.currentSector = key;
    document.querySelectorAll('.sector-tab').forEach(tab => {
      const selected = tab.dataset.sector === key;
      tab.classList.toggle('active',selected);
      tab.setAttribute('aria-pressed',String(selected));
    });

    // Cancel every pending timer including the untracked next() transition
    this.timers.forEach(clearTimeout);
    this.timers = [];
    if (this.nextTimer) { clearTimeout(this.nextTimer); this.nextTimer = null; }

    // The demo uses a complete WhatsApp-style conversation, not a slideshow.
    const s0 = document.getElementById('pscreen-0');
    const restaurant = key === 'restoran';
    const request = restaurant
      ? (isEn ? 'I want to make a reservation.' : 'Rezervasyon yapmak istiyorum.')
      : d.customerMsg;
    this.chatRequest = request;
    this.durations[2] = restaurant ? 15500 : 9000;
    if (s0) {
      s0.querySelector('.wa-bg').innerHTML = this.whatsappShell(`
        <div class="wa-day">${isEn ? 'Today' : 'Bugün'}</div>
        <div class="wa-encrypted">${isEn ? 'End to end encrypted · Illustrative demo' : 'Uçtan uca şifreli · Örnek demo'}</div>
        <div class="msg msg-o" data-chat="request"><span>${request}</span><div class="msg-t">19:02 <span class="wa-ticks">✓</span></div></div>
        <div class="msg msg-i wa-booking-card" data-chat="form"><strong>${d.formTitle}</strong><p>${restaurant ? (isEn ? 'Choose your date, time and number of guests to request a table.' : 'Masa talebi için tarih, saat ve kişi sayısını seçin.') : (isEn ? 'Choose a date and time, then add your booking details.' : 'Tarih ve saat seçip randevu bilgilerinizi ekleyin.')}</p><div class="wa-flow-caption">${isEn ? 'Complete the form in WhatsApp' : 'Formu WhatsApp içinde doldurun'}</div><div class="msg-t">19:03</div><button type="button" class="wa-card-action"><svg class="wa-flow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg><span>${isEn ? 'Complete booking' : 'Rezervasyonu tamamla'}</span><i class="wa-flow-spinner" aria-hidden="true"></i></button></div>
        <div class="typing-bubble wa-typing" aria-hidden="true"><i class="t-dot"></i><i class="t-dot"></i><i class="t-dot"></i></div>`,isEn);
    }

    // A full-screen WhatsApp Flow: outlined fields and a persistent footer action.
    const name = isEn ? 'Alex Morgan' : 'Deniz Kaya';
    const s1 = document.getElementById('pscreen-1');
    const cleanService = d.service.replace(/^[^\p{L}\p{N}]+/u, '');
    const flowStatus = document.querySelector('#pscreen-0 .phone-sb').outerHTML.replace('phone-sb-dark','phone-sb-light');
    s1.innerHTML = flowStatus + `<div class="flow-scr">
      <div class="flow-bar"><button type="button" class="flow-close" aria-label="${isEn ? 'Close booking form' : 'Rezervasyon formunu kapat'}">×</button><div class="flow-bar-t">${d.formTitle}</div><span class="flow-options" aria-hidden="true">···</span></div>
      <div class="flow-body">
        <div class="flow-business-label">CONZY <span>· ${isEn ? 'Booking form' : 'Rezervasyon formu'}</span></div>
        <div class="flow-heading-group"><div class="flow-h1">${restaurant ? (isEn ? 'Reserve your table' : 'Masanızı ayırtın') : d.formTitle}</div><div class="flow-sub">${isEn ? 'A few details and you’re all set.' : 'Birkaç bilgiyle işleminizi tamamlayın.'}</div></div>
        <div class="flow-field flow-outlined"><div class="flow-lbl">${isEn ? 'Full name' : 'Ad ve soyad'}</div><div class="flow-val flow-val-name">${name}</div></div>
        <div class="flow-field flow-outlined"><div class="flow-lbl">${restaurant ? (isEn ? 'Number of guests' : 'Kişi sayısı') : (isEn ? 'Service' : 'Hizmet')}</div><div class="flow-val flow-val-svc"><span>${cleanService}</span><span class="flow-chevron" aria-hidden="true">⌄</span></div></div>
        <div class="flow-field flow-date-field"><div class="flow-lbl">${isEn ? 'Choose a date' : 'Tarih seçin'}</div><div class="date-row">${d.dates.map(([day,date])=>`<div class="date-chip"><span>${day}</span><b>${date}</b></div>`).join('')}</div></div>
        <div class="flow-field flow-time-field"><div class="flow-lbl">${isEn ? 'Available times' : 'Uygun saatler'}</div><div class="date-row">${d.times.map(time=>`<div class="date-chip time-chip">${time}</div>`).join('')}</div></div>
        <div class="flow-inline-note">${isEn ? 'Your confirmation will arrive in this chat.' : 'Onayınız bu sohbet üzerinden gönderilir.'}</div>
      </div>
      <div class="flow-footer"><div class="flow-summary">${cleanService}<span>${d.dates[1][0]} ${d.dates[1][1]} · ${d.times[1]}</span></div><button type="button" class="flow-btn-gr">${isEn ? 'Confirm booking' : 'Rezervasyonu onayla'}</button><div class="flow-footer-note">${isEn ? 'Managed by Conzy · Inside WhatsApp' : 'Conzy tarafından yönetilir · WhatsApp içinde'}</div></div>
    </div>`;

    const confirmation = document.getElementById('pscreen-2');
    const statusBar = document.querySelector('#pscreen-0 .phone-sb').outerHTML;
    confirmation.innerHTML = statusBar + `<div class="wa-bg">${this.whatsappShell(`
      <div class="wa-day">${isEn ? 'Today' : 'Bugün'}</div>
      <div class="msg msg-o" data-chat="submitted">${isEn ? 'Booking details submitted' : 'Rezervasyon bilgileri gönderildi'}<div class="wa-submitted">${name} · ${d.service}<br>${d.dates[1][0]} ${d.dates[1][1]} · ${d.times[1]}</div><div class="msg-t">19:04 <span class="wa-ticks read">✓✓</span></div></div>
      <div class="msg msg-i wa-confirmed" data-chat="confirmed"><strong>✓ ${restaurant ? (isEn ? 'Your table is confirmed!' : 'Masanız onaylandı!') : (isEn ? 'Your booking is confirmed!' : 'Randevunuz onaylandı!')}</strong><div class="wa-booking-summary"><b>${name}</b><span>${d.service}</span><span>${d.dates[1][0]} ${d.dates[1][1]} · ${d.times[1]}</span></div><p>${isEn ? 'We look forward to welcoming you.' : 'Sizi ağırlamayı bekliyoruz.'}</p><div class="msg-t">19:04</div></div>
      <div class="msg msg-i" data-chat="followup">${isEn ? 'Need to change anything? Just reply to this chat.' : 'Değişiklik mi gerekiyor? Bu sohbete yazmanız yeterli.'}<div class="msg-t">19:04</div></div>
      ${restaurant ? `<div class="msg msg-i" data-chat="menu-intro">${isEn ? 'You can see our menu in the meantime!' : 'Bu arada menümüzü inceleyebilirsiniz!'}<div class="msg-t">19:05</div></div>
      <div class="msg msg-i wa-document" data-chat="menu-pdf"><a class="wa-document-link" href="/assets/restaurant-menu-demo.pdf" target="_blank" rel="noopener" aria-label="${isEn ? 'Open sample restaurant menu PDF' : 'Örnek restoran menüsü PDF dosyasını aç'}"><span class="wa-pdf-icon">PDF</span><span class="wa-document-info"><strong>${isEn ? 'Restaurant menu.pdf' : 'Restoran menüsü.pdf'}</strong><small>${isEn ? '1 page · PDF · Sample menu' : '1 sayfa · PDF · Örnek menü'}</small></span><span class="wa-document-download" aria-hidden="true">↓</span></a><div class="msg-t">19:05</div></div>` : ''}
      <div class="typing-bubble wa-typing" aria-hidden="true"><i class="t-dot"></i><i class="t-dot"></i><i class="t-dot"></i></div>`,isEn)}</div>`;
    const note = document.querySelector('.note-top strong');
    if (note) note.textContent = key === 'restoran' ? (isEn ? 'Table reserved' : 'Masa rezerve edildi') : (isEn ? 'Booking confirmed' : 'Randevu onaylandı');

    // Step four mirrors the restaurant dashboard previews and the booking just made.
    const dashboard = document.getElementById('pscreen-3');
    const bookingCount = restaurant ? 24 : d.dash.stats[1].count;
    const noun = restaurant ? (isEn ? 'Reservations today' : 'Bugünkü rezervasyonlar') : (isEn ? 'Bookings today' : 'Bugünkü randevular');
    const secondLabel = restaurant ? (isEn ? 'Expected guests' : 'Beklenen misafirler') : (isEn ? 'Customer enquiries' : 'Müşteri soruları');
    dashboard.innerHTML = `<div class="phone-sb phone-sb-light"><span class="psb-time">9:41</span><div class="psb-di"></div><span class="mini-signal" aria-hidden="true">▮▮▮</span></div>
      <div class="mini-dashboard">
        <div class="mini-dashboard-header"><strong>Conzy</strong><span>${isEn ? 'Business overview' : 'İşletme özeti'}</span><small>${isEn ? 'DEMO' : 'ÖRNEK'}</small></div>
        <div class="mini-dashboard-body">
          <div class="mini-overline">${isEn ? 'TODAY AT A GLANCE' : 'BUGÜNE GENEL BAKIŞ'}</div>
          <div class="mini-metrics"><div><span>${noun}</span><strong>${bookingCount}</strong><small>${isEn ? 'Including your new booking' : 'Yeni rezervasyon dahil'}</small></div><div><span>${secondLabel}</span><strong>${restaurant ? 64 : d.dash.stats[0].count}</strong><small>${isEn ? 'Illustrative sample data' : 'Örnek veriler'}</small></div></div>
          <div class="mini-booking" data-anim><div class="mini-booking-top"><span>${isEn ? 'NEW WHATSAPP BOOKING' : 'YENİ WHATSAPP REZERVASYONU'}</span><b>✓ ${isEn ? 'Confirmed' : 'Onaylandı'}</b></div>
            <h3>${name}</h3><p>${d.service}</p>
            <div class="mini-booking-facts"><div><small>${isEn ? 'DATE' : 'TARİH'}</small><strong>${d.dates[1][0]} ${d.dates[1][1]}</strong></div><div><small>${isEn ? 'TIME' : 'SAAT'}</small><strong>${d.times[1]}</strong></div>${restaurant ? `<div><small>${isEn ? 'TABLE' : 'MASA'}</small><strong>04</strong></div>` : ''}</div>
          </div>
          <div class="mini-activity-title">${isEn ? 'Handled automatically' : 'Otomatik tamamlananlar'}</div>
          <div class="mini-activity" data-anim><i>✓</i><div><strong>${isEn ? 'Booking saved' : 'Rezervasyon kaydedildi'}</strong><span>${isEn ? 'Available in your team’s dashboard' : 'Ekibinizin paneline eklendi'}</span></div></div>
          <div class="mini-activity" data-anim><i>✓</i><div><strong>${isEn ? 'Confirmation delivered' : 'Onay iletildi'}</strong><span>WhatsApp · ${isEn ? 'Customer notified' : 'Müşteri bilgilendirildi'}</span></div></div>
          <div class="mini-activity" data-anim><i>✓</i><div><strong>${restaurant ? (isEn ? 'Menu PDF delivered' : 'Menü PDF dosyası iletildi') : (isEn ? 'Booking details delivered' : 'Randevu bilgileri iletildi')}</strong><span>${isEn ? 'Sent in the same conversation' : 'Aynı sohbet içinde gönderildi'}</span></div></div>
          <div class="mini-dashboard-footer"><span class="live-dot"></span>${isEn ? 'Your team has the full picture.' : 'Tüm detaylar ekibinizin elinde.'}</div>
        </div>
      </div>`;

    // Restart the narrative after sector or language changes.
    this.goTo(0);
  }

  showAnim(el) {
    if (!el) return;
    el.classList.add('show');
  }

  whatsappShell(messages, en) {
    return `<div class="wa-bar"><span class="wa-back" aria-hidden="true">‹</span><div class="wa-av">C</div><div class="wa-contact"><div class="wa-nm">Conzy</div><div class="wa-st">${en ? 'online' : 'çevrimiçi'}</div></div><span class="wa-header-icons" aria-hidden="true">⌕ ···</span></div><div class="wa-msgs">${messages}</div><div class="wa-inp-bar"><span class="wa-plus" aria-hidden="true">+</span><div class="wa-inp">${en ? 'Message' : 'Mesaj'}</div><span class="wa-send" aria-hidden="true">➤</span></div>`;
  }

  setTyping(screen, active) {
    screen.querySelector('.wa-typing')?.classList.toggle('visible',active);
    const status = screen.querySelector('.wa-st');
    if (status) status.textContent = window.currentLang === 'en' ? (active ? 'typing…' : 'online') : (active ? 'yazıyor…' : 'çevrimiçi');
    this.scrollChat(screen);
  }

  scrollChat(screen) {
    const messages = screen.querySelector('.wa-msgs');
    if (messages) messages.scrollTop = messages.scrollHeight;
  }

  revealMessage(screen, key) {
    const message = screen.querySelector(`[data-chat="${key}"]`);
    message?.classList.add('show');
    this.scrollChat(screen);
  }

  typeMessage(screen, text, start, duration) {
    const input = screen.querySelector('.wa-inp');
    for (let i=1; i<=text.length; i++) {
      this.after(start + duration*i/text.length, () => {
        input.textContent = text.slice(0,i);
        input.classList.add('is-typing');
      });
    }
  }

  sendMessage(screen, key) {
    this.revealMessage(screen,key);
    const input = screen.querySelector('.wa-inp');
    input.textContent = window.currentLang === 'en' ? 'Message' : 'Mesaj';
    input.classList.remove('is-typing');
    const ticks = screen.querySelector(`[data-chat="${key}"] .wa-ticks`);
    this.after(350,()=> { if (ticks) ticks.textContent='✓✓'; });
    this.after(850,()=> ticks?.classList.add('read'));
  }

  runChatSequence(screen) {
    this.typeMessage(screen,this.chatRequest,300,1500);
    this.after(2000,()=>this.sendMessage(screen,'request'));
    this.after(2800,()=>this.setTyping(screen,true));
    this.after(4500,()=> { this.setTyping(screen,false); this.revealMessage(screen,'form'); });
    // Opening is demonstrated by the same button interaction used by visitors.
  }

  runConfirmationSequence(screen) {
    this.revealMessage(screen,'submitted');
    this.after(700,()=>this.setTyping(screen,true));
    this.after(2400,()=> { this.setTyping(screen,false); this.revealMessage(screen,'confirmed'); });
    this.after(4600,()=>this.setTyping(screen,true));
    this.after(6000,()=> { this.setTyping(screen,false); this.revealMessage(screen,'followup'); });
    if (this.currentSector === 'restoran') {
      this.after(7600,()=>this.setTyping(screen,true));
      this.after(9100,()=> { this.setTyping(screen,false); this.revealMessage(screen,'menu-intro'); });
      this.after(10700,()=>this.revealMessage(screen,'menu-pdf'));
    }
  }

  /* Flow form sequence */
  runFlowSequence(screen) {
    // Highlight name field
    this.after(800, () => {
      const name = screen.querySelector('.flow-val-name');
      if (name) { name.classList.add('hl'); name.closest('.flow-outlined')?.classList.add('is-focused'); }
    });
    // Highlight service
    this.after(1700, () => {
      const svc = screen.querySelector('.flow-val-svc');
      if (svc) { screen.querySelectorAll('.is-focused').forEach(el=>el.classList.remove('is-focused')); svc.classList.add('hl'); svc.closest('.flow-outlined')?.classList.add('is-focused'); }
    });
    // Select date chip
    this.after(2600, () => {
      screen.querySelectorAll('.is-focused').forEach(el=>el.classList.remove('is-focused'));
      const chips = screen.querySelectorAll('.date-chip');
      chips.forEach(c => c.classList.remove('sel'));
      if (chips[1]) chips[1].classList.add('sel');
      const body = screen.querySelector('.flow-body');
      if (body) body.scrollTop = body.scrollHeight;
    });
    // Select time chip
    this.after(3600, () => {
      const tChips = screen.querySelectorAll('.time-chip');
      tChips.forEach(c => c.classList.remove('sel'));
      if (tChips[1]) tChips[1].classList.add('sel'); // "11:30"
    });
    // Pulse submit button
    this.after(4700, () => {
      const btn = screen.querySelector('.flow-btn-gr');
      if (btn) btn.classList.add('glow');
    });
  }

  /* Reveal the actual outcome of the customer conversation in the new dashboard. */
  runDashSequence(screen) {
    screen.querySelectorAll('[data-anim]').forEach((item,index) => {
      this.after(300 + index * 700, () => this.showAnim(item));
    });
  }

  countUp(el, target, duration) {
    const screenIndex = this.current;
    const suffix = el.dataset.suffix || '';
    if (prefersReducedMotion) { el.textContent = target + suffix; return; }
    const start = Date.now();
    const tick = () => {
      if (this.paused || this.current !== screenIndex) return;
      const p = Math.min((Date.now() - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}


/* Dashboard previews are selectable without overlapping or obscuring their content. */
document.querySelectorAll('[data-dashboard-view]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-dashboard-view]').forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-dashboard-panel]').forEach(panel => {
      const selected = panel.dataset.dashboardPanel === button.dataset.dashboardView;
      panel.classList.toggle('is-active', selected);
      panel.hidden = !selected;
    });
  });
});

/* ─── FADE UP ────────────────────────────────────────────── */
function initFadeUp() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('vis');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fu').forEach(el => obs.observe(el));
}

/* ─── CONTACT FORM ───────────────────────────────────────── */
window.handleSubmit = async function(e) {
  e.preventDefault();
  const form = e.target;
  const fd   = new FormData(form);

  const w3fd = new FormData();
  w3fd.append('access_key', '71af3b49-80a6-4864-a8ec-c227be023cb7');
  w3fd.append('to_email',   'hello@conzy.nl');
  w3fd.append('subject',    `Yeni Demo Talebi — ${fd.get('name')}`);
  w3fd.append('from_name',  'Conzy Website');
  w3fd.append('name',       fd.get('name')    || '');
  w3fd.append('phone',      fd.get('phone')   || '');
  w3fd.append('email',      fd.get('email')   || '');
  w3fd.append('sector',     fd.get('sector')  || '');
  w3fd.append('message',    fd.get('message') || '');
  fetch('https://api.web3forms.com/submit', { method: 'POST', body: w3fd })
    .catch(() => {});

  document.getElementById('cform').style.display     = 'none';
  document.getElementById('f-success').style.display = 'block';
};

/* ─── SMOOTH SCROLL ──────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      const target = href === '#' ? document.getElementById('hero') : document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─── HERO SCROLL EXIT ───────────────────────────────────── */
function initHeroScroll() { /* The Conzy hero stays stable while scrolling. */ }

/* ─── GEO PRICING ────────────────────────────────────────── */
const geoState = { isTurkey: false, rate: null };

const USD_MONTHLY  = [19,  49,  129];
const USD_YEARLY   = [15,  39,   99];
const USD_YR_TOTAL = [149, 389, 990];
const USD_YR_SAVE  = [79,  199, 558];

function fmtTL(usd) {
  const raw  = usd * geoState.rate;
  const step = raw >= 1000 ? 100 : 10;
  return '₺' + (Math.ceil(raw / step) * step).toLocaleString('tr-TR');
}

function applyGeoPrice() {
  if (!geoState.isTurkey || !geoState.rate) return;

  const isYearly = document.getElementById('tog-yearly')?.classList.contains('active');

  document.querySelectorAll('.js-price').forEach((el, i) => {
    el.dataset.monthly = fmtTL(USD_MONTHLY[i]);
    el.dataset.yearly  = fmtTL(USD_YEARLY[i]);
    el.textContent = isYearly ? el.dataset.yearly : el.dataset.monthly;
  });

  document.querySelectorAll('.js-yearly-note').forEach((el, i) => {
    el.textContent = fmtTL(USD_YR_TOTAL[i]) + '/yıl · ' + fmtTL(USD_YR_SAVE[i]) + ' tasarruf';
  });

  document.querySelectorAll('[data-i18n="plan-per"]').forEach(el => {
    el.textContent = '/ay';
  });
}

async function initGeoPrice() {
  try {
    const geo  = await fetch('https://ipapi.co/json/').then(r => r.json());
    if (geo.country_code !== 'TR') return;

    const data = await fetch('https://open.er-api.com/v6/latest/USD').then(r => r.json());
    geoState.isTurkey = true;
    geoState.rate     = data.rates.TRY;
    applyGeoPrice();
  } catch (_) { /* kur çekilemezse USD kalır */ }
}

/* ─── PRICE TOGGLE ───────────────────────────────────────── */
function initPriceToggle() {
  const togMonthly = document.getElementById('tog-monthly');
  const togYearly  = document.getElementById('tog-yearly');
  if (!togMonthly || !togYearly) return;

  function setMode(mode) {
    const yearly = mode === 'yearly';
    togMonthly.classList.toggle('active', !yearly);
    togYearly.classList.toggle('active', yearly);
    document.querySelectorAll('.js-price').forEach(el => {
      el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
    document.querySelectorAll('.js-yearly-note').forEach(el => {
      el.classList.toggle('show', yearly);
    });
  }

  togMonthly.addEventListener('click', () => setMode('monthly'));
  togYearly.addEventListener('click', () => setMode('yearly'));
}

/* ─── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  new HeroPhone();
  initFadeUp();
  initSmoothScroll();
  initHeroScroll();
  initPriceToggle();
  initGeoPrice();
});
