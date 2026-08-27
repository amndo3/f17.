<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ABU6AMI | حسابات أبو طامي</title>
    <!-- تضمين مكتبة FontAwesome لأيقونات المنصات -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body, html {
            width: 100%;
            min-height: 100vh;
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            overflow-x: hidden;
            background-color: #0d0a12; 
            cursor: none; /* إخفاء الماوس الافتراضي لتفعيل المخصص */
        }

        /* مؤشر الماوس المخصص */
        .custom-cursor-dot {
            width: 8px;
            height: 8px;
            background-color: #373ad4;
            position: fixed;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            pointer-events: none; 
            z-index: 9999;
            transition: width 0.2s, height 0.2s, background-color 0.2s;
        }

        .custom-cursor-circle {
            width: 40px;
            height: 40px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            position: fixed;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9998;
            transition: transform 0.1s cubic-bezier(0.25, 1, 0.5, 1), width 0.3s, height 0.3s, border-color 0.3s, background-color 0.3s;
        }

        body.hovered .custom-cursor-dot {
            width: 6px;
            height: 6px;
            background-color: #fff;
        }
        body.hovered .custom-cursor-circle {
            width: 55px;
            height: 55px;
            border-color: rgba(255, 255, 255, 0.8);
            background-color: rgba(255, 255, 255, 0.05); 
        }

        /* الخلفية العامة المتدرجة والمتحركة */
        .wrapper {
            width: 100%;
            min-height: 100vh;
            background: linear-gradient(-45deg, #120024, #08031a, #1a0826, #050515);
            background-size: 400% 400%;
            animation: cozyGradient 15s ease infinite;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 80px 20px 40px 20px;
            position: relative;
        }

        @keyframes cozyGradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* زر تغيير اللغة أعلى اليسار */
        .lang-switch-btn {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #ffffff;
            padding: 10px 18px;
            border-radius: 50px;
            font-size: 0.9rem;
            font-weight: 700;
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .lang-switch-btn:hover {
            background: rgba(212, 175, 55, 0.2);
            border-color: #d4af37;
            color: #d4af37;
            transform: translateY(-2px);
        }

        /* الحاوية الرئيسية للتخطيط */
        .page-container {
            display: flex;
            width: 100%;
            max-width: 950px;
            justify-content: center;
            align-items: flex-start;
            gap: 20px;
        }

        /* اللوحة الرئيسية للروابط */
        .family-panel {
            flex: 1;
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            background: rgba(255, 255, 255, 0.03); 
            border: 1px solid rgba(255, 255, 255, 0.1); 
            border-radius: 32px;
            padding: 40px 30px;
            box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 255, 255, 0.15);
            text-align: center;
            animation: panelEntrance 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        @keyframes panelEntrance {
            from { opacity: 0; transform: scale(0.95) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
        }

        .profile-img {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            border: 3px solid #d4af37;
            margin-bottom: 15px;
            box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
        }

        .family-title {
            color: #ffffff;
            font-size: 2.3rem;
            font-weight: 800;
            margin-bottom: 5px;
            letter-spacing: 1px;
            text-shadow: 0 4px 20px rgba(255, 255, 255, 0.2);
        }

        .family-subtitle {
            color: #d4af37;
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 30px;
            letter-spacing: 0.5px;
        }

        /* تصميم أزرار الروابط */
        .links-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .link-card {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 18px 25px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            color: #ffffff;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
            position: relative;
            overflow: hidden;
        }

        .link-card::before {
            content: '';
            position: absolute;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
            transition: all 0.6s ease;
        }

        .link-card:hover::before {
            right: 100%;
        }

        .link-card:hover {
            transform: translateY(-3px);
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        }

        .link-content {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .link-content i {
            font-size: 1.5rem;
            width: 30px;
            text-align: center;
        }

        /* ألوان مخصصة لكل منصة عند التمرير */
        .kick-link:hover { border-color: #53fc18; color: #53fc18; }
        .tiktok-link:hover { border-color: #ff0050; color: #fe0979; }
        .snap-link:hover { border-color: #fffc00; color: #fffc00; }
        .x-link:hover { border-color: #ffffff; color: #ffffff; }

        /* قسم العدادات الجانبية */
        .stats-sidebar {
            width: 240px;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .stat-box {
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 20px;
            text-align: center;
            color: #ffffff;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
            animation: panelEntrance 1s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .stat-box h3 {
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 8px;
            font-weight: 500;
        }

        .stat-box p {
            font-size: 1.8rem;
            font-weight: 800;
            color: #d4af37;
        }

        /* التجاوب مع الشاشات الصغيرة (الجوال) */
        @media (max-width: 768px) {
            .page-container {
                flex-direction: column;
                align-items: center;
            }
            .stats-sidebar {
                width: 100%;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: center;
            }
            .stat-box {
                flex: 1;
                min-width: 120px;
            }
            .family-panel {
                width: 100%;
                padding: 30px 20px;
            }
            body {
                cursor: default; /* إلغاء الماوس المخصص في شاشات اللمس */
            }
            .custom-cursor-dot, .custom-cursor-circle {
                display: none;
            }
        }
    </style>
</head>
<body>

    <!-- عناصر مؤشر الماوس المخصص -->
    <div class="custom-cursor-dot" id="dot"></div>
    <div class="custom-cursor-circle" id="circle"></div>

    <!-- زر تبديل اللغة -->
    <button class="lang-switch-btn" id="langBtn">
        <i class="fa-solid fa-globe"></i>
        <span>English</span>
    </button>

    <div class="wrapper">
        <div class="page-container">
            
            <!-- اللوحة الرئيسية للروابط -->
            <div class="family-panel">
                <!-- يمكنك استبدال رابط الصورة برابط صورتك الشخصية الافتراضية -->
                <img src="https://placeholder.com" alt="ABU6AMI" class="profile-img">
                <h1 class="family-title">أبو طامي | ABU6AMI</h1>
                <p class="family-subtitle">صانع محتوى وبثوث مباشرة ✨</p>

                <div class="links-container">
                    <!-- رابط منصة كيك -->
