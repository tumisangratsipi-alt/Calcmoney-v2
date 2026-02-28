"use client";

import { Info } from "lucide-react";
import Image from "next/image";

import { Card as ShadcnCard } from "@/components/ui/card";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Label as ShadcnLabel } from "@/components/ui/label";
import { AnimatedCounter } from "@/components/AnimatedCounter";

// Integrated Shadcn UI Components wrapped with $10M SaaS Aesthetics
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => <ShadcnCard className={`aura-panel border-none relative bg-[#090B14]/40 backdrop-blur-2xl ring-1 ring-white/[0.04] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden ${className || ""}`}>{children}</ShadcnCard>;
const Input = ({ label, value, bg = "bg-white/5", prefix }: { label: string, value: string, bg?: string, prefix?: string }) => (
    <div className="mb-6 relative z-10">
        <ShadcnLabel className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-3 pl-1">{label}</ShadcnLabel>
        <div className="relative group">
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-emerald-400 transition-colors z-10 duration-300">{prefix}</span>}
            <ShadcnInput aria-label={label} title={label} type="text" value={value} readOnly className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-emerald-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''}`} />
        </div>
    </div>
);

export default function NetWorthTerminal() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* Ambient Deep Space Grid & Volumetric Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-1/3 h-96 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-1/3 h-96 bg-teal-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-14 h-14 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center shadow-inner shadow-white/5">
                            <Image src="/images/icons/calcmoney_icon_homeafford.png" alt="Net Worth" width={28} height={28} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-2xl">Net Worth Terminal.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                        The ultimate baseline metric of financial sovereignty. Aggregate your cross-class assets against all outstanding liabilities to expose your true liquid standing.
                    </p>
                </div>
            </div>

            {/* Terminal Feed Map */}
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Panel: Asset & Liability Multi-Inputs */}
                    <div className="lg:col-span-8 space-y-8 relative z-10">

                        {/* ASSETS */}
                        <Card>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
                            <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/[0.04] relative z-10">
                                <h2 className="text-lg font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]"></div>
                                    Liquid Capital (Assets)
                                </h2>
                                <span className="font-mono text-xl font-bold text-white drop-shadow-md">$845,000</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-6 relative z-10">
                                <div className="space-y-2">
                                    <Input label="Primary Checking" value="12,500" prefix="$" bg="bg-emerald-950/20" />
                                    <Input label="High-Yield Savings" value="45,000" prefix="$" bg="bg-black/20" />
                                </div>
                                <div className="space-y-2">
                                    <Input label="401(k) / Retirement" value="280,000" prefix="$" bg="bg-emerald-950/20" />
                                    <Input label="Brokerage Accounts" value="105,000" prefix="$" bg="bg-black/20" />
                                </div>
                            </div>

                            <h3 className="text-[10px] font-bold text-emerald-500/50 uppercase tracking-widest mt-8 mb-4 border-b border-white/[0.02] pb-2 relative z-10">Illiquid & Crypto Assets</h3>
                            <div className="grid md:grid-cols-2 gap-x-6 relative z-10">
                                <Input label="Primary Residence Equity" value="350,500" prefix="$" />
                                <Input label="Cold Storage (BTC/ETH)" value="52,000" prefix="$" bg="bg-black/20" />
                            </div>
                        </Card>

                        {/* LIABILITIES */}
                        <Card>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-[80px] rounded-full pointer-events-none" />
                            <div className="flex items-center justify-between mb-8 pb-5 border-b border-white/[0.04] relative z-10">
                                <h2 className="text-lg font-bold text-rose-400 uppercase tracking-widest flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                                    Outstanding Capital (Liabilities)
                                </h2>
                                <span className="font-mono text-xl font-bold text-white drop-shadow-md">$34,500</span>
                            </div>

                            <div className="grid md:grid-cols-2 gap-x-6 relative z-10">
                                <div className="space-y-2">
                                    <Input label="Credit Card Deficits" value="4,500" prefix="$" bg="bg-rose-950/20" />
                                    <Input label="Student Loans" value="18,000" prefix="$" />
                                </div>
                                <div className="space-y-2">
                                    <Input label="Auto Loan Balance" value="12,000" prefix="$" bg="bg-rose-950/20" />
                                    <Input label="Personal Loans" value="0" prefix="$" />
                                </div>
                            </div>
                        </Card>

                    </div>

                    {/* Right Panel: Executive Summary (Sticky) */}
                    <div className="lg:col-span-4 relative z-10">
                        <div className="sticky top-8">
                            {/* Executive Readout */}
                            <div className="bg-[#05060A]/90 border border-white/[0.05] p-8 relative overflow-hidden mb-6 rounded-2xl shadow-2xl backdrop-blur-3xl">
                                <div className="absolute inset-0 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none mix-blend-screen" />
                                <div className="relative z-10">
                                    <p className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-8 border-b border-white/[0.04] pb-4 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.6)]"></div>
                                        Executive Summary
                                    </p>

                                    <div className="mb-8">
                                        <h3 className="text-slate-500 text-xs tracking-widest uppercase font-medium mb-3">Total Assets</h3>
                                        <div className="text-3xl font-mono text-emerald-400 drop-shadow-md">$845,000</div>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-slate-500 text-xs tracking-widest uppercase font-medium mb-3">Total Liabilities</h3>
                                        <div className="text-3xl font-mono text-rose-400 drop-shadow-md">$34,500</div>
                                    </div>

                                    <div className="pt-8 border-t border-white/[0.04]">
                                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Absolute Net Worth</h3>
                                        <div className="text-5xl sm:text-6xl font-mono text-white tracking-tighter drop-shadow-2xl">
                                            <AnimatedCounter value={810500} prefix="$" splitClass="text-3xl text-teal-200/50" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust & Verification Module */}
                            <Card className="bg-transparent border border-dashed border-white/[0.1] hover:border-teal-500/30 transition-colors group">
                                <div className="flex items-start gap-4 p-2 relative z-10">
                                    <div className="mt-1">
                                        <Info className="w-5 h-5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-300 mb-1 group-hover:text-white transition-colors">Data Storage Protocol</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                                            Your numeric entries never leave your local browser instance. We utilize hyper-secure isolated state tracking to prevent external vector leakage.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
