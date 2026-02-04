
"use client"

import { signIn } from "next-auth/react"
import { Chrome } from "lucide-react"
import { useParams } from "next/navigation"

export default function GoogleButton({ label }: { label: string }) {
    const params = useParams();
    const lang = params?.lang || 'he';

    return (
        <button
            onClick={() => signIn("google", { callbackUrl: `/${lang}/dashboard` })}
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                background: 'white',
                color: '#000',
                padding: '1rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
            <Chrome size={20} />
            {label}
        </button>
    )
}
