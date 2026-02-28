"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip } from "recharts";
import { Home, SlidersHorizontal, ArrowUpRight } from "lucide-react";

import { Card as ShadcnCard } from "@/components/ui/card";
import { Input as ShadcnInput } from "@/components/ui/input";
import { Label as ShadcnLabel } from "@/components/ui/label";
import { useFinanceStore } from "@/store/useFinanceStore";

// Integrated Shadcn UI Components wrapped with $10M SaaS Aesthetics
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <ShadcnCard className={`aura-panel border-none relative bg-[#090B14]/40 backdrop-blur-2xl ring-1 ring-white/[0.04] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden ${className || ""}`}>
        {children}
    </ShadcnCard>
);

const Input = ({ label, value, bg = "bg-white/5", prefix, suffix, onChange }: { label: string, value: string | number, bg?: string, prefix?: string, suffix?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
    <div className="mb-6 relative z-10 w-full">
        <ShadcnLabel className="block text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-3 pl-1">{label}</ShadcnLabel>
        <div className="relative group w-full">
            {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 group-hover:text-teal-400 transition-colors z-10">{prefix}</span>}
            <ShadcnInput
                aria-label={label}
                title={label}
                type={typeof value === 'number' ? 'number' : 'text'}
                value={value}
                onChange={onChange}
                readOnly={!onChange}
                className={`w-full ${bg} border border-white/[0.04] rounded-lg h-auto px-4 py-3 text-white font-mono focus-visible:ring-1 focus-visible:ring-teal-500/50 hover:bg-white/10 transition-colors ${prefix ? 'pl-8' : ''} ${suffix ? 'pr-8' : ''}`}
            />
            {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-slate-500 z-10">{suffix}</span>}
        </div>
    </div>
);

// Mock Data for the PITI Donut Chart
const pitiData = [
    { name: 'Principal & Interest', value: 2842, color: '#14B8A6' }, // Teal
    { name: 'Property Taxes', value: 650, color: '#F59E0B' }, // Amber
    { name: 'Home Insurance', value: 150, color: '#10B981' }, // Emerald
    { name: 'HOA Fees', value: 200, color: '#F43F5E' }, // Rose
];

export default function HomeAffordabilityCalculator() {
    const { annualSalary, setAnnualSalary } = useFinanceStore();

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
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter drop-shadow-lg">Home Affordability Matrix.</h1>
                    </div>
                    <p className="text-slate-400 max-w-2xl font-light leading-relaxed">
                        Leverage the Aura engine to calculate your maximum purchasing power based on current market volatility and debt ratios.
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

                            <h2 className="text-xs font-bold text-teal-400 uppercase tracking-widest mt-2 mb-6 border-b border-white/[0.04] pb-4 flex items-center gap-2">
                                <SlidersHorizontal className="w-4 h-4" /> Financial Parameters
                            </h2>

                            <Input label="Annual Income (Pre-Tax)" value={annualSalary} onChange={(e) => setAnnualSalary(Number(e.target.value))} prefix="$" bg="bg-black/40" />
                            <Input label="Monthly Debts (Auto, CC, Student)" value="850" prefix="$" bg="bg-black/40" />

                            <h2 className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mt-8 mb-6 border-b border-white/[0.04] pb-4">
                                Mortgage Structure
                            </h2>

                            <Input label="Available Down Payment" value="100,000" prefix="$" bg="bg-black/40" />
                            <Input label="Interest Rate" value="6.25" suffix="%" bg="bg-black/40" />
                            <Input label="Loan Term" value="30" suffix="Years" bg="bg-white/[0.02] text-slate-400" />

                            <button className="relative z-10 w-full bg-teal-600/90 text-white py-4 mt-8 text-sm font-bold tracking-wide hover:bg-teal-500 transition-colors shadow-[0_0_20px_rgba(13,148,136,0.2)] rounded-lg flex items-center justify-center gap-2">
                                CALCULATE MAX PRICE <ArrowUpRight className="w-4 h-4" />
                            </button>
                        </Card>
                    </div>

                    {/* Right Panel: Data Output & Visualization */}
                    <div className="lg:col-span-8 flex flex-col gap-8 relative z-10">

                        {/* Thermal Core: Highlighted Output & DTI Gauge */}
                        <div className="bg-[#05060A]/80 border border-teal-500/20 p-8 sm:p-12 relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(20,184,166,0.1)] backdrop-blur-3xl">
                            <div className="absolute inset-0 bg-teal-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>

                            <p className="text-[10px] font-bold text-teal-400 uppercase tracking-widest mb-4 flex items-center gap-3 relative z-10">
                                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_15px_rgba(45,212,191,0.8)]"></div>
                                Estimated Purchase Capacity
                            </p>

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-end">
                                <div>
                                    <h3 className="text-slate-400 text-xs tracking-widest uppercase font-medium mb-4">Maximum Home Price</h3>
                                    <div className="text-6xl sm:text-7xl font-mono font-bold text-white tracking-tighter drop-shadow-2xl">
                                        <span className="text-4xl text-teal-400/80 mr-1">$</span>742,500
                                    </div>
                                </div>
                                <div className="space-y-6 border-t md:border-t-0 md:border-l border-white/[0.04] pt-8 md:pt-0 md:pl-12">
                                    <div className="flex justify-between items-center bg-white/[0.02] p-4 rounded-lg border border-white/[0.04]">
                                        <div>
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Max Monthly PITI</p>
                                            <p className="text-xl font-mono text-white">$4,410</p>
                                        </div>
                                    </div>
                                    {/* DTI Gauge Simulation */}
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Front-End DTI</p>
                                            <p className="text-sm font-mono text-amber-400 tracking-tight">36%</p>
                                        </div>
                                        <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-amber-400 h-full w-[36%] shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between items-end mb-2">
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Back-End DTI (Total)</p>
                                            <p className="text-sm font-mono text-rose-400 tracking-tight">42%</p>
                                        </div>
                                        <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-rose-400 h-full w-[42%] shadow-[0_0_10px_rgba(244,63,94,0.5)]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chart & Breakdowns */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="flex flex-col items-center justify-center p-8">
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-full text-left mb-6">
                                    Monthly Payment Allocation
                                </h3>
                                <div className="h-64 w-full relative group">
                                    {/* Donut Chart Glow Component */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                                        <div className="text-center group-hover:scale-105 transition-transform duration-500">
                                            <p className="text-slate-500 text-[10px] uppercase tracking-widest">Total PITI</p>
                                            <p className="text-2xl font-mono text-white mt-1">$4,410</p>
                                        </div>
                                    </div>
                                    <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1} aspect={undefined}>
                                        <PieChart>
                                            <Pie
                                                data={pitiData}
                                                cx="50%"
                                                cy="50%"
                                                innerRadius={75}
                                                outerRadius={100}
                                                stroke="none"
                                                paddingAngle={2}
                                                dataKey="value"
                                            >
                                                {pitiData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                                ))}
                                            </Pie>
                                            <RechartsTooltip
                                                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', backdropFilter: 'blur(12px)' }}
                                                itemStyle={{ color: '#fff', fontSize: '12px', fontFamily: 'monospace' }}
                                                formatter={(value: number | undefined) => value !== undefined ? `$${value}` : ""}
                                            />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </Card>

                            <div className="flex flex-col gap-4">
                                {pitiData.map((item, i) => (
                                    <div key={i} className="aura-panel border border-white/[0.04] bg-[#090B14]/40 backdrop-blur-xl rounded-xl p-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors group">
                                        <div className="flex items-center gap-3">
                                            <div className="w-3 h-3 rounded-full shadow-lg" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}80` }}></div>
                                            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{item.name}</p>
                                        </div>
                                        <p className="text-lg font-mono text-white group-hover:text-teal-300 transition-colors">${item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
