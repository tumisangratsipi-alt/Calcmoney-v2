"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function GsapBatchReveal() {
    const pathname = usePathname();

    useEffect(() => {
        // Find all uninitialized aura panels
        const panels = document.querySelectorAll(".aura-panel");

        // Set initial state explicitly to prevent flash before scrolltrigger kicks in
        gsap.set(panels, { opacity: 0, y: 40 });

        const batch = ScrollTrigger.batch(panels, {
            interval: 0.1,
            batchMax: 4,
            onEnter: (batchElements) => {
                gsap.to(batchElements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    overwrite: true
                });

                // The Mathematical Flex: Dynamically animate Recharts and Data visualizations
                batchElements.forEach((el) => {
                    const chartContainers = (el as HTMLElement).querySelectorAll(".recharts-responsive-container");
                    if (chartContainers.length > 0) {
                        gsap.fromTo(
                            chartContainers,
                            { opacity: 0, y: 30, scale: 0.98 },
                            { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.2, stagger: 0.1 }
                        );
                    }
                });
            },
            onLeaveBack: (batchElements) => {
                gsap.set(batchElements, { opacity: 0, y: 40, overwrite: true });
            },
            start: "top 90%",
        });

        return () => {
            // Cleanup scroll triggers bound to these specific elements on unmount/route change
            batch.forEach(t => t.kill());
        };
    }, [pathname]);

    return null;
}
