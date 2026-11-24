import Image from "next/image";
import Link from "next/link";
import { works } from "./lib/works";

export default function Home() {
    return (
        <div>
            <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 py-24 sm:px-16">
                <section className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        YOKO BESSHO
                    </h1>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        役立つ Webアプリ を目指します。
                    </p>
                </section>
                <section className="flex flex-col gap-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                        works
                    </h2>
                    <ul>
                        {works.map((work) => (
                            <li key={work.slug}>
                                <Link
                                    className="group flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
                                    href={`/works/${work.slug}`}
                                >
                                    <Image
                                        src={work.thumbnail}
                                        alt={work.title}
                                        width={320}
                                        height={200}
                                        className="w-full rounded-lg border border-zinc-200 object-cover transition group-hover:opacity-80 sm:w-56 dark:border-zinc-800"
                                    />
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-medium group-hover:underline">
                                            {work.title}
                                        </h3>
                                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                            {work.tagline}
                                        </p>
                                        <p className="text-xs text-zinc-500">
                                            {work.stack.join(" / ")}
                                        </p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section id="skills" className="flex flex-col gap-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                        Skills
                    </h2>
                    <p>ここにスキル情報を記載</p>
                </section>

                <section id="about" className="flex flex-col gap-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                        About
                    </h2>
                    <p>ここに自己紹介を入れる</p>
          </section>
                
                <section id="contact" className="flex flex-col gap-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                        Contact
                    </h2>
                    <p>ここに問い合わせ情報を記載</p>
                </section>
            </main>
        </div>
    );
}
