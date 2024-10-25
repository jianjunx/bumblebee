import markdownit from "markdown-it";
import hljs from "highlight.js";
const md = markdownit({
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (err) {
        console.log(err);
      }
    }
    return ""; // use external default escaping
  },
});

export default function AboutPage() {
  const decoder = new TextDecoder("utf-8");
  const data = Deno.readFileSync("a.md");
  const result = md.render(decoder.decode(data));

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <article
        class="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: result }}
      >
      </article>
    </div>
  );
}
