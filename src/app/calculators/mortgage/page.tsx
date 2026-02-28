"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { Info } from "lucide-react";
import Image from "next/image";

import { Card as ShadcnCard } from "@/components/ui/card";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Label as ShadcnLabel } from "@/components/ui/label";

// Integrated Shadcn UI Components wrapped with $10M SaaS Aesthetics
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => <ShadcnCard className={`aura-panel border-none relative bg-[#090B14]/40 backdrop-blur-2xl ring-1 ring-white/[0.04] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden ${className || ""}`}>{children}</ShadcnCard>;
const Input = ({ label, value, bg = "bg-white/5", prefix }: { label: string, value: string, bg?: string, prefix?: string }) => (
    <div className="mb-6 relative z-10">
        <ShadcnLabel className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-3 pl-1">{label}</ShadcnLabel>
        <div className="relative group">
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-teal-400 transition-colors z-10">{prefix}</span>}
            <ShadcnInput aria-label={label} title={label} type="text" value={value} readOnly className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-teal-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''}`} />
        </div>
    </div>
);

// Mock Data for the Chart
const data = Array.from({ length: 30 }).map((_, i) => ({
    year: `Year ${i + 1}`,
    principal: Math.round(5000 * Math.pow(1.05, i)),
    interest: Math.round(20000 * Math.pow(0.95, i)),
}));

export default function MortgageCalculator() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* Ambient Deep Space Grid & Volumetric Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-1/2 h-96 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shadow-inner shadow-white/5">
                            <Image src="/images/icons/calcmoney_icon_mortgage.png" alt="Mortgage" width={24} height={24} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-lg">PITI Engine.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                        Model exact Principal, Interest, Taxes, and Insurance ratios over the lifetime of your loan to determine true affordability.
                    </p>
                </div>
            </div>

            {/* 2-Column Terminal Layout */}
            <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Panel: Dense Inputs */}
                    <div className="lg:col-span-4 relative z-10">
                        <Card className="bg-gradient-to-b from-white/[0.03] to-transparent">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none" />
                            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mt-2 mb-8 border-b border-white/[0.04] pb-4 relative z-10">Primary Variables</h2>

                            <Input label="Home Price" value="450,000" prefix="$" bg="bg-black/40" />

                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <Input label="Down Payment" value="90,000" prefix="$" bg="bg-black/40" />
                                <Input label="Down %" value="20" bg="bg-white/[0.02] text-slate-400" />
                            </div>

                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <Input label="Interest Rate" value="6.5" bg="bg-black/40" />
                                <Input label="Loan Term" value="30 Years" bg="bg-white/[0.02] text-slate-400" />
                            </div>

                            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mt-10 mb-8 border-b border-white/[0.04] pb-4 relative z-10">Taxes & Insurance</h2>

                            <Input label="Property Tax (Annual)" value="5,400" prefix="$" bg="bg-black/40" />
                            <Input label="Home Insurance (Annual)" value="1,200" prefix="$" bg="bg-black/40" />
                            <Input label="HOA Fees (Monthly)" value="0" prefix="$" bg="bg-black/40" />

                            <button className="relative z-10 w-full bg-teal-600/90 text-white py-4 mt-6 text-sm font-bold tracking-wide hover:bg-teal-500 transition-colors shadow-[0_0_20px_rgba(13,148,136,0.2)] rounded-lg">
                                RECALCULATE TRAJECTORY
                            </button>
                        </Card>
                    </div>

                    {/* Right Panel: Data Output & Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        {/* Terminal Top Box */}
                        <div className="bg-[#05060A]/80 border border-white/[0.05] p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-teal-500/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
                                <div>
                                    <p className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-white/[0.04] pb-4">
                                        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.6)]"></div>
                                        Trajectory Active
                                    </p>
                                    <h3 className="text-slate-500 text-xs tracking-widest uppercase font-medium mb-3">Estimated Monthly Payment (PITI)</h3>
                                    <div className="text-5xl sm:text-7xl font-mono text-white tracking-tighter drop-shadow-2xl">$2,825<span className="text-2xl text-teal-400/50">.41</span></div>
                                </div>
                                <div className="text-right border-t md:border-t-0 md:border-l border-white/[0.04] pt-6 md:pt-0 md:pl-8">
                                    <p className="text-amber-400/80 text-xs font-bold uppercase tracking-widest mb-3 mt-1">Total Interest Paid</p>
                                    <p className="text-3xl sm:text-4xl font-mono text-amber-400 drop-shadow-md">$458,542</p>
                                </div>
                            </div>
                        </div>

                        {/* PITI Breakdown Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] border border-white/[0.04] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4"><div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)]"></div> Principal & Int</p>
                                <p className="text-xl font-mono text-white group-hover:text-teal-300 transition-colors">$2,275</p>
                            </div>
                            <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4"><div className="w-2 h-2 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div> Property Tax</p>
                                <p className="text-xl font-mono text-white group-hover:text-amber-300 transition-colors">$450</p>
                            </div>
                            <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4"><div className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.8)]"></div> Insurance</p>
                                <p className="text-xl font-mono text-white group-hover:text-rose-300 transition-colors">$100</p>
                            </div>
                            <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4"><div className="w-2 h-2 bg-slate-500 rounded-full shadow-[0_0_8px_rgba(100,116,139,0.8)]"></div> HOA/Fees</p>
                                <p className="text-xl font-mono text-white group-hover:text-slate-300 transition-colors">$0</p>
                            </div>
                        </div>

                        {/* Paydown Chart */}
                        <Card>
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.04]">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                    30-Year Amortization Schedule
                                    <Info className="w-4 h-4 text-slate-500" />
                                </h3>
                            </div>
                            <div className="h-[300px] w-full">
                                <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1} aspect={undefined}>
                                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                        <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value) => `$${value / 1000}k`} dx={-10} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(12px)' }}
                                            itemStyle={{ color: '#fff', fontSize: '14px', fontFamily: 'monospace' }}
                                        />
                                        <Area type="monotone" dataKey="principal" stackId="1" stroke="#2DD4BF" fill="#14B8A6" fillOpacity={0.15} strokeWidth={3} />
                                        <Area type="monotone" dataKey="interest" stackId="1" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.1} strokeWidth={2} />
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
