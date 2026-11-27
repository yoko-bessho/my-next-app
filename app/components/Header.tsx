// src/app/components/Header.tsx
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { href: "/#works", label: "Works" },
    { href: "/#skills", label: "Skills" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/80">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-16">
                {/* 左端：アイコン → トップへ */}
                <Link href="/" aria-label="トップへ戻る" className="shrink-0">
                    <Image
                        src="/icon.png"
                        alt="YOKO BESSHO"
                        width={36}
                        height={36}
                        className="rounded-full transition hover:opacity-80"
                        priority
                    />
                </Link>

                {/* 右寄せ：ナビ */}
                <nav>
                    <ul className="flex items-center gap-4 text-sm sm:gap-8">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
