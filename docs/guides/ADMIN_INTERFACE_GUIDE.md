# Admin Interface Guide

## Accessing the Admin Panel

### URL
Navigate to: **https://ai-experts.co.il/he/admin/tasks** (or `/en/admin/tasks` for English)

### Authentication Required
- You must be logged in with an account that has `role: ADMIN`
- Currently, `ilsimox@gmail.com` is set as ADMIN
- Non-admin users will be redirected to the login page

---

## Features

### 📋 Two Tabs

#### 1. **Pending Tasks** (ממתינות לאישור)
- Shows all tasks waiting for approval (`approved: false`)
- Displays count of pending tasks in tab badge
- Each task shows:
  - Title
  - Description (expandable)
  - Budget range
  - Specializations (tags)
  - Client name, email, company
  - Submission timestamp

#### 2. **Approved Tasks** (מאושרות)
- Shows last 10 approved tasks
- Same information display as pending
- For reference and audit trail

---

## Actions

### ✅ Approve Task
1. Click the green **"אשר" (Approve)** button
2. Task is immediately:
   - Set to `approved: true` in database
   - Appears on public task marketplace
   - Included in homepage "Latest Tasks"
   - Added to sitemap for SEO
3. Page refreshes to show updated list

### ❌ Reject Task
1. Click the red **"דחה" (Reject)** button
2. Confirmation dialog appears
3. If confirmed, task is:
   - **Permanently deleted** from database
   - Removed from all lists
4. Page refreshes to show updated list

### 👁️ View Full Details
- Click **"הצג פרטים מלאים" (Show Full Details)**
- Expands description to full text
- Shows all task information
- Click again to collapse

---

## Visual Design

### Color Coding
- **Pending tasks**: Yellow/amber border and background tint
- **Approved tasks**: Green border and background tint

### Information Icons
- 🕐 Clock: Submission time
- ✉️ Mail: Client email
- 🏢 Building: Company name
- 💰 Dollar sign: Budget range
- 🏷️ Tag: Specializations

---

## Access Points

### Desktop Navigation
- When logged in as ADMIN, you'll see:
  - **"ניהול משימות" (Manage Tasks)** link in the header
  - Located between main navigation and "Post Task" button

### Mobile Navigation
- Open hamburger menu
- **"ניהול משימות" (Manage Tasks)** appears in the menu
- Only visible to ADMIN users

---

## Workflow Recommendation

### Daily Routine
1. **Morning Check**: Visit `/admin/tasks` to see new submissions
2. **Review**: Click "Show Full Details" for each pending task
3. **Verify**:
   - Is the task legitimate?
   - Is the email valid?
   - Is the description appropriate?
   - Does the budget make sense?
4. **Action**:
   - ✅ Approve good tasks
   - ❌ Reject spam/inappropriate tasks
5. **Monitor**: Check "Approved" tab to see what's live

### Red Flags to Watch For
- Generic/vague descriptions
- Suspicious email addresses (temporary emails, etc.)
- Unrealistic budgets
- Duplicate submissions
- Tasks caught by honeypot (won't appear in admin, silently rejected)

---

## Technical Details

### Database Changes
```sql
-- Approve
UPDATE "Task" SET "approved" = true WHERE id = 'task-id';

-- Reject (Delete)
DELETE FROM "Task" WHERE id = 'task-id';
```

### Cache Invalidation
After approve/reject, these pages are automatically revalidated:
- `/[lang]/admin/tasks` (admin panel)
- `/[lang]/tasks` (task marketplace)
- `/[lang]` (homepage)

### Security
- Server-side authentication check on page load
- Server actions verify ADMIN role before executing
- Unauthorized users cannot access or perform actions

---

## Future Enhancements

Consider adding:
- **Email notifications** when new tasks are submitted
- **Bulk actions** (approve/reject multiple tasks)
- **Spam scoring** (auto-flag suspicious tasks)
- **Task editing** (fix typos before approval)
- **Rejection reasons** (send feedback to submitter)
- **Analytics** (approval rate, average time to approve)
- **Search/filter** (by specialization, date, budget)

---

## Support

If you encounter issues:
1. Check browser console for errors
2. Verify you're logged in as ADMIN
3. Refresh the page
4. Check Supabase logs for database errors
5. Review Firebase Cloud Functions logs

---

**Happy moderating! 🎉**
