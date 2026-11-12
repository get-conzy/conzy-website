/* ═══════════════════════════════════════════════════════════
   CONZY — i18n.js  (TR / EN)
   ═══════════════════════════════════════════════════════════ */
'use strict';

const LANGS = {
  tr: {
    'hero-benefit-title': 'Daha az iş yükü. Müşterilerinize daha çok zaman.',
    'hero-benefit-description': 'Sorular, rezervasyonlar ve takip mesajları tek bir sohbette yönetilir.',
    'landing-eyebrow': 'WhatsApp, işletmeniz için çalışıyor',
    'landing-h1': 'Her merhaba.<br><em>Yeni bir fırsat.</em>',
    'landing-description': 'İlk sorudan onaylanan rezervasyona kadar WhatsApp sohbetlerinizi Conzy yönetir. Siz işletmenizle ilgilenin.',
    'landing-primary': 'Conzy ile tanışın <span><svg class="inline-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span>',
    'landing-secondary': 'Nasıl çalıştığını görün <span>↓</span>',
    'landing-reassurance': 'İşletmeniz. Sizin üslubunuz. Günün her saatinde.',
    'landing-status': 'Her zaman yanında.',
    'landing-story-label': 'Tek mesaj. Her şey yolunda.',
    'landing-customer': 'Müşteriniz yazıyor',
    'landing-request': '“Merhaba, bu akşam için masa ayırtabilir miyim?”',
    'landing-confirmed': 'Rezervasyonunuz tamam.',
    'landing-booking': '4 kişi · 20:00',
    'landing-saved': 'İşletme paneline kaydedildi',
    'landing-story-bottom': 'Harika bir ilk izlenim.<br>İşiniz bölünmeden.',
    'landing-example': 'Örnek sohbet',
    'landing-capability-1': 'Soruları yanıtlayın.',
    'landing-capability-2': 'Rezervasyonları alın.',
    'landing-capability-3': 'İletişimi sürdürün.',
    'live-demo-tag': 'Conzy’yi çalışırken görün',
    'live-demo-title': 'İlk mesajdan<br><em>onaylanan rezervasyona.</em>',
    'live-demo-description': 'Sektörünüzü seçin ve örnek bir müşteri yolculuğunu izleyin. Tüm bilgiler WhatsApp içinde, adım adım tamamlanır.',
    'live-demo-point-1': 'Müşteriniz sohbeti başlatır.',
    'live-demo-point-2': 'Conzy bilgileri toplar ve rezervasyonu onaylar.',
    'live-demo-point-3': 'Ekibiniz tüm detayları tek panelde görür.',
    'live-demo-contact': 'İşletmenize nasıl uyarlayacağımızı konuşalım <span><svg class="inline-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span>',

    'dashboard-overview-tab': 'Rezervasyon özeti',
    'dashboard-tables-tab': 'Masa planı ve takvim',
    'dashboard-preview-note': 'Örnek verilerle ürün önizlemesi. Tam boyutta incelemek için görsele tıklayın.',
    'ch-demo-lbl': 'Tanışalım',
    'ch-demo-val': 'Ücretsiz demo isteyin',
    'scene-label': 'İşletmeniz otomatik pilotta',
    'scene-booked': 'Randevu oluşturuldu',
    'scene-sync': 'Takvim otomatik güncellendi',
    'scene-online': 'Müşterilerinizin hep yanında',
    'scene-hours': 'Mesai saatleri dışında bile.',
    'page-title'      : 'Conzy | İşletmeler için Yapay Zeka WhatsApp Asistanı',
    'meta-desc'       : 'Conzy, WhatsApp üzerinden müşteri sorularını yanıtlar, rezervasyonları yönetir ve kişiselleştirilmiş takip mesajları gönderir. Demoyu ve paketleri inceleyin.',
    'nav-features'    : 'Özellikler',
    'nav-sectors'     : 'Sektörler',
    'nav-pricing'     : 'Fiyatlar',
    'nav-cta'         : 'Demo İste →',
    'hero-tag'        : 'Daha az yoğunluk. Daha çok Conzy.',
    'hero-h1'         : 'Güzel sohbetler.<br><em>Büyüyen işletmeler.</em>',
    'hero-desc'       : 'Müşterilerinize WhatsApp\'tan saniyeler içinde otomatik olarak yanıt verin, randevu alın, teklif gönderin, yapay zeka halleder, siz sadece sonuçlara bakın. 7/24, hiç durmadan.',
    'hero-btn-demo'   : 'Demo İste',
    'hero-btn-how'    : 'Nasıl Çalışır?',
    'sector-tabs-label': 'Sektöre göre inceleyin',
    'sector-tabs-description': 'WhatsApp rezervasyon demosunu görmek için bir sektör seçin.',
    'st-klinik'       : 'Klinik',
    'st-restoran'     : 'Restoran',
    'st-guzellik'     : 'Güzellik',
    'st-servis'       : 'Oto Servis',
    'st-emlak'        : 'Gayrimenkul',
    'marquee-text'    : 'İnteraktif Formlar <span class="ms">·</span> AI Intent Algılama <span class="ms">·</span> Canlı Dashboard <span class="ms">·</span> 7/24 Aktif <span class="ms">·</span> Randevu Otomasyonu <span class="ms">·</span> KVKK Uyumlu <span class="ms">·</span> Çoklu Dil Desteği <span class="ms">·</span> Kurulum Dahil <span class="ms">·</span>',
    'stat-1'          : 'Kesintisiz aktif çalışır',
    'stat-2-n'        : '%100',
    'stat-2'          : 'Özelleştirilmiş çözüm',
    'stat-3'          : 'Mesaj otomasyon oranı',
    'stat-4-n'        : 'Sınırsız',
    'stat-4'          : 'Otomasyon senaryosu sayısı',
    'pipe-tag'        : 'Nasıl Çalışır',
    'pipe-h2'         : 'WhatsApp içinde,<br><em>uçtan uca otomasyon</em>',
    'pipe-desc'       : 'Müşteriniz WhatsApp\'tan çıkmadan interaktif form doldurur, randevu alır, rezervasyon yapar, teklif ister, 7/24, siz uyurken de.',
    'pipe-1-h'        : 'Müşteri yazar',
    'pipe-1-p'        : 'WhatsApp\'tan gelen her mesaj, kısa, uzun, yazım hatalı, sisteme anında ulaşır.',
    'pipe-2-h'        : 'AI 3sn\'de algılar',
    'pipe-2-p'        : 'Yapay zeka mesajın amacını anlar. Randevu mu, fiyat mı, bilgi mi? Otomatik yönlendirir.',
    'pipe-3-h'        : 'İnteraktif form açılır',
    'pipe-3-p'        : 'Müşteri WhatsApp\'ın içinde interaktif formu doldurur. Dış link yok, uygulama değişmiyor.',
    'pipe-4-h'        : 'Otomatik kaydedilir',
    'pipe-4-p'        : 'Randevu oluşur, onay gider, takvime işlenir. Siz sadece dashboard\'dan takip edersiniz.',
    'phb-pill'        : 'Rakiplerin sunamadığı özellik',
    'phb-text'        : 'Müşteri WhatsApp\'tan hiç çıkmaz, dış link yok, browser açılmıyor. Dönüşüm oranı standart yönlendirmeli sistemlere kıyasla çok daha yüksek.',
    'fav-tag'         : 'İnteraktif Formlar',
    'fav-h2'          : 'Form doldurmak<br><em>bu kadar kolay</em>',
    'fav-lead'        : 'Müşteriniz tek bir mesajla süreci başlatır; randevusunu alır, rezervasyonunu yapar veya teklifini ister, WhatsApp\'ı kapatmadan.',
    'fav-p1-h'        : 'Dış link yok',
    'fav-p1-p'        : 'Form WhatsApp içinde açılır. Müşteri hiçbir zaman uygulamadan çıkmaz.',
    'fav-p2-h'        : 'Anında onay',
    'fav-p2-p'        : 'Form gönderildiği anda sistem randevuyu oluşturur ve onay mesajı gönderir.',
    'fav-p3-h'        : 'Uygulama içi formlar',
    'fav-p3-p'        : 'Müşterileriniz WhatsApp\'tan çıkmadan interaktif formlara erişir. Uygulama değiştirmeden, dış link olmadan.',
    'fav-p4-h'        : 'Her sektöre özel',
    'fav-p4-p'        : 'Klinik, restoran, güzellik salonu, oto servis, her işletme için özelleştirilmiş otomasyon şablonları.',
    'fav-fc-title'    : 'Randevu Formu',
    'fav-fc-sub'      : 'Tarih ve saat seçin',
    'fav-fc-btn'      : 'Formu Aç →',
    'fav-footer'      : 'Yanıt süresi: <strong>2.8 saniye</strong>',
    'db-tag'          : 'Canlı Dashboard',
    'db-h2'           : 'Tüm operasyonunuz<br><em>tek ekranda</em>',
    'db-lead'         : 'Gelen mesajlar, randevular, doluluk oranı, hepsi anlık olarak takibinizde. Karar almak için rapor beklemenize gerek yok.',
    'db-p1-h'         : 'Canlı randevu takvimi',
    'db-p1-p'         : 'Günlük ve haftalık görünüm. Kimin ne zaman geleceğini tek bakışta görün.',
    'db-p2-h'         : 'Anlık istatistikler',
    'db-p2-p'         : 'Bugünkü rezervasyon sayısı, doluluk oranı ve ortalama yanıt süresi.',
    'db-p3-h'         : 'Rezervasyon detayları',
    'db-p3-p'         : 'Her rezervasyonun müşteri bilgisi, notu ve durumu tek panelde.',
    'ai-tag'          : 'Yapay Zeka ile İletişim',
    'ai-h2'           : 'Müşteriniz yazar,<br><em>AI hemen yanıtlar</em>',
    'ai-desc'         : 'Standart otomatik mesajların çok ötesinde. Conzy\'nun yapay zekası müşterilerinizin ne dediğini değil, <strong>ne demek istediğini</strong> anlar, ve saniyeler içinde doğru yanıtı gönderir. Siz uyurken bile.',
    'ai-pt1-title'    : 'Niyet Algılama',
    'ai-pt1-desc'     : 'Randevu mu, fiyat mı, bilgi mi? AI saniyeler içinde anlar ve doğru akışa yönlendirir.',
    'ai-pt2-title'    : 'Doğal Türkçe',
    'ai-pt2-desc'     : 'Müşteri ne yazarsa yazsın, kısa, uzun, yazım hatalı, AI anlar ve doğal bir dille yanıt verir.',
    'ai-pt3-title'    : '7/24, 3 Saniyede',
    'ai-pt3-desc'     : 'Hiçbir çalışanınız bu hız ve tutarlılıkta yanıt veremez. Yılın 365 günü, gece gündüz aktif.',
    'ai-chat-name'    : 'Restaurant Agent',
    'ai-chat-status'  : 'Conzy AI · Aktif',
    'ai-footer'       : 'Rezervasyon tamamlandı, yanıt süresi: <strong>2.1 saniye</strong>',
    'demo-tag'        : 'Nasıl Çalışır',
    'demo-h2'         : 'WhatsApp\'ın tüm gücünü<br><em>tek sistemde</em> kullanın',
    'demo-desc'       : 'Standart chatbot\'ların çok ötesinde. Müşterileriniz WhatsApp\'tan çıkmadan interaktif form dolduruyor, randevu seçiyor.',
    'step-01-h3'      : 'Yapay Zeka ile<br><em>Anında Karşılama</em>',
    'step-01-p'       : 'Müşteriniz WhatsApp\'tan mesaj attığında sistem 3 saniye içinde yanıt verir. "Randevu", "fiyat", "bilgi" gibi niyet kelimelerini AI otomatik algılar ve doğru akışa yönlendirir.',
    'step-01-pills'   : '<span class="pill"> Müşteriyi anlayan AI</span><span class="pill"> 3s yanıt</span><span class="pill"> Çoklu dil desteği</span>',
    'step-02-h3'      : 'WhatsApp\'ta<br><em>İnteraktif Randevu</em>',
    'step-02-p'       : 'WhatsApp uygulamasından çıkmadan interaktif randevu formu. Müşteri isim, tarih ve saat seçiyor, siz dashboard\'da anlık görüyorsunuz.',
    'step-02-pills'   : '<span class="pill"> Uygulama içi form</span><span class="pill"> Tarih-saat seçici</span><span class="pill">✓ Anında onay</span>',
    'step-03-h3'      : 'Otomatik Teklif<br><em>&amp; Fiyat Akışı</em>',
    'step-03-p'       : 'Müşteri "fiyat nedir?" dediğinde sistem otomatik teklif formunu açar. Hizmet türü, bütçe ve iletişim bilgilerini toplar. Siz sadece hazır teklifi onaylarsınız.',
    'step-03-pills'   : '<span class="pill"> Otomatik teklif</span><span class="pill"> Hizmet seçimi</span><span class="pill"> Lead takibi</span>',
    'step-04-h3'      : 'Canlı Dashboard<br><em>&amp; Takvim</em>',
    'step-04-p'       : 'Tüm konuşmalar, randevular ve istatistikler tek panelde. Kaç mesaj geldi, kaçı randevuya dönüştü, anlık görerek karar alın.',
    'step-04-pills'   : '<span class="pill"> Canlı istatistik</span><span class="pill"> Takvim görünümü</span><span class="pill"> Haftalık rapor</span>',
    'feat-tag'        : 'Özellikler',
    'feat-h2'         : 'Rakiplerinizden sizi<br><em>ayıran</em> teknoloji',
    'feat-desc'       : 'Global SaaS araçlarının sunamadığı sektöre özel çözümler, Türkçe destek ve tam özelleştirme.',
    'feat-1-p'        : 'Gelen mesajın amacını yapay zeka otomatik algılar ve doğru akışa yönlendirir. Çoklu dil desteği.',
    'feat-2-p'        : 'Müşteri WhatsApp\'tan çıkmadan interaktif form doldurur. Randevu, teklif, ön değerlendirme, hepsi tek akışta.',
    'feat-2-h'        : 'İnteraktif Formlar',
    'feat-3-h'        : 'Canlı Takvim',
    'feat-3-p'        : 'Randevular otomatik takvime işlenir. Günlük, haftalık görünüm. Kimin ne zaman geleceğini tek bakışta görün.',
    'feat-4-h'        : 'KVKK Uyumlu',
    'feat-4-p'        : 'Tüm veriler AB sunucularında işlenir. KVKK ve GDPR gerekliliklerine tam uyumlu. Veri sahipliği sizde.',
    'feat-5-h'        : 'Kurulum Dahil',
    'feat-5-p'        : 'Meta Business API başvurusundan canlı yayına kadar her şey sizin adınıza.',
    'feat-6-h'        : 'Tek Muhatap',
    'feat-6-p'        : 'Sorun olduğunda call center değil, sizi tanıyan bir kişiyi arıyorsunuz. Otomasyon güncellemeleriniz 24 saatte yapılır.',
    'how-tag'         : 'Süreç',
    'how-h2'          : '3 adımda<br><em>canlıya</em> geçin',
    'how-desc'        : 'Kurulumdan canlı yayına kadar yanınızdayız. Siz işinize odaklanın, biz halledelim.',
    'how-1-h'         : 'Keşif &amp; Kurulum',
    'how-1-p'         : 'İş süreçlerinizi anlıyoruz. Meta Business API başvurusunu sizin adınıza yapıyoruz. WhatsApp numaranızı sisteme bağlıyoruz.',
    'how-2-h'         : 'Özelleştirme &amp; Test',
    'how-2-p'         : 'Sektörünüze özel otomasyonları ayarlıyoruz. Mesajları, randevu sistemini, teklif formunu yapılandırıyoruz. Canlı test yapıyoruz.',
    'how-3-h'         : 'Canlı Yayın &amp; Destek',
    'how-3-p'         : 'Sistemi yayına alıyoruz, dashboard erişimi veriyoruz. Aylık performans raporu ve öncelikli destek ile yanınızdayız.',
    'sec-tag'         : 'Sektörler',
    'sec-h2'          : 'Her sektöre özel<br><em>hazır çözümler</em>',
    'sec-desc'        : 'Genel amaçlı değil, işinize özgü.',
    'sec-1-h'         : 'Özel Klinik &amp; Hastane',
    'sec-1-p'         : 'Randevu, ön değerlendirme, hatırlatma mesajı',
    'sec-2-h'         : 'Güzellik &amp; Estetik',
    'sec-2-p'         : 'Seans rezervasyonu, danışma formu, tedavi akışı',
    'sec-3-h'         : 'Restoran',
    'sec-3-p'         : 'Rezervasyon, masa yönetimi, sipariş akışı',
    'sec-4-h'         : 'Otomotiv Servisi',
    'sec-4-p'         : 'Araç kabul formu, servis durumu, randevu',
    'sec-5-h'         : 'Gayrimenkul',
    'sec-5-p'         : 'İlan sorgulama, ziyaret randevusu, danışman yönlendirme',
    'sec-6-h'         : 'Hukuk &amp; Danışmanlık',
    'sec-6-p'         : 'Ön başvuru formu, müvekkil kabulü',
    'sec-7-h'         : 'Eğitim Kurumu',
    'sec-7-p'         : 'Kayıt formu, bilgi talebi, hatırlatma',
    'sec-8-h'         : 'E-Ticaret &amp; Butik',
    'sec-8-p'         : 'Sipariş takip, iade formu, ürün soruları',
    'price-tag'       : 'Fiyatlar',
    'price-h2'        : 'Şeffaf,<br><em>sürprizsiz</em> fiyatlandırma',
    'price-desc'      : 'Gizli ücret yok. Kurulum ücreti yok. Her paketle tam destek.',
    'tog-monthly'     : 'Aylık',
    'tog-yearly'      : 'Yıllık',
    'tog-save'        : '%20 İndirim',
    'plan-per'        : '/mo',
    'plan-1-yearly'   : '$470/yıl · $118 tasarruf',
    'plan-1-f1': 'WhatsApp Business API kurulumu',
    'plan-1-f2': 'Sık sorulan müşteri sorularına otomatik yanıtlar',
    'plan-1-f3': 'WhatsApp üzerinden rezervasyon ve talep formları',
    'plan-1-f4': 'Müşteri ve rezervasyon paneli',
    'plan-1-f5': 'Tek işletme konumu için bir WhatsApp numarası',
    'plan-1-f6': 'Standart kurulum desteği ve e-posta desteği',
    'plan-2-f1': 'Starter paketindeki her şey',
    'plan-2-f2': 'İşletmenize, hizmetlerinize ve fiyatlarınıza özel AI yanıtları',
    'plan-2-f3': 'Kişiselleştirilmiş rezervasyon onayları ve hatırlatmalar',
    'plan-2-f4': 'Ziyaret sonrası kişiselleştirilmiş geri bildirim talepleri',
    'plan-2-f5': 'Menü, hizmet, broşür ve fiyat listelerinin otomatik paylaşımı',
    'plan-3-f1': 'Growth paketindeki her şey',
    'plan-3-f2': 'Kişiselleştirilmiş teklifler ve kampanyalar',
    'plan-3-f3': 'Gelişmiş müşteri hedefleme',
    'plan-3-f4': 'Önceki ziyaret veya hizmetlere göre takip mesajları',
    'plan-3-f5': 'Özel formlar ve müşteri bilgi alanları',
    'plan-3-f6': 'Birebir kurulum desteği',
    'plan-3-f7': 'Öncelikli destek',
    'plan-2-badge'    : 'En Popüler',
    'plan-2-yearly'   : '$950/yıl · $238 tasarruf',
    'plan-3-yearly'   : '$1.910/yıl · $478 tasarruf',
    'plan-cta'        : 'Demo İste',
    'price-note'      : '7 günlük ücretsiz deneme &nbsp;·&nbsp; Kredi kartı gerekmez &nbsp;·&nbsp; İstediğin zaman iptal',
    'contact-tag'     : 'İletişim',
    'contact-h2'      : 'Demo isteyin,<br><em>sistemi</em> görün',
    'contact-p'       : '15 dakikalık canlı demoda kendi işletmenize özel kurulu sistemi görün. Hiçbir ücret veya taahhüt olmadan.',
    'ch-wa-lbl'       : 'WhatsApp',
    'ch-wa-val'       : 'Hemen yazın',
    'ch-email-lbl'    : 'E-posta',
    'reply-lbl'       : ' Yanıt süresi',
    'reply-val'       : 'İş günleri 2 saat içinde',
    'reply-sub'       : 'Hafta sonu formlar Pazartesi yanıtlanır',
    'form-name-lbl'   : 'Ad Soyad *',
    'form-name-ph'    : 'Ahmet Yılmaz',
    'form-phone-lbl'  : 'WhatsApp Numarası *',
    'form-phone-ph'   : '+90 532 000 00 00',
    'form-email-lbl'  : 'E-posta',
    'form-email-ph'   : 'ahmet@sirket.com',
    'form-sector-lbl' : 'İşletme Türü *',
    'form-sector-ph'  : 'Seçiniz...',
    'form-sector-opts': ['Özel Klinik / Hastane','Güzellik & Estetik Merkezi','Saç Ekimi Kliniği','Otomotiv Servisi','Gayrimenkul Ofisi','Hukuk Bürosu / Danışmanlık','Eğitim Kurumu','E-Ticaret / Butik','Diğer'],
    'form-msg-lbl'    : 'Mesajınız',
    'form-msg-ph'     : 'İşletmeniz ve ihtiyaçlarınız hakkında kısaca bilgi verin...',
    'form-submit'     : 'Contact Us! Get Your Free Demo →',
    'success-h'       : 'Mesajınız alındı!',
    'success-p'       : '2 iş saati içinde WhatsApp veya e-posta ile geri dönüyoruz.',
    'footer-brand-p'  : 'Conzy, müşteri soruları, rezervasyonlar ve kişiselleştirilmiş takip mesajları için işletmenizin yapay zeka WhatsApp asistanıdır.',
    'footer-p-title'  : 'Ürün',
    'footer-p-feat'   : 'Özellikler',
    'footer-p-price'  : 'Fiyatlar',
    'footer-p-sec'    : 'Sektörler',
    'footer-c-title'  : 'İletişim',
    'footer-c-demo'   : 'Demo İste',
    'footer-copy'     : '© 2026 Conzy. Tüm hakları saklıdır.',
    'footer-privacy'  : 'KVKK &amp; Gizlilik',
    /* Hero pscreens */
    'ps-chat': {
      waName:'Conzy', waStatus:'çevrimiçi',
      bot1:'Merhaba! Nasıl yardımcı olabilirim?',
      b1:' Randevu Al', b2:' Fiyat Öğren', b3:'ℹ Bilgi Al',
      userMsg:'Randevu almak istiyorum',
      formLabel:' RANDEVU FORMU',
      formText:'Randevu almak için formu açınız...',
      formBtn:'Formu Aç →',
      inp:'Mesaj yazın...',
    },
    'ps-flow': {
      barTitle:' Randevu Al',
      title:'Randevu Bilgileri', sub:'Formu doldurun, hemen onaylayalım',
      lblName:'Adınız Soyadınız', valName:'Ahmet Yılmaz',
      lblSvc:'Hizmet', valSvc:'Saç Ekimi Konsültasyon',
      lblDate:'Tarih', lblTime:'Saat',
      dates:['Sal','Çar','Per','Cum'], dateDays:['20','21','22','23'],
      times:['10:00','11:30','14:00'],
      btn:'Randevuyu Onayla ✓',
    },
    'ps-dash': {
      title:' Canlı Dashboard', date:'21 Mayıs 2026',
      lbl1:'Bugün mesaj', lbl2:'Randevu', lbl3:'Otomasyon', lbl4:'Ort. yanıt',
      section:'Bugünkü Randevular',
      rows:[
        {name:'Ayşe Demir', time:'10:00 · Konsültasyon', badge:'Onaylı', dotCls:'dot-g', badgeCls:'bg-g'},
        {name:'Emre Çelik', time:'11:30 · FUE Saç',     badge:'Bekliyor',dotCls:'dot-y', badgeCls:'bg-y'},
        {name:'Fatma Kaya', time:'14:00 · Kaş Ekimi',   badge:'Onaylı', dotCls:'dot-g', badgeCls:'bg-g'},
      ],
    },
    'hamburger-aria'   : 'Menü',
    'mmenu-close-aria' : 'Kapat',
    'marquee-track-aria': 'Conzy özellik bandı',
    'dashboard-1-alt'  : 'Conzy Dashboard rezervasyon listesi görünümü',
    'dashboard-2-alt'  : 'Conzy Dashboard takvim görünümü',
  },

  en: {
    'hero-benefit-title': 'Less admin. More time for your customers.',
    'hero-benefit-description': 'Answers, bookings and follow ups handled in one conversation.',
    'landing-eyebrow': 'WhatsApp, working for you',
    'landing-h1': 'Every hello.<br><em>A new opportunity.</em>',
    'landing-description': 'From the first question to the confirmed booking, Conzy takes care of your WhatsApp conversations. You take care of your business.',
    'landing-primary': 'Meet Conzy <span><svg class="inline-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span>',
    'landing-secondary': 'Watch it work <span>↓</span>',
    'landing-reassurance': 'Your business. Your voice. Available around the clock.',
    'landing-status': 'On it. Always.',
    'landing-story-label': 'One message. Everything taken care of.',
    'landing-customer': 'A customer writes',
    'landing-request': '“Hi, can I book a table for tonight?”',
    'landing-confirmed': 'Consider it booked.',
    'landing-booking': '4 guests · 20:00',
    'landing-saved': 'Saved to your dashboard',
    'landing-story-bottom': 'A great first impression.<br>Without another interruption.',
    'landing-example': 'Illustrative conversation',
    'landing-capability-1': 'Answer the questions.',
    'landing-capability-2': 'Take the bookings.',
    'landing-capability-3': 'Keep the conversation going.',
    'live-demo-tag': 'See Conzy in action',
    'live-demo-title': 'From first message<br><em>to confirmed booking.</em>',
    'live-demo-description': 'Choose your industry and follow a real-world customer journey. All inside WhatsApp, with every detail carried through.',
    'live-demo-point-1': 'Your customer starts the conversation.',
    'live-demo-point-2': 'Conzy collects the details and confirms the booking.',
    'live-demo-point-3': 'Your team gets the full picture in one dashboard.',
    'live-demo-contact': 'Let’s make it work for your business <span><svg class="inline-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="M6 18 18 6M6 6h12v12"/></svg></span>',

    'dashboard-overview-tab': 'Reservation overview',
    'dashboard-tables-tab': 'Table plan & schedule',
    'dashboard-preview-note': 'Product preview with sample data. Select the image to inspect it at full size.',
    'ch-demo-lbl': 'Let’s talk',
    'ch-demo-val': 'Request your free demo',
    'scene-label': 'Your business, on autopilot',
    'scene-booked': 'Appointment booked',
    'scene-sync': 'Calendar updated automatically',
    'scene-online': 'Always here for your customers',
    'scene-hours': 'Even after closing time.',
    'page-title'      : 'Conzy | AI WhatsApp Assistant for Business',
    'meta-desc'       : 'Conzy helps your business answer customer questions, manage bookings and send personalised follow ups through WhatsApp. See the demo and explore our plans.',
    'nav-features'    : 'Features',
    'nav-sectors'     : 'Sectors',
    'nav-pricing'     : 'Pricing',
    'nav-cta'         : 'Get Demo →',
    'hero-tag'        : 'A little less busy. A lot more Conzy.',
    'hero-h1'         : 'Good conversations.<br><em>Growing business.</em>',
    'hero-desc'       : 'Turn WhatsApp messages into booked appointments and happy customers. Conzy takes care of the conversation, so you can take care of your business.',
    'hero-btn-demo'   : 'Meet your assistant',
    'hero-btn-how'    : 'See how it works',
    'sector-tabs-label': 'Explore by industry',
    'sector-tabs-description': 'Select an industry to see its WhatsApp booking demo.',
    'st-klinik'       : 'Clinic',
    'st-restoran'     : 'Restaurant',
    'st-guzellik'     : 'Beauty',
    'st-servis'       : 'Auto Service',
    'st-emlak'        : 'Real Estate',
    'marquee-text'    : 'Interactive Forms <span class="ms">·</span> AI Intent Detection <span class="ms">·</span> Live Dashboard <span class="ms">·</span> 24/7 Active <span class="ms">·</span> Appointment Automation <span class="ms">·</span> GDPR Compliant <span class="ms">·</span> Full Support <span class="ms">·</span> Setup Included <span class="ms">·</span>',
    'stat-1'          : 'Always active, nonstop',
    'stat-2-n'        : '100%',
    'stat-2'          : 'Customized solution',
    'stat-3'          : 'Message automation rate',
    'stat-4-n'        : 'Unlimited',
    'stat-4'          : 'Automation scenarios',
    'pipe-tag'        : 'How It Works',
    'pipe-h2'         : 'End to end automation,<br><em>all inside WhatsApp</em>',
    'pipe-desc'       : 'Your customer fills interactive forms, books appointments, makes reservations and requests quotes without ever leaving WhatsApp, 24/7, even while you sleep.',
    'pipe-1-h'        : 'Customer writes',
    'pipe-1-p'        : 'Every WhatsApp message reaches the system instantly, even if it contains typos.',
    'pipe-2-h'        : 'AI detects in 3s',
    'pipe-2-p'        : 'AI understands the intent. Appointment? Price? Info? Routes automatically.',
    'pipe-3-h'        : 'Interactive form opens',
    'pipe-3-p'        : 'Customer fills an interactive form inside WhatsApp. No external links, no app switching.',
    'pipe-4-h'        : 'Saved automatically',
    'pipe-4-p'        : 'Appointment is created, confirmation sent, calendar updated. You just check the dashboard.',
    'phb-pill'        : 'What competitors can\'t offer',
    'phb-text'        : 'The customer never leaves WhatsApp, no external links, no browser. Conversion rates are significantly higher compared to redirect based systems.',
    'fav-tag'         : 'Interactive Forms',
    'fav-h2'          : 'Filling a form<br><em>this easy</em>',
    'fav-lead'        : 'Your customer starts the process with a single message and books an appointment, makes a reservation or requests a quote, without closing WhatsApp.',
    'fav-p1-h'        : 'No external links',
    'fav-p1-p'        : 'The form opens inside WhatsApp. The customer never leaves the app.',
    'fav-p2-h'        : 'Instant confirmation',
    'fav-p2-p'        : 'The moment the form is submitted, the system creates the booking and sends a confirmation.',
    'fav-p3-h'        : 'In-app forms',
    'fav-p3-p'        : 'Customers access interactive forms without leaving WhatsApp. No app switching, no external links.',
    'fav-p4-h'        : 'Custom per sector',
    'fav-p4-p'        : 'Clinic, restaurant, beauty salon, auto service, customized automation templates for every business type.',
    'fav-fc-title'    : 'Appointment Form',
    'fav-fc-sub'      : 'Pick a date and time',
    'fav-fc-btn'      : 'Open Form →',
    'fav-footer'      : 'Response time: <strong>2.8 seconds</strong>',
    'db-tag'          : 'Live Dashboard',
    'db-h2'           : 'Your entire operation<br><em>on one screen</em>',
    'db-lead'         : 'Track messages, appointments and occupancy in real time. Make decisions without waiting for reports.',
    'db-p1-h'         : 'Live appointment calendar',
    'db-p1-p'         : 'Daily and weekly views. See who is coming and when at a glance.',
    'db-p2-h'         : 'Real time stats',
    'db-p2-p'         : 'Today\'s reservation count, occupancy rate and average response time.',
    'db-p3-h'         : 'Reservation details',
    'db-p3-p'         : 'Customer info, notes and status for every booking in one panel.',
    'ai-tag'          : 'AI powered Communication',
    'ai-h2'           : 'Customer writes,<br><em>AI instantly replies</em>',
    'ai-desc'         : 'Far beyond standard automatic messages. Conzy\'s AI understands not what your customers <strong>say</strong>, but what they <strong>mean</strong>, and sends the right reply in seconds. Even while you sleep.',
    'ai-pt1-title'    : 'Intent Detection',
    'ai-pt1-desc'     : 'Appointment, price, or info? AI understands in seconds and routes to the right flow.',
    'ai-pt2-title'    : 'Natural Language',
    'ai-pt2-desc'     : 'AI understands customer messages and replies naturally, even when they contain typos.',
    'ai-pt3-title'    : '24/7, in 3 Seconds',
    'ai-pt3-desc'     : 'No employee can match this speed and consistency. Active 365 days a year, day and night.',
    'ai-chat-name'    : 'Restaurant Agent',
    'ai-chat-status'  : 'Conzy AI · Active',
    'ai-footer'       : 'Reservation completed, response time: <strong>2.1 seconds</strong>',
    'demo-tag'        : 'How It Works',
    'demo-h2'         : 'Harness the full power of WhatsApp<br>in <em>one system</em>',
    'demo-desc'       : 'Far beyond standard chatbots. Your customers fill out interactive forms and book appointments without leaving WhatsApp.',
    'step-01-h3'      : 'AI powered<br><em>Instant Welcome</em>',
    'step-01-p'       : 'When your customer messages on WhatsApp, the system responds within 3 seconds. AI automatically detects intent keywords like "appointment", "price", "info" and routes to the right flow.',
    'step-01-pills'   : '<span class="pill"> AI that understands customers</span><span class="pill"> 3s response</span><span class="pill"> Multi-language support</span>',
    'step-02-h3'      : 'Interactive<br><em>Appointment Form</em>',
    'step-02-p'       : 'Interactive appointment form without leaving WhatsApp. Customer selects name, date, and time, you see it instantly in the dashboard.',
    'step-02-pills'   : '<span class="pill"> In-app form</span><span class="pill"> Date-time picker</span><span class="pill">✓ Instant confirm</span>',
    'step-03-h3'      : 'Automated Quote<br><em>&amp; Pricing Form</em>',
    'step-03-p'       : 'When a customer asks "what\'s the price?", the system automatically opens the quote form. Collects service type, budget, and contact info. You just approve the ready quote.',
    'step-03-pills'   : '<span class="pill"> Auto quote</span><span class="pill"> Service selection</span><span class="pill"> Lead tracking</span>',
    'step-04-h3'      : 'Live Dashboard<br><em>&amp; Calendar</em>',
    'step-04-p'       : 'All conversations, appointments, and statistics in one panel. See how many messages came in, how many converted, make real time decisions.',
    'step-04-pills'   : '<span class="pill"> Live stats</span><span class="pill"> Calendar view</span><span class="pill"> Weekly report</span>',
    'feat-tag'        : 'Features',
    'feat-h2'         : 'The technology that sets you<br><em>apart</em> from competitors',
    'feat-desc'       : 'Industry specific solutions, full support, and complete customization that global SaaS tools can\'t offer.',
    'feat-1-p'        : 'Incoming message intent is automatically detected by AI and routed to the right flow. Multiple languages supported.',
    'feat-2-p'        : 'Customers fill out interactive forms without leaving WhatsApp. Appointment, quote, initial assessment, all in one flow.',
    'feat-2-h'        : 'Interactive Forms',
    'feat-3-h'        : 'Live Calendar',
    'feat-3-p'        : 'Appointments are automatically added to the calendar. Daily and weekly views. See who\'s coming when at a glance.',
    'feat-4-h'        : 'GDPR Compliant',
    'feat-4-p'        : 'All data is processed on EU servers. Fully compliant with GDPR requirements. You own your data.',
    'feat-5-h'        : 'Setup Included',
    'feat-5-p'        : 'From Meta Business API application to live launch, everything is handled for you.',
    'feat-6-h'        : 'Single Point of Contact',
    'feat-6-p'        : 'When there\'s an issue, you call someone who knows you, not a call center. Automation updates are completed within 24 hours.',
    'how-tag'         : 'Process',
    'how-h2'          : 'Go live in<br><em>3 steps</em>',
    'how-desc'        : 'We guide you from setup to launch. You focus on your business, we handle everything.',
    'how-1-h'         : 'Discovery &amp; Setup',
    'how-1-p'         : 'We understand your business processes. We apply for Meta Business API on your behalf. We connect your WhatsApp number to the system.',
    'how-2-h'         : 'Customization &amp; Testing',
    'how-2-p'         : 'We configure industry specific automations. We set up messages, appointment system, and quote form. We conduct live testing.',
    'how-3-h'         : 'Go Live &amp; Support',
    'how-3-p'         : 'We launch the system and provide dashboard access. Monthly performance reports and priority support by your side.',
    'sec-tag'         : 'Sectors',
    'sec-h2'          : 'Ready solutions<br>for <em>every industry</em>',
    'sec-desc'        : 'Not one size fits all, tailored to your business.',
    'sec-1-h'         : 'Private Clinic &amp; Hospital',
    'sec-1-p'         : 'Appointments, initial assessments, reminder messages',
    'sec-2-h'         : 'Beauty &amp; Aesthetics',
    'sec-2-p'         : 'Session bookings, consultation forms, treatment automation',
    'sec-3-h'         : 'Restaurant',
    'sec-3-p'         : 'Reservations, table management, order automation',
    'sec-4-h'         : 'Auto Service',
    'sec-4-p'         : 'Vehicle intake form, service status, appointment',
    'sec-5-h'         : 'Real Estate',
    'sec-5-p'         : 'Listing queries, visit appointments, agent routing',
    'sec-6-h'         : 'Legal &amp; Consulting',
    'sec-6-p'         : 'Initial application form, client intake',
    'sec-7-h'         : 'Educational Institution',
    'sec-7-p'         : 'Registration form, info request, reminders',
    'sec-8-h'         : 'Ecommerce &amp; Boutique',
    'sec-8-p'         : 'Order tracking, return forms, product queries',
    'price-tag'       : 'Pricing',
    'price-h2'        : 'Transparent,<br><em>no surprise</em> pricing',
    'price-desc'      : 'No hidden fees. No setup fee. Full support with every plan.',
    'tog-monthly'     : 'Monthly',
    'tog-yearly'      : 'Yearly',
    'tog-save'        : '20% Off',
    'plan-per'        : '/mo',
    'plan-1-yearly'   : '$470/yr · save $118',
    'plan-1-f1': 'WhatsApp Business API setup',
    'plan-1-f2': 'Automated answers to common customer questions',
    'plan-1-f3': 'Booking and enquiry forms via WhatsApp',
    'plan-1-f4': 'Customer and booking dashboard',
    'plan-1-f5': 'One WhatsApp number for one location',
    'plan-1-f6': 'Standard onboarding and email support',
    'plan-2-f1': 'Everything in Starter',
    'plan-2-f2': 'AI replies tailored to your business, services and prices',
    'plan-2-f3': 'Personalised booking confirmations and reminders',
    'plan-2-f4': 'Personalised post visit feedback requests',
    'plan-2-f5': 'Automatic sharing of menus, services, brochures and price lists',
    'plan-3-f1': 'Everything in Growth',
    'plan-3-f2': 'Personalised offers and campaigns',
    'plan-3-f3': 'Advanced customer targeting',
    'plan-3-f4': 'Follow ups based on previous visits or services',
    'plan-3-f5': 'Custom forms and customer information fields',
    'plan-3-f6': 'Personal onboarding',
    'plan-3-f7': 'Priority support',
    'plan-2-badge'    : 'Most Popular',
    'plan-2-yearly'   : '$950/yr · save $238',
    'plan-3-yearly'   : '$1,910/yr · save $478',
    'plan-cta'        : 'Get Demo',
    'price-note'      : 'Seven day free trial &nbsp;·&nbsp; No credit card required &nbsp;·&nbsp; Cancel anytime',
    'contact-tag'     : 'Contact',
    'contact-h2'      : 'Request a demo,<br><em>see the system</em>',
    'contact-p'       : 'See the system set up specifically for your business in a 15 minute live demo. No cost or commitment.',
    'ch-wa-lbl'       : 'WhatsApp',
    'ch-wa-val'       : 'Message us now',
    'ch-email-lbl'    : 'Email',
    'reply-lbl'       : ' Response time',
    'reply-val'       : 'Within 2 hours on business days',
    'reply-sub'       : 'Weekend forms are answered on Monday',
    'form-name-lbl'   : 'Full Name *',
    'form-name-ph'    : 'John Doe',
    'form-phone-lbl'  : 'WhatsApp Number *',
    'form-phone-ph'   : '+1 555 000 0000',
    'form-email-lbl'  : 'Email',
    'form-email-ph'   : 'john@company.com',
    'form-sector-lbl' : 'Business Type *',
    'form-sector-ph'  : 'Select...',
    'form-sector-opts': ['Private Clinic / Hospital','Beauty & Aesthetics Center','Hair Transplant Clinic','Auto Service','Real Estate Office','Law Firm / Consulting','Educational Institution','Ecommerce / Boutique','Other'],
    'form-msg-lbl'    : 'Your Message',
    'form-msg-ph'     : 'Tell us briefly about your business and needs...',
    'form-submit'     : 'Contact Us! Get Your Free Demo →',
    'success-h'       : 'Message received!',
    'success-p'       : 'We\'ll get back to you within 2 business hours via WhatsApp or email.',
    'footer-brand-p'  : 'Conzy is an AI WhatsApp assistant for business enquiries, bookings and personalised customer follow ups.',
    'footer-p-title'  : 'Product',
    'footer-p-feat'   : 'Features',
    'footer-p-price'  : 'Pricing',
    'footer-p-sec'    : 'Sectors',
    'footer-c-title'  : 'Contact',
    'footer-c-demo'   : 'Get Demo',
    'footer-copy'     : '© 2026 Conzy. All rights reserved.',
    'footer-privacy'  : 'GDPR &amp; Privacy',
    /* Hero pscreens */
    'ps-chat': {
      waName:'Conzy', waStatus:'online',
      bot1:'Hello! How can I help you?',
      b1:' Book Appointment', b2:' Get Quote', b3:'ℹ Get Info',
      userMsg:'I want to make an appointment',
      formLabel:' APPOINTMENT FORM',
      formText:'Please open the form to book...',
      formBtn:'Open Form →',
      inp:'Type a message...',
    },
    'ps-flow': {
      barTitle:' Book Appointment',
      title:'Appointment Details', sub:'Fill in the form, we\'ll confirm right away',
      lblName:'Full Name', valName:'John Doe',
      lblSvc:'Service', valSvc:'Hair Transplant Consultation',
      lblDate:'Date', lblTime:'Time',
      dates:['Tue','Wed','Thu','Fri'], dateDays:['20','21','22','23'],
      times:['10:00','11:30','14:00'],
      btn:'Confirm Appointment ✓',
    },
    'ps-dash': {
      title:' Live Dashboard', date:'May 21, 2026',
      lbl1:'Today\'s messages', lbl2:'Appointments', lbl3:'Automation', lbl4:'Avg. response',
      section:'Today\'s Appointments',
      rows:[
        {name:'Emma Johnson',  time:'10:00 · Consultation', badge:'Confirmed', dotCls:'dot-g', badgeCls:'bg-g'},
        {name:'James Smith',   time:'11:30 · FUE Hair',     badge:'Pending',   dotCls:'dot-y', badgeCls:'bg-y'},
        {name:'Sophia Davis',  time:'14:00 · Eyebrow',      badge:'Confirmed', dotCls:'dot-g', badgeCls:'bg-g'},
      ],
    },
    'hamburger-aria'   : 'Menu',
    'mmenu-close-aria' : 'Close',
    'marquee-track-aria': 'Conzy feature band',
    'dashboard-1-alt'  : 'Conzy Dashboard reservation list view',
    'dashboard-2-alt'  : 'Conzy Dashboard calendar view',
  },
};

