// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $about from "./routes/about.tsx";
import * as $api_admin_post from "./routes/api/admin/post.ts";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_login from "./routes/api/login.ts";
import * as $editor from "./routes/editor.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $index from "./routes/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $Editor from "./islands/Editor.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/about.tsx": $about,
    "./routes/api/admin/post.ts": $api_admin_post,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/login.ts": $api_login,
    "./routes/editor.tsx": $editor,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
    "./islands/Editor.tsx": $Editor,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
