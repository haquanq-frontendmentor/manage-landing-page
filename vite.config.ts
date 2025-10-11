import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tailwindcss(),
        svelte({
            onwarn: (warning, defaltHandler) => {
                if (warning.code === "a11y_invalid_attribute") return;
                defaltHandler(warning);
            },
        }),
    ],
    base: "/manage-landing-page/",
});
