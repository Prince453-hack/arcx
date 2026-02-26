import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export const useCreateFiles = () => {
  return useMutation(api.files.createFile);
};

export const useCreateFolder = () => {
  return useMutation(api.files.createFolder);
};
