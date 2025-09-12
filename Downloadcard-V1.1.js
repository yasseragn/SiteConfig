// Download Card V1.1  BY YASSERAGN www.yasseragn.com
let eliteCard_countdownInterval;
    let eliteCard_allLinksData;
    
    // ملف: howto-download-guides.js
// وصف: كائن يحتوي على شروحات تحميل مفصّلة (عربي) لمصادر Mega4Up, UserDrive, MediaFire
// ملاحظة: استبدل روابط الصور بالصور الفعلية لديك إن أردت.

const eliteCard_howToGuides = {
  'تحميل من Mega4Up': {
    steps: [
      {
        text: "<div dir='rtl'><strong>الخطوة 1 — اضغط على &quot;Free Download&quot;:</strong> افتح صفحة الملف في Mega4Up ثم اضغط زر 'Free Download' أو ما يعادله. غالبًا ما تفتح تبويبات أو نوافذ إعلانية تلقائيًا؛ <strong>لا تتفاعل مع أي إعلان</strong> — أغلق النافذة/التبويب المنبثق فورًا وعد إلى التبويب الأصلي حيث صفحة Mega4Up.</div>",
        image: 'https://placehold.co/400x200/a8dadc/1d3557?text=Mega4Up+Step+1'
      },
      {
        text: "<div dir='rtl'><strong>مثال لصفحة إعلانية منبثقة:</strong> هذه الصورة توضّح نوعية النوافذ التي قد تُفتح. لا تضغط روابط داخلها ولا تثبّت أي برامج مقترحة؛ أغلقها عبر زر الإغلاق (×) أو إغلاق التبويب.</div>",
        image: 'https://placehold.co/400x200/f1faee/e63946?text=Mega4Up+Popup+Example'
      },
      {
        text: "<div dir='rtl'><strong>الخطوة 2 — انتظر 30 ثانية وحلّ الكابتشا:</strong> بعد الضغط قد يظهر عدّ تنازلي (عادةً ~30 ثانية). أثناء العدّ تأكد من إغلاق أي نوافذ منبثقة. عندما ينتهي العدّ سيُطلب منك حلّ كابتشا (مثل reCAPTCHA أو اختيار صور). حل الكابتشا فقط داخل الصفحة الأصلية — إذا ظهر مربع كابتشا في نافذة جديدة أغلقها.</div>",
        image: 'https://placehold.co/400x200/caffbf/1d3557?text=Mega4Up+Wait+Captcha'
      },
      {
        text: "<div dir='rtl'><strong>الخطوة 3 — اضغط زر الحصول على الرابط/التحميل:</strong> بعد حلّ الكابتشا سيظهر زر باسم مثل 'Get Link' أو 'Download' — اضغطه. أحيانًا تحتاج لإغلاق نوافذ منبثقة ثم إعادة الضغط لأن بعض الإعلانات تعيد فتح تبويبات. عندما يبدأ التحميل سيتولى المتصفح حفظ الملف تلقائيًا، أو قد يظهر مربع تأكيد الحفظ على الحاسوب/الهاتف — أكد الحفظ.</div>",
        image: 'https://placehold.co/400x200/bdb2ff/1d3557?text=Mega4Up+Final+Download'
      },
      {
        text: "<div dir='rtl'><strong>حالات فشل شائعة وحلول سريعة:</strong> إذا لم يبدأ التحميل جرّب: (1) الضغط بزر الماوس الأيمن على زر التحميل واختر 'حفظ الرابط باسم'، (2) فتح الصفحة في نافذة تصفح خاصة (Incognito) مع تعطيل الإضافات، أو (3) تجربة متصفح آخر. تجنّب تثبيت إضافات أو برامج وسيطة تقدمها الإعلانات.</div>",
        image: 'https://placehold.co/400x120/e0fbfc/1d3557?text=Tip'
      }
    ]
  },

  'تحميل من UserDrive': {
    steps: [
      {
        text: "<div dir='rtl'><strong>الخطوة 1 — اضغط زر التحميل:</strong> افتح صفحة الملف على UserDrive واضغط زر 'Download' أو 'Free Download'. كما في المواقع المشابهة قد تفتح نوافذ إعلانية؛ أغلقها فورًا وارجع إلى التبويب الأصلي.</div>",
        image: 'https://placehold.co/400x200/e9ffe6/1d3557?text=UserDrive+Step+1'
      },
      {
        text: "<div dir='rtl'><strong>الخطوة 2 — انتظر ~10 ثوانٍ ثم حلّ الكابتشا:</strong> على UserDrive عادة يوجد عدّ صغير (حوالي 10 ثوانٍ). بعد انتهاء العدّ قد تحتاج للتمرير لأسفل للوصول إلى واجهة حل الكابتشا. حل الكابتشا داخل الصفحة الأصلية بعناية (اختيار الصور أو التحقق بـ'أنا لست روبوتًا').</div>",
        image: 'https://placehold.co/400x200/fff3bf/1d3557?text=UserDrive+10s+Captcha'
      },
      {
        text: "<div dir='rtl'><strong>الخطوة 3 — اضغط 'Create Download Link' ثم 'Click Download':</strong> بعد حلّ الكابتشا سيظهر زر 'Create Download Link' أو ما يماثله — اضغطه. قد يتحوّل الزر أو يظهر 'Click Download'؛ اضغطه وأكد الحفظ في متصفحك. إذا فُتح تبويب إعلاني أغلقه وعاود الضغط.</div>",
        image: 'https://placehold.co/400x200/cfe0ff/1d3557?text=UserDrive+Create+Download+Link'
      },
      {
        text: "<div dir='rtl'><strong>ملاحظة تقنية:</strong> إذا كان الزر معطلاً أو لا يستجيب فجرب تعطيل إضافات حجب الإعلانات مؤقتًا أو استخدم نافذة تصفّح خاصة. لا تقم بتثبيت أي برامج يطالبك بها الموقع؛ غالبًا تكون إعلانات مزيفة.</div>",
        image: 'https://placehold.co/400x120/f0efeb/1d3557?text=Note'
      }
    ]
  },

  'تحميل من MediaFire': {
    steps: [
      {
        text: "<div dir='rtl'><strong>الخطوة 1 — اضغط على 'Download':</strong> في صفحة MediaFire اضغط زر 'Download' الظاهر عادةً بجانب اسم الملف. في معظم الحالات يبدأ التنزيل مباشرة أو يفتح مربع تأكيد الحفظ في المتصفح.</div>",
        image: 'https://placehold.co/400x200/457b9d/1d3557?text=MediaFire+Step+1'
      },
      {
        text: "<div dir='rtl'><strong>ملاحظة مهمة — أغلق أي نوافذ إعلانية:</strong> أحيانًا تفتح نوافذ إعلانية عند الضغط على الزر؛ أغلقها فورًا. عادة لا تحتاج إلى كابتشا على MediaFire، لكن المتصفح على الهاتف قد يطلب تأكيدًا لبدء التنزيل — اضغط سماح/موافق.</div>",
        image: 'https://placehold.co/400x200/1d3557/a8dadc?text=MediaFire+Popup+Warning'
      },
      {
        text: "<div dir='rtl'><strong>حلول عند تعذر التنزيل:</strong> إذا لم يبدأ الملف فجرّب النقر بزر الماوس الأيمن على زر 'Download' واختيار 'حفظ الرابط باسم'، أو تحقق من شريط التنزيل في المتصفح. على الهواتف تأكد من منح الإذن لتنزيل الملفات من المتصفح.</div>",
        image: 'https://placehold.co/400x120/e9f5db/1d3557?text=Tip'
      }
    ]
  }
};

