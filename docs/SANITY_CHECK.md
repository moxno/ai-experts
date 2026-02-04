# 🧪 Post-Deployment Sanity Check

**Date:** January 30, 2026
**Environment:** Production (Vercel)

---

## 🎯 Objective
Verify that the core marketplace loop functions correctly in the live Vercel environment.

---

## 📋 Pre-Requisites
1.  **Deployment Success:** Vercel dashboard shows "Ready" (Green dot).
2.  **Database Connection:** App is running without crashing on startup.
3.  **Google OAuth:** Redirect URI added to Google Cloud Console.

---

## 🚀 The 5-Minute Test Plan

### Test 1: Authentication (Login)
*   [ ] Open the live URL (e.g., `https://ai-experts.vercel.app`).
*   [ ] Click **Login**.
*   [ ] Select **Google**.
*   [ ] **Expected Result:** You are redirected to Google, sign in, and return to the Homepage/Dashboard as a logged-in user.
*   *If it fails:* Check `NEXTAUTH_URL` and Google Cloud Console Redirect URI.

### Test 2: Expert Registration (User A)
*   [ ] Go to `/register-expert`.
*   [ ] Fill in the form (Name: "Expert Test", Price: "500").
*   [ ] Submit.
*   [ ] **Expected Result:** You are redirected to the Dashboard or "Application Received" page.
*   [ ] **Database Check:** Verify the expert exists in your production DB (via Vercel/Neon dashboard or Prisma Studio).

### Test 3: Post a Task (User B - Incognito)
*   [ ] Open an **Incognito Window**.
*   [ ] Login with a **different** Google account (Client).
*   [ ] Go to `/tasks/new`.
*   [ ] Post a task: "Test Project Production", Budget: "1000".
*   [ ] **Expected Result:** Task is created and visible in `/tasks`.
*   [ ] **Email Check:** Check the email of "Expert Test" (User A). Did they get a "New Task Alert"?

### Test 4: Submit a Bid (User A)
*   [ ] Go back to User A (Expert) window.
*   [ ] Find "Test Project Production" in `/tasks`.
*   [ ] Click "Submit Bid".
*   [ ] Enter Amount: 800, Message: "I can do this in prod".
*   [ ] **Expected Result:** Bid submitted successfully. success toast/redirect.
*   [ ] **Email Check:** Check the email of Client (User B). Did they get a "New Bid Received" email?

### Test 5: The Handshake (User B)
*   [ ] Go back to User B (Client) window.
*   [ ] Go to Dashboard (`/dashboard`).
*   [ ] Find the task and click "View Bids".
*   [ ] Click **Accept Bid**.
*   [ ] **Expected Result:**
    *   Bid status changes to "Accepted".
    *   Task status changes to "In Progress".
    *   Contact details are revealed.
*   [ ] **Email Check:** Check User A's email. Did they get the "Bid Accepted!" email with User B's details?

---

## 🛑 Critical Failure Scenarios (What to do?)

| Scenario | Likely Cause | Fix |
| :--- | :--- | :--- |
| **Login Loop / 404** | `NEXTAUTH_URL` mismatch | Verify Vercel config matches Google Cloud Console exactly. |
| **"Internal Server Error" on DB** | Connection String | Check allowed IPs (0.0.0.0/0) on DB provider. |
| **Emails not arriving** | Resend API Key / Domain | Check Resend Dashboard > Logs. Verify Domain DNS records. |
| **Form "Something went wrong"** | API Route Error | Check Vercel **Function Logs** (Runtime Logs) for specific error message. |

---

**Status:** Ready to Test 🤞