/* ─── Core ─────────────────────────────────────────────────── */
let currentLang = document.documentElement.dataset.initialLang || (/^\/tr(?:\/|$)/.test(window.location.pathname) ? 'tr' : 'en');
window.currentLang = currentLang;

function t(key) { return LANGS[currentLang][key] ?? LANGS.tr[key] ?? key; }

function applyLang(lang) {
  if (lang !== 'en' && lang !== 'tr') return;
  const targetPath = lang === 'tr' ? '/tr/' : '/';
  const currentPath = window.location.pathname.replace(/index\.html$/, '');
  if (currentPath !== targetPath) {
    window.location.assign(targetPath + window.location.hash);
    return;
  }
  currentLang = lang;
  window.currentLang = lang;
  localStorage.setItem('conzy-lang', lang);
  document.documentElement.lang = lang;

  /* title + meta */
  document.title = t('page-title');
  const md = document.querySelector('meta[name="description"]');
  if (md) md.content = t('meta-desc');

  /* data-i18n text/html */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (v && typeof v === 'string') el.innerHTML = v;
  });

  /* placeholders */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const v = t(el.dataset.i18nPh);
    if (v) el.placeholder = v;
  });

  /* aria-labels */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const v = t(el.dataset.i18nAria);
    if (v) el.setAttribute('aria-label', v);
  });

  /* image alt text */
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const v = t(el.dataset.i18nAlt);
    if (v) el.setAttribute('alt', v);
  });

  /* select options */
  const sel = document.querySelector('[name="sector"]');
  if (sel) {
    sel.options[0].text = t('form-sector-ph');
    const opts = t('form-sector-opts');
    if (Array.isArray(opts)) {
      opts.forEach((o, i) => { if (sel.options[i + 1]) sel.options[i + 1].text = o; });
    }
  }

  /* marquee */
  document.querySelectorAll('.marquee-item').forEach(el => { el.innerHTML = t('marquee-text'); });

  /* Dashboard screenshots and their full-size links follow the page language. */
  document.querySelectorAll('[data-dashboard-image]').forEach(image => {
    const source = `/assets/dashboard-${image.dataset.dashboardImage}-${lang}.svg`;
    image.src = source;
    image.closest('a').href = source;
  });

  /* pscreens */
  renderPscreens();

  /* dropdown: update current label (desktop + mobile) + active states */
  document.querySelectorAll('.js-lang-current').forEach(el => el.textContent = lang.toUpperCase());
  document.querySelectorAll('.lang-opt').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  /* re-apply TL prices after language switch overwrites i18n strings */
  if (typeof applyGeoPrice === 'function') applyGeoPrice();
}

