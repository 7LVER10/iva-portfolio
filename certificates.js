/* Add one record to IVA_CERTIFICATES to add a future certificate. */
(function () {
  var IVA_CERTIFICATES = [
    {
      id: 'manus-for-finance',
      image: 'assets/img/cert-manus-for-finance.jpg',
      width: 1280,
      height: 807,
      title: 'Manus for Finance',
      subtitle: {
        ru: 'Продвинутый курс',
        en: 'Advanced Course',
        tr: 'İleri seviye kursu'
      },
      issuer: {
        ru: 'Manus Academy · при поддержке Build Club',
        en: 'Manus Academy · Powered by Build Club',
        tr: 'Manus Academy · Build Club desteğiyle'
      },
      date: {
        ru: '7 ноября 2026',
        en: '7 November 2026',
        tr: '7 Kasım 2026'
      },
      verificationUrl: 'https://campus.buildclub.ai/certificate/manus-for-finance-930ece1d-538f-49b3-841f-b9f1ce0bb395'
    },
    {
      id: 'manus-business-analysts',
      image: 'assets/img/cert-manus-business-analysts.jpg',
      width: 1280,
      height: 807,
      title: 'Manus for Business Analysts',
      subtitle: {
        ru: 'Продвинутый курс',
        en: 'Advanced Course',
        tr: 'İleri seviye kursu'
      },
      issuer: {
        ru: 'Build Club',
        en: 'Build Club',
        tr: 'Build Club'
      },
      date: {
        ru: '5 ноября 2026',
        en: '5 November 2026',
        tr: '5 Kasım 2026'
      },
      verificationUrl: 'https://campus.buildclub.ai/certificate/manus-for-business-analysts-ea0d1a92-17fa-4f27-b304-07411b4d030e'
    },
    {
      id: 'manus-new-features',
      image: 'assets/img/cert-manus-new-features.jpg',
      width: 1280,
      height: 807,
      title: 'Manus New Features',
      subtitle: {
        ru: 'Продвинутый курс',
        en: 'Advanced Course',
        tr: 'İleri seviye kursu'
      },
      issuer: {
        ru: 'Build Club',
        en: 'Build Club',
        tr: 'Build Club'
      },
      date: {
        ru: '4 ноября 2026',
        en: '4 November 2026',
        tr: '4 Kasım 2026'
      },
      verificationUrl: 'https://campus.buildclub.ai/certificate/manus-new-features-fda1298b-50af-428a-ba9a-c4defe6897c9'
    },
    {
      id: 'manus-advanced',
      image: 'assets/img/cert-manus-advanced.jpg',
      width: 1280,
      height: 807,
      title: 'Manus Advanced',
      subtitle: {
        ru: 'Продвинутый курс',
        en: 'Advanced Course',
        tr: 'İleri seviye kursu'
      },
      issuer: {
        ru: 'Build Club',
        en: 'Build Club',
        tr: 'Build Club'
      },
      date: {
        ru: '2 ноября 2026',
        en: '2 November 2026',
        tr: '2 Kasım 2026'
      },
      verificationUrl: 'https://7lver10.github.io/iva-portfolio/manus-advanced/'
    },
    {
      id: 'manus-intermediate',
      image: 'assets/img/cert-manus-intermediate.jpg',
      width: 1280,
      height: 807,
      title: 'Manus Intermediate',
      subtitle: {
        ru: 'Курс среднего уровня',
        en: 'Intermediate Course',
        tr: 'Orta seviye kursu'
      },
      issuer: {
        ru: 'Build Club',
        en: 'Build Club',
        tr: 'Build Club'
      },
      date: {
        ru: '1 ноября 2026',
        en: '1 November 2026',
        tr: '1 Kasım 2026'
      }
    },
    {
      id: 'manus-fundamentals',
      image: 'assets/img/cert-manus-fundamentals.jpg',
      width: 1280,
      height: 807,
      title: 'Manus Fundamentals',
      subtitle: {
        ru: 'Курс для начинающих',
        en: 'Beginner Course',
        tr: 'Başlangıç kursu'
      },
      issuer: {
        ru: 'Manus Academy · при поддержке Build Club',
        en: 'Manus Academy · Powered by Build Club',
        tr: 'Manus Academy · Build Club desteğiyle'
      },
      date: {
        ru: '29 октября 2026',
        en: '29 October 2026',
        tr: '29 Ekim 2026'
      },
      number: ''
    },
    {
      id: 'agora-business-automation',
      image: 'assets/img/cert-agora-business-automation.png',
      width: 1653,
      height: 1362,
      title: 'Business Automation and AI Agent Development',
      subtitle: {
        ru: 'Семинар: 6 занятий · 4 задания',
        en: 'Workshop: 6 lessons · 4 assignments',
        tr: 'Atölye: 6 ders · 4 ödev'
      },
      issuer: {
        ru: 'A-GORA Academy',
        en: 'A-GORA Academy',
        tr: 'A-GORA Academy'
      },
      date: {
        ru: '22 июня 2026',
        en: '22 June 2026',
        tr: '22 Haziran 2026'
      },
      number: '956-220626'
    }
  ];

  var LABELS = {
    ru: { completed: 'Завершено', number: 'Номер сертификата', open: 'Открыть оригинал в полном размере', verify: 'Проверить сертификат', imageAlt: 'Оригинал сертификата' },
    en: { completed: 'Completed', number: 'Certificate no.', open: 'Open the full-size original', verify: 'Verify certificate', imageAlt: 'Original certificate' },
    tr: { completed: 'Tamamlandı', number: 'Sertifika no.', open: 'Orijinali tam boyutta aç', verify: 'Sertifikayı doğrula', imageAlt: 'Sertifikanın orijinali' }
  };

  function appendText(parent, tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    el.textContent = text;
    parent.appendChild(el);
    return el;
  }

  window.renderCertificates = function (lang) {
    var root = document.getElementById('certificate-list');
    if (!root) return;
    if (!LABELS[lang]) lang = 'ru';
    var labels = LABELS[lang];
    root.textContent = '';

    IVA_CERTIFICATES.forEach(function (item) {
      var card = document.createElement('article');
      card.className = 'certificate-card';
      card.setAttribute('data-certificate-id', item.id);

      var imageLink = document.createElement('a');
      imageLink.className = 'certificate-card__image';
      imageLink.href = item.image;
      imageLink.target = '_blank';
      imageLink.rel = 'noopener noreferrer';
      imageLink.setAttribute('aria-label', labels.open + ': ' + item.title);
      var image = document.createElement('img');
      image.src = item.image;
      image.width = item.width;
      image.height = item.height;
      image.loading = 'lazy';
      image.alt = labels.imageAlt + ': ' + item.title + ' — ' + item.issuer[lang];
      imageLink.appendChild(image);
      card.appendChild(imageLink);

      var body = document.createElement('div');
      body.className = 'certificate-card__body';
      var issuer = appendText(body, 'p', 'certificate-card__issuer', item.issuer[lang]);
      appendText(issuer, 'span', '', labels.completed + ' · ' + item.date[lang]);
      appendText(body, 'h3', '', item.title);
      appendText(body, 'p', 'certificate-card__detail', item.subtitle[lang]);

      if (item.number) {
        var meta = document.createElement('div');
        meta.className = 'certificate-card__meta';
        appendText(meta, 'span', '', labels.number + ': ' + item.number);
        body.appendChild(meta);
      }

      var openLabel = document.createElement('a');
      openLabel.className = 'certificate-card__open';
      openLabel.href = item.verificationUrl || item.image;
      openLabel.target = '_blank';
      openLabel.rel = 'noopener noreferrer';
      openLabel.setAttribute('aria-label', (item.verificationUrl ? labels.verify : labels.open) + ': ' + item.title);
      openLabel.textContent = item.verificationUrl ? labels.verify : labels.open;
      var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('viewBox', '0 0 16 16');
      icon.setAttribute('aria-hidden', 'true');
      icon.innerHTML = '<path d="M4 12 12 4M5 4h7v7"/>';
      openLabel.appendChild(icon);
      body.appendChild(openLabel);
      card.appendChild(body);
      root.appendChild(card);
    });
  };
})();
