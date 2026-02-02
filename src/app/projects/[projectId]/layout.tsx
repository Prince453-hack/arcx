import ProjectIdLayout from "@/features/projects/components/project-id-layout";
import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectId: Id<"project"> }>;
}) => {
  const { projectId } = await params;

  return <ProjectIdLayout projectId={projectId}>{children}</ProjectIdLayout>;
};

export default Layout;
