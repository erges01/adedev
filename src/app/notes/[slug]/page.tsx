// src/app/notes/[slug]/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

// 1. Define where our content lives
const CONTENT_DIR = path.join(process.cwd(), "content/notes");

// 2. Define our custom markdown styles to match your cinematic vibe
const components = {
  h2: (props: any) => <h2 className="text-2xl font-bold text-white mt-12 mb-6" {...props} />,
  p: (props: any) => <p className="mb-6" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-6 space-y-3 my-6 text-gray-300" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-6 space-y-3 my-6 text-gray-300" {...props} />,
  li: (props: any) => <li className="pl-2" {...props} />,
  strong: (props: any) => <strong className="text-white font-medium" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-2 border-blue-500 pl-6 my-12 italic text-gray-300" {...props} />
  ),
};

export default async function NoteTemplate({ params }: { params: { slug: string } }) {
  // 3. Read the exact MDX file based on the URL
  const filePath = path.join(CONTENT_DIR, `${params.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound(); // Triggers a 404 page if the note doesn't exist
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  // 4. Parse the markdown and the frontmatter
  const { content, frontmatter } = await compileMDX<{ title: string; date: string; category: string }>({
    source: fileContent,
    components,
    options: { parseFrontmatter: true },
  });

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-[#ededed] selection:bg-blue-500/30 font-sans pb-32">
      <div className="absolute inset-0 bg-noise z-0 fixed pointer-events-none" />

      <nav className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Lab
        </Link>
      </nav>

      <article className="relative z-10 w-full max-w-3xl mx-auto px-6">
        <header className="py-12 border-b border-white/10 mb-12">
          <div className="flex gap-4 text-sm font-mono text-blue-400 mb-6 uppercase tracking-widest">
            <span>{frontmatter.date}</span>
            <span>&mdash;</span>
            <span>{frontmatter.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            {frontmatter.title}
          </h1>
        </header>

        {/* 5. Render the styled markdown content */}
        <div className="text-xl text-gray-400 leading-relaxed font-medium">
          {content}
        </div>
      </article>
    </main>
  );
}