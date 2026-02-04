# הגדרת Google Workspace SMTP ל-AI Experts

## שלב 1: יצירת כתובת מייל ייעודית (אם אין)

1. היכנס ל-Google Workspace Admin: https://admin.google.com
2. לך ל-Users
3. צור משתמש חדש:
   - **שם**: AI Experts Notifications
   - **כתובת**: `noreply@ai-experts.co.il` (או `notifications@ai-experts.co.il`)
   - **סיסמה**: צור סיסמה חזקה ושמור אותה

## שלב 2: הפעלת SMTP Relay (מומלץ) או App Password

### אפשרות A: SMTP Relay (מומלץ - יותר מאובטח)

1. היכנס ל-Google Admin Console: https://admin.google.com
2. לך ל: **Apps** → **Google Workspace** → **Gmail** → **Routing**
3. גלול ל-**SMTP relay service**
4. לחץ **Configure** או **Add another**
5. הגדרות:
   - **Allowed senders**: Only addresses in my domains
   - **Authentication**: ✅ Require SMTP Authentication
   - **Encryption**: ✅ Require TLS encryption
6. שמור

**פרטי החיבור:**
```
SMTP_HOST=smtp-relay.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@ai-experts.co.il
SMTP_PASS=<הסיסמה של המשתמש>
```

### אפשרות B: App Password (פשוט יותר)

1. היכנס לחשבון `noreply@ai-experts.co.il`
2. לך ל: https://myaccount.google.com/apppasswords
3. צור App Password חדש:
   - **שם**: AI Experts Platform
4. העתק את הסיסמה (16 תווים)

**פרטי החיבור:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@ai-experts.co.il
SMTP_PASS=<App Password שיצרת>
```

## שלב 3: עדכון הקוד

### 3.1 עדכן את `.env`

הוסף את השורות הבאות ל-`.env`:

```bash
# Google Workspace SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=noreply@ai-experts.co.il
SMTP_PASS=your_app_password_here
SMTP_FROM=AI Experts <noreply@ai-experts.co.il>
```

### 3.2 התקן את nodemailer

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

### 3.3 עדכן את `src/lib/mail.ts`

החלף את הקוד הקיים בקוד הבא:

```typescript
import nodemailer from 'nodemailer';

// Create transporter using Google Workspace SMTP
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const FROM_EMAIL = process.env.SMTP_FROM || 'AI Experts <noreply@ai-experts.co.il>';

export async function sendEmail({
    to,
    subject,
    html,
    replyTo
}: {
    to: string | string[],
    subject: string,
    html: string,
    replyTo?: string
}) {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn("⚠️ SMTP credentials not set. Simulating email send.");
        console.log("📧 Email Simulation:", { to, subject });
        return { success: true, simulated: true };
    }

    try {
        console.log(`📧 Sending email to: ${Array.isArray(to) ? to.join(', ') : to}`);
        
        const info = await transporter.sendMail({
            from: FROM_EMAIL,
            to: Array.isArray(to) ? to.join(', ') : to,
            subject,
            html,
            replyTo,
        });

        console.log("✅ Email sent successfully:", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (err: any) {
        console.error("❌ Email sending error:", err);
        return { success: false, error: err.message };
    }
}

// Keep all the existing notification functions (notifyExpertOfNewTask, etc.)
// They remain the same!
```

## שלב 4: בדיקה

### 4.1 בדיקה מקומית

```bash
npm run dev
```

צור משימה חדשה ובדוק את הלוגים בטרמינל.

### 4.2 Deploy לפרודקשן

```bash
npm run build
npx firebase deploy --only hosting
```

### 4.3 בדוק את הלוגים

```bash
# בדוק ב-Cloud Console
https://console.cloud.google.com/logs/query?project=ai-experts-co-il
# חפש: "Email sent successfully"
```

## מגבלות Google Workspace

- **2,000 מיילים ביום** (לכל משתמש)
- **10,000 מיילים ביום** (לכל ארגון)

זה יותר ממספיק לצרכים שלך!

## פתרון בעיות

### שגיאה: "Username and Password not accepted"
- ודא שהשתמשת ב-App Password ולא בסיסמה הרגילה
- ודא ש-2FA מופעל בחשבון

### שגיאה: "Connection timeout"
- בדוק שה-SMTP_HOST נכון: `smtp.gmail.com`
- בדוק שה-SMTP_PORT נכון: `587`

### המיילים מגיעים ל-Spam
- ודא שיש לך SPF record בדומיין
- הוסף DKIM (Google Workspace עושה את זה אוטומטית)
