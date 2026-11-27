import Image from "next/image";
import Link from "next/link";
import { works } from "./lib/works";
import { mainSkills, otherSkills } from "./lib/skills";
import SkillList from "./components/SkillList";

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
                <section id="works" className="flex flex-col gap-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                        works
                    </h2>
                    <ul>
                        {works.map((work) => (
                            <li key={work.slug}>
                                <Link
                                    className="mb-8 group flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6"
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
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs text-zinc-500">
                            主に使っています
                        </h3>
                        <SkillList skills={mainSkills} iconClass="size-12" />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-xs text-zinc-500">
                            触れたことがあります
                        </h3>
                        <SkillList skills={otherSkills} />
                    </div>
                </section>

                <section id="about" className="flex flex-col gap-4">
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                        About
                    </h2>
                    <div className="flex max-w-prose flex-col gap-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
                        <p>
                            煩雑な医療現場で、配置転換が多い業務の中での困りごとを解決、負担軽減のためにWebアプリケーションを学んでいます。
                        </p>
                        <p>
                            サービスを提供する人が、アプリケーションを活用することで、より良いサービスを提供できるような設計を心がけています。
                        </p>
                    </div>{" "}
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
