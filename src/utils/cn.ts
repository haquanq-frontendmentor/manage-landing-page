import clsx, { type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customMerge = extendTailwindMerge({
    override: {
        classGroups: {
            "font-size": ["100", "200", "300", "400", "500", "600", "700"],
            leading: ["tight", "tighter", "tightest"],
        },
    },
});

export function cn(...classes: ClassValue[]) {
    return customMerge(clsx(classes));
}
