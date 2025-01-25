import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
