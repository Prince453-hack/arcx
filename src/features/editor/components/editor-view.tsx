import { useFile } from "@/features/projects/hooks/use-files";
import { Id } from "../../../../convex/_generated/dataModel";
import { useEditor } from "../hooks/use-editor";
import FileBreadCrumbs from "./file-breadcumbs";
import TopNavigation from "./top-navigation";
import Image from "next/image";
import CodeEditor from "./code-editor";

const EditorView = ({ projectId }: { projectId: Id<"project"> }) => {
  const { activeTabId } = useEditor(projectId);
  const activeFile = useFile(activeTabId);

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center">
        <TopNavigation projectId={projectId} />
      </div>
      {activeTabId && <FileBreadCrumbs projectId={projectId} />}
      <div className="flex-1 min-h-0 bg-background">
        {!activeFile && (
          <div className="size-full flex items-center justify-center">
            <Image src="/logo-alt.svg" alt="Arcx" width={50} height={50} />
          </div>
        )}

        {activeFile && <CodeEditor fileName={activeFile.name} />}
      </div>
    </div>
  );
};

export default EditorView;
