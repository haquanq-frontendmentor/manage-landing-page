import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge, twMerge } from "tailwind-merge";

const customMerge = extendTailwindMerge({
    extend: {
        classGroups: {
            "font-size": ["text-100", "text-200", "text-300", "text-400", "text-500", "text-600", "text-700"],
            tracking: ["tracking-tight", "tracking-tighter", "tracking-tightest"],
        },
    },
});

export function cn(...classes: ClassValue[]) {
    return customMerge(clsx(classes));
}
