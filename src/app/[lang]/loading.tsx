
"use client";

export default function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      background: '#0a0a0a',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      <div className="loader-emerald"></div>
      <style jsx>{`
        .loader-emerald {
          width: 48px;
          height: 48px;
          border: 3px solid rgba(16, 185, 129, 0.3);
          border-radius: 50%;
          border-top-color: #10b981;
          animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
