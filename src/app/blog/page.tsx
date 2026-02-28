import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogIndex() {
    const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'coverImage']);

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black pb-24">
            {/* Ambient Deep Space Grid & Volumetric Glows */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/4 right-1/4 w-1/3 h-96 bg-teal-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Header Zone */}
            <div className="relative border-b border-white/[0.04] py-16 lg:py-24 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded flex items-center justify-center shadow-inner shadow-white/5">
                            <BookOpen className="w-5 h-5 text-amber-500" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white text-center tracking-tighter mb-6 drop-shadow-lg">
                        Financial Intelligence.
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto text-center leading-relaxed">
                        Read our latest mathematical guides, execution strategies, and algorithmic breakdowns for mastering your money.
                    </p>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            href={`/blog/${post.slug}`}
                            key={post.slug}
                            className="aura-panel relative flex flex-col group bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl overflow-hidden hover:bg-white/[0.02] hover:border-white/[0.08] transition-all shadow-2xl duration-500 hover:-translate-y-1"
                        >
                            {post.coverImage && (
                                <div className="relative w-full aspect-[16/9] border-b border-white/[0.04] bg-white/[0.01] flex items-center justify-center overflow-hidden">
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-teal-500/10 transition-colors z-10 mix-blend-screen duration-500"></div>
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            )}

                            <div className="p-8 flex flex-col flex-1 relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded">Strategy</span>
                                    <span className="font-mono text-xs text-slate-500">
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors leading-tight tracking-tight">
                                    {post.title}
                                </h2>

                                <p className="text-sm text-slate-400 mb-8 flex-1 line-clamp-3 font-light leading-relaxed group-hover:text-slate-300">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-[10px] uppercase tracking-widest font-bold text-teal-400 gap-2 group-hover:gap-3 transition-all border-t border-white/[0.04] pt-6 relative z-10">
                                    Read Analysis <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
}
