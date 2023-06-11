import { type Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				heading: ["var(--font-heading)"],
			},
		},
	},
	plugins: [],
} satisfies Config;
