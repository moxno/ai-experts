# Resend DNS Verification Guide 📧

To ensure your emails are delivered successfully and don't end up in spam, you must verify your domain in Resend. Follow these steps:

## 1. Add Domain in Resend
1. Log in to your [Resend Dashboard](https://resend.com/domains).
2. Click **Add Domain**.
3. Enter `ai-experts.co.il` and click **Add**.

## 2. Update DNS Records
Resend will provide several DNS records (DKIM, SPF, and DMARC). You need to add these to your domain provider (e.g., GoDaddy, Cloudflare, Namecheap).

| Type | Host/Name | Value |
| :--- | :--- | :--- |
| **TXT** | `resend._domainkey` | (Copy the DKIM key from Resend) |
| **TXT** | `@` | `v=spf1 include:amazonses.com ~all` (or the specific record provided) |
| **TXT** | `_dmarc` | `v=DMARC1; p=none;` |

## 3. Verify in Resend
1. After adding the records, wait a few minutes (it can take up to 48 hours, but usually much faster).
2. Click **Verify** in the Resend dashboard.
3. Once the status changes to **Verified**, you're all set!

## 4. Update the `FROM_EMAIL`
Once verified, we will update the `FROM_EMAIL` in `src/lib/mail.ts` from the default `onboarding@resend.dev` to your professional address:
`AI Experts <info@ai-experts.co.il>`

> [!TIP]
> Verified domains have significantly higher deliverability rates and build trust with your users.
