# Resend & DNS Verification Guide

## מטרה
וידוא שהתשתית של שליחת המיילים (Resend) מוגדרת נכון ושהדומיין `ai-experts.co.il` מאומת כראוי.

---

## 📧 שלב 1: וידוא Resend API Key

### 1.1 בדיקה ב-Environment Variables (Production)

**פעולה:**
```bash
# התחבר ל-Firebase Console
# אפשר גם לבדוק דרך CLI:
firebase functions:config:get
```

**מה לבדוק:**
- [ ] המפתח `RESEND_API_KEY` קיים ב-Production Environment
- [ ] המפתח מתחיל ב-`re_` (פורמט תקני של Resend)
- [ ] המפתח **לא** expired (בדוק ב-Resend Dashboard)

**איפה למצוא:**
1. גלוש ל-[Firebase Console](https://console.firebase.google.com/project/ai-experts-co-il)
2. לחץ על **Functions** ← **Environment Variables**
3. חפש את `RESEND_API_KEY`

**Success Criteria:**
✅ המפתח קיים ותקין

---

### 1.2 בדיקת Local Environment

**פעולה:**
```bash
# וודא שהקובץ .env מכיל:
grep RESEND_API_KEY /Users/ilya/Desktop/AI-Experts/.env
```

**Success Criteria:**
✅ הפלט מציג: `RESEND_API_KEY=re_xxxxxxxxx`

---

## 🌐 שלב 2: אימות דומיין ב-Resend Dashboard

### 2.1 התחברות ל-Resend

**פעולה:**
1. גלוש ל-[Resend Dashboard](https://resend.com/domains)
2. התחבר עם החשבון שלך
3. לחץ על **Domains** בתפריט הצדדי

**מה לבדוק:**
- [ ] הדומיין `ai-experts.co.il` מופיע ברשימה
- [ ] הסטטוס של הדומיין הוא **Verified** (סימן ✅ ירוק)

**אם הסטטוס "Pending" או "Failed":**
→ המשך לשלב 2.2 להגדרת רשומות DNS

---

### 2.2 הגדרת רשומות DNS (אם נדרש)

Resend דורש 3 סוגי רשומות DNS:

#### **A. SPF Record (Sender Policy Framework)**
מאפשר לשרתי המייל לדעת שאתה מורשה לשלוח מיילים מ-`ai-experts.co.il`.

**רשומה נדרשת:**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
TTL: 3600
```

#### **B. DKIM Record (DomainKeys Identified Mail)**
מאמת שהמייל לא שונה בדרך.

**רשומה נדרשת:**
```
Type: TXT
Name: resend._domainkey
Value: [הערך המלא מ-Resend Dashboard - ארוך מאוד]
TTL: 3600
```

> ⚠️ **חשוב:** הערך של DKIM הוא ייחודי לחשבון שלך. תעתיק אותו מ-Resend Dashboard בלבד!

#### **C. DMARC Record (Domain-based Message Authentication)**
מגדיר מדיניות לטיפול במיילים לא מאומתים.

**רשומה נדרשת:**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:ilsimox@gmail.com
TTL: 3600
```

---

### 2.3 היכן להוסיף רשומות DNS?

הדומיין `ai-experts.co.il` רשום ב-**רשם דומיינים ישראלי** (למשל: Isoc.co.il, Enom, Namecheap).

**פעולה:**
1. התחבר לפאנל ניהול הדומיינים שלך
2. חפש "DNS Management" או "Zone Editor"
3. הוסף את 3 הרשומות לעיל (SPF, DKIM, DMARC)
4. שמור ולחץ **Save Changes**

**זמן המתנה:**
- רשומות DNS יכולות לקחת **5-60 דקות** להתעדכן
- במקרים נדירים: עד 24 שעות

---

### 2.4 וידוא שהרשומות פעילות

**פעולה (Terminal):**
```bash
# בדיקת SPF
dig TXT ai-experts.co.il +short | grep spf

# בדיקת DKIM
dig TXT resend._domainkey.ai-experts.co.il +short

# בדיקת DMARC
dig TXT _dmarc.ai-experts.co.il +short
```

**Success Criteria:**
✅ כל פקודה מחזירה את הערך המתאים (לא ריק)

**חלופה (Web-based):**
- גלוש ל-[MXToolbox](https://mxtoolbox.com/SuperTool.aspx)
- הזן: `ai-experts.co.il`
- בחר **SPF Record Lookup** / **DKIM Lookup** / **DMARC Lookup**

---

## 🔥 שלב 3: וידוא Firebase Hosting + SSL

### 3.1 בדיקת חיבור הדומיין

**פעולה:**
1. גלוש ל-[Firebase Console](https://console.firebase.google.com/project/ai-experts-co-il)
2. לחץ על **Hosting**
3. לחץ על **View** ליד `ai-experts-co-il`

**מה לבדוק:**
- [ ] הדומיין `ai-experts.co.il` רשום ב-**Custom Domains**
- [ ] הסטטוס של הדומיין הוא **Connected** (לא Pending)
- [ ] יש תעודת SSL תקינה (🔒 בדפדפן)

**Success Criteria:**
✅ האתר נטען ב-`https://ai-experts.co.il` (לא HTTP)

---

### 3.2 בדיקת SSL Certificate

**פעולה (דפדפן):**
1. גלוש ל-`https://ai-experts.co.il`
2. לחץ על סימן ה-🔒 ליד הכתובת
3. לחץ **Certificate is valid**

**מה לבדוק:**
- [ ] התעודה מונפקת על ידי **Let's Encrypt** או **Google Trust Services**
- [ ] התעודה **לא** פגה (Expiry Date בעתיד)
- [ ] שם הדומיין ב-Certificate: `ai-experts.co.il` + `*.ai-experts.co.il`

**Success Criteria:**
✅ אין אזהרת אבטחה בדפדפן

---

## 🧪 שלב 4: בדיקת שליחת מייל (Test Email)

### 4.1 שליחה ידנית דרך Resend Dashboard

**פעולה:**
1. גלוש ל-[Resend API Keys](https://resend.com/api-keys)
2. לחץ על **Send Test Email**
3. מלא:
   - **From:** `noreply@ai-experts.co.il`
   - **To:** `ilsimox@gmail.com`
   - **Subject:** `Test from ai-experts.co.il`
   - **Body:** `This is a test email from Resend`
4. לחץ **Send**

**מה לבדוק:**
- [ ] המייל מגיע תוך **30 שניות**
- [ ] המייל **לא** בתיקיית Spam
- [ ] ה-"From" כתוב: `noreply@ai-experts.co.il` (לא via resend.com)

**Success Criteria:**
✅ המייל מגיע לתיבת הדואר הראשית (Inbox)

---

### 4.2 בדיקת Authentication Headers

**פעולה (Gmail):**
1. פתח את המייל שקיבלת
2. לחץ על ⋮ (שלוש נקודות) ← **Show Original**
3. חפש בטקסט:
   - `SPF: PASS`
   - `DKIM: PASS`
   - `DMARC: PASS`

**Success Criteria:**
✅ כל 3 הבדיקות עוברות (PASS)

---

## 📊 שלב 5: בדיקת Rate Limits (Free Tier)

**פעולה:**
1. גלוש ל-[Resend Dashboard](https://resend.com/overview)
2. בדוק את ה-**Usage** הנוכחי

**Resend Free Tier Limits:**
- **100 מיילים ליום**
- **3,000 מיילים לחודש**
- **אין תמיכה ב-Attachments** (תצטרך להשתפר ל-Pro אם רוצה לשלוח קבצים)

**מה לבדוק:**
- [ ] אתה **לא קרוב** למכסה (אם כן, צריך לשדרג ל-Pro)
- [ ] אין הודעות שגיאה על Quota Exceeded

**Success Criteria:**
✅ יש מספיק "מרווח נשימה" במכסת המיילים

---

## ✅ Checklist סופי לפני השחרור

לפני שאתה פותח את הפלטפורמה לציבור, וודא:

- [ ] **Resend API Key** מוגדר ב-Production (Firebase Functions)
- [ ] **Domain Verified** ב-Resend Dashboard (סימן ✅ ירוק)
- [ ] **DNS Records** (SPF, DKIM, DMARC) מוגדרים ופעילים
- [ ] **Firebase Hosting** מחובר ל-`ai-experts.co.il` עם SSL
- [ ] **Test Email** נשלח בהצלחה ולא נפל ל-Spam
- [ ] **Authentication Headers** מציגים PASS בכל הבדיקות
- [ ] **Rate Limits** לא קרובים למכסה

**→ אם כל הסעיפים מסומנים, התשתית מוכנה להנעה! 🚀**

---

## 🐛 Troubleshooting - בעיות נפוצות

### בעיה 1: מיילים נופלים ל-Spam

**פתרון:**
- וודא שרשומות ה-SPF, DKIM, DMARC מוגדרות נכון
- בדוק ב-Gmail ← Show Original אם יש `FAIL` באחת הבדיקות
- הסר מילים "ספאמיות" מהנושא (FREE, WIN, !!!)

### בעיה 2: Domain לא מאומת ב-Resend

**פתרון:**
- וודא שהרשומות בדיוק תואמות למה ש-Resend מבקש
- חכה 30-60 דקות אחרי הוספת הרשומות
- לחץ **Verify Domain** ב-Resend Dashboard

### בעיה 3: Firebase Functions לא מוצאת את ה-API Key

**פתרון:**
```bash
# הגדר את המפתח מהטרמינל
firebase functions:config:set resend.api_key="re_your_key_here"

# פרוס מחדש
firebase deploy --only functions
```

### בעיה 4: SSL Certificate Invalid

**פתרון:**
- המתן 24 שעות אחרי חיבור הדומיין (Firebase מנפיק אוטומטית)
- וודא שרשומות ה-A/CNAME מצביעות לשרתי Firebase
- בדוק ב-Firebase Console ← Hosting אם יש שגיאות

---

## 📚 משאבים נוספים

- [Resend Documentation](https://resend.com/docs)
- [Firebase Hosting Custom Domains](https://firebase.google.com/docs/hosting/custom-domain)
- [DMARC Analyzer](https://mxtoolbox.com/dmarc.aspx)
- [SSL Checker](https://www.sslshopper.com/ssl-checker.html)

---

**תאריך יצירה:** 2026-02-03  
**גרסה:** 1.0  
**סטטוס:** ✅ Ready for Verification
