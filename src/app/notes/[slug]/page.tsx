// src/app/notes/[slug]/page.tsx
import fs from "fs";
import path from "path";
import type { ComponentProps } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

const CONTENT_DIR = path.join(process.cwd(), "content/notes");

const components = {
  h2: (props: ComponentProps<"h2">) => (
    <h2 className="text-2xl font-black text-[#f8f4df] mt-12 mb-6" {...props} />
  ),
  p: (props: ComponentProps<"p">) => <p className="mb-6" {...props} />,
  ul: (props: ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 space-y-3 my-6 text-[#c9d0d8]" {...props} />
  ),
  ol: (props: ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 space-y-3 my-6 text-[#c9d0d8]" {...props} />
  ),
  li: (props: ComponentProps<"li">) => <li className="pl-2" {...props} />,
  strong: (props: ComponentProps<"strong">) => (
    <strong className="text-[#f8f4df] font-semibold" {...props} />
  ),
  blockquote: (props: ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-4 border-[#ffce5c] pl-6 my-12 italic text-[#c9d0d8]"
      {...props}
    />
  ),
};

export default async function NoteTemplate({ params }: { params: { slug: string } }) {
  const filePath = path.join(CONTENT_DIR, `${params.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf8");

  const { content, frontmatter } = await compileMDX<{ title: string; date: string; category: string }>({
    source: fileContent,
    components,
    options: { parseFrontmatter: true },
  });

  return (
    <main className="relative min-h-screen bg-[#11131f] text-[#f8f4df] pb-32">
      <div className="absolute inset-0 bg-noise z-0 fixed pointer-events-none" />
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />

      <nav className="relative z-10 w-full max-w-3xl mx-auto px-6 py-12">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[#c9d0d8] hover:text-[#f8f4df] transition-colors group font-semibold"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>
      </nav>

      <article className="relative z-10 w-full max-w-3xl mx-auto px-6">
        <header className="py-12 border-b-2 border-[#f8f4df]/12 mb-12">
          <div className="flex gap-4 text-sm font-mono text-[#ffce5c] mb-6 uppercase">
            <span>{frontmatter.date}</span>
            <span>/</span>
            <span>{frontmatter.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-normal text-[#f8f4df] mb-6 leading-tight">
            {frontmatter.title}
          </h1>
        </header>

        <div className="text-xl text-[#c9d0d8] leading-relaxed font-medium">
          {content}
        </div>
      </article>
    </main>
  );
}
