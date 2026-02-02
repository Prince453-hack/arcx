"use client";

import React from "react";
import Navbar from "./navbar";
import { Id } from "../../../../convex/_generated/dataModel";

interface ProjectIdLayoutProps {
  children: React.ReactNode;
  projectId: Id<"project">;
}

const ProjectIdLayout = ({ children, projectId }: ProjectIdLayoutProps) => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar projectId={projectId} />
      {children}
    </div>
  );
};

export default ProjectIdLayout;