/* ─── Pscreen renderer ──────────────────────────────────────── */
function renderPscreens() {
  const chat = t('ps-chat');
  const flow = t('ps-flow');
  const dash = t('ps-dash');

  /* — Screen 0: Chat — */
  const s0 = document.getElementById('pscreen-0');
  if (s0) {
    const waName = s0.querySelector('.wa-nm'); if (waName) waName.textContent = chat.waName;
    const waSt   = s0.querySelector('.wa-st'); if (waSt)   waSt.textContent   = chat.waStatus;
    const msgs   = s0.querySelectorAll('[data-anim]');
    if (msgs[0]) msgs[0].childNodes[0].textContent = chat.bot1;
    if (msgs[1]) msgs[1].textContent = chat.b1;
    if (msgs[2]) msgs[2].textContent = chat.b2;
    if (msgs[3]) msgs[3].textContent = chat.b3;
    if (msgs[4]) msgs[4].textContent = chat.userMsg;
    /* bot2 message */
    const bot2 = s0.querySelectorAll('.msg.msg-i')[1];
    if (bot2) {
      const lbl = bot2.querySelector('span[style]'); if (lbl) lbl.textContent = chat.formLabel;
      const nodes = Array.from(bot2.childNodes).filter(n => n.nodeType === 3);
      if (nodes[0]) nodes[0].textContent = ' ' + chat.formText + ' ';
      const fbtn = bot2.querySelector('div[style]'); if (fbtn) fbtn.textContent = chat.formBtn;
    }
    const inp = s0.querySelector('.wa-inp'); if (inp) inp.textContent = chat.inp;
  }

  /* Re-apply active sector in the new language so sector-specific text
     (greetings, buttons, form titles, dashboard rows) also switches. */
  if (window.heroPhone) {
    window.heroPhone.switchSector(window.heroPhone.currentSector || 'restoran');
  }
}


/* ─── Init ──────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('lang-trigger');
  const menu    = document.getElementById('lang-menu');

  if (trigger && menu) {
    trigger.addEventListener('click', e => {
      e.stopPropagation();
      const opening = !menu.classList.contains('open');
      menu.classList.toggle('open', opening);
      trigger.classList.toggle('open', opening);
    });

    menu.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        applyLang(opt.dataset.lang);
        menu.classList.remove('open');
        trigger.classList.remove('open');
      });
    });

    document.addEventListener('click', () => {
      menu.classList.remove('open');
      trigger.classList.remove('open');
    });
  }

  /* Mobile lang options */
  const mobileLangMenu    = document.getElementById('mobile-lang-menu');
  const mobileLangTrigger = document.getElementById('mobile-lang-trigger');
  if (mobileLangMenu) {
    mobileLangMenu.querySelectorAll('.lang-opt').forEach(opt => {
      opt.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        applyLang(opt.dataset.lang);
        mobileLangMenu.classList.remove('open');
        mobileLangTrigger?.classList.remove('open');
      });
    });
  }

  applyLang(currentLang);
});
