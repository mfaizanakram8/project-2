import type { Config } from 'tailwindcss';
import svgToDataUri from 'mini-svg-data-uri';
import { PluginAPI } from 'tailwindcss/types/config';

// Function to add CSS variables for colors
function addVariableForColors({ addBase, theme }: PluginAPI) {
  const allColors = theme('colors');

  if (!allColors) return;

  const newVars = Object.fromEntries(
    Object.entries(allColors).flatMap(([key, value]) => {
      if (typeof value === 'string') {
        return [[`--${key}`, value]];
      }
      if (typeof value === 'object') {
        return Object.entries(value).map(([subKey, subValue]) => [`--${key}-${subKey}`, subValue]);
      }
      return [];
    })
  );

  addBase({
    ":root": newVars,
  });
}

// Function to add SVG patterns as background utilities
function addSvgPatterns({ matchUtilities, theme }: PluginAPI) {
  const colors = theme('backgroundColor');

  const colorValues = Object.values(colors).flat(Infinity).filter((val) => typeof val === 'string');

  matchUtilities(
    {
      "bg-grid": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-grid-small": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
        )}")`,
      }),
      "bg-dot": (value: string) => ({
        backgroundImage: `url("${svgToDataUri(
          `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
        )}")`,
      }),
    },
    { values: colorValues, type: "color" }
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
        background: "var(--background)",
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
            transform: "translateY(100vh)", /* Move down the viewport */
            opacity: "0", /* Fade out */
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
