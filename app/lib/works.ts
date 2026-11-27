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
        slug: "attendance-management",
        title: "attendance-management",
        tagline: "勤怠管理アプリ",
        description:
            "プログラミングスクールでの演習課題として作成しました。出退勤の打刻、勤怠の申請、承認ができるアプリです。管理者は従業員の勤怠状況確認、代理申請ができます。",
        thumbnail: "/works/attendance-management-1.png",
        url: "", // 公開後にURLを記載する
        repo: "https://github.com/yoko-bessho/attendance-management",
        stack: ["Laravel", "PHP", "MySQL"],
        year: "2026",
    },
    {
        slug: "mogitate",
        title: "mogitate",
        tagline: "もぎたてフルーツのECサイト",
        description:
            "プログラミングスクールでの演習課題として作成しました。もぎたてフルーツを販売するECサイトです。",
        thumbnail: "/works/mogitate.png",
        url: "", // 公開後にURLを記載する
        repo: "https://github.com/yoko-bessho/mogitate",
        stack: ["Laravel", "PHP", "MySQL"],
        year: "2025",
    },
    {
        slug: "nursing-procedures",
        title: "nursing-procedures",
        tagline: "看護手順管理アプリ",
        description:
            "看護手順をgitで管理し、素早く確認するアプリです。今後は、手順の登録・編集・削除機能を追加予定です。",
        thumbnail: "/works/nursing-procedures.png",
        url: "https://yoko-bessho.github.io/nursing-procedures/",
        repo: "https://github.com/yoko-bessho/nursing-procedures",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "node.js"],
        year: "2026",
    },
];

export const getWork = (slug: string) => works.find((w) => w.slug === slug);
