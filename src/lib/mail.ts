
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = 'AI Experts <noreply@ai-experts.co.il>';

export async function sendEmail({
    to,
    subject,
    html,
    replyTo,
    attachments
}: {
    to: string | string[],
    subject: string,
    html: string,
    replyTo?: string,
    attachments?: any[]
}) {
    if (!process.env.RESEND_API_KEY) {
        console.warn("⚠️ RESEND_API_KEY not set. Simulating email send.");
        return { success: true, simulated: true };
    }

    try {
        const emailData: any = {
            from: FROM_EMAIL,
            to: Array.isArray(to) ? to : [to],
            subject,
            html,
        };

        if (replyTo) {
            emailData.reply_to = replyTo;
        }

        if (attachments && attachments.length > 0) {
            emailData.attachments = attachments.map((att: any) => ({
                filename: att.filename,
                content: att.content,
            }));
        }

        const { data, error } = await resend.emails.send(emailData);

        if (error) {
            console.error("❌ Resend error:", error);
            return { success: false, error: error.message };
        }

        return { success: true, messageId: data?.id };
    } catch (err: any) {
        console.error("❌ Email sending error:", err.message);
        console.error("❌ Error details:", err);
        return { success: false, error: err.message };
    }
}

// Marketplace Specific Templates

export async function notifyAdminOfNewTask(task: any, lang: 'he' | 'en') {
    const adminEmail = 'ilsimox@gmail.com'; // Hardcoded for now based on user context
    const subject = `[Admin] משימה חדשה ממתינה לאישור: ${task.title}`;

    const html = `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
            <h2>שלום אדמין, משימה חדשה התקבלה!</h2>
            <p><strong>כותרת:</strong> ${task.title}</p>
            <p><strong>לקוח:</strong> ${task.client_name || 'לא צוין'} (${task.client_email})</p>
            <p><strong>תקציב:</strong> ${task.budget_range}</p>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <p>${task.description.substring(0, 300)}...</p>
            </div>
            <p>
                <a href="https://ai-experts.co.il/he/admin/tasks" style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">מעבר לממשק ניהול לאישור/דחייה</a>
            </p>
        </div>
    `;

    return sendEmail({ to: adminEmail, subject, html });
}

export async function notifyClientOfTaskReceived(clientEmail: string, clientName: string, task: any, lang: 'he' | 'en') {
    const isHe = lang === 'he';
    const subject = isHe
        ? `המשימה שלך התקבלה וממתינה לאישור: ${task.title}`
        : `Task Received: ${task.title}`;

    const html = isHe ? `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
            <h2>היי ${clientName}, המשימה שלך התקבלה בהצלחה!</h2>
            <p>תודה שפרסמת משימה ב-AI Experts. המערכת שלנו בודקת כעת את הפרטים כדי לוודא עמידה בתנאי השימוש.</p>
            <p>ברגע שהמשימה תאושר, היא תופץ למומחים המתאימים ביותר.</p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>${task.title}</strong>
            </div>
            <p>נשלח לך עדכון במייל ברגע שהמשימה תפורסם.</p>
            <p>בברכה,<br>צוות AI Experts</p>
        </div>
    ` : `
        <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>Hi ${clientName}, your task has been received!</h2>
            <p>Thanks for posting on AI Experts. We are currently reviewing your task to ensure it meets our guidelines.</p>
            <p>Once approved, it will be distributed to relevant experts.</p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 15px 0;">
                <strong>${task.title}</strong>
            </div>
            <p>We'll notify you once it's live.</p>
            <p>Best regards,<br>The AI Experts Team</p>
        </div>
    `;

    return sendEmail({ to: clientEmail, subject, html });
}

