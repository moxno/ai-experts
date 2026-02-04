# הוראות להרשמה ל-Google Workspace

## שלב 1: הרשמה ל-Workspace

1. **לך לאתר ההרשמה:**
   https://workspace.google.com/intl/he/

2. **לחץ על "התחל"**

3. **מלא את הפרטים:**
   - **שם העסק**: AI Experts
   - **מספר עובדים**: רק אתה (1)
   - **מדינה**: ישראל
   - **כתובת מייל נוכחית**: ilsimox@gmail.com

4. **בחר את הדומיין שלך:**
   - בחר "יש לי דומיין שאני רוצה להשתמש בו"
   - הכנס: **ai-experts.co.il**

5. **בחר תוכנית:**
   - **Business Starter** - $6/חודש (מספיק בשבילך)
   - או נסה את התקופת הניסיון החינמית (14 יום)

6. **צור את חשבון המנהל הראשון:**
   - **שם משתמש**: ilya (או כל שם שתרצה)
   - **כתובת מלאה**: ilya@ai-experts.co.il
   - **סיסמה**: צור סיסמה חזקה

7. **אמת את הדומיין:**
   - Google יבקש ממך להוסיף רשומת TXT ל-DNS
   - לך לממשק ניהול ה-DNS של ai-experts.co.il (אותו מקום שהראית לי קודם)
   - הוסף את רשומת ה-TXT שGoogle נותן לך

8. **המתן לאימות** (עד 48 שעות, בדרך כלל כמה דקות)

---

## שלב 2: אחרי שה-Workspace פעיל

1. **היכנס ל-Admin Console:**
   https://admin.google.com

2. **צור משתמש חדש:**
   - Users → Add new user
   - First name: AI Experts
   - Last name: Notifications
   - Email: noreply@ai-experts.co.il
   - Password: [סיסמה חזקה]

3. **צור App Password:**
   - היכנס ל-noreply@ai-experts.co.il
   - לך ל: https://myaccount.google.com/apppasswords
   - צור App Password בשם "AI Experts Platform"
   - העתק את הסיסמה (16 תווים)

4. **עדכן את .env:**
   ```
   SMTP_PASS=<App Password שקיבלת>
   ```

---

## עלויות

- **Business Starter**: $6/חודש למשתמש
- **אם יש לך 2 משתמשים** (ilya + noreply): $12/חודש
- **תקופת ניסיון**: 14 יום חינם

---

# אפשרות 2: להשתמש ב-Gmail רגיל (חינמי!)

אם אתה לא רוצה לשלם, אפשר להשתמש ב-Gmail רגיל:

## מה לעשות:

1. **צור App Password ל-ilsimox@gmail.com:**
   - לך ל: https://myaccount.google.com/apppasswords
   - צור App Password בשם "AI Experts Platform"
   - העתק את הסיסמה

2. **עדכן את .env:**
   ```
   SMTP_USER=ilsimox@gmail.com
   SMTP_PASS=<App Password>
   SMTP_FROM=AI Experts <ilsimox@gmail.com>
   ```

3. **זהו!** זה יעבוד מיד.

**חסרונות:**
- הכתובת תהיה ilsimox@gmail.com (פחות מקצועי)
- מוגבל ל-500 מיילים ביום

**יתרונות:**
- ✅ חינמי לחלוטין
- ✅ עובד מיד
- ✅ אין צורך בהגדרות DNS

---

# המלצה שלי

**אם אתה רק בודק את המערכת** → לך על Gmail רגיל (אפשרות 2)
**אם אתה רוצה משהו מקצועי** → לך על Workspace (אפשרות 1)

איזו אפשרות אתה מעדיף?
