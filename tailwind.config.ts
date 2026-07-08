import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        night: "#070814",
        ink: "#0d1022",
        panel: "#12162b",
        mist: "#aeb7d8",
        pulse: "#7c5cff",
        charge: "#20f3d2",
        ember: "#ff6bb5",
        lime: "#d7ff73"
      },
      boxShadow: {
        glow: "0 0 42px rgba(32, 243, 210, 0.16)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-premium":
          "radial-gradient(circle at top left, rgba(124,92,255,.35), transparent 28%), radial-gradient(circle at top right, rgba(32,243,210,.22), transparent 26%), linear-gradient(180deg, #070814 0%, #0d1022 52%, #070814 100%)"
      }
    }
  },
  plugins: []
};

export default config;
