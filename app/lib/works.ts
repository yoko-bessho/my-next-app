export type Work = {
    slug: string;
    title: string;
    tagline: string; // 一覧の右に出す「一言説明」
    description: string; // 詳細ページ本文
    thumbnail: string; // サムネのパス /works/xxx.png
    url?: string; // 公開URL
    repo?: string;
    stack: string[];
    year: string;
};

export const works: Work[] = [
    {
        slug: "作成したアプリのslug",
        title: "Todo App",
        tagline: "作成したアプリ一言説明",
        description: "どの技術を使用して作成したか、どのような機能があるかを記載する、目的や工夫した点なども記載する",
        thumbnail: "/works/todo-app.png",
        url: "https://example.com",
        repo: "https://github.com/you/todo-app",
        stack: ["Next.js", "TypeScript", "Tailwind CSS"],
        year: "2026",
    },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
