"use client";

import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip as RechartsTooltip, XAxis, YAxis } from "recharts";
import { ArrowRight, Info, Plus } from "lucide-react";
import Image from "next/image";

import { Card as ShadcnCard } from "@/components/ui/card";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Label as ShadcnLabel } from "@/components/ui/label";

// Integrated Shadcn UI Components wrapped with $10M SaaS Aesthetics
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => <ShadcnCard className={`aura-panel border-none relative bg-[#090B14]/40 backdrop-blur-2xl ring-1 ring-white/[0.04] rounded-2xl p-6 sm:p-8 overflow-hidden shadow-2xl ${className || ""}`}>{children}</ShadcnCard>;
const Input = ({ label, value, bg = "bg-white/5", prefix }: { label: string, value: string, bg?: string, prefix?: string }) => (
    <div className="mb-6 relative z-10">
        <ShadcnLabel className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-3 pl-1">{label}</ShadcnLabel>
        <div className="relative group">
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-rose-400 transition-colors z-10">{prefix}</span>}
            <ShadcnInput aria-label={label} title={label} type="text" value={value} readOnly className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-rose-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''}`} />
        </div>
    </div>
);

// Mock Data for the Dual-Algorithm Chart
const data = Array.from({ length: 48 }).map((_, i) => ({
    month: `M ${i + 1}`,
    snowball: Math.max(0, 35000 - (i * 850)),
    avalanche: Math.max(0, 35000 - (i * 1050)),
}));

export default function DebtEradicator() {
    const [strategy, setStrategy] = useState<"snowball" | "avalanche">("avalanche");

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* Ambient Deep Space Grid & Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-1/2 h-96 bg-rose-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-14 h-14 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center shadow-inner shadow-white/5">
                            <Image src="/images/icons/calcmoney_icon_debt.png" alt="Debt Engine" width={28} height={28} />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter drop-shadow-2xl">Debt Eradicator.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                        Algorithmically optimize your path to zero. Compare the psychological momentum of the Snowball method against the mathematical efficiency of the Avalanche method.
                    </p>
                </div>
            </div>

            {/* 2-Column Terminal Layout */}
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Panel: Liability Stack Inputs */}
                    <div className="lg:col-span-4 space-y-8 relative z-10">

                        {/* Algorithm Selector */}
                        <Card className="border-none bg-gradient-to-br from-white/[0.05] to-transparent">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />
                            <h2 className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-6 border-b border-white/[0.04] pb-4">Eradication Protocol</h2>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setStrategy("avalanche")}
                                    className={`py-3 px-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all rounded-lg border flex items-center justify-center gap-2 ${strategy === 'avalanche' ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.2)]' : 'bg-white/[0.02] border-white/[0.05] text-slate-500 hover:text-slate-300'}`}
                                >
                                    {strategy === 'avalanche' && <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />} Avalanche
                                </button>
                                <button
                                    onClick={() => setStrategy("snowball")}
                                    className={`py-3 px-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all rounded-lg border flex items-center justify-center gap-2 ${strategy === 'snowball' ? 'bg-rose-500/20 border-rose-500/50 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.2)]' : 'bg-white/[0.02] border-white/[0.05] text-slate-500 hover:text-slate-300'}`}
                                >
                                    {strategy === 'snowball' && <div className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />} Snowball
                                </button>
                            </div>
                            <p className="text-xs text-slate-400 mt-6 leading-relaxed font-light">
                                {strategy === 'avalanche'
                                    ? "Target highest interest rates first. Mathematically optimal. Maximizes total capital saved."
                                    : "Target smallest balances first. Psychologically optimal. Maximizes short-term momentum."}
                            </p>
                        </Card>

                        <Card>
                            <div className="flex items-center justify-between mb-8 border-b border-white/[0.04] pb-5">
                                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Active Liabilities</h2>
                                <button className="text-slate-400 hover:text-white transition-colors bg-white/[0.02] border border-white/[0.05] p-2 rounded-lg"><Plus className="w-4 h-4" /></button>
                            </div>

                            {/* Liability 1 */}
                            <div className="p-5 border border-rose-500/30 bg-rose-950/20 mb-4 rounded-xl shadow-[inset_0_0_20px_rgba(244,63,94,0.05)] relative overflow-hidden group">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-500" />
                                <div className="flex justify-between items-center mb-5">
                                    <span className="text-xs font-bold text-rose-300 uppercase tracking-widest">Chase Sapphire</span>
                                    <span className="text-xs font-mono text-rose-400/80 bg-rose-500/10 px-2 py-1 rounded">24.5% APR</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="Balance Phase" value="12,500" prefix="$" bg="bg-black/20" />
                                    <Input label="Min. Payment" value="350" prefix="$" bg="bg-black/20" />
                                </div>
                            </div>

                            {/* Liability 2 */}
                            <div className="p-5 border border-white/[0.05] bg-white/[0.01] mb-6 rounded-xl relative overflow-hidden group">
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-slate-700" />
                                <div className="flex justify-between items-center mb-5">
                                    <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">Auto Loan</span>
                                    <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">6.5% APR</span>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <Input label="Balance Phase" value="18,000" prefix="$" bg="bg-black/20" />
                                    <Input label="Min. Payment" value="450" prefix="$" bg="bg-black/20" />
                                </div>
                            </div>

                            <div className="border-t border-white/[0.04] pt-6 mb-2">
                                <Input label="Additional Monthly Capital" value="500" prefix="$" />
                            </div>

                            <button className="w-full bg-rose-600/90 text-white py-4 mt-2 text-sm font-bold tracking-wide hover:bg-rose-500 transition-colors rounded-lg shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                                EXECUTE TRAJECTORY
                            </button>
                        </Card>
                    </div>

                    {/* Right Panel: Output & Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        {/* Terminal Top Box */}
                        <div className="bg-[#05060A]/80 border border-white/[0.05] p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-2xl backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-rose-500/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" />
                            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-end">
                                <div>
                                    <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-8 flex items-center gap-3 border-b border-white/[0.04] pb-4">
                                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.6)]"></div>
                                        {strategy === 'avalanche' ? 'Avalanche Phase Active' : 'Snowball Phase Active'}
                                    </p>
                                    <h3 className="text-slate-500 text-xs tracking-widest uppercase font-medium mb-3">Total Time to Freedom</h3>
                                    <div className="text-5xl sm:text-7xl font-mono text-white tracking-tighter drop-shadow-xl">{strategy === 'avalanche' ? '33' : '38'}<span className="text-2xl text-rose-500/50">mos</span></div>
                                </div>
                                <div className="pt-6 md:pt-0 border-t md:border-t-0 md:border-l border-white/[0.04] md:pl-8">
                                    <h3 className="text-rose-400/80 text-xs font-bold uppercase tracking-widest mb-3">Interest Saved vs Minimums</h3>
                                    <div className="text-4xl sm:text-5xl font-mono text-teal-400 tracking-tighter drop-shadow-md">${strategy === 'avalanche' ? '6,450' : '4,120'}</div>
                                </div>
                            </div>
                        </div>

                        {/* Paydown Timelines Chart */}
                        <Card>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 pb-4 border-b border-white/[0.04] gap-4">
                                <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                                    Algorithm Comparison Matrix
                                </h3>
                                <div className="flex gap-5">
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400"><div className="w-2 h-2 bg-teal-400 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.6)]"></div> Avalanche</div>
                                    <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-slate-400"><div className="w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.6)]"></div> Snowball</div>
                                </div>
                            </div>
                            <div className="h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1} aspect={undefined}>
                                    <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} minTickGap={30} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(value) => `$${value / 1000}k`} dx={-10} />
                                        <RechartsTooltip
                                            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', color: '#fff', backdropFilter: 'blur(12px)' }}
                                            itemStyle={{ color: '#fff', fontSize: '14px', fontFamily: 'monospace' }}
                                        />
                                        <Area type="monotone" dataKey="avalanche" stroke="#2DD4BF" strokeWidth={3} fill="#14B8A6" fillOpacity={0.15} />
                                        <Area type="monotone" dataKey="snowball" stroke="#F43F5E" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
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
