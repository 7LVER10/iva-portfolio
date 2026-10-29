/* IVA portfolio — RU / EN / TR */
(function () {
  var LANGS = ['ru', 'en', 'tr'];
  var KEY = 'iva_lang';
  var GOLD_BOT = `<a href="https://t.me/goldbergggbot">@goldbergggbot</a>`;

  var META = {
    ru: { title: 'IVA — AI Engineering & Automation · Портфолио',
          desc: 'IVA проектирует цифровые системы: Telegram-боты, Mini Apps, ИИ-агенты и автоматизация процессов. Кейсы: ассистент и канал IVA, FreelanceMatch.' },
    en: { title: 'IVA — AI Engineering & Automation · Portfolio',
          desc: 'IVA designs digital systems: Telegram bots, Mini Apps, AI agents and process automation. Case studies: the IVA assistant and channel, FreelanceMatch.' },
    tr: { title: 'IVA — AI Engineering & Automation · Portföy',
          desc: 'IVA dijital sistemler tasarlar: Telegram botları, Mini App’ler, yapay zekâ ajanları ve süreç otomasyonu. Projeler: IVA asistanı ve kanalı, FreelanceMatch.' }
  };

  var T = {
    en: {
      nav_cases: `Cases`,
      nav_services: `Services`,
      nav_process: `How we work`,
      nav_certificates: `Certificates`,
      nav_audit: `Audit`,
      cert_eyebrow: `Certificates`,
      cert_h2: `Completed programmes`,
      cert_sub: `Documents for completed specialist programmes and practical training.`,
      hero_h1: `Digital systems that <em>take routine off your plate</em>`,
      hero_lead: `We don’t just build websites, bots or one-off services. We design systems that speed up business processes and turn leads, data and communication into results you can manage.`,
      btn_audit: `Free audit`,
      btn_write: `Message @iva7lver`,
      langnote: `The founder replies in English, Turkish and Russian.`,
      quote: `Not chaotic “smart chatbots”, but <em>managed AI systems</em>: a clear task, firm rules, controlled results and integration into real business processes.`,

      cases_eyebrow: `Cases`,
      cases_h2: `Already up and running`,
      cases_sub: `Every case follows the same path: challenge → architecture → solution → live links and screens → result.`,
      st_task: `Challenge`,
      st_arch: `Architecture`,
      st_solution: `Solution`,
      st_links: `Live links & screens`,
      st_result: `Result`,
      l_post: `Case post in the channel`,

      c1_title: `A Telegram assistant and content system for IVA`,
      c1_lead: `Our first case is our own. We built for IVA the same system we offer our clients: the bot handles incoming leads, AI agents prepare content, and every decision stays with a human.`,
      tag_bot: `Telegram bot`,
      tag_agents: `AI agents`,
      c1_task_intro: `A young company with no sales team and no content manager still has to:`,
      c1_task_1: `answer clients from different countries around the clock, in their own language;`,
      c1_task_2: `never lose a lead, and pass anyone ready to talk straight to the founder;`,
      c1_task_3: `publish to the channel every day without losing an evening to it;`,
      c1_task_4: `make sure client conversations can never end up in the public channel;`,
      c1_task_5: `stay within the free plan of the automation platform.`,
      c1_arch_intro: `One system, two independent lines: client leads on top, channel content below. There is no bridge between them.`,
      c1_n1: `Client<small>writes in RU, EN or TR</small>`,
      c1_n2: `I.V.A assistant<small>Make + AI</small>`,
      c1_n3: `Founder<small>lead card in Russian</small>`,
      c1_sep: `boundary: client data never reaches the channel`,
      c1_n4: `AI agents<small>analyst and content manager</small>`,
      c1_n5: `Content queue<small>post of the day sent for approval at 10:00</small>`,
      c1_n6: `Channel<small>only after “Publish” is tapped</small>`,
      c1_arch_note: `The whole system runs on two Make scenarios on the free plan.`,
      c1_s_h1: `Telegram assistant`,
      c1_s1: `Replies in Russian, English and Turkish. It detects the language on its own; the founder receives everything in Russian.`,
      c1_s2: `A three-button menu: “Free audit”, “Services”, “Contact the founder”.`,
      c1_s3: `Open questions are handled by AI under set rules: a calm tone, no prices or deadlines, nothing made up, and it never pretends to be human.`,
      c1_s4: `It turns a free-text request into a lead card: name, niche, how leads are handled today, contact details and what to clarify at the meeting.`,
      c1_s5: `The founder is notified the moment a client shows real interest and replies right from the bot chat. Routine questions never reach the founder.`,
      c1_s6: `If the AI is unavailable, the client still gets a polite reply and the message is passed to the founder.`,
      c1_s_h2: `Channel publishing with approval`,
      c1_s7: `Every day at 10:00 the bot sends a preview of the post with two buttons: “Publish” and “Cancel”.`,
      c1_s8: `Nothing goes to the channel without a tap, and a second tap never creates a duplicate.`,
      c1_s9: `Only posts from the content queue can reach the channel. The option to forward a client’s message or file there has been removed from the bot entirely.`,
      c1_s_h3: `A team of AI agents`,
      c1_s10: `The analyst reviewed 4 niche channels (341 posts) and showed which formats and topics get the most reactions.`,
      c1_s11: `The content manager produces carousel posts: an animated cover and 6–9 slides in one consistent style.`,
      c1_l1: `@ivavit_bot`,
      c1_l2: `I.V.A channel`,
      c1_f1: `Architecture: two lines`,
      c1_f2: `Replies in three languages`,
      c1_f3: `Lead card`,
      c1_f4: `Publishing with approval`,
      c1_f_note: `Slides from the case post in the IVA channel (in Russian).`,
      c1_r1: `The bot and the channel went live in a single working night, on 24 October 2026.`,
      c1_r2: `The bot accepts leads in three languages. A test request in Turkish reached the founder as a ready-made card in Russian.`,
      c1_r3: `The content queue is filled several days ahead, and publishing takes a single tap.`,
      c1_r4: `Client data is isolated from the channel by the bot’s architecture itself.`,
      c1_r5: `The free plan’s monthly limit covers roughly 200–250 AI replies plus daily posting.`,
      c1_r_note: `No figures on leads or reach yet: the system has only just launched. We’ll update this case once the numbers come in.`,

      c2_lead: `“Tinder for freelancing” inside Telegram. Clients and freelancers swipe through each other’s cards: right means “interested”, left means “skip”. When the interest is mutual, a chat opens, followed by a deal and a review with a rating.`,
      c2_task_intro: `The project was unfinished: the code had been written in June but never run. The job was to turn it into a working app and launch it. The code contained bugs that would have kept the app from opening at all:`,
      c2_task_1: `Telegram would have shown “Loading error” straight away, because the Telegram script wasn’t connected;`,
      c2_task_2: `the swipe library broke the build, leaving a blank white screen instead of the app;`,
      c2_task_3: `payments didn’t work, and amounts in roubles were sent as amounts in USDT;`,
      c2_task_4: `anyone could read other people’s chats and act on behalf of another user;`,
      c2_task_5: `reviews had been coded but were never shown anywhere;`,
      c2_task_6: `deployment relied on a platform that is no longer free.`,
      c2_n1: `Telegram bot<small>a button opens the app</small>`,
      c2_n2: `Mini App<small>React, sign-in via Telegram</small>`,
      c2_n3: `Bot server<small>Node.js on Render, webhook</small>`,
      c2_n4: `Database<small>Supabase</small>`,
      c2_sep: `job feed`,
      c2_n5: `Public channels<small>jobs for freelancers</small>`,
      c2_n6: `Collector<small>GitHub Actions, every 3 hours</small>`,
      c2_n7: `Server<small>deduplicated, kept for 7 days</small>`,
      c2_n8: `Feed and digest<small>in the app and in the bot</small>`,
      c2_arch_note: `Every request to the server is verified with Telegram’s signature. The server, database and collector all run on free plans.`,
      c2_s_h1: `A working Mini App`,
      c2_s1: `Sign-in with a Telegram account, no registration.`,
      c2_s2: `The full path: swipe → match → chat → deal → review. The rating is shown on the card.`,
      c2_s3: `Swipes run on a custom-built component with “Interested” and “Skip” labels.`,
      c2_s4: `Notifications about matches, messages and deals arrive in the bot.`,
      c2_s5: `Invoices are issued in roubles and can be paid in USDT or TON.`,
      c2_s_h2: `A live job feed`,
      c2_s6: `Freelancers see jobs from public sources, and the feed refreshes every 3 hours.`,
      c2_s7: `Ticking a job saves it to “My responses”, and the bot sends the job to the chat with a link to the original post.`,
      c2_s8: `A daily digest of up to 5 new jobs matching the profile’s skills — no more than once a day, and only for users who tapped “Start” themselves. Unsubscribe any time with /stop.`,
      c2_s9: `The interface follows the IVA palette: obsidian, gold and ivory.`,
      c2_l1: `Open FreelanceMatch`,
      c2_l2: `Public demo in your browser`,
      c2_f1: `Choosing a role`,
      c2_f2: `Job feed`,
      c2_f3: `Saved to “My responses”`,
      c2_f4: `My responses`,
      c2_f5: `Rating after a deal`,
      c2_f_note: `Screens from the live version (the interface is in Russian); jobs come from public sources. The data on the rating screen is fictional, as are the profiles in the public demo.`,
      c2_r1: `The unfinished project became a working Mini App and launched in Telegram: ${GOLD_BOT}.`,
      c2_r2: `The bugs that would have kept the app from opening were fixed, and access to other people’s chats was closed off.`,
      c2_r3: `The collector’s first run gathered 81 jobs from public sources.`,
      c2_r4: `The public demo opens in a phone browser, no Telegram required.`,
      c2_r_note: `No user figures yet: the app has only just launched.`,

      sv_eyebrow: `Services`,
      sv_h2: `What we build`,
      sv1_t: `Telegram bots`,
      sv1_p: `For sales, support, bookings and customer communication: lead intake, client qualification, answers to common questions, handing hot leads to a manager, CRM integration.`,
      sv2_p: `A business app right inside Telegram. No download, no sign-up, two taps: online booking, catalogue, shop, client account, marketplace and matching.`,
      sv3_t: `AI agents`,
      sv3_p: `Digital employees for multi-step tasks: they gather and analyse information, process requests, prepare reports, check rules and hand the task over to a person.`,
      sv4_t: `Process automation`,
      sv4_p: `Lead processing, reminders and notifications, reports, internal approvals, document handling — everything that eats up your team’s time.`,
      sv5_t: `CRM & integrations`,
      sv5_p: `Website → CRM, bot → CRM, request → manager notification, payment → order status, data → management report.`,
      sv6_t: `Websites & web apps`,
      sv6_p: `Websites that work as part of your sales system: landing pages, catalogues and storefronts, client accounts, integration with forms, CRM and messengers.`,
      ma_h1: `Why a Mini App in Telegram`,
      ma1: `Your clients are already in Telegram — no need to talk them into downloading an app.`,
      ma2: `Password-free sign-in: Telegram passes on the client’s name and language.`,
      ma3: `In-app payments: Telegram Stars, card or crypto, depending on the country.`,
      ma4: `Notifications land in the chat and don’t get lost the way emails do.`,
      ma5: `Works worldwide: RU, EN, TR and other languages.`,
      ma_h2: `What’s included`,
      ma6: `A turnkey Telegram bot and Mini App.`,
      ma7: `An admin panel or notifications for the owner.`,
      ma8: `Integrations: CRM, Google Sheets, payments, Make.`,
      ma9: `Multilingual support.`,
      ma10: `Full handover of access and documentation to the owner.`,
      sv_note: `Timelines and cost depend on the scope and are calculated individually after the audit.`,

      pr_eyebrow: `How we work`,
      pr_h2: `From audit to a growing system`,
      pr1_t: `Analysis`,
      pr1_p: `We map your current process: where time and clients are lost, what can be automated, which services are already in use.`,
      pr2_t: `Solution design`,
      pr2_p: `We propose an architecture, not a set of tools: which modules are needed, what the AI does, and where a human stays in control.`,
      pr3_t: `Development & integration`,
      pr3_p: `We build the solution and connect it to the services your company already uses.`,
      pr4_t: `Testing & launch`,
      pr4_p: `We test scenarios, errors, edge cases and resilience before going live.`,
      pr5_t: `Support & growth`,
      pr5_p: `New features, integrations, agents and automations — without breaking the foundation.`,
      cmp_h1: `The usual approach`,
      cmp_h2: `The IVA approach`,
      cmp_1a: `Build a website or a bot`,
      cmp_1b: `Build a working system`,
      cmp_2a: `Automate a single action`,
      cmp_2b: `Automate the entire process`,
      fw_h: `Who it’s for`,
      fw_p: `Small and mid-sized businesses, service companies, sales teams, independent experts, manufacturing and B2B — anyone who needs to handle more leads without losing quality, respond to clients faster, cut manual work and connect their website, bot and CRM into one system.`,

      cta_h2: `The same system — <em>built around your process</em>`,
      cta_p: `Start with a free audit: we’ll look at how your leads come in today and where clients slip away.`,
      cta_btn: `Get a free audit`,
      cta_channel: `I.V.A channel on Telegram`
    },

    tr: {
      nav_cases: `Projeler`,
      nav_services: `Hizmetler`,
      nav_process: `Çalışma modelimiz`,
      nav_certificates: `Sertifikalar`,
      nav_audit: `Analiz`,
      cert_eyebrow: `Sertifikalar`,
      cert_h2: `Tamamlanan programlar`,
      cert_sub: `Tamamlanan uzmanlık programları ve uygulamalı eğitimlere ait belgeler.`,
      hero_h1: `Rutin işleri <em>üstlenen dijital sistemler</em>`,
      hero_lead: `Yalnızca web sitesi, bot ya da tekil servisler geliştirmiyoruz. İş süreçlerini hızlandıran; talepleri, verileri ve iletişimi yönetilebilir sonuçlara dönüştüren sistemler tasarlıyoruz.`,
      btn_audit: `Ücretsiz analiz`,
      btn_write: `@iva7lver’a yazın`,
      langnote: `Kurucumuz Türkçe, İngilizce ve Rusça yanıt veriyor.`,
      quote: `Dağınık “akıllı sohbet botları” değil, <em>yönetilebilir yapay zekâ sistemleri</em>: net bir görev, açık kurallar, sonuç kontrolü ve gerçek iş süreçlerine entegrasyon.`,

      cases_eyebrow: `Projeler`,
      cases_h2: `Şu an çalışan sistemler`,
      cases_sub: `Her proje aynı akışla anlatılıyor: görev → mimari → çözüm → canlı bağlantılar ve ekranlar → sonuç.`,
      st_task: `Görev`,
      st_arch: `Mimari`,
      st_solution: `Çözüm`,
      st_links: `Canlı bağlantılar ve ekranlar`,
      st_result: `Sonuç`,
      l_post: `Kanaldaki proje paylaşımı`,

      c1_title: `IVA için Telegram asistanı ve içerik sistemi`,
      c1_lead: `İlk projemiz kendi şirketimiz. IVA için müşterilerimize sunduğumuz sistemin aynısını kurduk: bot talepleri karşılıyor, yapay zekâ ajanları içerik hazırlıyor, kararları ise her zaman insan veriyor.`,
      tag_bot: `Telegram botu`,
      tag_agents: `Yapay zekâ ajanları`,
      c1_task_intro: `Satış ekibi ve içerik yöneticisi olmayan genç bir şirketin yine de şunları yapması gerekiyor:`,
      c1_task_1: `farklı ülkelerden gelen müşterilere günün her saatinde, kendi dillerinde yanıt vermek;`,
      c1_task_2: `hiçbir talebi kaçırmamak ve görüşmeye hazır olanları hemen kurucuya iletmek;`,
      c1_task_3: `kanalda her gün paylaşım yapmak ve buna bütün bir akşamı ayırmamak;`,
      c1_task_4: `müşteri yazışmalarının herkese açık kanala düşmesini kesin olarak engellemek;`,
      c1_task_5: `otomasyon platformunun ücretsiz planının sınırları içinde kalmak.`,
      c1_arch_intro: `Tek sistem, birbirinden bağımsız iki hat: üstte müşteri talepleri, altta kanal içeriği. Aralarında hiçbir köprü yok.`,
      c1_n1: `Müşteri<small>RU, EN veya TR yazar</small>`,
      c1_n2: `I.V.A asistanı<small>Make + yapay zekâ</small>`,
      c1_n3: `Kurucu<small>Rusça talep kartı</small>`,
      c1_sep: `sınır: müşteri verileri kanala ulaşmaz`,
      c1_n4: `Yapay zekâ ajanları<small>analist ve içerik yöneticisi</small>`,
      c1_n5: `İçerik kuyruğu<small>günün paylaşımı saat 10:00’da onaya gelir</small>`,
      c1_n6: `Kanal<small>yalnızca “Yayınla”ya basıldıktan sonra</small>`,
      c1_arch_note: `Sistemin tamamı, ücretsiz plandaki iki Make senaryosuyla çalışıyor.`,
      c1_s_h1: `Telegram asistanı`,
      c1_s1: `Rusça, İngilizce ve Türkçe yanıt veriyor. Dili kendisi algılıyor; kurucuya her şey Rusça ulaşıyor.`,
      c1_s2: `Üç butonlu menü: “Ücretsiz analiz”, “Hizmetler”, “Kurucuyla iletişim”.`,
      c1_s3: `Serbest soruları yapay zekâ belirlenmiş kurallarla yanıtlıyor: sakin bir üslup, fiyat ve süre vermiyor, bilgi uydurmuyor, kendini insan gibi tanıtmıyor.`,
      c1_s4: `Serbest metinle gelen talebi bir karta dönüştürüyor: ad, sektör, taleplerin bugün nasıl karşılandığı, iletişim bilgisi ve toplantıda netleştirilecek konular.`,
      c1_s5: `Müşteri gerçek ilgi gösterdiği anda kurucu bildirim alıyor ve doğrudan bot sohbetinden yanıt veriyor. Sıradan bilgi soruları kurucuyu meşgul etmiyor.`,
      c1_s6: `Yapay zekâ devre dışı kalsa bile müşteri nazik bir yanıt alıyor, mesajı da kurucuya iletiliyor.`,
      c1_s_h2: `Onaylı kanal yayını`,
      c1_s7: `Bot her gün saat 10:00’da paylaşımın önizlemesini iki butonla gönderiyor: “Yayınla” ve “İptal”.`,
      c1_s8: `Onay verilmeden kanala hiçbir şey gitmiyor; butona ikinci kez basmak mükerrer paylaşım oluşturmuyor.`,
      c1_s9: `Kanala yalnızca içerik kuyruğundaki paylaşımlar çıkabiliyor. Bir müşterinin mesajını ya da dosyasını kanala gönderme imkânı bottan tamamen kaldırıldı.`,
      c1_s_h3: `Yapay zekâ ajanlarından oluşan ekip`,
      c1_s10: `Analist, sektördeki 4 kanalı (341 paylaşım) inceledi ve hangi format ile konuların en çok etkileşim aldığını ortaya koydu.`,
      c1_s11: `İçerik yöneticisi karusel paylaşımlar hazırlıyor: animasyonlu kapak ve tek bir stilde 6–9 slayt.`,
      c1_l1: `@ivavit_bot`,
      c1_l2: `I.V.A kanalı`,
      c1_f1: `Mimari: iki hat`,
      c1_f2: `Üç dilde yanıt`,
      c1_f3: `Talep kartı`,
      c1_f4: `Onaylı yayın`,
      c1_f_note: `IVA kanalındaki proje paylaşımından slaytlar (Rusça).`,
      c1_r1: `Bot ve kanal tek bir çalışma gecesinde, 24 Ekim 2026’da yayına alındı.`,
      c1_r2: `Bot üç dilde talep kabul ediyor. Türkçe gönderilen bir test talebi kurucuya Rusça, hazır bir kart olarak ulaştı.`,
      c1_r3: `İçerik kuyruğu birkaç gün ilerisine kadar dolu; yayınlamak tek dokunuş.`,
      c1_r4: `Müşteri verileri, botun mimarisi sayesinde kanaldan tamamen yalıtılmış durumda.`,
      c1_r5: `Ücretsiz planın aylık limiti yaklaşık 200–250 yapay zekâ yanıtına ve günlük paylaşıma yetiyor.`,
      c1_r_note: `Talep ve erişim rakamları henüz yok: sistem yeni devreye alındı. Rakamlar geldikçe bu projeyi güncelleyeceğiz.`,

      c2_lead: `Telegram içinde “freelance dünyasının Tinder’ı”. İşverenler ve freelancer’lar birbirlerinin kartlarını kaydırıyor: sağa “ilgileniyorum”, sola “geç”. Karşılıklı ilgi olduğunda sohbet açılıyor; ardından anlaşma ve puanlı değerlendirme geliyor.`,
      c2_task_intro: `Proje yarım kalmıştı: kod haziran ayında yazılmış ama hiç çalıştırılmamıştı. Görev, onu çalışan bir uygulamaya dönüştürüp yayına almaktı. Kodda, uygulamanın hiç açılmamasına yol açacak hatalar vardı:`,
      c2_task_1: `Telegram betiği bağlanmadığı için uygulama açılır açılmaz “Yükleme hatası” verecekti;`,
      c2_task_2: `kaydırma kütüphanesi derlemeyi bozuyor, uygulama yerine boş beyaz bir ekran çıkıyordu;`,
      c2_task_3: `ödeme çalışmıyordu; ruble cinsinden tutarlar USDT olarak gönderiliyordu;`,
      c2_task_4: `başkalarının sohbetlerini okumak ve başka bir kullanıcı adına işlem yapmak mümkündü;`,
      c2_task_5: `değerlendirme özelliği yazılmış ama hiçbir yerde gösterilmiyordu;`,
      c2_task_6: `dağıtım, artık ücretsiz olmayan bir platforma göre kurgulanmıştı.`,
      c2_n1: `Telegram botu<small>buton uygulamayı açar</small>`,
      c2_n2: `Mini App<small>React, Telegram ile giriş</small>`,
      c2_n3: `Bot sunucusu<small>Render üzerinde Node.js, webhook</small>`,
      c2_n4: `Veritabanı<small>Supabase</small>`,
      c2_sep: `iş ilanı akışı`,
      c2_n5: `Açık kanallar<small>freelancer’lara yönelik işler</small>`,
      c2_n6: `Toplayıcı<small>GitHub Actions, 3 saatte bir</small>`,
      c2_n7: `Sunucu<small>mükerrer kayıt yok, 7 gün saklanır</small>`,
      c2_n8: `Akış ve günlük seçki<small>uygulamada ve botta</small>`,
      c2_arch_note: `Sunucuya gelen her istek Telegram imzasıyla doğrulanıyor. Sunucu, veritabanı ve toplayıcı ücretsiz planlarda çalışıyor.`,
      c2_s_h1: `Çalışan bir Mini App`,
      c2_s1: `Telegram hesabıyla giriş; kayıt gerekmiyor.`,
      c2_s2: `Uçtan uca akış: kaydırma → eşleşme → sohbet → anlaşma → değerlendirme. Puan, kartın üzerinde görünüyor.`,
      c2_s3: `Kaydırma, “İlgileniyorum” ve “Geç” etiketli, sıfırdan yazılmış bir bileşenle çalışıyor.`,
      c2_s4: `Eşleşme, mesaj ve anlaşma bildirimleri bota geliyor.`,
      c2_s5: `Faturalar ruble cinsinden kesiliyor; ödeme USDT veya TON ile yapılabiliyor.`,
      c2_s_h2: `Canlı iş ilanı akışı`,
      c2_s6: `Freelancer’lar açık kaynaklardaki iş ilanlarını görüyor; akış 3 saatte bir yenileniyor.`,
      c2_s7: `Bir ilana onay işareti koyunca ilan “Başvurularım”a kaydediliyor, bot da ilanı orijinal bağlantısıyla birlikte sohbete gönderiyor.`,
      c2_s8: `Günlük seçki: profildeki becerilere uygun en fazla 5 yeni ilan; günde en çok bir kez ve yalnızca botta “Başlat”a kendisi basan kullanıcılara. Abonelikten çıkmak için /stop yeterli.`,
      c2_s9: `Arayüz IVA paletinde: obsidyen, altın ve fildişi.`,
      c2_l1: `FreelanceMatch’i açın`,
      c2_l2: `Tarayıcıda herkese açık demo`,
      c2_f1: `Rol seçimi`,
      c2_f2: `İş ilanı akışı`,
      c2_f3: `“Başvurularım”a kaydedildi`,
      c2_f4: `Başvurularım`,
      c2_f5: `Anlaşma sonrası değerlendirme`,
      c2_f_note: `Ekranlar çalışan sürümden alındı (arayüz Rusça); ilanlar açık kaynaklardan geliyor. Değerlendirme ekranındaki veriler kurgusal; herkese açık demodaki profiller de öyle.`,
      c2_r1: `Yarım kalan proje çalışan bir Mini App’e dönüştü ve Telegram’da yayına alındı: ${GOLD_BOT}.`,
      c2_r2: `Uygulamanın açılmasını engelleyecek hatalar giderildi, başkalarının sohbetlerine erişim kapatıldı.`,
      c2_r3: `Toplayıcı ilk çalışmasında açık kaynaklardan 81 iş ilanı topladı.`,
      c2_r4: `Herkese açık demo, Telegram gerekmeden telefon tarayıcısında açılıyor.`,
      c2_r_note: `Kullanıcı rakamları henüz yok: uygulama yeni yayına alındı.`,

      sv_eyebrow: `Hizmetler`,
      sv_h2: `Neler geliştiriyoruz`,
      sv1_t: `Telegram botları`,
      sv1_p: `Satış, destek, randevu ve müşteri iletişimi için: talep toplama, müşteri ön değerlendirmesi, sık sorulan sorulara yanıt, sıcak talepleri satış sorumlusuna aktarma, CRM bağlantısı.`,
      sv2_p: `İşletmeniz için Telegram içinde bir uygulama. İndirme yok, kayıt yok, iki dokunuş yeterli: online randevu, katalog, mağaza, müşteri paneli, pazar yeri ve eşleştirme.`,
      sv3_t: `Yapay zekâ ajanları`,
      sv3_p: `Çok adımlı görevler için dijital çalışanlar: bilgi toplar ve analiz eder, talepleri işler, rapor hazırlar, kuralları kontrol eder ve gerektiğinde görevi bir insana devreder.`,
      sv4_t: `Süreç otomasyonu`,
      sv4_p: `Talep işleme, hatırlatma ve bildirimler, raporlar, iç onaylar, doküman işleri — ekibinizin zamanını alan her şey.`,
      sv5_t: `CRM ve entegrasyonlar`,
      sv5_p: `Web sitesi → CRM, bot → CRM, talep → yöneticiye bildirim, ödeme → sipariş durumu, veri → yönetim raporu.`,
      sv6_t: `Web siteleri ve web uygulamaları`,
      sv6_p: `Satış sisteminizin parçası olarak çalışan siteler: açılış sayfaları, katalog ve vitrinler, müşteri panelleri; form, CRM ve mesajlaşma uygulamalarıyla entegrasyon.`,
      ma_h1: `Neden Telegram Mini App?`,
      ma1: `Müşteriniz zaten Telegram’da — onu bir uygulama indirmeye ikna etmeniz gerekmiyor.`,
      ma2: `Şifresiz giriş: Telegram müşterinin adını ve dilini kendisi iletiyor.`,
      ma3: `Uygulama içi ödeme: ülkeye göre Telegram Stars, kart veya kripto.`,
      ma4: `Bildirimler doğrudan sohbete düşer, e-postalar gibi kaybolmaz.`,
      ma5: `Dünyanın her yerinde çalışır: RU, EN, TR ve diğer diller.`,
      ma_h2: `Neler dahil`,
      ma6: `Anahtar teslim Telegram botu ve Mini App.`,
      ma7: `Yönetim paneli veya işletme sahibine bildirimler.`,
      ma8: `Entegrasyonlar: CRM, Google Sheets, ödeme, Make.`,
      ma9: `Çok dil desteği.`,
      ma10: `Erişimlerin ve dokümantasyonun işletme sahibine eksiksiz devri.`,
      sv_note: `Süre ve maliyet kapsama göre değişir; analizden sonra size özel olarak hesaplanır.`,

      pr_eyebrow: `Çalışma modelimiz`,
      pr_h2: `Analizden büyüyen bir sisteme`,
      pr1_t: `Analiz`,
      pr1_p: `Mevcut süreci inceliyoruz: zaman ve müşteri nerede kaybediliyor, neler otomatikleştirilebilir, hangi servisler zaten kullanılıyor.`,
      pr2_t: `Çözüm tasarımı`,
      pr2_p: `Bir araç listesi değil, bir mimari öneriyoruz: hangi modüller gerekli, yapay zekâ ne yapacak, insan kontrolü nerede şart.`,
      pr3_t: `Geliştirme ve entegrasyon`,
      pr3_p: `Çözümü geliştirip şirketinizin kullandığı servislere bağlıyoruz.`,
      pr4_t: `Test ve yayına alma`,
      pr4_p: `Yayına almadan önce senaryoları, hataları, sınır durumlarını ve sistemin dayanıklılığını test ediyoruz.`,
      pr5_t: `Destek ve geliştirme`,
      pr5_p: `Yeni özellikler, entegrasyonlar, ajanlar ve otomasyonlar — temeli bozmadan.`,
      cmp_h1: `Alışılmış yaklaşım`,
      cmp_h2: `IVA yaklaşımı`,
      cmp_1a: `Bir site veya bot yapmak`,
      cmp_1b: `Çalışan bir sistem kurmak`,
      cmp_2a: `Tek bir işlemi otomatikleştirmek`,
      cmp_2b: `Süreci baştan sona otomatikleştirmek`,
      fw_h: `Kimler için`,
      fw_p: `Küçük ve orta ölçekli işletmeler, hizmet şirketleri, satış ekipleri, bağımsız uzmanlar, üretim ve B2B firmaları — kaliteden ödün vermeden daha fazla talep karşılamak, müşterilere daha hızlı yanıt vermek, manuel işi azaltmak ve web sitesini, botu ve CRM’i tek bir sistemde birleştirmek isteyen herkes için.`,

      cta_h2: `Aynı sistem — <em>sizin sürecinize göre</em>`,
      cta_p: `Ücretsiz analizle başlayın: taleplerin bugün nasıl geldiğini ve müşterilerin nerede kaybolduğunu birlikte inceleyelim.`,
      cta_btn: `Ücretsiz analiz alın`,
      cta_channel: `Telegram’daki I.V.A kanalı`
    }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var RU = [];
  for (var i = 0; i < nodes.length; i++) RU.push(nodes[i].innerHTML);

  function pick() {
    try {
      var q = new URLSearchParams(location.search).get('lang');
      if (q && LANGS.indexOf(q.toLowerCase()) > -1) return q.toLowerCase();
      var s = localStorage.getItem(KEY);
      if (s && LANGS.indexOf(s) > -1) return s;
    } catch (e) {}
    var n = ((navigator.languages && navigator.languages[0]) || navigator.language || 'en').toLowerCase();
    if (n.indexOf('ru') === 0) return 'ru';
    if (n.indexOf('tr') === 0) return 'tr';
    return 'en';
  }

  function apply(lang, save) {
    var d = T[lang];
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      var v = lang === 'ru' ? RU[i] : (d && d[k] !== undefined ? d[k] : RU[i]);
      nodes[i].innerHTML = v;
      if (k === 'langnote') nodes[i].hidden = !v;
    }
    document.documentElement.lang = lang;
    if (typeof window.renderCertificates === 'function') window.renderCertificates(lang);
    document.title = META[lang].title;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', META[lang].desc);
    var bs = document.querySelectorAll('.lang__menu button[data-lang]');
    for (var j = 0; j < bs.length; j++) {
      var on = bs[j].getAttribute('data-lang') === lang;
      bs[j].setAttribute('aria-checked', on ? 'true' : 'false');
    }
    var cur = document.querySelector('.lang__cur');
    if (cur) cur.textContent = lang.toUpperCase();
    if (save) {
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }
    document.documentElement.classList.remove('i18n-wait');
  }

  var initial = pick();
  var fromUrl = false;
  try { fromUrl = !!new URLSearchParams(location.search).get('lang'); } catch (e) {}
  apply(initial, fromUrl);

  var toggle = document.querySelector('.lang__btn');
  var menu = document.querySelector('.lang__menu');
  function setOpen(open) {
    if (!toggle || !menu) return;
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      var c = menu.querySelector('button[aria-checked="true"]') || menu.querySelector('button');
      if (c && document.activeElement === toggle && toggle.matches(':focus-visible')) c.focus();
    }
  }
  if (toggle && menu) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(menu.hidden);
    });
    menu.addEventListener('click', function (e) { e.stopPropagation(); });
    document.addEventListener('click', function () { setOpen(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menu.hidden) { setOpen(false); toggle.focus(); }
    });
  }

  var btns = document.querySelectorAll('.lang__menu button[data-lang]');
  for (var b = 0; b < btns.length; b++) {
    btns[b].addEventListener('click', function () {
      var l = this.getAttribute('data-lang');
      apply(l, true);
      setOpen(false);
      try {
        var u = new URL(location.href);
        u.searchParams.set('lang', l);
        history.replaceState(null, '', u.pathname + u.search + u.hash);
      } catch (e) {}
    });
  }
})();
