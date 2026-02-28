"use client";

import { Info } from "lucide-react";
import Image from "next/image";

import { Card as ShadcnCard } from "@/components/ui/card";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Label as ShadcnLabel } from "@/components/ui/label";

// Integrated Shadcn UI Components wrapped with $10M SaaS Aesthetics
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => <ShadcnCard className={`aura-panel border-none relative bg-[#090B14]/40 backdrop-blur-2xl ring-1 ring-white/[0.04] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden ${className || ""}`}>{children}</ShadcnCard>;
const Input = ({ label, value, bg = "bg-white/5", prefix, suffix }: { label: string, value: string, bg?: string, prefix?: string, suffix?: string }) => (
    <div className="mb-6 relative z-10">
        <ShadcnLabel className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-3 pl-1">{label}</ShadcnLabel>
        <div className="relative group">
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-red-400 transition-colors z-10">{prefix}</span>}
            {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-red-400 transition-colors z-10">{suffix}</span>}
            <ShadcnInput aria-label={label} title={label} type="text" value={value} readOnly className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-red-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`} />
        </div>
    </div>
);

export default function Runway() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-1/3 h-96 bg-red-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-14 h-14 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center shadow-inner shadow-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-red-500/20 blur-md"></div>
                            <Image src="/images/icons/calcmoney_icon_emergency.png" alt="Runway Burn" width={28} height={28} className="relative z-10" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">Startup Runway.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                        Calculate exact operational months remaining until corporate insolvency based on average monthly burn rate and liquid reserves.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    <div className="lg:col-span-4 space-y-8 relative z-10">
                        <Card className="bg-gradient-to-b from-white/[0.03] to-transparent">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 blur-[80px] rounded-full pointer-events-none" />

                            <h2 className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-6 border-b border-white/[0.04] pb-4 relative z-10">Treasury Metrics</h2>
                            <Input label="Liquid Cash Equivalent Balance" value="850,000" prefix="$" bg="bg-black/40" />
                            <Input label="Average Monthly Fixed Costs" value="125,000" prefix="$" bg="bg-black/40" />
                            <Input label="Average Monthly MRR / Revenue" value="40,000" prefix="$" bg="bg-black/40" />

                            <button className="relative z-10 w-full bg-red-600/90 text-white py-4 mt-6 text-sm font-bold tracking-wide hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-colors rounded-lg">
                                RESOLVE INSOLVENCY DATE
                            </button>
                        </Card>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        <div className="bg-[#05060A]/80 border border-white/[0.05] p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-red-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
                            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-end">
                                <div className="md:col-span-2">
                                    <p className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-white/[0.04] pb-4">
                                        <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
                                        Absolute Survival Target
                                    </p>
                                    <h3 className="text-slate-500 text-xs tracking-widest uppercase font-medium mb-3">Time Until Default</h3>
                                    <div className="text-5xl sm:text-7xl font-mono text-white tracking-tighter drop-shadow-2xl">10.0<span className="text-2xl text-red-400/50 block mt-2 text-lg tracking-widest uppercase">Months</span></div>
                                </div>
                                <div className="pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/[0.04] md:pl-8">
                                    <h3 className="text-red-200/50 text-xs font-bold uppercase tracking-widest mb-3 mt-1">Net Monthly Burn</h3>
                                    <div className="text-4xl sm:text-5xl font-mono text-red-400 tracking-tight drop-shadow-md">-$85<span className="text-2xl text-red-600/50">K</span></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
