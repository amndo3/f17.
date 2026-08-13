// اسم القناة على منصة Kick
const KICK_USERNAME = "abu6ami";

// عناصر حركة مؤشر الماوس
const cursorDot = document.getElementById('cursorDot');
const cursorCircle = document.getElementById('cursorCircle');

document.addEventListener('mousemove', (e) => {
    if (cursorDot && cursorCircle) {
        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
        cursorCircle.style.left = `${e.clientX}px`;
        cursorCircle.style.top = `${e.clientY}px`;
    }
});

document.addEventListener('mouseover', (e) => {
    if (e.target.closest('.social-btn') || e.target.closest('.lang-switch-btn') || e.target.closest('.close-modal-btn')) {
        document.body.classList.add('hovered');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.closest('.social-btn') || e.target.closest('.lang-switch-btn') || e.target.closest('.close-modal-btn')) {
        document.body.classList.remove('hovered');
    }
});

// فتح وإغلاق النافذة المنبثقة للأصدقاء
const friendsModal = document.getElementById('friendsModal');
const openFriendsModalBtn = document.getElementById('openFriendsModal');
const closeFriendsModalBtn = document.getElementById('closeFriendsModal');

if (openFriendsModalBtn && closeFriendsModalBtn && friendsModal) {
    openFriendsModalBtn.addEventListener('click', () => friendsModal.classList.add('active'));
    closeFriendsModalBtn.addEventListener('click', () => friendsModal.classList.remove('active'));
    friendsModal.addEventListener('click', (e) => {
        if (e.target === friendsModal) friendsModal.classList.remove('active');
    });
}

// حالة اللغة الحالية وحالة البث
let currentLang = 'ar';
let isLiveNow = false;

// ==========================================
// دالة جلب بيانات المتابعين والبث المباشر فوراً من Kick
// ==========================================
async function fetchKickData() {
    try {
        const response = await fetch(`https://api.allorigins.win/raw?url=https://kick.com/api/v2/channels/${KICK_USERNAME}`);
        if (!response.ok) throw new Error("تعذر جلب البيانات");

        const data = await response.json();

        // 1. تحديث عدد المتابعين (يزيد تلقائياً إذا زادوا بحسابك)
        const followersElement = document.getElementById('followersCount');
        if (data.followersCount !== undefined && followersElement) {
            followersElement.innerText = data.followersCount.toLocaleString();
        }

        // 2. تحديث حالة البث والمشاهدين المباشرين
        const liveBadge = document.getElementById('liveBadge');
        const liveViewersCount = document.getElementById('liveViewersCount');

        if (data.livestream && data.livestream.is_live) {
            isLiveNow = true;
            if (liveBadge) liveBadge.classList.add('is-live');
            if (liveViewersCount) liveViewersCount.innerText = data.livestream.viewer_count.toLocaleString();
        } else {
            isLiveNow = false;
            if (liveBadge) liveBadge.classList.remove('is-live');
            if (liveViewersCount) {
                liveViewersCount.innerText = currentLang === 'ar' ? 'غير متصل' : 'Offline';
            }
        }

    } catch (error) {
        console.log("جارِ المحاولة تلقائياً لتحديث البيانات الحية...", error);
    }
}

// تشغيل الفحص فور تحميل الصفحة ثم تتجدد الأرقام والمتابعين والمشاهدين تلقائياً كل 30 ثانية
window.addEventListener('DOMContentLoaded', () => {
    fetchKickData();
    setInterval(fetchKickData, 30000); 
});

// البرمجة الخاصة بتغيير اللغة (عربي / إنجليزي)
const langToggleBtn = document.getElementById('langToggle');
const langText = document.getElementById('langText');

const translations = {
    ar: {
        subtitle: "حياكم الله جميعاً في مجتمعنا",
        btnFriends: "قنوات الأصدقاء",
        modalTitle: "قنوات الأصدقاء",
        statFollowers: "إجمالي المتابعين",
        statLive: "مباشر الآن",
        kick: "منصة Kick",
        whatsapp: "قناة الواتساب",
        twitter: "تويتر (X)",
        youtube: "قناة اليوتيوب",
        friend1: "قناة الصديق الأول",
        friend2: "قناة الصديق الثاني",
        btnText: "English",
        offlineText: "غير متصل"
    },
    en: {
        subtitle: "Welcome everyone to our community",
        btnFriends: "Friends Channels",
        modalTitle: "Friends Channels",
        statFollowers: "Total Followers",
        statLive: "Live Now",
        kick: "Kick Platform",
        whatsapp: "WhatsApp Channel",
        twitter: "Twitter (X)",
        youtube: "YouTube Channel",
        friend1: "First Friend's Channel",
        friend2: "Second Friend's Channel",
        btnText: "عربي",
        offlineText: "Offline"
    }
};

if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        const data = translations[currentLang];

        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;

        document.getElementById('txt-subtitle').innerText = data.subtitle;
        document.getElementById('txt-btn-friends').innerText = data.btnFriends;
        document.getElementById('txt-modal-title').innerText = data.modalTitle;
        document.getElementById('txt-stat-followers').innerText = data.statFollowers;
        document.getElementById('txt-stat-live').innerText = data.statLive;
        document.getElementById('txt-kick').innerText = data.kick;
        document.getElementById('txt-whatsapp').innerText = data.whatsapp;
        document.getElementById('txt-twitter').innerText = data.twitter;
        document.getElementById('txt-youtube').innerText = data.youtube;

        const f1 = document.querySelector('.txt-friend1');
        const f2 = document.querySelector('.txt-friend2');
        if (f1) f1.innerText = data.friend1;
        if (f2) f2.innerText = data.friend2;

        if (!isLiveNow) {
            const liveViewersCount = document.getElementById('liveViewersCount');
            if (liveViewersCount) liveViewersCount.innerText = data.offlineText;
        }

        if (langText) langText.innerText = data.btnText;
    });
}