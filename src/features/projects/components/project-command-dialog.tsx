import { AlertCircleIcon, GlobeIcon, Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { Doc } from "../../../../convex/_generated/dataModel";
import { useProjects } from "../hooks/use-projects";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface ProjectCommandDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const getProjectIcon = (project: Doc<"project">) => {
  if (project.importStatus === "completed") {
    return <FaGithub className="size-4 text-muted-foreground" />;
  }
  if (project.importStatus === "failed") {
    return <AlertCircleIcon className="size-4 text-muted-foreground" />;
  }
  if (project.importStatus === "importing") {
    return (
      <Loader2Icon className="size-4 text-muted-foreground animate-spin" />
    );
  }

  return <GlobeIcon className="size-4 text-muted-foreground" />;
};

const ProjectCommandDialog = ({
  open,
  onOpenChange,
}: ProjectCommandDialogProps) => {
  const router = useRouter();
  const projects = useProjects();

  const handleSelect = (projectId: string) => {
    router.push(`/projects/${projectId}`);
    onOpenChange(false);
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search Projects"
      description="Search and navigate to the projects"
    >
      <CommandInput placeholder="Search Projects..." />
      <CommandList>
        <CommandEmpty>No Project Found</CommandEmpty>
        <CommandGroup heading="Projects">
          {projects?.map((project) => (
            <CommandItem
              key={project._id}
              value={`${project.name}-${project._id}`}
              onSelect={() => handleSelect(project._id)}
            >
              {getProjectIcon(project)}
              <span>{project.name}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default ProjectCommandDialog;