export async function notifyExpertOfNewTask(expertEmail: string, expertName: string, task: any, lang: 'he' | 'en') {
    const isHe = lang === 'he';
    const subject = isHe
        ? `משימת AI חדשה עבורך: ${task.title}`
        : `New AI Task for you: ${task.title}`;

    const html = isHe ? `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
            <h2>היי ${expertName}, משימת AI חדשה פורסמה בלוח!</h2>
            <p>מצאנו משימה חדשה שמתאימה להתמחויות שלך:</p>
            <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">${task.title}</h3>
                <p>${task.description.substring(0, 200)}...</p>
                <p><strong>תקציב:</strong> ${task.budget_range}</p>
            </div>
            <p>
                <a href="https://ai-experts.co.il/he/tasks/${task.slug}" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">צפייה בפרטים והגשת הצעה</a>
            </p>
            <p style="color: #666; font-size: 0.8rem; margin-top: 40px;">הודעה זו נשלחה אליך כי אתה רשום כמומחה ב-AI Experts.</p>
        </div>
    ` : `
        <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>Hi ${expertName}, a new AI task has been posted!</h2>
            <p>We found a new task that matches your specializations:</p>
            <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="margin-top: 0;">${task.title}</h3>
                <p>${task.description.substring(0, 200)}...</p>
                <p><strong>Budget:</strong> ${task.budget_range}</p>
            </div>
            <p>
                <a href="https://ai-experts.co.il/en/tasks/${task.slug}" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">View Details & Submit Bid</a>
            </p>
            <p style="color: #666; font-size: 0.8rem; margin-top: 40px;">This email was sent to you because you are registered as an expert on AI Experts.</p>
        </div>
    `;

    return sendEmail({ to: expertEmail, subject, html });
}

export async function notifyClientOfNewBid(clientEmail: string, clientName: string, taskTitle: string, expertName: string, bid: any, lang: 'he' | 'en') {
    const isHe = lang === 'he';
    const subject = isHe
        ? `הצעה חדשה למשימה שלך: ${taskTitle}`
        : `New bid for your task: ${taskTitle}`;

    const html = isHe ? `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
            <h2>היי ${clientName}, יש לך הצעה חדשה!</h2>
            <p>המומחה <strong>${expertName}</strong> הגיש הצעה למשימה "<strong>${taskTitle}</strong>".</p>
            <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>סכום ההצעה:</strong> ₪${bid.amount.toLocaleString()}</p>
                <p><strong>הודעה מהמומחה:</strong></p>
                <p>${bid.message.replace(/\n/g, '<br>')}</p>
            </div>
            <p>
                <a href="https://ai-experts.co.il/he/dashboard" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">צפייה בהצעה ויצירת קשר</a>
            </p>
        </div>
    ` : `
        <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>Hi ${clientName}, you have a new bid!</h2>
            <p>Expert <strong>${expertName}</strong> has submitted a bid for your task "<strong>${taskTitle}</strong>".</p>
            <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Proposed Amount:</strong> ₪${bid.amount.toLocaleString()}</p>
                <p><strong>Message from Expert:</strong></p>
                <p>${bid.message.replace(/\n/g, '<br>')}</p>
            </div>
            <p>
                <a href="https://ai-experts.co.il/en/dashboard" style="background: #6366f1; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">View Bid & Contact Expert</a>
            </p>
        </div>
    `;

    return sendEmail({ to: clientEmail, subject, html });
}

export async function notifyExpertOfAcceptedBid(expertEmail: string, expertName: string, task: any, bid: any, clientEmail: string, lang: 'he' | 'en') {
    const isHe = lang === 'he';
    const subject = isHe
        ? `חדשות מצוינות! הצעתך אושרה ב-AI Experts 🎉`
        : `Great news! Your bid was accepted on AI Experts 🎉`;

    const html = isHe ? `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
            <p>שלום ${expertName},</p>
            <p>הלקוח אישר את הצעתך עבור הפרויקט: <strong>${task.title}</strong>.</p>
            
            <p><strong>פרטי הלקוח ליצירת קשר:</strong></p>
            <ul>
                <li><strong>שם הלקוח:</strong> ${task.client_name || 'לקוח'}</li>
                <li><strong>אימייל:</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></li>
                ${task.client_company ? `<li><strong>חברה:</strong> ${task.client_company}</li>` : ''}
            </ul>

            <p><strong>הצעדים הבאים:</strong></p>
            <ol>
                <li>צור קשר עם הלקוח לתיאום תחילת עבודה.</li>
                <li>הסדירו את התשלום ישירות ביניכם (האתר אינו צד בעסקה).</li>
            </ol>

            <p><strong>עבודה מהנה!</strong></p>
        </div>
    ` : `
        <div style="font-family: sans-serif; line-height: 1.6;">
            <p>Hi ${expertName},</p>
            <p>The client has accepted your bid for the project: <strong>${task.title}</strong>.</p>
            
            <p><strong>Client Contact Information:</strong></p>
            <ul>
                <li><strong>Client Name:</strong> ${task.client_name || 'Client'}</li>
                <li><strong>Email:</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></li>
                ${task.client_company ? `<li><strong>Company:</strong> ${task.client_company}</li>` : ''}
            </ul>

            <p><strong>Next Steps:</strong></p>
            <ol>
                <li>Contact the client to coordinate the start of work.</li>
                <li>Arrange payment directly between yourselves (the site is not a party to the transaction).</li>
            </ol>

            <p><strong>Enjoy the project!</strong></p>
        </div>
    `;

    return sendEmail({ to: expertEmail, subject, html });
}

