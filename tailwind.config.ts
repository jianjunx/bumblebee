import { type Config } from "tailwindcss";
import flyonui from "flyonui";
import flyonuiPlugin from "flyonui/plugin";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
    // "./node_modules/flyonui/dist/js/*.js"
  ],
  plugins: [
    flyonui,
    flyonuiPlugin
  ],
} satisfies Config;
