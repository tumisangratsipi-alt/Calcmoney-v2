import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-white/[0.04] bg-[#090B14]/80 backdrop-blur-3xl text-sm relative z-10">
            <div className="container mx-auto px-4 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">

                    <div className="md:col-span-1 space-y-6">
                        <div className="flex items-center gap-3 group">
                            <div className="w-8 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white text-sm font-black shadow-inner shadow-white/5 overflow-hidden relative">
                                <Image src="/images/logo-master.png" alt="CalcMoney Logo" width={20} height={20} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
                            </div>
                            <span className="font-black tracking-tighter text-white text-lg">CalcMoney.</span>
                        </div>
                        <p className="text-slate-400 max-w-xs font-light leading-relaxed">
                            Mathematical certainty for your financial future. Premium calculating engines designed for absolute clarity.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 tracking-wide">Core Tools</h3>
                        <ul className="space-y-4 text-slate-400 font-light">
                            <li><Link href="/calculators/mortgage" className="hover:text-blue-400 transition-colors">Mortgage</Link></li>
                            <li><Link href="/calculators/savings-goal" className="hover:text-blue-400 transition-colors">Savings Goal</Link></li>
                            <li><Link href="/calculators/net-worth" className="hover:text-blue-400 transition-colors">Net Worth</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 tracking-wide">Debt Mastery</h3>
                        <ul className="space-y-4 text-slate-400 font-light">
                            <li><Link href="/calculators/snowball" className="hover:text-rose-400 transition-colors">Debt Snowball</Link></li>
                            <li><Link href="/calculators/credit-card-payoff" className="hover:text-rose-400 transition-colors">Credit Card Payoff</Link></li>
                            <li><Link href="/calculators/auto-loan" className="hover:text-rose-400 transition-colors">Auto Loan</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6 tracking-wide">Legal</h3>
                        <ul className="space-y-4 text-slate-400 font-light">
                            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><a href="mailto:hello@calcmoney.io" className="hover:text-white transition-colors">hello@calcmoney.io</a></li>
                        </ul>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.04] text-slate-500 text-[10px] uppercase tracking-widest gap-6 relative z-10">
                    <p>© {currentYear} CalcMoney Engines. Absolute rights reserved.</p>
                    <div className="flex gap-4">
                        <p className="max-w-2xl text-center md:text-right leading-relaxed">
                            Disclaimer: CalcMoney is an educational module. We provide independent mathematical calculations, not financial advice.
                            FTC: We may earn commissions from software tools linked via our matrices.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
