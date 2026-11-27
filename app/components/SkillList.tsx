import type { CSSProperties } from "react";
import { type Skill } from "../lib/skills";

export default function SkillList({
    skills,
    iconClass = "size-9",
}: {
    skills: Skill[];
    iconClass?: string;
}) {
    return (
        <ul className="flex flex-wrap gap-x-8 gap-y-6">
            {skills.map(({ name, Icon, color }) => (
                <li
                    key={name}
                    className="group flex w-20 flex-col items-center gap-2"
                    style={{ "--brand": color } as CSSProperties}
                >
                    <Icon
                        aria-hidden
                        className={`${iconClass} text-zinc-400 transition-colors duration-200 group-hover:text-(--brand) dark:text-zinc-500`}
                    />
                    <span className="text-center text-xs text-zinc-600 dark:text-zinc-400">
                        {name}
                    </span>
                </li>
            ))}
        </ul>
    );
}