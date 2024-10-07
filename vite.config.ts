import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@providers": path.resolve(__dirname, "src/presentation/providers"),
			"@routes": path.resolve(__dirname, "src/routes"),
			"@pages": path.resolve(__dirname, "src/presentation/pages"),
		},
	},
});
