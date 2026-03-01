"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// ============================================================
// 1. AURORA MESH GRADIENT  — "This Cost Money" signature
//    Slow-moving color blobs that breathe behind hero sections.
//    Uses CSS classes defined in globals.css.
// ============================================================
export function AuroraBackground({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            <div className="aurora-blob aurora-blob-1" />
            <div className="aurora-blob aurora-blob-2" />
            <div className="aurora-blob aurora-blob-3" />
        </div>
    );
}

// ============================================================
// 2. BORDER BEAM SHIMMER  — light pulse travels around card edge
// ============================================================
export function BorderBeam({
    beamClassName = "",
}: {
    beamClassName?: string;
}) {
    return (
        <div
            className={`pointer-events-none absolute inset-0 rounded-[inherit] ${beamClassName}`}
            style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(13,148,136,0.4) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                animation: "borderBeamMove 2.5s linear infinite",
            }}
        />
    );
}

// ============================================================
// 3. SHIMMER CARD  — glassmorphism card with hover border beam
// ============================================================
export function ShimmerCard({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`relative overflow-hidden rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] transition-all duration-500 cursor-pointer
        hover:border-white/[0.14] hover:bg-white/[0.05] hover:shadow-[0_8px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1 ${className}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {hovered && <BorderBeam />}
            {children}
        </div>
    );
}

// ============================================================
// 4. SCROLL COUNTER  — number counts up as element enters viewport
// ============================================================
export function ScrollCounter({
    target,
    prefix = "",
    suffix = "",
    duration = 1800,
    className = "",
}: {
    target: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
}) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!inView) return;
        const startTime = performance.now();
        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
        };
        requestAnimationFrame(animate);
    }, [inView, target, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

// ============================================================
// 5. MAGNETIC BUTTON  — button follows cursor 30%, snaps back
// ============================================================
export function MagneticButton({
    children,
    className = "",
    strength = 0.25,
    onClick,
}: {
    children: React.ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}) {
    const ref = useRef<HTMLButtonElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        setPos({
            x: (e.clientX - rect.left - rect.width / 2) * strength,
            y: (e.clientY - rect.top - rect.height / 2) * strength,
        });
    };

    return (
        <button
            ref={ref}
            className={className}
            onMouseMove={onMouseMove}
            onMouseLeave={() => setPos({ x: 0, y: 0 })}
            onClick={onClick}
            style={{
                transform: `translate(${pos.x}px, ${pos.y}px)`,
                transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
        >
            {children}
        </button>
    );
}

// ============================================================
// 6. TEXT REVEAL  — text slides up from clip-path mask
// ============================================================
export function TextReveal({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-30px" });

    return (
        <div ref={ref} className="overflow-hidden">
            <div
                className={className}
                style={{
                    transform: inView ? "translateY(0%)" : "translateY(105%)",
                    opacity: inView ? 1 : 0,
                    transition: `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.5s ease ${delay}ms`,
                }}
            >
                {children}
            </div>
        </div>
    );
}

// ============================================================
// 7. STAGGERED GRID  — children stagger in on scroll
// ============================================================
export function StaggeredGrid({
    children,
    className = "",
    staggerMs = 80,
}: {
    children: React.ReactNode[];
    className?: string;
    staggerMs?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className={className}>
            {children.map((child, i) => (
                <div
                    key={i}
                    style={{
                        opacity: inView ? 1 : 0,
                        transform: inView ? "translateY(0px)" : "translateY(28px)",
                        transition: `opacity 0.6s ease ${i * staggerMs}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${i * staggerMs}ms`,
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}

// ============================================================
// 8. SKELETON SHIMMER  — premium left-to-right loading state
// ============================================================
export function SkeletonShimmer({ className = "" }: { className?: string }) {
    return (
        <div className={`relative overflow-hidden rounded-xl bg-white/[0.04] ${className}`}>
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
                    backgroundSize: "200% 100%",
                    animation: "skeletonShimmer 1.5s infinite",
                }}
            />
        </div>
    );
}

// ============================================================
// 9. INPUT GLOW  — input focus with expanding external glow
// ============================================================
export function GlowInput({
    className = "",
    ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={`bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3 text-white placeholder-slate-600 text-sm
        outline-none transition-all duration-300
        focus:border-teal-500/60 focus:shadow-[0_0_0_3px_rgba(13,148,136,0.15),0_0_20px_rgba(13,148,136,0.1)]
        hover:border-white/[0.12] ${className}`}
        />
    );
}
