"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { Info, Tag, CheckCircle2, ArrowUpRight } from "lucide-react";
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


export default function DiscountCalculator() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* Ambient Deep Space Grid & Volumetric Glows (Emerald hue for savings) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-1/2 h-96 bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shadow-inner shadow-white/5">
                            <Tag className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-lg">Price Reduction Engine.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                        Absolute capital preservation matrix. Calculate exact price compressions and total retained liquidity from multi-tier markdowns.
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
                                <Tag className="w-4 h-4" /> Base Valuation
                            </h2>

                            <Input label="Original MSRP List Price" value="459.99" prefix="$" bg="bg-black/40" />
                            <Input label="Primary Discount Yield" value="25" suffix="%" bg="bg-black/40" />

                            <h2 className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-8 mb-6 border-b border-white/[0.04] pb-4">
                                Stacked Deductions
                            </h2>

                            <Input label="Additional Promo Code" value="10" suffix="%" bg="bg-white/[0.02] text-slate-400" />

                            <button className="relative z-10 w-full bg-emerald-600/90 text-white py-4 mt-8 text-sm font-bold tracking-wide hover:bg-emerald-500 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)] rounded-lg flex items-center justify-center gap-2">
                                RECALCULATE FINAL PRICE <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Card>
                    </div>

                    {/* Right Panel: Data Output & Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        {/* Thermal Core: Highlighted Output */}
                        <div className="bg-[#05060A]/80 border border-emerald-500/20 p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.1)] backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

                            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-3 relative z-10 border-b border-white/[0.04] pb-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                                Capital Retention Optimized
                            </p>

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end">
                                <div>
                                    <h3 className="text-slate-400 text-xs tracking-widest uppercase font-medium mb-4">Total Amount Saved</h3>
                                    <div className="text-6xl sm:text-7xl font-mono font-bold text-white tracking-tighter drop-shadow-2xl">
                                        <span className="text-4xl text-emerald-500/80 mr-1">$</span>149<span className="text-3xl text-emerald-500">.50</span>
                                    </div>
                                    <p className="text-[10px] font-mono mt-4 text-emerald-400/80 uppercase tracking-widest bg-emerald-500/10 inline-block px-2 py-1 rounded">Overall Effective Discount: 32.5%</p>
                                </div>
                                <div className="space-y-6 border-t md:border-t-0 md:border-l border-white/[0.04] pt-8 md:pt-0 md:pl-12">
                                    <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 rounded-xl border border-white/[0.04] shadow-inner flex justify-between items-center mb-4">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Original Value</p>
                                        <p className="text-2xl font-mono text-slate-500 line-through decoration-rose-500/50">$459.99</p>
                                    </div>
                                    <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 rounded-xl border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex justify-between items-center">
                                        <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Final Net Price</p>
                                        <p className="text-3xl font-mono text-emerald-400">$310<span className="text-lg text-emerald-400/50">.49</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Discount Waterfall Breakdown Grid */}
                        <Card>
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.04]">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                    Sequential Markdown Waterfall
                                    <Info className="w-4 h-4 text-slate-500" />
                                </h3>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] border border-white/[0.04] rounded-2xl overflow-hidden shadow-2xl">
                                <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Base Target Price</p>
                                    <p className="text-xl font-mono text-white group-hover:text-emerald-300 transition-colors">$459.99</p>
                                </div>
                                <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group border-l border-rose-500/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-rose-500/5 blur-[20px] rounded-full pointer-events-none" />
                                    <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-4">Tier 1 Cut (25%)</p>
                                    <p className="text-xl font-mono text-slate-300 transition-colors">-$115.00</p>
                                </div>
                                <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group border-l border-amber-500/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 blur-[20px] rounded-full pointer-events-none" />
                                    <p className="text-[10px] font-bold text-amber-400 uppercase tracking-widest mb-4">Tier 2 Stack (10%)</p>
                                    <p className="text-xl font-mono text-white group-hover:text-emerald-300 transition-colors">-$34.50</p>
                                </div>
                                <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 hover:bg-white/[0.02] transition-colors group border-l border-emerald-500/20 shadow-[inset_0_0_15px_rgba(16,185,129,0.05)] flex flex-col justify-center">
                                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-4 flex items-center gap-2"><CheckCircle2 className="w-3 h-3" /> Landed Value</p>
                                    <p className="text-2xl font-mono text-emerald-400 transition-colors tracking-tighter">$310.49</p>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}
