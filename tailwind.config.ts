import {heroui} from "@heroui/react";
import type { Config } from "tailwindcss";

const config: Config ={
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		backgroundImage:{
        'footerbg':"url('/images/footerbg.jpeg')",
        'newsbg': "url('/images/newsletter.webp')"
      },
      colors:{
        'fprimary':"#ffd602",
        'fsecondary':"#0B0A08",
        'fshade':'#E0AC60',
        'faccent':'#6084E0',
        'ftone':'#545861',
        'ftint':'#615F54'
      },
  	}
  },
  darkMode: "class",
  plugins: [require("tailwindcss-animate"), heroui()],
}

export default config;
