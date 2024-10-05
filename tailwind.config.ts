import svgToDataUri from "mini-svg-data-uri";
import { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";


function addVariableForColors({ addBase, theme }: PluginAPI) {
  const allColors = theme('colors', {}) || {};

  const newVars: Record<string, string> = {};

  Object.entries(allColors).forEach(([key, value]) => {
    if (typeof value === 'string') {
      newVars[`--${key}`] = value;
    } else if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        if (typeof subValue === 'string') {
          newVars[`--${key}-${subKey}`] = subValue;
        }
      });
    }
  });

  addBase({
    ":root": newVars,
  });
}


function addSvgPatterns({ matchUtilities, theme }: PluginAPI) {
  const colors = theme('colors', {}) || {};
  const colorEntries = Object.entries(colors);

  matchUtilities(
    {
      "bg-grid": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}" stroke-opacity="0.2"><path d="M0 0 H32" /><path d="M0 0 V32" /></svg>`
        )}")`,
        backgroundSize: '32px 32px',
      }),
      "bg-grid-small": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8" width="8" height="8" fill="none" stroke="${value}" stroke-opacity="0.2"><path d="M0 0 H8" /><path d="M0 0 V8" /></svg>`
        )}")`,
        backgroundSize: '8px 8px',
      }),
      "bg-dot": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none"><circle fill="${value}" cx="8" cy="8" r="1.6257413380501518"></circle></svg>`
        )}")`,
        backgroundSize: '16px 16px',
      }),
    },
    {
      values: Object.fromEntries(
        colorEntries.map(([key, value]) => [
          key,
          typeof value === 'string' ? value : 'currentColor',
        ])
      ),
      type: "color",
    }
  );
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#111827",
        foreground: "var(--foreground)",
      },
      keyframes: {
        movingBorder: {
          '0%': { border: '2px solid transparent', 'border-color': 'transparent' },
          '50%': { border: '2px solid var(--foreground)', 'border-color': 'var(--foreground)' },
          '100%': { border: '2px solid transparent', 'border-color': 'transparent' },
        },
        spotlight: {
          '0%': {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          '100%': {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll: {
          '0%': {
            transform: "translateX(0)",
          },
          '100%': {
            transform: "translateX(-100%)",
          },
        },
        meteor: {
          '0%': { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          '70%': { opacity: "1" },
          '100%': {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        meteorFall: {
          to: {
            transform: "translateY(100vh)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    addVariableForColors,
    addSvgPatterns,
  ],
};

export default config;