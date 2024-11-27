import { api } from "@/api";
import { ChangeEvent, FormEvent, useState } from "react";

type UploadStatus = "idle" | "uploading" | "success" | "error";

export const useFileUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files[0]);
  };

  const handleFileSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;

    setStatus("uploading");

    const formData = new FormData();
    formData.append("file", file);

    try {
      await api.uploadFile(formData);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const isFileValid = file != null;
  const isStatusValid = status != "uploading";
  const isFormValid = isFileValid && isStatusValid;

  return {
    actions: { handleFileChange, handleFileSubmit },
    validators: { isFileValid, isFormValid },
    states: { status, file },
  };
};
