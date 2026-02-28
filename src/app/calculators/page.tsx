import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CalculatorsHub() {
    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
            {/* 
        HEADER ZONE:
        Deep Space background, glowing typography.
      */}
            <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 border-b border-white/[0.04]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-1/2 h-96 bg-teal-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[1] drop-shadow-lg">
                        Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">Engines.</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl leading-relaxed">
                        Algorithmic certainty for complex financial decisions. Select a module below to begin modeling your exact numeric outcomes.
                    </p>
                </div>
            </div>

            {/* 
        THE GRID:
        Glassmorphism cards floating on the mesh background.
      */}
            <div className="container mx-auto px-4 py-24 max-w-7xl relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Engine: Mortgage */}
                    <Link href="/calculators/mortgage" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_mortgage.png" alt="Mortgage" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">Mortgage PITI Engine</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Deconstruct Principal, Interest, Taxes, and Insurance. Render a flawless amortization schedule to map out exactly when your property becomes 100% equity.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-teal-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Net Worth */}
                    <Link href="/calculators/net-worth" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_homeafford.png" alt="Net Worth" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">Net Worth Terminal</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                The ultimate baseline metric of financial sovereignty. Aggregate your cross-class assets against all outstanding liabilities to expose your true liquid standing.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Debt Payoff */}
                    <Link href="/calculators/snowball" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-rose-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_debt.png" alt="Debt Engine" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">Debt Eradicator</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate the exact mathematical trajectory to zero. Model both Avalanche (High-Interest First) and Snowball (Smallest-Balance First) algorithms instantly.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-rose-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: FIRE */}
                    <Link href="/calculators/fire" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_investment.png" alt="FIRE" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">F.I.R.E. Trajectory</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Input your baseline expenses and aggressive contribution metrics. The algorithm will project your exact crossover point of financial independence using the 4% Rule.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-teal-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Mortgage Refinance */}
                    <Link href="/calculators/mortgage-refinance" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_mortgage.png" alt="Mortgage Refinance" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">Mortgage Refinance</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate exactly when the break-even point occurs. Model interest savings against closing costs to determine if refinancing is mathematically optimal.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-teal-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Rent vs Buy */}
                    <Link href="/calculators/rent-vs-buy" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_homeafford.png" alt="Rent vs Buy" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">Rent vs. Buy Engine</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Compare sinking capital into rent alongside a stock portfolio versus locking into leveraged property equity mapped over 30 years.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Home Affordability */}
                    <Link href="/calculators/home-affordability" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_homeafford.png" alt="Affordability" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Maximum Affordability</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate exactly how much home you can afford based on Debt-To-Income (DTI) thresholds, downpayment cash, and prevailing rates.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-emerald-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: HELOC Terminal */}
                    <Link href="/calculators/heloc" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_personalloan.png" alt="HELOC" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">HELOC Terminal</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate exact maximum credit limits for a Home Equity Line of Credit based on cumulative Loan-to-Value (CLTV) thresholds.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-blue-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Credit Card Payoff */}
                    <Link href="/calculators/credit-card-payoff" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-rose-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_creditcard.png" alt="CC Payoff" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">Credit Card Payoff</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Expose exactly how much high-interest credit card debt is costing you. Calculate the impact of over-paying to accelerate your escape to zero.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-rose-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Auto Loan */}
                    <Link href="/calculators/auto-loan" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_autoloan.png" alt="Auto Loan" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Auto Loan Engine</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate exactly how much an auto loan costs over time, preventing negative equity when matched against aggressive vehicle depreciation.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-blue-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Personal Loan */}
                    <Link href="/calculators/personal-loan" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_personalloan.png" alt="Personal Loan" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Personal Loan</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Rapidly evaluate fixed-rate unstructured loan offers to determine true annualized cost relative to borrowing risk.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-purple-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Student Loan */}
                    <Link href="/calculators/student-loan" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-indigo-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_debt.png" alt="Student Loan" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">Student Loan Restructure</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Algorithmically evaluate standard 10-year term amortizations against aggressive overpayment schedules for student loans.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-indigo-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Compound Interest */}
                    <Link href="/calculators/compound-interest" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_apy.png" alt="Compound Interest" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Compound Engine</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Visualize the eighth wonder of the world. Model exactly how exponential compounding interest accelerates massive wealth creation over time.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-emerald-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Crypto ROI */}
                    <Link href="/calculators/crypto-roi" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_crypto.png" alt="Crypto ROI" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">Crypto ROI</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate exact Returns on Investment (ROI) and annualized yields for highly volatile cryptocurrency and decentralized asset allocations.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-amber-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Inflation Decay */}
                    <Link href="/calculators/inflation" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_inflation.png" alt="Inflation Engine" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">Inflation Engine</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate exactly how much purchasing power you are surrendering to the monetary base per year by holding fiat currency in a checking account.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-red-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Savings Goal */}
                    <Link href="/calculators/savings-goal" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_emergency.png" alt="Savings Engine" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Savings Trajectory</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Reverse-engineer your exact monthly contribution requirement to hit a specific liquid capital threshold on a predetermined exact date.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-emerald-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: 401k Analyzer */}
                    <Link href="/calculators/401k-analyzer" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_401k.png" alt="401k Analyzer" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">401k Analyzer</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate the massive deferred tax advantages of a traditional 401(k), including maximum employer matching thresholds and compound growth.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-blue-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Roth Conversion */}
                    <Link href="/calculators/roth-conversion" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_apy.png" alt="Roth Conversion" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Roth Conversion</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Execute a Backdoor or standard Roth IRA conversion analysis. Calculate the upfront tax burden against decades of tax-free growth and tax-free withdrawals.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-purple-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Social Security */}
                    <Link href="/calculators/social-security" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_emergency.png" alt="Social Security" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Social Security Matrix</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate exactly how much taking Social Security at Age 62 (The penalty) costs compared to Full Retirement Age or Age 70 (The bonus).
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-emerald-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Self Employment Tax */}
                    <Link href="/calculators/self-employment-tax" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_budget.png" alt="Self-Employment Tax" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Independent Tax Engine</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate the 15.3% self-employment burden objectively. Uncover total FICA liabilities for 1099 contractors, freelancers, and single-member LLCs.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-blue-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Capital Gains */}
                    <Link href="/calculators/capital-gains" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_investment.png" alt="Capital Gains" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Capital Gains Analyzer</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Algorithmically segregate short-term income tax rates from long-term capital gains classifications to optimize liquidation models.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-emerald-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Business Valuation */}
                    <Link href="/calculators/business-valuation" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_budget.png" alt="Business Valuation" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Enterprise Valuation</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Execute a discounted cash flow (DCF) or EBITDA multiple analysis to determine the absolute intrinsic value of an equity asset.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-blue-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                    {/* Engine: Runway */}
                    <Link href="/calculators/runway" className="aura-panel relative p-8 group flex flex-col h-full bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
                        <div className="w-16 h-16 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shrink-0 relative overflow-hidden shadow-inner shadow-white/5">
                            <div className="absolute inset-0 bg-red-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image src="/images/icons/calcmoney_icon_emergency.png" alt="Runway Burn" width={32} height={32} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors">Startup Runway</h3>
                            <p className="text-slate-400 text-sm font-light leading-relaxed mb-8 group-hover:text-slate-300 transition-colors">
                                Calculate exact operational months remaining until corporate insolvency based on average monthly burn rate and liquid reserves.
                            </p>
                        </div>
                        <div className="flex items-center text-xs font-bold text-red-500 uppercase tracking-widest gap-2">
                            Initialize Module <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
