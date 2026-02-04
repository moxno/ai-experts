# AI-Experts Marketplace - Email Notification System

## Overview

The marketplace uses **Resend** for transactional email notifications to keep both clients and experts engaged in real-time.

## Email Triggers

### 1. New Task Posted → Notify Matching Experts
**When:** A client posts a new task  
**Who receives:** All active experts whose specializations match the task  
**Template:** `notifyExpertOfNewTask`

**Example:**
```
Subject: משימת AI חדשה עבורך: בניית אוטומציה לסיכומי פגישות
Body: היי [Expert Name], מצאנו משימה חדשה שמתאימה להתמחויות שלך...
CTA: צפייה בפרטים והגשת הצעה
```

### 2. Expert Submits Bid → Notify Client
**When:** An expert submits a bid on a task  
**Who receives:** The client who posted the task  
**Template:** `notifyClientOfNewBid`

**Example:**
```
Subject: הצעה חדשה למשימה שלך: בניית אוטומציה לסיכומי פגישות
Body: המומחה [Expert Name] הגיש הצעה בסכום $[Amount]...
CTA: צפייה בהצעה ויצירת קשר
```

## Setup

### 1. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Verify your sending domain (or use `onboarding@resend.dev` for testing)
3. Generate an API key

### 2. Add to Environment Variables
```bash
RESEND_API_KEY="re_your_key_here"
```

### 3. Test Email Sending
```bash
# Create a test task (will trigger expert notifications)
npx tsx -e "
import { PrismaClient } from './src/generated/client';
const prisma = new PrismaClient();
// ... create task code
"
```

## Email Templates

All templates are bilingual (Hebrew/English) and include:
- **Glassmorphism-inspired design** matching the website aesthetic
- **Clear CTAs** with direct links to relevant pages
- **Personalization** (recipient name, task details, bid amounts)
- **Mobile-responsive HTML**

## Production Considerations

### Domain Verification
For production, you **must** verify your sending domain in Resend:
1. Add DNS records (SPF, DKIM, DMARC)
2. Update `FROM_EMAIL` in `/src/lib/mail.ts` to use your domain
3. Example: `AI Experts <notifications@ai-experts.co.il>`

### Rate Limits
- Resend free tier: 100 emails/day
- Pro tier: 50,000 emails/month
- Consider implementing email batching for high-volume scenarios

### Unsubscribe Links
Add an unsubscribe mechanism:
```typescript
// In expert profile, add field:
email_notifications_enabled: boolean

// In mail.ts, check before sending:
if (!expert.email_notifications_enabled) return;
```

## Monitoring

Check email delivery status in:
- Resend Dashboard → Emails
- Application logs (search for "Email Simulation" or "Resend error")

## Future Enhancements

1. **Digest Emails**: Daily summary of new tasks instead of per-task emails
2. **SMS Notifications**: For urgent bids via Twilio
3. **In-App Notifications**: Bell icon in header with unread count
4. **Email Templates with React Email**: Use JSX components instead of HTML strings
