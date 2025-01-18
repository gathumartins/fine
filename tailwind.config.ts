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
        'newsbg': "url('/images/newsletter.jpeg')"
      },
      colors:{
        'fsecondary':"#2B2D37",
        'fprimary':"#ffd602",
        'fshade':'#E0AC60'
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
