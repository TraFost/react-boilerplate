import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			assets: "/src/assets",
			components: "/src/presentation/components",
			hooks: "/src/presentation/hooks",
			providers: "/src/presentation/providers",
			layouts: "/src/presentation/layouts",
			pages: "/src/presentation/pages",
		},
	},
});
