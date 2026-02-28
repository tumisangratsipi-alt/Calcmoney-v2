"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { Info, Home, Building2 } from "lucide-react";
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
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-teal-400 transition-colors z-10">{prefix}</span>}
            <ShadcnInput
                aria-label={label}
                title={label}
                type="text"
                value={value}
                readOnly
                className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-teal-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`}
            />
            {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 z-10">{suffix}</span>}
        </div>
    </div>
);

// Mock Data for the 10-Year Accumulation Chart
const data = Array.from({ length: 10 }).map((_, i) => ({
    year: `Year ${i + 1}`,
    rentingCost: Math.round(24000 * Math.pow(1.03, i) * (i + 1)), // Cumulative rent with 3% increase
    buyingEquity: Math.round(50000 + (400000 * Math.pow(1.04, i) - 400000) + (10000 * i)), // Down payment + Appreciation + Principal paydown
}));

export default function RentVsBuyCalculator() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* Ambient Deep Space Grid & Volumetric Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-1/2 h-96 bg-teal-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shadow-inner shadow-white/5">
                            <Home className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter drop-shadow-lg">Rent vs. Buy Analysis</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                        Deep dive into your financial future with the Aura engine. A volumetric approach to wealth projection.
                    </p>
                </div>
            </div>

            {/* 2-Column Terminal Layout */}
            <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Panel: Dense Inputs */}
                    <div className="lg:col-span-4 relative z-10">
                        <Card className="bg-gradient-to-b from-white/[0.03] to-transparent h-full">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none" />

                            <div className="grid md:grid-cols-1 gap-4 relative z-10">
                                {/* Rent Inputs */}
                                <div>
                                    <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mt-2 mb-6 border-b border-white/[0.04] pb-4 flex items-center gap-2">
                                        <Building2 className="w-4 h-4" /> Rent Inputs
                                    </h2>
                                    <Input label="Monthly Rent" value="2,000" prefix="$" bg="bg-black/40" />
                                    <Input label="Annual Rent Increase" value="3.0" suffix="%" bg="bg-black/40" />
                                    <Input label="Renter's Insurance (Mo)" value="25" prefix="$" bg="bg-black/40" />
                                </div>

                                {/* Buy Inputs */}
                                <div>
                                    <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mt-6 mb-6 border-b border-white/[0.04] pb-4 flex items-center gap-2">
                                        <Home className="w-4 h-4" /> Buy Inputs
                                    </h2>
                                    <Input label="Home Price" value="400,000" prefix="$" bg="bg-black/40" />
                                    <Input label="Down Payment" value="20" suffix="%" bg="bg-black/40" />
                                    <Input label="Mortgage Rate" value="6.5" suffix="%" bg="bg-black/40" />
                                    <Input label="Property Tax (Annual)" value="1.2" suffix="%" bg="bg-black/40" />
                                </div>
                            </div>

                            <button className="relative z-10 w-full bg-teal-600/90 text-white py-4 mt-8 text-sm font-bold tracking-wide hover:bg-teal-500 transition-colors shadow-[0_0_20px_rgba(13,148,136,0.2)] rounded-lg">
                                EXECUTE REAL ESTATE ANALYSIS
                            </button>
                        </Card>
                    </div>

                    {/* Right Panel: Data Output & Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        {/* Thermal Core: Highlighted Verdict */}
                        <div className="bg-[#05060A]/80 border border-teal-500/20 p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(20,184,166,0.1)] backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

                            <p className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-4 flex items-center gap-3 relative z-10 border-b border-white/[0.04] pb-4">
                                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_15px_rgba(45,212,191,0.8)]"></div>
                                System Verdict Achieved
                            </p>

                            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <div className="text-5xl sm:text-7xl font-black text-white tracking-tighter drop-shadow-2xl mb-4">
                                        BUYING <span className="text-teal-400">WINS</span>
                                    </div>
                                    <p className="text-slate-300 font-light text-lg leading-relaxed max-w-xl">
                                        Buying is more cost-effective than renting after <span className="font-bold text-teal-400">4.2 years</span>.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 rounded-xl border border-white/[0.04] shadow-inner">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Net Cost of Renting (10 Yrs)</p>
                                        <p className="text-2xl font-mono text-rose-400 line-through">$313,382</p>
                                    </div>
                                    <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 rounded-xl border border-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.1)]">
                                        <p className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-2">Net Cost of Buying (10 Yrs)</p>
                                        <p className="text-2xl font-mono text-teal-400">$189,450</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Metric Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] border border-white/[0.04] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Breakeven Point</p>
                                <p className="text-xl font-mono text-white group-hover:text-teal-300 transition-colors">50 <span className="text-sm font-sans tracking-tight text-slate-500">Months</span></p>
                            </div>
                            <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Est. Equity (10Y)</p>
                                <p className="text-xl font-mono text-white group-hover:text-amber-300 transition-colors">$248,300</p>
                            </div>
                            <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4"><div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div> Aura Score</p>
                                <p className="text-xl font-mono text-white group-hover:text-teal-300 transition-colors">92<span className="text-sm font-sans text-slate-500">/100</span></p>
                            </div>
                            <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Tax Savings (10Y)</p>
                                <p className="text-xl font-mono text-emerald-400 transition-colors">$42,110</p>
                            </div>
                        </div>

                        {/* Chart */}
                        <Card>
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.04]">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                    10-Year Accumulation Model
                                    <Info className="w-4 h-4 text-slate-500" />
                                </h3>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400"><div className="w-2 h-2 bg-slate-600 rounded-full"></div> Sunk Rent Cost</div>
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400"><div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.5)]"></div> Home Equity</div>
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
                                        <Area type="monotone" dataKey="rentingCost" stroke="#475569" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                                        <Area type="monotone" dataKey="buyingEquity" stroke="#0D9488" strokeWidth={3} fill="#14B8A6" fillOpacity={0.10} />
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
