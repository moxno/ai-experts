# � AI Experts Platform - Project Master Guide & Handover

**Version:** 2.0 (Feb 2026)
**Status:** Production-Ready (Live on `ai-experts.co.il`)

---

## 🚀 1. Project Overview

**AI Experts** is a specialized marketplace connecting Israeli businesses with top-tier AI consultants and engineers.
- **Core Value:** "Zero-Risk" matching model.
- **Primary Market:** Israel (Hebrew-first, English-secondary).
- **Key Mechanism:** Clients post tasks -> System notifies relevant experts -> Experts bid -> Client accepts -> Direct intro.

---

## 🏗️ 2. Tech Stack & Architecture

This project uses a modern, serverless architecture optimized for performance and SEO.

| Component | Technology | Description |
|-----------|------------|-------------|
| **Frontend** | **Next.js 15** (App Router) | Server Components, Glassmorphism UI, React 19. |
| **Backend** | **Server Actions** | Next.js API Routes & Server Actions for logic. |
| **Database** | **Supabase (PostgreSQL)** | Managed Postgres, accessed via Prisma ORM. |
| **Auth** | **NextAuth.js v5** | Google OAuth provider (Session in cookies). |
| **Hosting** | **Firebase** | Hosting + Cloud Functions (SSR) + Cloud Run. |
| **Email** | **Resend** | Transactional emails (notifications, direct messages). |
| **Styling** | **Tailwind / CSS** | Custom Glassmorphism design system. |

> **⚠️ CRITICAL ARCHITECTURE NOTE:**
> This project is **NOT hosted on Vercel**. It uses **Firebase Hosting** with a custom build script (`scripts/fix-firebase-prisma.js`) to inject Prisma engines into Cloud Functions.

---

## 🗄️ 3. Database & Schema (Latest Changes)

### Localization Strategy
We enforce **strict localization**. Generic fields have been removed to prevent data ambiguity.

- **❌ REMOVED:** `bio`, `title`, `specializations` (generic fields).
- **✅ ACTIVE:**
  - `bio_he` / `bio_en` (Text)
  - `title_he` / `title_en` (String)
  - `specializations_he` / `specializations_en` (Comma-separated strings)

### Key Models
- **Expert:** The core profile. Contains localized bio, rates, and specialization tags.
- **Task:** Posted by clients. Has `status` (open, in_progress, completed).
- **Bid:** Offers from experts. Has `amount`, `message`, `status`.
- **Booking:** Direct service booking (Lectures/Workshops).

---

## 🛠️ 4. Development Workflow

### Prerequisites
- Node.js 20+
- Firebase CLI (`npm install -g firebase-tools`)
- Postgre DB URL (in `.env`)

### Local Development
```bash
# 1. Install dependencies
npm install

# 2. Generate Prisma Client
npx prisma generate

# 3. Run development server
npm run dev
# Opens http://localhost:3000
```

### Database Management
```bash
# View data in GUI
npx prisma studio

# Apply migrations (Production)
npx prisma migrate deploy
```

---

## 🚀 5. Deployment (Firebase)

**Do NOT use Vercel commands.** Use the following workflow:

1.  **Build the Project:**
    ```bash
    npm run build
    ```
    *This generates the Next.js production build.*

2.  **Deploy to Firebase:**
    ```bash
    npx firebase-tools deploy --only hosting
    ```
    *This uploads the static assets and the server function (`ssraiexpertscoil`).*
    *Note: The `predeploy` hook automatically runs `scripts/fix-firebase-prisma.js`.*

---

## � 6. Current Status & "Next Up"

### ✅ Completed
- [x] **Marketplace Core:** Task posting, Bidding, Accepting bids.
- [x] **Legal:** "Zero-Risk" Terms & Conditions checkboxes.
- [x] **Schema Cleanup:** Removed redundant fields, verified localized data.
- [x] **Stability:** Fixed "Application Error" on production by syncing DB/Code.
- [x] **Notifications:** Email alerts for new tasks and bids.

### 🚧 Next Steps (The "To-Do" List)
1.  **Payment Integration:** Connect Stripe/Morning for commission handling.
2.  **Client Dashboard:** UI for clients to manage incoming bids (currently basic).
3.  **Analytics:** Dashboard for admins to see MRR/GMV potential.
4.  **Domain Verification:** Verify `ai-experts.co.il` on Resend console.

---

## 📂 Key Files Map

- `src/app/[lang]/experts` - Expert profile and listing pages.
- `src/app/actions.ts` - Core business logic (createTask, submitBid).
- `prisma/schema.prisma` - The Source of Truth for data.
- `firebase.json` - Hosting configuration.
- `docs/TECH_STACK.md` - Deep dive into libraries and decisions.

---
*Maintained by the Agentic Team. Refer to this document when starting new tasks.*
