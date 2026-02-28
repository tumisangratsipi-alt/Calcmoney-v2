"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface AnimatedCounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
    duration?: number;
    splitClass?: string; // e.g. "text-3xl text-teal-200/50" for the decimals or commas
    splitType?: "decimals" | "thousands";
}

export function AnimatedCounter({
    value,
    prefix = "",
    suffix = "",
    decimals = 0,
    duration = 1.5,
    splitClass,
    splitType = "thousands"
}: AnimatedCounterProps) {
    const containerRef = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const obj = { val: 0 };

        gsap.to(obj, {
            val: value,
            duration: duration,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 90%",
            },
            onUpdate: () => {
                if (!containerRef.current) return;

                const numStr = Number(obj.val.toFixed(decimals)).toLocaleString('en-US', {
                    minimumFractionDigits: decimals,
                    maximumFractionDigits: decimals
                });

                if (splitClass) {
                    if (splitType === "decimals" && numStr.includes(".")) {
                        const [whole, dec] = numStr.split(".");
                        containerRef.current.innerHTML = `${prefix}${whole}<span class="${splitClass}">.${dec}</span>${suffix}`;
                    } else if (splitType === "thousands") {
                        // simple split for last 3 digits or commas
                        const lastCommaIndex = numStr.lastIndexOf(",");
                        if (lastCommaIndex !== -1) {
                            const firstPart = numStr.substring(0, lastCommaIndex);
                            const lastPart = numStr.substring(lastCommaIndex);
                            containerRef.current.innerHTML = `${prefix}${firstPart}<span class="${splitClass}">${lastPart}</span>${suffix}`;
                        } else {
                            containerRef.current.innerHTML = `${prefix}${numStr}${suffix}`;
                        }
                    }
                } else {
                    containerRef.current.innerHTML = `${prefix}${numStr}${suffix}`;
                }
            }
        });

    }, { dependencies: [value], scope: containerRef });

    return (
        <span ref={containerRef}>
            {prefix}0{decimals > 0 ? '.' + '0'.repeat(decimals) : ''}{suffix}
        </span>
    );
}
