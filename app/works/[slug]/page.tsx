import { Suspense } from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { works, getWork } from "../../lib/works";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return works.map((work) => ({
        slug: work.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const work = getWork(slug);
    if (!work) notFound();

    return {
        title: work.title,
        description: work.tagline,
        openGraph: {
            images: [work.thumbnail],
        },
    };
}

export default async function WorkPage({ params }: Props) {
    return (
        <main>
            <Suspense fallback={<WorkSkeleton />}>
                <WorkContent params={params} />
            </Suspense>
        </main>
    );
}

async function WorkContent({ params }: Props) {
    const { slug } = await params;
    const work = getWork(slug);
    if (!work) notFound();

    return (
        <article className="mx-auto flex max-w-3xl flex-col gap-10 py-24">
            <header className="flex flex-col gap-3">
                <h1 className="mx-auto text-3xl font-bold">{work.title}</h1>

                <p className="mx-auto text-zinc-600 dark:text-zinc-400">
                    {work.tagline}
                </p>

                <p className="text-right text-xs text-zinc-500">
                    {work.year} ・ {work.stack.join(" / ")}
                </p>
            </header>
            <Image
                src={work.thumbnail}
                alt={work.title}
                width={1200}
                height={750}
                className="rounded-xl border border-zinc-200 dark:border-zinc-800"
                priority
            />
            <div className="flex gap-4">
                {work.url && (
                    <a
                        href={work.url}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full bg-zinc-900 px-5 py-2 text-sm text-white dark:bg-white dark:text-black"
                    >
                        サイトを見る
                    </a>
                )}
                {work.repo && (
                    <a
                        href={work.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-zinc-300 px-5 py-2 text-sm dark:border-zinc-700"
                    >
                        GitHub
                    </a>
                )}
            </div>
            <p className="leading-relaxed whitespace-pre-line">
                {work.description}
            </p>
        </article>
    );
}

// work詳細ページのSkeleton
function WorkSkeleton() {
    return (
        <div
            className="mx-auto flex max-w-3xl animate-pulse flex-col gap-10 py-24"
            aria-hidden
        >
            {/* header 相当：タイトル中央・タグライン中央・メタ右寄せ */}
            <div className="flex flex-col gap-3">
                <div className="mx-auto h-9 w-72 rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="mx-auto h-6 w-48 rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="ml-auto h-4 w-56 rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>

            {/* 画像 */}
            <div className="aspect-1200/750 w-full rounded-xl bg-zinc-200 dark:bg-zinc-800" />

            {/* ボタン2つ */}
            <div className="flex gap-4">
                <div className="h-9 w-32 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-9 w-28 rounded-full bg-zinc-200 dark:bg-zinc-800" />
            </div>

            {/* description 2行分 */}
            <div className="flex flex-col gap-2">
                <div className="h-4 w-full rounded bg-zinc-200 dark:bg-zinc-800" />
                <div className="h-4 w-4/5 rounded bg-zinc-200 dark:bg-zinc-800" />
            </div>
        </div>
    );
}