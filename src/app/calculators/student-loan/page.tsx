"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { Info, GraduationCap, TrendingDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Card as ShadcnCard } from "@/components/ui/card";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Label as ShadcnLabel } from "@/components/ui/label";

// Integrated Shadcn UI Components wrapped with $10M SaaS Aesthetics
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <ShadcnCard className={`aura-panel border-none relative bg-[#090B14]/40 backdrop-blur-2xl ring-1 ring-white/[0.04] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden ${className || ""}`}>
        {children}
    </ShadcnCard>
);

const Input = ({ label, value, bg = "bg-white/5", prefix, suffix }: { label: string, value: string, bg?: string, prefix?: string, suffix?: string }) => (
    <div className="mb-6 relative z-10">
        <ShadcnLabel className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-3 pl-1">{label}</ShadcnLabel>
        <div className="relative group">
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-emerald-400 transition-colors z-10">{prefix}</span>}
            <ShadcnInput
                aria-label={label}
                title={label}
                type="text"
                value={value}
                readOnly
                className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-emerald-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`}
            />
            {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 z-10">{suffix}</span>}
        </div>
    </div>
);

// Mock Data for Area Chart (Standard vs Accelerated Payoff)
const data = Array.from({ length: 11 }).map((_, i) => {
    const year = i * 1;
    let standardBalance = 50000 - (i * 5000);
    if (standardBalance < 0) standardBalance = 0;

    let acceleratedBalance = 50000 - (i * 7500);
    if (acceleratedBalance < 0) acceleratedBalance = 0;

    return {
        year: `Year ${year}`,
        standard: standardBalance,
        accelerated: acceleratedBalance,
    };
});

export default function StudentLoanCalculator() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* Ambient Deep Space Grid & Volumetric Glows (Emerald hue for education/growth) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-1/2 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shadow-inner shadow-white/5">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-lg">Student Loan Optimizer.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                        Calculate educational investment payoff strategies. Visualize standard vs. accelerated timelines and absolute interest savings.
                    </p>
                </div>
            </div>

            {/* 2-Column Terminal Layout */}
            <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Panel: Dense Inputs */}
                    <div className="lg:col-span-4 relative z-10">
                        <Card className="bg-gradient-to-b from-white/[0.03] to-transparent h-full border-t border-emerald-500/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />

                            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest mt-2 mb-6 border-b border-white/[0.04] pb-4 flex items-center gap-2">
                                <TrendingDown className="w-4 h-4" /> Debt Parameters
                            </h2>

                            <Input label="Current Loan Balance" value="50,000" prefix="$" bg="bg-black/40" />
                            <Input label="Interest Rate (Weighted)" value="5.80" suffix="%" bg="bg-black/40" />
                            <Input label="Remaining Term" value="10" suffix="Years" bg="bg-black/40" />

                            <h2 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-8 mb-6 border-b border-white/[0.04] pb-4">
                                Acceleration Strategy
                            </h2>

                            <Input label="Additional Monthly Payment" value="250" prefix="$" bg="bg-white/[0.02] text-slate-400" />

                            <button className="relative z-10 w-full bg-emerald-600/90 text-white py-4 mt-8 text-sm font-bold tracking-wide hover:bg-emerald-500 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)] rounded-lg flex items-center justify-center gap-2">
                                OPTIMIZE PAYOFF PLAN <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Card>
                    </div>

                    {/* Right Panel: Data Output & Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        {/* Thermal Core: Highlighted Output */}
                        <div className="bg-[#05060A]/80 border border-emerald-500/20 p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.1)] backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

                            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-3 relative z-10">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                                Acceleration Verdict
                            </p>

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end">
                                <div>
                                    <h3 className="text-slate-400 text-xs tracking-widest uppercase font-medium mb-4">Time Saved</h3>
                                    <div className="text-6xl sm:text-7xl font-mono font-bold text-white tracking-tighter drop-shadow-2xl">
                                        3<span className="text-3xl text-emerald-400 mr-2">y</span> 8<span className="text-3xl text-emerald-400">mo</span>
                                    </div>
                                    <p className="text-slate-500 font-mono mt-4">New Payoff Date: <span className="text-white">Aug 2030</span></p>
                                </div>
                                <div className="space-y-6 border-t md:border-t-0 md:border-l border-white/[0.04] pt-8 md:pt-0 md:pl-12">
                                    <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 rounded-xl border border-white/[0.04] shadow-inner mb-4 flex flex-col justify-center h-[90px]">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Standard Interest Paid</p>
                                        <p className="text-2xl font-mono text-slate-300 line-through decoration-rose-500/50">$15,989.04</p>
                                    </div>
                                    <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 rounded-xl border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex flex-col justify-center h-[90px]">
                                        <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">New Total Interest</p>
                                        <p className="text-3xl font-mono text-emerald-400">$9,521<span className="text-lg text-emerald-400/50">.18</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart */}
                        <Card>
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.04]">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                    Standard vs. Accelerated Timeline
                                    <Info className="w-4 h-4 text-slate-500" />
                                </h3>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400"><div className="w-2 h-2 bg-slate-600 rounded-full"></div> Standard Balance</div>
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400"><div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div> Accelerated Balance</div>
                                </div>
                            </div>
                            <div className="h-[300px] w-full mt-4">
                                <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1} aspect={undefined}>
                                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} minTickGap={2} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value) => `$${value / 1000}k`} dx={-10} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(12px)' }}
                                            itemStyle={{ color: '#fff', fontSize: '14px', fontFamily: 'monospace' }}
                                        />
                                        <Area type="monotone" dataKey="standard" stroke="#475569" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                                        <Area type="monotone" dataKey="accelerated" stroke="#10B981" strokeWidth={3} fill="#10B981" fillOpacity={0.10} />
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