export async function notifyClientOfAcceptedBid(clientEmail: string, clientName: string, task: any, bid: any, expertEmail: string, expertName: string, lang: 'he' | 'en') {
    const isHe = lang === 'he';
    const subject = isHe
        ? `לחיצת יד! המומחה לפרויקט שלך אושר 🤝`
        : `Handshake! Your project expert has been confirmed 🤝`;

    const html = isHe ? `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
            <p>שלום ${clientName},</p>
            <p>אישרת את הצעתו של <strong>${expertName}</strong> עבור הפרויקט: <strong>${task.title}</strong>.</p>
            
            <p><strong>פרטי ההתקשרות של המומחה:</strong></p>
            <ul>
                <li><strong>אימייל:</strong> <a href="mailto:${expertEmail}">${expertEmail}</a></li>
                <li><strong>מחיר סגירה:</strong> ₪${bid.amount.toLocaleString()}</li>
            </ul>

            <p>מעכשיו, תוכלו להמשיך את התקשורת והתשלום ישירות ביניכם ללא מעורבות האתר.</p>
            <p><strong>בהצלחה בפרויקט!</strong></p>
        </div>
    ` : `
        <div style="font-family: sans-serif; line-height: 1.6;">
            <p>Hi ${clientName},</p>
            <p>You have accepted the bid from <strong>${expertName}</strong> for the project: <strong>${task.title}</strong>.</p>
            
            <p><strong>Expert Contact Information:</strong></p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:${expertEmail}">${expertEmail}</a></li>
                <li><strong>Closing Price:</strong> ₪${bid.amount.toLocaleString()}</li>
            </ul>

            <p>From now on, you can continue communication and payment directly between yourselves without the involvement of the site.</p>
            <p><strong>Good luck with the project!</strong></p>
        </div>
    `;

    return sendEmail({ to: clientEmail, subject, html });
}

export async function notifyExpertOfNewMessage(expertEmail: string, expertName: string, clientName: string, messageSubject: string, messageBody: string, replyToEmail: string, lang: 'he' | 'en') {
    const isHe = lang === 'he';
    const subject = isHe
        ? `הודעה חדשה מ-${clientName}: ${messageSubject}`
        : `New message from ${clientName}: ${messageSubject}`;

    const html = isHe ? `
        <div dir="rtl" style="font-family: sans-serif; line-height: 1.6;">
            <h2>היי ${expertName}, יש לך הודעה חדשה!</h2>
            <p>הלקוח <strong>${clientName}</strong> שלח לך הודעה דרך הפלטפורמה:</p>
            
            <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0; border-right: 4px solid #6366f1;">
                <h3 style="margin-top: 0;">${messageSubject}</h3>
                <p style="white-space: pre-wrap;">${messageBody}</p>
            </div>

            <p>כדי להשיב, פשוט לחץ על "השב" (Reply) באימייל זה. התשובה תגיע ישירות ללקוח.</p>
            
            <p style="color: #666; font-size: 0.85rem; margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px;">
                הודעה זו נשלחה דרך מערכת AI Experts. אל תשתף מידע רגיש או פרטי תשלום לפני סגירת חוזה מסודר.
            </p>
        </div>
    ` : `
        <div style="font-family: sans-serif; line-height: 1.6;">
            <h2>Hi ${expertName}, you have a new message!</h2>
            <p>Client <strong>${clientName}</strong> sent you a message via the platform:</p>
            
            <div style="background: #f4f4f4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6366f1;">
                <h3 style="margin-top: 0;">${messageSubject}</h3>
                <p style="white-space: pre-wrap;">${messageBody}</p>
            </div>

            <p>To reply, simply click "Reply" in your email client. Your response will go directly to the client.</p>
            
            <p style="color: #666; font-size: 0.85rem; margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px;">
                This message was sent via AI Experts system. Do not share sensitive info or payment details before a contract is signed.
            </p>
        </div>
    `;

    return sendEmail({
        to: expertEmail,
        subject,
        html,
        replyTo: replyToEmail // Crucial: Allows direct reply
    });
}
