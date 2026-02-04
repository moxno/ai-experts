# Task Approval System

## Overview
All new tasks submitted through the platform require manual approval before they appear publicly. This protects against spam and bot submissions.

## How It Works

### 1. **Task Submission**
- Users fill out the task form at `/tasks/new`
- **Bot Protection**: Hidden honeypot field catches automated submissions
- Tasks are created with `approved: false` by default

### 2. **Approval Process**
Tasks must be manually approved before appearing on:
- Task marketplace (`/tasks`)
- Homepage latest tasks section
- Sitemap (for SEO)

### 3. **How to Approve Tasks**

#### Option A: Supabase Dashboard (Recommended)
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Table Editor** → **Task**
4. Find the task you want to approve
5. Click on the row and change `approved` from `false` to `true`
6. Save changes

#### Option B: SQL Editor
```sql
-- Approve a specific task by ID
UPDATE "Task" 
SET "approved" = true 
WHERE id = 'task-id-here';

-- Approve all pending tasks (use with caution)
UPDATE "Task" 
SET "approved" = true 
WHERE "approved" = false AND status = 'open';

-- View all unapproved tasks
SELECT id, title, client_email, created_at 
FROM "Task" 
WHERE "approved" = false 
ORDER BY created_at DESC;
```

## Budget Ranges

The budget field now uses predefined ranges:
- ₪1,000 - ₪3,000
- ₪3,000 - ₪5,000
- ₪5,000 - ₪7,500
- ₪7,500 - ₪10,000
- ₪10,000 - ₪15,000
- ₪15,000+

## Bot Protection Features

### Honeypot Field
- Hidden field named "website"
- Invisible to humans (positioned off-screen)
- Bots typically auto-fill all fields
- If filled, submission is silently rejected (fake success message)

### Benefits
- ✅ No CAPTCHA needed (better UX)
- ✅ Silent rejection (bots don't know they failed)
- ✅ Zero friction for legitimate users

## Email Notifications

When a task is created, an email is sent to:
- **Client**: Confirmation email with task details
- **Admin**: Notification of new task pending approval (if configured)

Emails are sent via Resend from `noreply@ai-experts.co.il`

## Future Enhancements

Consider building an admin dashboard at `/admin/tasks` with:
- List of pending tasks
- Quick approve/reject buttons
- Email preview
- Spam detection scoring
- Bulk actions

## Database Schema

```prisma
model Task {
  id              String   @id @default(uuid())
  slug            String   @unique
  title           String
  description     String   @db.Text
  budget_range    String?
  status          String   @default("open")
  approved        Boolean  @default(false)  // ← New field
  client_name     String?
  client_email    String?
  client_company  String?
  
  specializations Specialization[] @relation("TaskSpecializations")
  bids            Bid[]
  
  created_at      DateTime @default(now())
  updated_at      DateTime @updatedAt
}
```

## Monitoring

Check for new tasks regularly:
```sql
SELECT 
  title, 
  client_email, 
  budget_range,
  created_at 
FROM "Task" 
WHERE "approved" = false 
ORDER BY created_at DESC;
```
