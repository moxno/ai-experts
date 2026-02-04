
"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEsc);
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                backdropFilter: "blur(5px)",
                zIndex: 1000,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem",
                animation: "fadeIn 0.2s ease-out"
            }}
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                className="glass-panel"
                style={{
                    width: "100%",
                    maxWidth: "500px",
                    background: "rgba(30, 30, 30, 0.8)",
                    borderRadius: "1rem",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                    position: "relative",
                    animation: "scaleIn 0.2s ease-out",
                    maxHeight: "90vh",
                    overflowY: "auto"
                }}
            >
                <div
                    style={{
                        padding: "1.5rem",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}
                >
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: 0, color: "white" }}>
                        {title}
                    </h3>
                    <button
                        onClick={onClose}
                        style={{
                            background: "rgba(255, 255, 255, 0.1)",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                            padding: "0.5rem",
                            borderRadius: "50%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.2s",
                            marginLeft: "1rem"
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>
                </div>
                <div style={{ padding: "1.5rem" }}>
                    {children}
                </div>
            </div>
            <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </div>
    );
}
