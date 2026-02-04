# ✅ מה שכבר עשינו

## 1. התקנת nodemailer ✅
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

## 2. עדכון הקוד ✅
- החלפנו את Resend ב-nodemailer ב-`src/lib/mail.ts`
- הסרנו את חבילת Resend
- הוספנו משתני SMTP ל-`.env`

---

# 🎯 מה שאתה צריך לעשות עכשיו

## שלב 1: יצירת כתובת מייל ב-Google Workspace

1. **היכנס ל-Google Workspace Admin:**
   https://admin.google.com/ac/users

2. **לחץ על "Add new user" (הוסף משתמש חדש)**

3. **מלא את הפרטים:**
   - **First name**: AI Experts
   - **Last name**: Notifications
   - **Primary email**: `noreply@ai-experts.co.il`
   - **Password**: צור סיסמה חזקה ושמור אותה!

4. **לחץ "Add new user"**

---

## שלב 2: יצירת App Password

### אופציה A: App Password (הכי פשוט!)

1. **היכנס לחשבון המייל החדש:**
   - פתח דפדפן במצב Incognito
   - לך ל: https://mail.google.com
   - התחבר עם: `noreply@ai-experts.co.il` והסיסמה שיצרת

2. **הפעל 2-Step Verification (אם עוד לא מופעל):**
   - לך ל: https://myaccount.google.com/security
   - לחץ על "2-Step Verification"
   - עקוב אחרי ההוראות

3. **צור App Password:**
   - לך ל: https://myaccount.google.com/apppasswords
   - אם אתה לא רואה את האפשרות, זה אומר ש-2FA לא מופעל - חזור לשלב 2
   - **App name**: AI Experts Platform
   - לחץ "Create"
   - **העתק את הסיסמה בת 16 התווים!** (תראה משהו כמו: `abcd efgh ijkl mnop`)

---

### אופציה B: SMTP Relay (יותר מאובטח, אבל מסובך יותר)

אם אתה רוצה להשתמש ב-SMTP Relay במקום App Password:

1. **היכנס ל-Google Admin Console:**
   https://admin.google.com

2. **נווט ל-SMTP Relay:**
   Apps → Google Workspace → Gmail → Routing

3. **הגדר SMTP Relay:**
   - לחץ על "SMTP relay service"
   - לחץ "Configure" או "Add another"
   - **Allowed senders**: Only addresses in my domains
   - **Authentication**: ✅ Require SMTP Authentication
   - **Encryption**: ✅ Require TLS encryption
   - שמור

4. **השתמש בפרטים הבאים:**
   ```
   SMTP_HOST=smtp-relay.gmail.com
   SMTP_PORT=587
   ```

---

## שלב 3: עדכון קובץ .env

פתח את הקובץ `.env` ועדכן את השורה:

```bash
SMTP_PASS=YOUR_APP_PASSWORD_HERE
```

החלף `YOUR_APP_PASSWORD_HERE` ב-App Password שקיבלת (16 תווים, ללא רווחים).

**דוגמה:**
```bash
SMTP_PASS=abcdefghijklmnop
```

---

## שלב 4: בדיקה מקומית

1. **הפעל את השרת המקומי:**
   ```bash
   npm run dev
   ```

2. **צור משימה חדשה:**
   - לך ל: http://localhost:3000/he/tasks/new
   - מלא את הטופס
   - שלח

3. **בדוק את הלוגים בטרמינל:**
   חפש:
   ```
   📧 Sending email to: ...
   ✅ Email sent successfully! Message ID: ...
   ```

4. **בדוק את תיבת הדואר:**
   - אם יש לך מומחה רשום עם המייל שלך, תקבל מייל!

---

## שלב 5: Deploy לפרודקשן

אם הכל עובד מקומית:

```bash
npm run build
npx firebase deploy --only hosting
```

---

# 🔍 פתרון בעיות

## שגיאה: "Invalid login: 535-5.7.8 Username and Password not accepted"

**פתרון:**
- ודא שהשתמשת ב-**App Password** ולא בסיסמה הרגילה
- ודא ש-2FA מופעל בחשבון
- נסה ליצור App Password חדש

## שגיאה: "Connection timeout"

**פתרון:**
- בדוק ש-`SMTP_HOST=smtp.gmail.com`
- בדוק ש-`SMTP_PORT=587`

## המיילים לא מגיעים

**פתרון:**
- בדוק את תיקיית ה-Spam
- ודא שיש מומחה רשום עם התמחות שמתאימה למשימה
- בדוק את הלוגים ב-Cloud Console

---

# 📝 סיכום

**מה שעשינו:**
✅ התקנו nodemailer
✅ עדכנו את הקוד לעבוד עם Google Workspace
✅ הכנו את קובץ .env

**מה שאתה צריך לעשות:**
1. ⏳ ליצור כתובת מייל `noreply@ai-experts.co.il`
2. ⏳ ליצור App Password
3. ⏳ לעדכן את `.env` עם ה-App Password
4. ⏳ לבדוק מקומית
5. ⏳ לעשות Deploy

**זמן משוער:** 10-15 דקות

**אחרי זה הכל יעבוד!** 🎉
