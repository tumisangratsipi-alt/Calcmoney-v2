import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-[#090B14]/60 backdrop-blur-2xl">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative overflow-hidden flex items-center justify-center transition-all duration-500 group-hover:scale-105">
                        <Image src="/images/logo-master.png" alt="CalcMoney Logo" width={44} height={44} className="mix-blend-screen group-hover:float-yoyo transition-transform duration-500 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                    </div>
                    <span className="font-black text-2xl tracking-tighter text-white">CalcMoney.</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="/calculators" className="group text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <Image src="/images/icons/calcmoney_icon_investment.png" alt="Tools" width={18} height={18} className="group-hover:float-yoyo transition-transform duration-500" />
                        Tools Matrix
                    </Link>
                    <Link href="/blog" className="group text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                        <Image src="/images/icons/calcmoney_icon_sidehustle.png" alt="Intelligence" width={18} height={18} className="group-hover:float-yoyo transition-transform duration-500" />
                        Intelligence
                    </Link>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-4">
                    <Button asChild className="hidden md:flex bg-teal-600/90 text-white text-[10px] font-bold tracking-widest hover:bg-teal-500 shadow-[0_0_20px_rgba(13,148,136,0.2)] transition-colors rounded-lg px-6 h-10">
                        <Link href="/calculators/mortgage">
                            GET STARTED
                        </Link>
                    </Button>
                    <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
