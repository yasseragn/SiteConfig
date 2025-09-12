<!-- JavaScript Logic -->
    let eliteCard_countdownInterval;
    let eliteCard_allLinksData;

    // How-to-Download Guide Data
    const eliteCard_howToGuides = {
        'تحميل من Google Drive': { steps: [ { text: '<strong>الخطوة 1:</strong> بعد انتهاء الانتظار، ستظهر لك هذه الصفحة. اضغط على أيقونة التحميل في الزاوية العلوية اليمنى.', image: 'https://placehold.co/400x200/a8dadc/1d3557?text=Google+Drive+Step+1' }, { text: '<strong>الخطوة 2:</strong> قد تظهر رسالة تحذير من جوجل. هذا طبيعي. اضغط على "تنزيل على أي حال" (Download anyway).', image: 'https://placehold.co/400x200/f1faee/e63946?text=Google+Drive+Step+2' } ] },
        'تحميل من MediaFire': { steps: [ { text: '<strong>الخطوة 1:</strong> في صفحة ميديا فاير، ابحث عن زر التحميل الأخضر الكبير واضغط عليه.', image: 'https://placehold.co/400x200/457b9d/f1faee?text=MediaFire+Step+1' }, { text: '<strong>الخطوة 2:</strong> قد تفتح نافذة إعلانية منبثقة، قم بإغلاقها والعودة إلى الصفحة الأصلية. سيبدأ التحميل تلقائياً.', image: 'https://placehold.co/400x200/1d3557/a8dadc?text=MediaFire+Step+2' } ] },
        'تحميل مباشر': { steps: [ { text: '<strong>التحميل المباشر:</strong> سيبدأ تنزيل الملف تلقائياً بمجرد الضغط على الرابط. لا توجد خطوات إضافية!', image: 'https://placehold.co/400x150/e63946/f1faee?text=Direct+Download' } ] }
    };

    function eliteCard_setTimer(duration, textElement, progressElement, onComplete) {
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
        
        updateTimer(); // Initial call
        eliteCard_countdownInterval = setInterval(updateTimer, 1000);
    }

    // Ad System & Download Links Functions
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
            initialContainer.querySelector('.eliteCard-timer-message').textContent = "شكراً لك! يمكنك المتابعة الآن.";
            initialContainer.querySelector('.eliteCard-timer-wrapper').style.display = 'none';
            nextStepBtn.style.display = 'inline-block';
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
        // Reset modals to initial state for next click
        const initialContainer = document.getElementById('eliteCard-initial-ad-container');
        if (initialContainer) {
            const timerWrapper = initialContainer.querySelector('.eliteCard-timer-wrapper');
            if (timerWrapper) {
                timerWrapper.style.display = 'block';
            }
        }
    }

    // How-to Guide Functions
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
            container.innerHTML = '<p>لا يوجد شرح متوفر لهذا المصدر حالياً.</p>';
            return;
        }
        const ul = document.createElement('ul');
        guide.steps.forEach(step => {
            const li = document.createElement('li');
            li.innerHTML = `<p>${step.text}</p>`;
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
    
    // Dynamic Features
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

    document.addEventListener('DOMContentLoaded', () => {
        eliteCard_startActiveDownloadsCounter();
        eliteCard_updateTimestamp();
        eliteCard_checkLinkStatus();
    });

