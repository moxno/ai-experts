# 🚀 Deployment Checklist - Vercel Launch Guide

**Date:** January 31, 2026
**Target Environment:** Vercel (Next.js) + Neon/Supabase (PostgreSQL) + Resend (Email)

---

## ✅ Pre-Flight Checks (Local Validation)

1.  **Build Success:** Run `npm run build` locally to ensure no TypeScript or JSON errors. (Running now...)
2.  **Security Audit:** Verify `submitBid`, `acceptBid`, and `rejectBid` actions have proper authorization checks. (Completed in previous session).
3.  **Environment Variables:** Verify `.env` file is NOT committed to Git (check `.gitignore`).

---

## 🛠️ Step 1: Database Production Setup

Before deploying the code, the production database needs to have the correct schema.

### Option A: Direct Push (`prisma db push`) - Recommended for MVP
This command syncs your schema directly to the database.
```bash
# Run this locally against your PRODUCTION connection string
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require" npx prisma db push
```

### Option B: Migrations (`prisma migrate deploy`) - Recommended for Scale
If you are using migrations folder strictly:
```bash
# Run this locally against your PRODUCTION connection string
DATABASE_URL="postgresql://... production url ..." npx prisma migrate deploy
```

> **Note:** Ensure your production database (e.g., Neon/Supabase/Railway) allows connections from Vercel's IP addresses or is open to `0.0.0.0/0` with strong password protection.

---

## ☁️ Step 2: Vercel Project Configuration

1.  **Import Project:** In Vercel, click "Add New..." -> "Project" and import your GitHub repository.
2.  **Framework Preset:** Ensure "Next.js" is selected.
3.  **Build Command:** Default should be `next build` (or your custom script).
4.  **Install Command:** Default should be `npm install`.

### 🔑 Environment Variables (Settings -> Environment Variables)

**Add these secrets manually in Vercel:**

| Variable Name | Value Description |
| :--- | :--- |
| `DATABASE_URL` | The full connection string to your **Production** PostgreSQL database. (Must start with `postgresql://` or `postgres://`) |
| `DIRECT_URL` | (Optional) Used by Prisma for migrations if needed (if using Supabase/Neon pooling). |
| `NEXTAUTH_SECRET` | Generate a random string: `openssl rand -base64 32`. |
| `NEXTAUTH_URL` | Your production URL (e.g., `https://ai-experts.vercel.app`). **Important:** On Vercel, this is sometimes auto-detected, but safest to set explicitly. |
| `AUTH_GOOGLE_ID` | From Google Cloud Console (Production OAuth Client). |
| `AUTH_GOOGLE_SECRET` | From Google Cloud Console (Production OAuth secret). |
| `RESEND_API_KEY` | Your live API Key from Resend dashboard. |
| `NEXT_PUBLIC_APP_URL` | The public URL of your site (e.g., `https://ai-experts.vercel.app`). Used for email links. |

---

## 📧 Step 3: Email Domain Verification (Resend)

To ensure emails land in the Inbox (not Spam), you must verify your domain.

1.  Go to [Resend Domains Dashboard](https://resend.com/domains).
2.  Click "Add Domain" (e.g., `ai-experts.co.il`).
3.  Copy the DNS records (MX, TXT, CNAME) provided by Resend.
4.  Add these records to your DNS provider (GoDaddy, Namecheap, Cloudflare, etc.).
5.  Wait for verification (usually minutes, up to 24h).
6.  **Update Code (Optional but Recommended):** Change the `FROM_EMAIL` constant in `src/lib/mail.ts` to something like `notifications@ai-experts.co.il` instead of the default testing address.

---

## 🚀 Step 4: The Button

Click **Deploy** in Vercel.

**Monitoring the Build:**
1.  Watch the logs for "Prisma Client Generated".
2.  Watch for "Next.js Build Complete".
3.  If it fails on Typescript errors, fix locally and push.

---

## 🧪 Step 5: Post-Launch Sanity Check

Once live, perform the "Handshake" test in production:

1.  **Register:** Sign up as a new user (Client).
2.  **Register Expert:** Sign up as a separate user (Expert) in an Incognito window.
3.  **Post Task:** As Client, post a test task.
4.  **Receive Email:** Verify Expert gets the "New Task" email.
5.  **Bid:** As Expert, submit a bid.
6.  **Accept:** As Client, accept the bid in the Dashboard.
7.  **Verify Contacts:** Ensure both parties get the contact details email.

---

## 🚨 Troubleshooting

*   **Database Connection Error:** Check if your IP is whitelisted or if the connection string is correct.
*   **Email Failed:** Check Resend logs. Usually due to unverified domain or API key issues.
*   **Login Failed:** Check `NEXTAUTH_URL` and Google Cloud OAuth "Authorized redirect URIs" (must include `https://your-domain.vercel.app/api/auth/callback/google`).

---
**Status:** Ready for Deployment 🟢
