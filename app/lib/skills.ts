import type { IconType } from "react-icons";
import {
    SiLaravel,
    SiDocker,
    SiPhp,
    SiMysql,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiTailwindcss,
} from "react-icons/si";

export type Skill = {
    name: string;
    Icon: IconType;
    color: string; // ブランドカラー（ホバー時に使う）
};

// 少し慣れているもの適宜移動
export const mainSkills: Skill[] = [
];

// 触れたことがあるもの
export const otherSkills: Skill[] = [
    { name: "PHP", Icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
    { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { name: "Docker", Icon: SiDocker, color: "#2496ED" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", Icon: SiNodedotjs, color: "#5FA04E" },
];