import { Sidebar } from "@/components/Sidebar";
import { Editor } from "@/components/Editor";

export default async function Index() {
  return (
    <div className="grow flex">
      <Sidebar />
      <Editor />
    </div>
  );
}
