import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, User, ChevronRight } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { marked } from 'marked';

export async function generateStaticParams() {
    const posts = getAllPosts(['slug']);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug, ['title', 'date', 'slug', 'content', 'coverImage', 'author', 'readTime']);

    // Render MD to HTML (Server Side)
    const renderedHTML = await marked.parse(post.content);

    // Mock TOC Extraction (For production this would parse headings, here we show the structure)
    const mockTOC = [
        { id: "introduction", title: "Core Mechanics" },
        { id: "analysis", title: "Quantitative Analysis" },
        { id: "execution", title: "Action Steps" }
    ];

    return (
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#090B14] to-black pb-32">
            {/* Ambient Deep Space Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-0 right-1/4 w-1/3 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Article Header (Mega-Header & Metadata) */}
            <div className="relative border-b border-white/[0.04] pt-16 pb-20 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <Link href="/blog" className="inline-flex items-center text-[10px] uppercase tracking-widest font-bold text-slate-500 hover:text-teal-400 transition-colors mb-12 py-2 px-4 rounded-full border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03]">
                        <ArrowLeft className="w-3 h-3 mr-2" /> Back to All Articles
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded">
                            Financial Guide
                        </span>
                        <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime || "7 min read"}</span>
                            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author || "CalcMoney Team"}</span>
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8 drop-shadow-lg max-w-4xl">
                        {post.title}
                    </h1>

                    {post.coverImage && (
                        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden border border-white/[0.04] shadow-2xl mt-4">
                            <Image src={post.coverImage} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 70vw" priority />
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content Layout (Split Columns) */}
            <div className="container mx-auto px-4 py-16 max-w-7xl relative z-10 flex flex-col lg:flex-row gap-16">

                {/* Left Sidebar: Table of Contents */}
                <aside className="lg:w-1/4 hidden lg:block">
                    <div className="sticky top-32 aura-panel bg-[#090B14]/40 backdrop-blur-2xl border border-white/[0.04] rounded-2xl p-6 shadow-2xl">
                        <h4 className="text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-6 drop-shadow-sm">Table of Contents</h4>
                        <ul className="space-y-4">
                            {mockTOC.map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item.id}`} className="text-sm font-light text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group">
                                        <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-teal-500 transition-colors" />
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>

                {/* Right Column: Wide Article Content */}
                <article className="lg:w-3/4 max-w-4xl">

                    {post.coverImage && (
                        <div className="relative w-full aspect-video md:aspect-[21/9] bg-white/[0.02] rounded-2xl border border-white/[0.04] overflow-hidden mb-16 flex items-center justify-center p-8 shadow-inner shadow-black/50">
                            <div className="absolute inset-0 bg-teal-500/5 mix-blend-screen duration-500 pointer-events-none"></div>
                            <Image
                                src={post.coverImage}
                                alt={post.title}
                                fill
                                className="object-cover opacity-80 animate-in fade-in duration-1000"
                                priority
                            />
                        </div>
                    )}

                    {/* 
                      OLED Glassmorphism Markdown Output
                    */}
                    <div
                        className="prose prose-invert max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:text-white 
              prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:border-b prose-h2:border-white/[0.04] prose-h2:pb-4
              prose-h3:text-2xl prose-h3:mt-12
              prose-p:text-slate-300 prose-p:leading-relaxed prose-p:font-light prose-p:text-lg
              prose-a:text-teal-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-teal-300
              prose-strong:font-bold prose-strong:text-white
              prose-blockquote:border-l-[3px] prose-blockquote:border-teal-500 prose-blockquote:bg-teal-500/5 prose-blockquote:px-8 prose-blockquote:py-6 prose-blockquote:not-italic prose-blockquote:font-light prose-blockquote:text-slate-300 prose-blockquote:rounded-r-xl prose-blockquote:shadow-lg
              prose-ul:text-slate-300 prose-li:font-light prose-li:text-lg
              prose-li:marker:text-teal-500 prose-code:text-amber-400 prose-code:font-mono prose-code:bg-white/5 prose-code:px-2 prose-code:py-0.5 prose-code:rounded
              prose-pre:bg-[#05060A] prose-pre:border prose-pre:border-white/[0.04] prose-pre:rounded-2xl prose-pre:shadow-2xl prose-pre:p-6"
                        dangerouslySetInnerHTML={{ __html: renderedHTML }}
                    />

                    <hr className="my-20 border-white/[0.04]" />

                    {/* In-Article CTA Component */}
                    <div className="aura-panel relative block p-12 md:p-16 text-center bg-[#090B14]/60 backdrop-blur-3xl border border-white/[0.04] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] group">
                        <div className="absolute inset-0 bg-teal-500/10 blur-[100px] rounded-full pointer-events-none mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <h3 className="font-black text-white text-3xl md:text-4xl tracking-tighter mb-4 relative z-10 drop-shadow-md">Ready to Run the Numbers?</h3>
                        <p className="text-slate-400 font-light text-lg mb-10 relative z-10 max-w-xl mx-auto">Stop estimating. Plug in your real numbers and see exactly where you stand — free, instant, no signup.</p>
                        <Link
                            href="/calculators"
                            className="inline-flex h-14 items-center justify-center rounded-lg bg-teal-600/90 px-10 text-[10px] uppercase tracking-widest font-bold text-white hover:bg-teal-500 shadow-[0_0_30px_rgba(13,148,136,0.3)] hover:shadow-[0_0_40px_rgba(13,148,136,0.5)] transition-all hover:-translate-y-1 relative z-10"
                        >
                            Try the Free Calculator
                        </Link>
                    </div>

                </article>
            </div>
        </div>
    );
}
