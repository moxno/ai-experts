
"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Send, Loader2 } from "lucide-react";
import { sendContactEmail } from "./actions";

export default function ContactFormClient({ dict }: { dict: any }) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("loading");

        const formData = new FormData(event.currentTarget);
        const result = await sendContactEmail(formData);

        if (result.success) {
            setStatus("success");
            (event.target as HTMLFormElement).reset();
        } else {
            setStatus("error");
            setErrorMessage(result.error || dict.contact.form.error);
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
                <label className={styles.label}>{dict.contact.form.name}</label>
                <input
                    type="text"
                    name="name"
                    required
                    className={styles.input}
                    placeholder={dict.contact.form.name}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>{dict.contact.form.email}</label>
                <input
                    type="email"
                    name="email"
                    required
                    className={styles.input}
                    placeholder={dict.contact.form.email}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>{dict.contact.form.subject}</label>
                <input
                    type="text"
                    name="subject"
                    className={styles.input}
                    placeholder={dict.contact.form.subject}
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>{dict.contact.form.message}</label>
                <textarea
                    name="message"
                    required
                    className={styles.textarea}
                    placeholder={dict.contact.form.message}
                />
            </div>

            {status === "success" && (
                <div className={styles.successMessage}>
                    {dict.contact.form.success}
                </div>
            )}

            {status === "error" && (
                <div className={styles.errorMessage}>
                    {errorMessage}
                </div>
            )}

            <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "loading"}
            >
                {status === "loading" ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <Loader2 className="animate-spin" size={20} />
                        <span>...</span>
                    </div>
                ) : (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <Send size={18} />
                        <span>{dict.contact.form.submit}</span>
                    </div>
                )}
            </button>
        </form>
    );
}
