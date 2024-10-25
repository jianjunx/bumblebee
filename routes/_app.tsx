import { type PageProps } from "$fresh/server.ts";
export default function App({ Component, pattern }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>bumblebee</title>
        <link rel="stylesheet" href="/styles.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css"
        />
        {pattern === "/editor" && (
          <>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/vditor/3.10.7/index.min.css"
            />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vditor/3.10.7/index.min.js">
            </script>
          </>
        )}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
