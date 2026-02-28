"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { Info, Activity, HeartPulse, ArrowUpRight } from "lucide-react";
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
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-cyan-400 transition-colors z-10">{prefix}</span>}
            <ShadcnInput
                aria-label={label}
                title={label}
                type="text"
                value={value}
                readOnly
                className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-cyan-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`}
            />
            {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 z-10">{suffix}</span>}
        </div>
    </div>
);


export default function BiometricEngine() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* Ambient Deep Space Grid & Volumetric Glows (Cyan hue for health/biometrics) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-1/2 h-96 bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shadow-inner shadow-white/5">
                            <HeartPulse className="w-6 h-6 text-white" />
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-lg">Biometric Engine.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                        Absolute physiological state modeling. Calculate metabolic burn rate, Total Daily Energy Expenditure (TDEE), and exact Body Mass Index diagnostics.
                    </p>
                </div>
            </div>

            {/* 2-Column Terminal Layout */}
            <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Panel: Dense Inputs */}
                    <div className="lg:col-span-4 relative z-10">
                        <Card className="bg-gradient-to-b from-white/[0.03] to-transparent h-full border-t border-cyan-500/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 blur-[80px] rounded-full pointer-events-none" />

                            <h2 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mt-2 mb-6 border-b border-white/[0.04] pb-4 flex items-center gap-2">
                                <Activity className="w-4 h-4" /> Physical Data
                            </h2>

                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Age" value="32" bg="bg-black/40" />
                                <Input label="Gender" value="Male" bg="bg-black/40" />
                            </div>
                            <Input label="Height" value={"5'10\""} bg="bg-black/40" />
                            <Input label="Weight" value="180" suffix="lbs" bg="bg-black/40" />

                            <h2 className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mt-8 mb-6 border-b border-white/[0.04] pb-4">
                                Metabolic Activity
                            </h2>

                            <Input label="Lifestyle Baseline" value="Moderately Active" bg="bg-white/[0.02] text-slate-400" />

                            <button className="relative z-10 w-full bg-cyan-600/90 text-white py-4 mt-8 text-sm font-bold tracking-wide hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)] rounded-lg flex items-center justify-center gap-2">
                                PROCESS BIOMETRICS <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Card>
                    </div>

                    {/* Right Panel: Data Output & Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        {/* Thermal Core: Highlighted Output */}
                        <div className="bg-[#05060A]/80 border border-cyan-500/20 p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(6,182,212,0.1)] backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

                            <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-4 flex items-center gap-3 relative z-10 border-b border-white/[0.04] pb-4">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
                                Metabolic Yield Diagnostics
                            </p>

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end">
                                <div>
                                    <h3 className="text-slate-400 text-xs tracking-widest uppercase font-medium mb-4">Total Daily Energy Expenditure (TDEE)</h3>
                                    <div className="text-6xl sm:text-7xl font-mono font-bold text-white tracking-tighter drop-shadow-2xl flex items-baseline">
                                        2,810<span className="text-2xl text-cyan-400 ml-2">kcal</span>
                                    </div>
                                    <p className="text-[10px] font-mono mt-4 text-cyan-400/80 uppercase tracking-widest bg-cyan-500/10 inline-block px-2 py-1 rounded">Maintenance Calories</p>
                                </div>
                                <div className="space-y-6 border-t md:border-t-0 md:border-l border-white/[0.04] pt-8 md:pt-0 md:pl-12">
                                    <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 rounded-xl border border-white/[0.04] shadow-inner mb-4 flex justify-between items-center">
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Basal Metabolic Rate (BMR)</p>
                                        <p className="text-2xl font-mono text-white">1,813</p>
                                    </div>
                                    <div className="bg-[#05060A]/90 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/20 shadow-[0_0_20px_rgba(6,182,212,0.1)] flex justify-between items-center">
                                        <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">Current Body Mass Index (BMI)</p>
                                        <p className="text-3xl font-mono text-cyan-400">25.8</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BMI Categorical Spectrum */}
                        <Card>
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.04]">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                    Mass Diagnostic Spectrum
                                    <Info className="w-4 h-4 text-slate-500" />
                                </h3>
                                <div className="text-[10px] uppercase font-bold text-amber-400 px-2 py-1 bg-amber-500/10 rounded border border-amber-500/20">
                                    Overweight (25.0 - 29.9)
                                </div>
                            </div>

                            <div className="mt-8 mb-4 relative h-6 rounded-full overflow-hidden flex bg-white/5 border border-white/10 shadow-inner">
                                <div className="h-full bg-cyan-600/30 w-[20%]" title="Underweight (< 18.5)"></div>
                                <div className="h-full bg-emerald-500/50 w-[35%]" title="Normal (18.5 - 24.9)"></div>
                                <div className="h-full bg-amber-500/50 w-[25%]" title="Overweight (25.0 - 29.9)"></div>
                                <div className="h-full bg-rose-600/50 w-[20%]" title="Obese (≥ 30.0)"></div>

                                {/* Absolute Position Indicator Matrix */}
                                <div className="absolute top-0 bottom-0 left-[62%] w-1 bg-white shadow-[0_0_10px_#fff]"></div>
                            </div>

                            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-2 px-1">
                                <span>15</span>
                                <span>18.5</span>
                                <span>25</span>
                                <span>30</span>
                                <span>35+</span>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}
