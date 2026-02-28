"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
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
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-teal-400 transition-colors z-10">{prefix}</span>}
            {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-teal-400 transition-colors z-10">{suffix}</span>}
            <ShadcnInput aria-label={label} title={label} type="text" value={value} readOnly className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-teal-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`} />
        </div>
    </div>
);

// Mock Data for the Chart
const data = Array.from({ length: 30 }).map((_, i) => ({
    year: `Year ${i + 1}`,
    current: Math.round(180000 - (180000 * (i / 30))),
    refinanced: Math.round(180000 - (180000 * (i / 20))),
}));

export default function MortgageRefinance() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* Ambient Deep Space Grid & Volumetric Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-1/3 h-96 bg-teal-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-14 h-14 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center shadow-inner shadow-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-teal-500/20 blur-md"></div>
                            <Image src="/images/icons/calcmoney_icon_mortgage.png" alt="Mortgage Refinance" width={28} height={28} className="relative z-10" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">Mortgage Refinance.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                        Calculate exactly when the break-even point occurs. Model interest savings against closing costs to determine if refinancing is mathematically optimal.
                    </p>
                </div>
            </div>

            {/* 2-Column Terminal Layout */}
            <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Panel: Inputs */}
                    <div className="lg:col-span-4 space-y-8 relative z-10">
                        <Card className="bg-gradient-to-b from-white/[0.03] to-transparent">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none" />

                            <h2 className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-6 border-b border-white/[0.04] pb-4 relative z-10">Current Mortgage</h2>
                            <Input label="Remaining Balance" value="320,000" prefix="$" bg="bg-black/40" />
                            <Input label="Current Interest Rate" value="6.5" suffix="%" bg="bg-black/40" />
                            <Input label="Remaining Term" value="26" suffix="Years" bg="bg-black/40" />

                            <h2 className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-6 mt-8 border-b border-white/[0.04] pb-4 relative z-10">New Mortgage</h2>
                            <Input label="New Interest Rate" value="5.25" suffix="%" bg="bg-black/40" />
                            <Input label="New Term" value="30" suffix="Years" bg="bg-black/40" />
                            <Input label="Estimated Closing Costs" value="6,500" prefix="$" bg="bg-black/40" />

                            <button className="relative z-10 w-full bg-teal-600/90 text-white py-4 mt-6 text-sm font-bold tracking-wide hover:bg-teal-500 shadow-[0_0_20px_rgba(13,148,136,0.2)] transition-colors rounded-lg">
                                EXECUTE REFINANCE MODEL
                            </button>
                        </Card>
                    </div>

                    {/* Right Panel: Output & Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        {/* Terminal Top Box */}
                        <div className="bg-[#05060A]/80 border border-white/[0.05] p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
                            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-end">
                                <div className="md:col-span-2">
                                    <p className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-white/[0.04] pb-4">
                                        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.6)]"></div>
                                        Model Resolved
                                    </p>
                                    <h3 className="text-slate-500 text-xs tracking-widest uppercase font-medium mb-3">Lifetime Interest Savings</h3>
                                    <div className="text-5xl sm:text-7xl font-mono text-white tracking-tighter drop-shadow-2xl">$42,391<span className="text-2xl text-teal-400/50">.00</span></div>
                                </div>
                                <div className="pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/[0.04] md:pl-8">
                                    <h3 className="text-teal-200/50 text-xs font-bold uppercase tracking-widest mb-3 mt-1">Break-Even Point</h3>
                                    <div className="text-4xl sm:text-5xl font-mono text-teal-400 tracking-tight drop-shadow-md">3<span className="text-2xl text-teal-600/50">.8 Yrs</span></div>
                                    <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wide">46 Months</p>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <Card>
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.04]">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                    Amortization Trajectory Comparison
                                    <Info className="w-4 h-4 text-slate-500" />
                                </h3>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400"><div className="w-2 h-2 bg-slate-600 rounded-full"></div> Current Loan</div>
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400"><div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div> Refinanced</div>
                                </div>
                            </div>
                            <div className="h-[350px] w-full mt-4">
                                <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1} aspect={undefined}>
                                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} minTickGap={2} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value) => `$${value / 1000}k`} dx={-10} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(12px)' }}
                                            itemStyle={{ color: '#fff', fontSize: '14px', fontFamily: 'monospace' }}
                                        />
                                        <Area type="monotone" dataKey="current" stroke="#475569" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                                        <Area type="monotone" dataKey="refinanced" stroke="#0D9488" strokeWidth={3} fill="#14B8A6" fillOpacity={0.10} />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}
