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
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-blue-400 transition-colors z-10">{prefix}</span>}
            {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-blue-400 transition-colors z-10">{suffix}</span>}
            <ShadcnInput aria-label={label} title={label} type="text" value={value} readOnly className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-blue-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`} />
        </div>
    </div>
);

export default function SelfEmploymentTax() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-1/3 h-96 bg-blue-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-14 h-14 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center shadow-inner shadow-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-blue-500/20 blur-md"></div>
                            <Image src="/images/icons/calcmoney_icon_budget.png" alt="Self-Employment Tax" width={28} height={28} className="relative z-10" />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">Independent Tax Engine.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                        Calculate the 15.3% self-employment burden objectively. Uncover total FICA liabilities for 1099 contractors, freelancers, and single-member LLCs.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    <div className="lg:col-span-4 space-y-8 relative z-10">
                        <Card className="bg-gradient-to-b from-white/[0.03] to-transparent">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

                            <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-6 border-b border-white/[0.04] pb-4 relative z-10">Revenue Data</h2>
                            <Input label="Gross 1099 Income" value="125,000" prefix="$" bg="bg-black/40" />
                            <Input label="Eligible Business Expenses" value="15,000" prefix="$" bg="bg-black/40" />

                            <h2 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-6 mt-8 border-b border-white/[0.04] pb-4 relative z-10">W-2 Overlap</h2>
                            <Input label="Additional W-2 Income (If any)" value="0" prefix="$" bg="bg-black/40" />

                            <button className="relative z-10 w-full bg-blue-600/90 text-white py-4 mt-6 text-sm font-bold tracking-wide hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-colors rounded-lg">
                                RESOLVE LIABILITIES
                            </button>
                        </Card>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        <div className="bg-[#05060A]/80 border border-white/[0.05] p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>
                            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-end">
                                <div className="md:col-span-2">
                                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-6 flex items-center gap-3 border-b border-white/[0.04] pb-4">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.6)]"></div>
                                        Absolute Federal Mandate
                                    </p>
                                    <h3 className="text-slate-500 text-xs tracking-widest uppercase font-medium mb-3">Total Estimated Self-Employment Tax</h3>
                                    <div className="text-5xl sm:text-7xl font-mono text-white tracking-tighter drop-shadow-2xl">$15,542</div>
                                </div>
                                <div className="pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/[0.04] md:pl-8">
                                    <h3 className="text-blue-200/50 text-xs font-bold uppercase tracking-widest mb-3 mt-1">Subject Net Profit</h3>
                                    <div className="text-4xl sm:text-5xl font-mono text-blue-400 tracking-tight drop-shadow-md">$110<span className="text-2xl text-blue-600/50">K</span></div>
                                </div>
                            </div>
                        </div>

                        <Card>
                            <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-white/[0.04] pb-4 mb-6">
                                FICA Allocation Map
                                <Info className="w-4 h-4 text-slate-500" />
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                                    <span className="text-slate-400 font-light">Social Security Portion (12.4%)</span>
                                    <span className="font-mono text-white">$12,593</span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-white/[0.04]">
                                    <span className="text-slate-400 font-light text-blue-400">Medicare Portion (2.9%)</span>
                                    <span className="font-mono text-blue-400">$2,949</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="text-slate-400 font-light text-rose-400">Total Tax Deduction Equivalent</span>
                                    <span className="font-mono text-rose-400">-$7,771</span>
                                    <p className="text-[10px] text-slate-500 max-w-[200px] text-right ml-4 hidden sm:block">Half of SE tax is deductible against gross income.</p>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </div>
        </div>
    );
}
