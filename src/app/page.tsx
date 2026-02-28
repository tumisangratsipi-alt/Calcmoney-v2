import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black">
      {/* 
        HERO SECTION:
        Dark Glassmorphism, Deep Space backgrounds, Teal/Gold interactions.
      */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 border-b border-white/[0.04]">
        {/* Faint Architectural SVG Grid Layered on Deep Space Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-1/2 h-96 bg-teal-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10 grid lg:grid-cols-2 gap-16 items-center">

          {/* The Left Anchor: Typographic Authority */}
          <div className="max-w-2xl">
            <div className="inline-flex flex items-center gap-2 px-4 py-1.5 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] rounded-full mb-8 shadow-inner shadow-white/5">
              <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>
              <span className="text-[10px] uppercase font-bold text-teal-200 tracking-widest leading-none mt-[1px]">Free Financial Calculators</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1] mb-8 drop-shadow-lg">
              Absolute <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-amber-500">Precision.</span>
            </h1>

            <p className="text-xl text-slate-400 font-light max-w-xl mb-12 leading-relaxed">
              The financial engine that gives you an unfair advantage. Model compound growth, crush debt strategically, and make every major money decision with mathematical certainty. No guesswork. Just the numbers.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/calculators"
                className="group flex h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-lg bg-teal-600 px-10 text-sm font-bold tracking-wide text-white transition-all shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] hover:bg-teal-500 hover:-translate-y-0.5"
              >
                Start Calculating <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-widest mt-2 sm:mt-0">
                <ShieldCheck className="w-4 h-4 text-slate-400" /> 100% Private &amp; Secure
              </div>
            </div>
          </div>

          {/* The Right Anchor: The 3D Vault Asset */}
          <div className="relative w-full aspect-square lg:aspect-[4/3] flex items-center justify-center">
            {/* Simulated shadow/glow casting backward onto the rigid grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen"></div>
            <Image
              src="/images/hero-vault.png"
              alt="CalcMoney Financial Calculator Suite"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:float-yoyo transition-transform duration-1000 ease-out"
              priority
            />
          </div>
        </div>
      </section>

      {/* 
        LOGOS STRIP:
        Glassmorphism trust anchors.
      */}
      <section className="py-12 border-b border-white/[0.04] bg-[#05060A]/80 backdrop-blur-xl relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 text-center">
            <div>
              <p className="text-2xl font-black text-white tracking-tight">24</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Free Calculators</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white tracking-tight">27</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Expert Guides</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white tracking-tight">$0</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Always Free</p>
            </div>
            <div>
              <p className="text-2xl font-black text-white tracking-tight">Zero</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Data Collected</p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        FEATURES GRID: The Premium Volumetric Glass Panels
      */}
      <section className="py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 drop-shadow-md">Your Financial Toolkit.</h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              Clean, powerful, and instant. Pick a calculator, plug in your numbers, and see exactly where you stand financially.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Bento Grid Item 1: Mortgage */}
            <Link href="/calculators/mortgage" className="aura-panel relative block p-10 group bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shadow-inner shadow-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-teal-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/images/icons/calcmoney_icon_mortgage.png" alt="Mortgage" width={28} height={28} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">PITI Amortization</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">Break down exactly how much of your monthly mortgage payment is vanishing into interest versus building pure equity.</p>
            </Link>

            {/* Bento Grid Item 2: F.I.R.E. */}
            <Link href="/calculators/fire" className="aura-panel relative block p-10 group bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shadow-inner shadow-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/images/icons/calcmoney_icon_investment.png" alt="FIRE" width={28} height={28} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">Early Retirement (F.I.R.E.)</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">Find out exactly when you can retire. Input your expenses and savings, and see the precise date you reach financial independence.</p>
            </Link>

            {/* Bento Grid Item 3: Debt Engine */}
            <Link href="/calculators/snowball" className="aura-panel relative block md:col-span-2 lg:col-span-1 p-10 group bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1">
              <div className="w-14 h-14 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center mb-8 shadow-inner shadow-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-rose-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image src="/images/icons/calcmoney_icon_debt.png" alt="Debt Engine" width={28} height={28} className="group-hover:float-yoyo transition-transform duration-500 relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">Debt Payoff Planner</h3>
              <p className="text-sm text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">Stack all your debts and find the fastest way out. Compare Snowball vs. Avalanche strategies side by side.</p>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
