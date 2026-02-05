'use client';

import { useEffect, useRef } from 'react';

export default function StarsBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Star particles
        interface Star {
            x: number;
            y: number;
            z: number;
            px: number;
            py: number;
            color: string;
        }

        const stars: Star[] = [];
        const numStars = 800;
        const speed = 0.5;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        // Color palette inspired by Google (blue, red, yellow, green)
        const colors = [
            '#4285f4', // Google Blue
            '#ea4335', // Google Red
            '#fbbc04', // Google Yellow
            '#34a853', // Google Green
            '#a5b4fc', // Light Purple
            '#ec4899', // Pink
        ];

        // Initialize stars
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * canvas.width - centerX,
                y: Math.random() * canvas.height - centerY,
                z: Math.random() * 1000,
                px: 0,
                py: 0,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.fillStyle = 'rgba(10, 10, 15, 0.15)'; // Trail effect
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                // Move star forward
                star.z -= speed;

                // Reset star if it goes past the camera
                if (star.z <= 0) {
                    star.z = 1000;
                    star.x = Math.random() * canvas.width - centerX;
                    star.y = Math.random() * canvas.height - centerY;
                    star.color = colors[Math.floor(Math.random() * colors.length)];
                }

                // Project 3D position to 2D
                const k = 128 / star.z;
                const px = star.x * k + centerX;
                const py = star.y * k + centerY;

                // Calculate star size based on depth
                const size = (1 - star.z / 1000) * 3;

                // Draw star trail
                if (star.px !== 0 && star.py !== 0) {
                    ctx.strokeStyle = star.color;
                    ctx.lineWidth = size;
                    ctx.beginPath();
                    ctx.moveTo(star.px, star.py);
                    ctx.lineTo(px, py);
                    ctx.stroke();
                }

                // Draw star
                ctx.fillStyle = star.color;
                ctx.beginPath();
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fill();

                // Store previous position
                star.px = px;
                star.py = py;
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
            }}
        />
    );
}
