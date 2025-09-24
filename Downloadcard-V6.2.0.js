// Elite Profit-Maximizer App Download Card v6.1 JS (Blogger Edition)  BY YASSERAGN www.yasseragn.com


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('eliteCardContainer_v6');
    if (!container) {
        console.error("Elite Card Container not found. Make sure the HTML part with id='eliteCardContainer_v6' exists on the page.");
        return;
    }

    let eliteCard_countdownInterval;
    let eliteCard_allLinksData;
    
  const eliteCard_howToGuides = {
  'Mega4Up': {
    steps: [
      {
        text: "<div dir='rtl'><strong>الخطوة 1 : </strong><br/>عندما تفتح صفحة التحميل سوف تجد <strong> كلمة Free Download </strong>  اضغط عليها و غالبا سوف تفتح تبويبات او نوافذ اعلانية تلقائيا  <br/><strong> لا تتفاعل مع اي اعلان و أغلق النافذة/التبويب المنبثق فورًا وعد إلى التبويب الأصلي حيث صفحة التحميل  Mega4Up </strong> </div>",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji92c8JH-RTwwgOzyXHEk47Q-g5nXt0bV8aBBICTrTxyDHUSw58FXtqnkQf6QwAMXW-LpE9BGVfdUwgIJr13S5qIr98eTT1FgquIHJet2iUuEPWNQVBVuVHqq80HZJyy9GC4x3nSj0a4rcaKauYQ_nJVCbEU9KQQbN0Qg0alMzGVeNksL7FtD89BGJlviS/s1600/001.png'
      },
      {
        text: "<div dir='rtl'><strong>مثال لصفحة إعلانية منبثقة:</strong><br/>هذه الصورة توضّح نوعية النوافذ التي قد تُفتح. لا تضغط روابط داخلها ولا تثبّت أي برامج مقترحة؛ أغلقها عبر زر الإغلاق (×) أو إغلاق التبويب.</div>",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkgecU2zziVP71GHfVQRcHlYsQ2pqnmJ19GbsaIBmgg2OkC6PwKHdGDlf8kBt4aYWmjcz_Sm3bGWypyK8xYLm1ERIRCIOJ9oIU7aKj2v-d26JBP0xeGYOu8nYVYgL-iHMlTM4nzOEsHr9hEc8_1HB6P5VGONYCn1JWGdqZ0jID0jc9QGJQmJOR7PWwEekE/s1600/002.png'
      },
      {
        text: "<div dir='rtl'><strong>الخطوة 2 — انتظر 30 ثانية وحلّ الكابتشا:</strong>بعد الضغط قد يظهر عدّ تنازلي (عادةً ~30 ثانية). أثناء العدّ تأكد من إغلاق أي نوافذ منبثقة. و في نفس الوقت سيُطلب منك حلّ كابتشا (مثل reCAPTCHA أو اختيار صور).<br/><strong> و اذا ظهرت نافذة مبثقة مثل السابق اغلقها مباشرة. </strong></div>",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8k_AOhcGmoAJKThkVN-maj-9KCmNtYhyYbctM7FGoC0m7m0G6QuK0IX7lkeRpQSMjV2DBMM5-eXeviUUbMGkx-nvtRDkZBFbP57BBBMisy1NoCMdgoDedXHsgH_yQi20Si4KN7Z2HLJeFlT2EtxFtdTGyuZvTBFP7rZI5g-3dstGr_JVPg2IqlzyKS6q5/s1600/003.png'
      },
      {
        text: "<div dir='rtl'><strong>الخطوة 3 — اضغط زر Fet Download Link </strong>بعدها ممكن تفتح تبويبات اعلانية اغلاقها لأن بعض الإعلانات تعيد فتح تبويبات ثم اعد الضغط على الزر السابق حتى ترى التحميل بدأ.<br/>عندما يبدأ التحميل سيتولى المتصفح حفظ الملف تلقائيًا، أو قد يظهر مربع تأكيد الحفظ على الحاسوب/الهاتف — أكد الحفظ.</div>",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKNlJZl6T21ppQu3r5D9Ys_5LCvU3Z99-73v5Pf3UhvQ4_pfvyTZby5-NZ5xvghE5K7ZQ5uKbRFz8Gh0lCRS255tmmdeAlbeIFxsuBwEQb1jgQj2sw9VzsBn1zymUSzu9_jItDi5gb3WidQP7TeAwcyYM2G7wBD2U5hqPjNy6dIi9dN4UErL5T2dxFfQSd/s1600/004.png'
      },
      {
        text: "<div dir='rtl'><strong>تجنّب تثبيت إضافات أو برامج وسيطة تقدمها الإعلانات.</strong></div>",
      
      }
    ]
  },

  'UserDrive': {
    steps: [
      {
        text: "<div dir='rtl'><strong>الخطوة 1 :</strong><br/>انزل الى اخر الصفحة كما في الصروة و انتظر (العد التنازلي~ 10 ثواني) و بعدها قم بحل<strong> كابتشا كما في الصورة الموضحة </strong><br/>بعدها اضغط على <strong> Creat Download link </strong><br/>و ممكن تنفتح لك تبويبة او صفحة اعلانية و اغلقها و ارجعا دائما الى الصفحة التحميل الاولى.</div>",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEggA9xC1H4WP-u_o2l6VnBzJoZDuCEEYJk2eZQBS9Kf_kbZHJI6gdxjCOySvhkrotghZqx3OAdN2i0YvpYed1ovkxMu-G1xKua7yw_vn5aG-8OSGL_-bywCmxrdclKTzlKqU-SxjISZvgx66PvdcSQwhnN0jH70zMMyw49DwsSoBJM6PqjpRK8yzDqPCtY9/s1600/002.png'
      },
         {
        text: "<div dir='rtl'><strong>مثال لصفحة إعلانية منبثقة:</strong><br/>هذه الصورة توضّح نوعية النوافذ التي قد تُفتح. لا تضغط روابط داخلها ولا تثبّت أي برامج مقترحة؛ أغلقها عبر زر الإغلاق (×) أو إغلاق التبويب.</div>",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8nTflseuUyQ2uaC1nfpeE7xIL3aZFVGPlnnhXYgXeOW8rPLHgb9PDElyPW1Kft92d0zk2jxlM6odhyFcCT0pM6jUmh6khyphenhyphenHlJ2my5M_D6iX8lpel3Kka3UKluA0qNXM5PWo9QSeZxsnbK5GRkeqf1LhpwsVuCu1e57R_c7XOz0jwXGT8RTttK9thVgzim/s1600/003.png'
      },
      {
        text: "<div dir='rtl'><strong>الخطوة 2:</strong>بعدها سوف تتحول الى صفحة اخرى خاصة ببدأ التحميل — اضغط على زر 'Click To Download' ثم يبدأ التحميل مباشرة.</div>",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxdPEEawL6NRQo-NZI1AMApBg_0KUCxAvCeSr7TjEbkwjcyAhUH0gWv6P5-sIlpboyd-Vq6vb492mk3J7tNtlhWNIEgumGl7i_nZtwFvq5RseJ5OpH4ROCPe6LKxOYevEkRfZPuMuCR8GRIrVoXOnFSFU7POkXqwwuAf1KnFIuy-HEkczgvea9pe3KRfGs/s1600/004.PNG.png'
      },
        {
        text: "<div dir='rtl'><strong>تجنّب تثبيت إضافات أو برامج وسيطة تقدمها الإعلانات.</strong></div>",
      }
    ]
  },

  'MediaFire': {
    steps: [
      {
        text: "<div dir='rtl'><strong>الخطوة 1 — اضغط على 'Download':</strong> في صفحة MediaFire اضغط زر 'Download' الظاهر عادةً بجانب اسم الملف. في معظم الحالات يبدأ التنزيل مباشرة.</div>",
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPlPGsP_dKeTvD9onp5PJhtCaoMjT6cBbLdiwahpf7d5SFNW97vk3G69pU8nNuOC3wrkLMWBz-N9oLz3FfDjPgK6TRColirN4LUP1TdqrxCIC0Lr4jX_dFSZozmS4XVqRDqsz2RAgjGquMx7offzBOt8wTnpdXWa2CO7nd-3RwyTCTKiitpmdo8518NUG2/s1600/001.PNG.png'
      }
    ]
  }
};

    // Helper function to find elements within the container
    const find = (selector) => container.querySelector(selector);

    function setTimer(duration, textElement, progressElement, onComplete) {
        if (!textElement || !progressElement) return;
        let seconds = duration;
        const radius = progressElement.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        progressElement.style.strokeDasharray = `${circumference} ${circumference}`;
        
        const updateTimer = () => {
            textElement.textContent = seconds;
            const offset = circumference - (seconds / duration) * circumference;
            progressElement.style.strokeDashoffset = offset;
            
            if (seconds <= 0) {
                clearInterval(eliteCard_countdownInterval);
                onComplete();
            }
            seconds--;
        };
        
        updateTimer();
        eliteCard_countdownInterval = setInterval(updateTimer, 1000);
    }

    function showAd(buttonElement) {
        if (eliteCard_countdownInterval) clearInterval(eliteCard_countdownInterval);

        const linksData = buttonElement.getAttribute('data-links');
        try { eliteCard_allLinksData = JSON.parse(linksData); } catch (e) { console.error("Data error:", e); return; }
        
        container.classList.add('eliteCard-blurred');
        find('#eliteCard-ad-overlay').style.display = 'flex';
        find('#eliteCard-interstitial-ad-container').style.display = 'none';
        find('#eliteCard-links-modal').style.display = 'none';
        
        const initialContainer = find('#eliteCard-initial-ad-container');
        const nextStepBtn = find('#eliteCard-next-step-btn');
        const timerText = find('#initial-timer-text');
        const timerProgress = find('#initial-timer-progress');
        
        initialContainer.style.display = 'block';
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense Error:", e);
        }
        nextStepBtn.style.display = 'none';
        
        setTimer(20, timerText, timerProgress, () => {
            const msgElement = initialContainer.querySelector('.eliteCard-timer-message');
            const timerWrapper = initialContainer.querySelector('.eliteCard-timer-wrapper');
            if (msgElement) msgElement.textContent = "شكراً لك! يمكنك المتابعة الآن.";
            if (timerWrapper) timerWrapper.style.display = 'none';
            if (nextStepBtn) nextStepBtn.style.display = 'inline-block';
        });
    }

    function showInterstitialAd() {
        if (eliteCard_countdownInterval) clearInterval(eliteCard_countdownInterval);

        find('#eliteCard-initial-ad-container').style.display = 'none';
        const interstitialContainer = find('#eliteCard-interstitial-ad-container');
        const timerText = find('#interstitial-timer-text');
        const timerProgress = find('#interstitial-timer-progress');

        interstitialContainer.style.display = 'block';
        try {
          (adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error("AdSense Error:", e);
        }

        setTimer(10, timerText, timerProgress, showLinks);
    }

    function copyLink(button, url) {
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.top = "-9999px";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                button.innerHTML = 'تم النسخ!';
                button.classList.add('copied');
                setTimeout(() => {
                    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zM-1 1.5A1.5 1.5 0 0 1 .5 0h3A1.5 1.5 0 0 1 5 1.5v1A1.5 1.5 0 0 1 3.5 4h-3A1.5 1.5 0 0 1-1 2.5v-1z"/></svg>';
                    button.classList.remove('copied');
                }, 2000);
            }
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }
        document.body.removeChild(textArea);
    }
    
    function showLinks() {
        find('#eliteCard-interstitial-ad-container').style.display = 'none';
        const linksModal = find('#eliteCard-links-modal');
        const versionSelector = find('#eliteCard-version-selector');
        versionSelector.innerHTML = '';

        const versions = Object.keys(eliteCard_allLinksData);
        const latestVersionKey = versions.find(v => v.includes('(الأحدث)')) || versions[0];

        versions.forEach(version => {
            const option = document.createElement('option');
            option.value = version;
            if (version === latestVersionKey) {
                option.textContent = `${version.replace('(الأحدث)', '').trim()} [⭐ الأحدث]`;
                option.classList.add('eliteCard-latest-version');
            } else {
                option.textContent = version;
            }
            versionSelector.appendChild(option);
        });
        
        versionSelector.value = latestVersionKey;
        versionSelector.onchange = () => displayVersionLinks(versionSelector.value);
        displayVersionLinks(latestVersionKey);
        linksModal.style.display = 'block';
    }

    function displayVersionLinks(versionName) {
        const linksContainer = find('#eliteCard-download-links-container');
        linksContainer.innerHTML = '';
        const links = eliteCard_allLinksData[versionName];
        links.forEach(link => {
            const wrapper = document.createElement('div');
            wrapper.className = 'eliteCard-link-wrapper';
            
            if (link.url && link.status === 'active') {
                const a = document.createElement('a');
                a.href = link.url;
                
                const logoImg = document.createElement('img');
                logoImg.src = link.logo || 'https://placehold.co/24x24/cccccc/ffffff?text=?';
                logoImg.alt = '';
                logoImg.className = 'eliteCard-source-logo';
                
                const textSpan = document.createElement('span');
                textSpan.textContent = link.name;
                
                a.appendChild(logoImg);
                a.appendChild(textSpan);

                a.className = 'eliteCard-download-link-btn';
                a.target = '_blank';
                wrapper.appendChild(a);

                const copyBtn = document.createElement('button');
                copyBtn.className = 'eliteCard-copy-link-btn';
                copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zM-1 1.5A1.5 1.5 0 0 1 .5 0h3A1.5 1.5 0 0 1 5 1.5v1A1.5 1.5 0 0 1 3.5 4h-3A1.5 1.5 0 0 1-1 2.5v-1z"/></svg>';
                copyBtn.onclick = () => copyLink(copyBtn, link.url);
                wrapper.appendChild(copyBtn);
            } else {
                const disabledDiv = document.createElement('div');
                disabledDiv.dir = 'rtl';
                disabledDiv.className = 'eliteCard-link-disabled';
                disabledDiv.textContent = ` ${link.name} (غير متوفر)`;
                wrapper.appendChild(disabledDiv);
            }
            linksContainer.appendChild(wrapper);
        });
    }

    function closeOverlay() {
        find('.eliteCard-wrapper').classList.remove('eliteCard-blurred');
        find('#eliteCard-ad-overlay').style.display = 'none';
        clearInterval(eliteCard_countdownInterval);
        const initialContainer = find('#eliteCard-initial-ad-container');
        if (initialContainer) {
            const timerWrapper = initialContainer.querySelector('.eliteCard-timer-wrapper');
            if (timerWrapper) {
                timerWrapper.style.display = 'block';
            }
        }
    }

    function showHowTo() {
        find('.eliteCard-wrapper').classList.add('eliteCard-blurred');
        const overlay = find('#eliteCard-howto-overlay');
        const selector = find('#eliteCard-howto-source-selector');
        selector.innerHTML = '';
        const availableSources = Object.keys(eliteCard_howToGuides);
        availableSources.forEach(sourceName => {
            const option = document.createElement('option');
            option.value = sourceName;
            option.textContent = sourceName;
            selector.appendChild(option);
        });
        selector.onchange = () => displayHowToSteps(selector.value);
        if (availableSources.length > 0) {
            displayHowToSteps(availableSources[0]);
        }
        overlay.style.display = 'flex';
    }
    function displayHowToSteps(sourceName) {
        const container = find('#eliteCard-howto-steps-container');
        const guide = eliteCard_howToGuides[sourceName];
        container.innerHTML = '';
        if (!guide) {
            container.innerHTML = '<div dir="rtl">لا يوجد شرح متوفر لهذا المصدر حالياً.</div>';
            return;
        }
        const ul = document.createElement('ul');
        guide.steps.forEach(step => {
            const li = document.createElement('li');
            li.innerHTML = `<div>${step.text}</div>`;
            if (step.image) {
                const img = document.createElement('img');
                img.src = step.image;
                img.alt = `خطوة الشرح`;
                li.appendChild(img);
            }
            ul.appendChild(li);
        });
        container.appendChild(ul);
    }
    function closeHowTo() {
        find('.eliteCard-wrapper').classList.remove('eliteCard-blurred');
        find('#eliteCard-howto-overlay').style.display = 'none';
    }
    
    function startActiveDownloadsCounter() {
        const counterElement = find('#eliteCard-active-downloads-text');
        if (!counterElement) return;
        let baseDownloads = 180;
        const updateCounter = () => {
            const fluctuation = Math.floor(Math.random() * 91) - 45;
            let currentDownloads = baseDownloads + fluctuation;
            if (currentDownloads < 50) currentDownloads = 50;
            counterElement.textContent = currentDownloads.toLocaleString('en-US');
        };
        updateCounter(); 
        setInterval(updateCounter, Math.random() * (4000 - 2000) + 2000);
    }
    
     function updateTotalDownloads() {
        const counterElement = find('#eliteCard-total-downloads-text');
        if (!counterElement) return;

        const launchDate = new Date('2025-09-23T00:00:00Z');
        const baseDownloads = 191500; 
        const today = new Date();
        
        const timeDiff = today.getTime() - launchDate.getTime();
        const daysPassed = Math.max(0, Math.floor(timeDiff / (1000 * 3600 * 24)));

        let totalDownloads = baseDownloads;

        for (let i = 0; i < daysPassed; i++) {
            const dailyIncrease = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
            totalDownloads += dailyIncrease;
        }

        if (totalDownloads > 1000000) {
            counterElement.textContent = (totalDownloads / 1000000).toFixed(1) + 'M';
        } else if (totalDownloads > 1000) {
            counterElement.textContent = (totalDownloads / 1000).toFixed(1) + 'K';
        } else {
            counterElement.textContent = totalDownloads.toLocaleString('en-US');
        }
    }

    function updateTimestamp() {
        const timestampElement = find('#eliteCard-last-updated');
        const button = find('#eliteCard-main-btn');
        if (!timestampElement || !button) return;
        const updateDateStr = button.getAttribute('data-last-update');
        if (!updateDateStr) return;
        const updateDate = new Date(updateDateStr);
        const now = new Date();
        const diffSeconds = Math.floor((now - updateDate) / 1000);
        if (diffSeconds < 0) {
            timestampElement.textContent = "قريباً";
            return;
        }
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);

        if (diffMinutes < 1) {
            timestampElement.textContent = "الآن";
        } else if (diffMinutes < 60) {
            timestampElement.innerHTML = `منذ <span dir="ltr">${diffMinutes}</span> دقيقة`;
        } else if (diffHours < 24) {
            timestampElement.innerHTML = `منذ <span dir="ltr">${diffHours}</span> ساعة`;
        } else if (diffDays === 1) {
            timestampElement.textContent = 'منذ يوم';
        } else if (diffDays <= 3) {
            timestampElement.innerHTML = `منذ <span dir="rtl">${diffDays}</span> أيام`;
        } else {
            const day = updateDate.toLocaleDateString('en-US', { day: 'numeric' });
            const month = updateDate.toLocaleDateString('ar-EG', { month: 'long' });
            const year = updateDate.toLocaleDateString('en-US', { year: 'numeric' });
            timestampElement.innerHTML = `<span dir="ltr">${day} - ${month} - ${year}</span>`;
        }
    }

    function checkLinkStatus() {
        const button = find('#eliteCard-main-btn');
        if (!button) return;
        const notifier = find('#eliteCard-link-notifier');
        const notifierText = find('#eliteCard-notifier-text');
        if (!notifier || !notifierText) return;
        const linksDataStr = button.getAttribute('data-links');
        if (!linksDataStr) return;
        const linksData = JSON.parse(linksDataStr);
        let unavailableSources = [];
        for (const version in linksData) {
            linksData[version].forEach(link => {
                if (!link.url || link.status === 'inactive') {
                    const sourceName = link.name.split(' ').pop();
                    if (!unavailableSources.includes(sourceName)) {
                        unavailableSources.push(sourceName);
                    }
                }
            });
        }
        if (unavailableSources.length > 0) {
            notifierText.textContent = `سيتم تحديث الروابط قريباً للمصادر: ${unavailableSources.join('، ')}`;
            notifier.style.display = 'flex';
        }
    }

    // Attach event listeners programmatically
    find('.eliteCard-howto-link button').onclick = showHowTo;
    find('#eliteCard-main-btn').onclick = function() { showAd(this); };
    find('#eliteCard-next-step-btn').onclick = showInterstitialAd;
    find('#eliteCard-close-links-btn').onclick = closeOverlay;
    find('#eliteCard-close-howto-btn').onclick = closeHowTo;
    find('#eliteCard-notifier-close').onclick = function() { this.parentElement.style.display = 'none'; };


    // Initialize dynamic components
    startActiveDownloadsCounter();
    updateTimestamp();
    checkLinkStatus();
    updateTotalDownloads();
});

