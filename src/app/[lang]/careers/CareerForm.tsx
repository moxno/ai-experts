
"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Send, Loader2, UploadCloud } from "lucide-react";
import { submitApplication } from "./actions";

export default function CareerForm({ dict }: { dict: any }) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [fileName, setFileName] = useState("");

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("loading");

        const formData = new FormData(event.currentTarget);
        // Additional client-side validation for file size if needed, but server handles it too

        const result = await submitApplication(formData);

        if (result.success) {
            setStatus("success");
            (event.target as HTMLFormElement).reset();
            setFileName("");
        } else {
            setStatus("error");
            setErrorMessage(result.error || dict.careersPage.form.error);
        }
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <div className={styles.formCard}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h2 className={styles.formTitle}>{dict.careersPage.form.title}</h2>
                <p style={{ color: '#aaa' }}>{dict.careersPage.form.subtitle}</p>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>{dict.careersPage.form.name}</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className={styles.input}
                        placeholder={dict.careersPage.form.name}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>{dict.careersPage.form.email}</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className={styles.input}
                        placeholder={dict.careersPage.form.email}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>{dict.careersPage.form.linkedin}</label>
                    <input
                        type="url"
                        name="linkedin"
                        required
                        className={styles.input}
                        placeholder="https://linkedin.com/in/..."
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>{dict.careersPage.form.expertise}</label>
                    <input
                        type="text"
                        name="expertise"
                        required
                        className={styles.input}
                        placeholder={dict.careersPage.form.expertise}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>{dict.careersPage.form.cv}</label>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="file"
                            name="cv"
                            id="cv-upload"
                            accept=".pdf,.doc,.docx"
                            className={styles.fileInput}
                            style={{ opacity: 0, position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 10 }}
                            onChange={handleFileChange}
                        />
                        <div className={styles.input} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
                            <UploadCloud size={20} />
                            <span>{fileName || dict.careersPage.form.cv}</span>
                        </div>
                    </div>
                </div>

                {status === "success" && (
                    <div className={styles.successMessage}>
                        {dict.careersPage.form.success}
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
                    disabled={status === "loading" || status === "success"}
                >
                    {status === "loading" ? (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <Loader2 className="animate-spin" size={20} />
                            <span>...</span>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <Send size={18} />
                            <span>{dict.careersPage.form.submit}</span>
                        </div>
                    )}
                </button>
            </form>
        </div>
    );
}