// جميع النصوص الآن داخل <div dir='rtl'> لضمان عرض النص من اليمين إلى اليسار بشكل صحيح مع الكلمات الإنجليزية.
// استبدل روابط الصور placeholders بالروابط الحقيقية لديك.



    
    function eliteCard_setTimer(duration, textElement, progressElement, onComplete) {
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

    function eliteCard_showAd(buttonElement) {
        if (eliteCard_countdownInterval) clearInterval(eliteCard_countdownInterval);

        const linksData = buttonElement.getAttribute('data-links');
        try { eliteCard_allLinksData = JSON.parse(linksData); } catch (e) { console.error("Data error:", e); return; }
        
        document.querySelector('.eliteCard-wrapper').classList.add('eliteCard-blurred');
        document.getElementById('eliteCard-ad-overlay').style.display = 'flex';
        document.getElementById('eliteCard-interstitial-ad-container').style.display = 'none';
        document.getElementById('eliteCard-links-modal').style.display = 'none';
        
        const initialContainer = document.getElementById('eliteCard-initial-ad-container');
        const nextStepBtn = document.getElementById('eliteCard-next-step-btn');
        const timerText = document.getElementById('initial-timer-text');
        const timerProgress = document.getElementById('initial-timer-progress');
        
        initialContainer.style.display = 'block';
        nextStepBtn.style.display = 'none';
        
        eliteCard_setTimer(20, timerText, timerProgress, () => {
            const msgElement = initialContainer.querySelector('.eliteCard-timer-message');
            const timerWrapper = initialContainer.querySelector('.eliteCard-timer-wrapper');
            if (msgElement) msgElement.textContent = "شكراً لك! يمكنك المتابعة الآن.";
            if (timerWrapper) timerWrapper.style.display = 'none';
            if (nextStepBtn) nextStepBtn.style.display = 'inline-block';
        });
    }

    function eliteCard_showInterstitialAd() {
        if (eliteCard_countdownInterval) clearInterval(eliteCard_countdownInterval);

        document.getElementById('eliteCard-initial-ad-container').style.display = 'none';
        const interstitialContainer = document.getElementById('eliteCard-interstitial-ad-container');
        const timerText = document.getElementById('interstitial-timer-text');
        const timerProgress = document.getElementById('interstitial-timer-progress');

        interstitialContainer.style.display = 'block';

        eliteCard_setTimer(10, timerText, timerProgress, eliteCard_showLinks);
    }

    function eliteCard_copyLink(button, url) {
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
    
    function eliteCard_showLinks() {
        document.getElementById('eliteCard-interstitial-ad-container').style.display = 'none';
        const linksModal = document.getElementById('eliteCard-links-modal');
        const versionSelector = document.getElementById('eliteCard-version-selector');
        versionSelector.innerHTML = '';
        const versions = Object.keys(eliteCard_allLinksData);
        versions.forEach(version => {
            const option = document.createElement('option');
            option.value = version;
            option.textContent = version;
            versionSelector.appendChild(option);
        });
        versionSelector.onchange = () => eliteCard_displayVersionLinks(versionSelector.value);
        eliteCard_displayVersionLinks(versions[0]);
        linksModal.style.display = 'block';
    }

    function eliteCard_displayVersionLinks(versionName) {
        const linksContainer = document.getElementById('eliteCard-download-links-container');
        linksContainer.innerHTML = '';
        const links = eliteCard_allLinksData[versionName];
        links.forEach(link => {
            const wrapper = document.createElement('div');
            wrapper.className = 'eliteCard-link-wrapper';
            
            if (link.url && link.status === 'active') {
                const a = document.createElement('a');
                a.href = link.url;
                a.textContent = link.name;
                a.className = 'eliteCard-download-link-btn';
                a.target = '_blank';
                wrapper.appendChild(a);

                const copyBtn = document.createElement('button');
                copyBtn.className = 'eliteCard-copy-link-btn';
                copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zM-1 1.5A1.5 1.5 0 0 1 .5 0h3A1.5 1.5 0 0 1 5 1.5v1A1.5 1.5 0 0 1 3.5 4h-3A1.5 1.5 0 0 1-1 2.5v-1z"/></svg>';
                copyBtn.onclick = () => eliteCard_copyLink(copyBtn, link.url);
                wrapper.appendChild(copyBtn);
            } else {
                const disabledDiv = document.createElement('div');
                disabledDiv.className = 'eliteCard-link-disabled';
                disabledDiv.textContent = `${link.name} (غير متوفر)`;
                wrapper.appendChild(disabledDiv);
            }
            linksContainer.appendChild(wrapper);
        });
    }

    function eliteCard_closeOverlay() {
        document.querySelector('.eliteCard-wrapper').classList.remove('eliteCard-blurred');
        document.getElementById('eliteCard-ad-overlay').style.display = 'none';
        clearInterval(eliteCard_countdownInterval);
        const initialContainer = document.getElementById('eliteCard-initial-ad-container');
        if (initialContainer) {
            const timerWrapper = initialContainer.querySelector('.eliteCard-timer-wrapper');
            if (timerWrapper) {
                timerWrapper.style.display = 'block';
            }
        }
    }

    function eliteCard_showHowTo() {
        document.querySelector('.eliteCard-wrapper').classList.add('eliteCard-blurred');
        const overlay = document.getElementById('eliteCard-howto-overlay');
        const selector = document.getElementById('eliteCard-howto-source-selector');
        selector.innerHTML = '';
        const availableSources = Object.keys(eliteCard_howToGuides);
        availableSources.forEach(sourceName => {
            const option = document.createElement('option');
            option.value = sourceName;
            option.textContent = sourceName;
            selector.appendChild(option);
        });
        selector.onchange = () => eliteCard_displayHowToSteps(selector.value);
        if (availableSources.length > 0) {
            eliteCard_displayHowToSteps(availableSources[0]);
        }
        overlay.style.display = 'flex';
    }
    function eliteCard_displayHowToSteps(sourceName) {
        const container = document.getElementById('eliteCard-howto-steps-container');
        const guide = eliteCard_howToGuides[sourceName];
        container.innerHTML = '';
        if (!guide) {
            container.innerHTML = '<div>لا يوجد شرح متوفر لهذا المصدر حالياً.</div>';
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
    function eliteCard_closeHowTo() {
        document.querySelector('.eliteCard-wrapper').classList.remove('eliteCard-blurred');
        document.getElementById('eliteCard-howto-overlay').style.display = 'none';
    }
    
    function eliteCard_startActiveDownloadsCounter() {
        const counterElement = document.getElementById('eliteCard-active-downloads-text');
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
    
    function eliteCard_updateTimestamp() {
        const timestampElement = document.getElementById('eliteCard-last-updated');
        const button = document.getElementById('eliteCard-main-btn');
        if (!timestampElement || !button) return;
        const updateDateStr = button.getAttribute('data-last-update');
        if (!updateDateStr) return;
        const updateDate = new Date(updateDateStr);
        const now = new Date();
        const diffSeconds = Math.floor((now - updateDate) / 1000);
        if (diffSeconds < 0) { timestampElement.textContent = "قريباً"; return; }
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        if (diffMinutes < 1) { timestampElement.textContent = "الآن"; }
        else if (diffMinutes < 60) { timestampElement.textContent = `منذ ${diffMinutes} دقيقة`; }
        else if (diffHours < 24) { timestampElement.textContent = `منذ ${diffHours} ساعة`; }
        else if (diffDays < 2) { timestampElement.textContent = 'منذ يوم'; }
        else { timestampElement.textContent = updateDate.toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' }); }
    }

    function eliteCard_checkLinkStatus() {
        const button = document.getElementById('eliteCard-main-btn');
        if (!button) return;
        const notifier = document.getElementById('eliteCard-link-notifier');
        const notifierText = document.getElementById('eliteCard-notifier-text');
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

    // Run functions only after the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            eliteCard_startActiveDownloadsCounter();
            eliteCard_updateTimestamp();
            eliteCard_checkLinkStatus();
        });
    } else {
        eliteCard_startActiveDownloadsCounter();
        eliteCard_updateTimestamp();
        eliteCard_checkLinkStatus();
    }
