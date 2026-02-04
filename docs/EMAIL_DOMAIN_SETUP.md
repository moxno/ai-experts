# 📧 Email Domain Setup Guide (Resend)

כדי שהאימיילים מהמערכת יגיעו ל-Inbox של הלקוחות (ולא לספאם) ויצאו מהכתובת המקצועית `notifications@ai-experts.co.il`, עליך לבצע אימות דומיין ב-Resend.

## שלב 1: הוספת הדומיין ב-Resend
1. התחבר ל-Dashboard של [Resend](https://resend.com/domains).
2. לחץ על **Add Domain**.
3. הקלד: `ai-experts.co.il`.
4. בחר ב-Region: **US East (N. Virginia)** (מומלץ).

## שלב 2: עדכון רשומות DNS
Resend יתן לך 3 רשומות DNS (מסוג MX, TXT). עליך להוסיף אותן בממשק הניהול של הדומיין שלך (איפה שרכשת את הדומיין).

הרשומות יראו בערך כך (דוגמה בלבד - תעתיק את הערכים האמיתיים מ-Resend):

| Type | Name | Value |
|------|------|-------|
| **MX** | `send` | `feedback-smtp.us-east-1.amazonses.com` (Priority 10) |
| **TXT** | `resend._domainkey` | `k=rsa; p=...` (מפתח ארוך) |
| **TXT** | `@` (או ריק) | `v=spf1 include:amazonses.com ~all` |

> **הערה:** אם כבר יש לך רשומת SPF (שמתחילה ב-`v=spf1`), אל תיצור חדשה! פשוט הוסף `include:amazonses.com` לרשומה הקיימת.

## שלב 3: אימות
1. אחרי שהוספת את הרשומות, חזור ל-Resend ולחץ על **Verify DNS Records**.
2. זה יכול לקחת בין כמה דקות ל-24 שעות. בד"כ זה לוקח כ-10 דקות.
3. כשהסטטוס הופך ל-**Verified** (ירוק), הכל מוכן!

## שלב 4: עדכון בקוד (אופציונלי)
כרגע המערכת מוגדרת לשלוח מ-`onboarding@resend.dev` (דומיין בדיקות).
ברגע שהדומיין מאומת, ערוך את הקובץ:
`src/lib/mail.ts`

ושנה את השורה:
```typescript
const FROM_EMAIL = 'onboarding@resend.dev';
```
ל:
```typescript
const FROM_EMAIL = 'notifications@ai-experts.co.il';
```

בהצלחה! 🚀
