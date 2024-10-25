import { useEffect } from "preact/hooks";
// import Vditor from "vditor";
export default function Editor() {
  useEffect(() => {
    const Vditor = (window as any).Vditor;
    const vditor = new Vditor("md-editor", {
      height: "calc(100vh - 64px)",
    });
    console.log(vditor);
  });
  return (
    <>
      <header class="h-16">
        <input class="h-full " type="text" placeholder="输入文章标题..." />
        <div>
          <button>发布</button>
        </div>
      </header>
      <div id="md-editor"></div>
    </>
  );
}
