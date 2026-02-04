
"use client";

import { useState } from 'react';
import { createBooking } from '@/app/actions';
import styles from './BookingWizard.module.css';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export default function BookingWizard({ dict, offering }: { dict: any, offering: any }) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        contactName: '',
        email: '',
        date: '',
        time: '',
        notes: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const calculateTotals = () => {
        const basePrice = offering.price_usd;
        const platformFee = Math.round(basePrice * 0.15);
        const total = basePrice + platformFee;
        return { basePrice, platformFee, total };
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        const { total } = calculateTotals();

        const result = await createBooking({
            ...formData,
            expertId: offering.expert_id,
            offeringId: offering.id,
            price: total
        });

        setIsSubmitting(false);
        if (result.success) {
            setIsSuccess(true);
        } else {
            alert('Something went wrong: ' + result.error);
        }
    };

    const { basePrice, platformFee, total } = calculateTotals();

    if (isSuccess) {
        return (
            <div className={styles.wizardContainer}>
                <div className={styles.card}>
                    <div className={styles.successContainer}>
                        <div className={styles.successIcon}>
                            <CheckCircle size={40} />
                        </div>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>{dict.booking.success.title}</h2>
                        <p style={{ color: '#aaa', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                            {dict.booking.success.message}
                        </p>
                        <button
                            onClick={() => window.location.href = `/${offering.expert.slug}`}
                            className={styles.nextBtn}
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            {dict.booking.success.returnToProfile}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.wizardContainer}>
            <h1 className={styles.title}>{dict.booking.title}</h1>

            {/* Step Indicator */}
            <div className={styles.stepsContainer}>
                <div className={styles.progressBarBackground} />
                <div
                    className={styles.progressBarFill}
                    style={{ width: `min(100%, ${((step - 1) / 3) * 100}%)` }} // Clamp to 100% just in case
                />

                {[1, 2, 3, 4].map((s) => (
                    <div key={s} className={styles.stepWrapper}>
                        <div className={`${styles.stepCircle} ${step >= s ? styles.stepActive : ''} ${step > s ? styles.stepCompleted : ''}`}>
                            {step > s ? <CheckCircle size={20} /> : s}
                        </div>
                        <span className={styles.stepLabel}>Step {s}</span>
                    </div>
                ))}
            </div>

            <div className={styles.card}>
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className={styles.stepTitle}>{dict.booking.steps.offering}</h2>

                        <div className={styles.offeringSummary}>
                            <span style={{ color: '#aaa', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{dict.booking.selectedService}</span>
                            <h3 className={styles.offeringTitle}>{offering.title}</h3>
                            <p style={{ color: '#ccc', lineHeight: '1.6' }}>{offering.description}</p>
                            <div className={styles.offeringPrice}>
                                ${offering.price_usd}
                            </div>
                        </div>

                        <div className={styles.navButtons} style={{ justifyContent: 'flex-end' }}>
                            <button onClick={() => setStep(2)} className={styles.nextBtn}>
                                {dict.booking.continue} <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className={styles.stepTitle}>{dict.booking.steps.dateTime}</h2>
                        <div className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{dict.booking.selectDate}</label>
                                <input
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{dict.booking.selectTime}</label>
                                <input
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleInputChange}
                                    className={styles.input}
                                />
                            </div>
                        </div>
                        <div className={styles.navButtons}>
                            <button onClick={() => setStep(1)} className={styles.backBtn}>
                                <ArrowLeft size={16} style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> {dict.booking.back}
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                disabled={!formData.date || !formData.time}
                                className={styles.nextBtn}
                            >
                                {dict.booking.continue} <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className={styles.stepTitle}>{dict.booking.steps.details}</h2>
                        <div className={styles.formGrid}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{dict.booking.companyBooking}</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    placeholder={dict.booking.companyBooking}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{dict.booking.contactPerson}</label>
                                <input
                                    type="text"
                                    name="contactName"
                                    value={formData.contactName}
                                    onChange={handleInputChange}
                                    placeholder={dict.booking.contactPerson}
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{dict.booking.emailAddress}</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="name@company.com"
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>{dict.booking.additionalNotes}</label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    placeholder={dict.booking.notesPlaceholder}
                                    className={`${styles.input} ${styles.textarea}`}
                                />
                            </div>
                        </div>
                        <div className={styles.navButtons}>
                            <button onClick={() => setStep(2)} className={styles.backBtn}>
                                <ArrowLeft size={16} style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> {dict.booking.back}
                            </button>
                            <button
                                onClick={() => setStep(4)}
                                disabled={!formData.companyName || !formData.contactName || !formData.email}
                                className={styles.nextBtn}
                            >
                                {dict.booking.reviewQuote} <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className={styles.stepTitle}>{dict.booking.steps.review}</h2>

                        <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
                            <div className={styles.costRow}>
                                <span>{dict.booking.basePrice}</span>
                                <span style={{ color: 'white' }}>${basePrice}</span>
                            </div>
                            <div className={styles.costRow}>
                                <span>{dict.booking.platformFee} (15%)</span>
                                <span style={{ color: 'white' }}>${platformFee}</span>
                            </div>
                            <div className={styles.costTotal}>
                                <span>{dict.booking.total}</span>
                                <span style={{ color: 'var(--primary)' }}>${total}</span>
                            </div>
                        </div>

                        <div className={styles.navButtons}>
                            <button onClick={() => setStep(3)} className={styles.backBtn}>
                                <ArrowLeft size={16} style={{ marginRight: '0.5rem', display: 'inline', verticalAlign: 'middle' }} /> {dict.booking.back}
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={styles.nextBtn}
                                style={{ width: '100%', justifyContent: 'center' }}
                            >
                                {isSubmitting ? 'Processing...' : dict.booking.payAndBook}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
