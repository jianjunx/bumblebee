import { PageProps } from "$fresh/server.ts";
import { handler } from "../api/joke.ts";

export default function Greet(props: PageProps) {
  return <div>Hello {props.params.name}</div>;
}
