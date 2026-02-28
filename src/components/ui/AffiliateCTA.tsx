import { ExternalLink } from "lucide-react";

interface Props {
    href: string;
    title: string;
    description: string;
    partnerName: string;
    type?: "primary" | "secondary";
    className?: string;
}

export function AffiliateCTA({ href, title, description, partnerName, type = "primary", className = "" }: Props) {
    if (type === "secondary") {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 hover:bg-slate-100 transition-colors group ${className}`}
            >
                <div>
                    <h4 className="font-semibold text-slate-900 flex items-center gap-2">
                        {title} <span className="text-[10px] uppercase font-bold text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded">Ad</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">{description}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors shrink-0" />
            </a>
        );
    }

    // Primary "Aura" CTA
    return (
        <div className={`aura-panel p-6 bg-slate-900 text-white border-transparent relative overflow-hidden group ${className}`}>
            {/* Subtle stripe background pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded">Recommended Partner</span>
                    <span className="text-xs font-semibold text-slate-400">{partnerName}</span>
                </div>

                <h3 className="font-bold text-xl mb-1 mt-4">{title}</h3>
                <p className="text-slate-400 text-sm mb-6 max-w-sm">
                    {description}
                </p>

                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 px-6 bg-white text-slate-900 font-medium rounded hover:bg-slate-100 transition-colors w-full sm:w-auto text-sm"
                >
                    View Offers <ExternalLink className="w-4 h-4 ml-2" />
                </a>
            </div>
        </div>
    );
}
