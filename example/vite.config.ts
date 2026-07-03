import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(dirname, "..");

export default defineConfig({
    root: dirname,
    plugins: [react()],
    server: {
        fs: {
            allow: [workspaceRoot],
        },
    },
});