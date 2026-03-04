import { useFile, useUpdateFile } from "@/features/projects/hooks/use-files";
import Image from "next/image";
import { Id } from "../../../../convex/_generated/dataModel";
import { useEditor } from "../hooks/use-editor";
import CodeEditor from "./code-editor";
import FileBreadCrumbs from "./file-breadcumbs";
import TopNavigation from "./top-navigation";
import { useRef } from "react";

const DEBOUNCE_MS = 1500;

const EditorView = ({ projectId }: { projectId: Id<"project"> }) => {
  const { activeTabId } = useEditor(projectId);
  const activeFile = useFile(activeTabId);
  const updateFile = useUpdateFile();
  const timeOut = useRef<NodeJS.Timeout | null>(null);

  const isActiveBinary = activeFile && activeFile.storageId;
  const isActiveText = activeFile && !activeFile.storageId;

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

        {isActiveText && (
          <CodeEditor
            fileName={activeFile.name}
            key={activeFile._id}
            initialValue={activeFile.content || ""}
            onChange={(content: string) => {
              if (timeOut.current) {
                clearTimeout(timeOut.current);
              }

              timeOut.current = setTimeout(() => {
                updateFile({ id: activeFile._id, content });
              }, DEBOUNCE_MS);
            }}
          />
        )}

        {isActiveBinary && <p>TODO</p>}
      </div>
    </div>
  );
};

export default EditorView;
