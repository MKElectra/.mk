"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, FileCheck, X, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FileUploadProps {
  onFileSelect?: (file: File | null) => void;
  acceptedFormats?: string[];
  maxSizeMB?: number;
  label?: string;
  sublabel?: string;
  className?: string;
}

export function FileUpload({
  onFileSelect,
  acceptedFormats = [".stl", ".step", ".stp", ".obj", ".3mf", ".cad", ".pdf", ".zip"],
  maxSizeMB = 50,
  label = "Upload CAD / 3D Model or Drawings",
  sublabel = "Supports STL, STEP, STP, OBJ, 3MF, CAD, PDF (Max 50MB)",
  className,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];

    // Check size
    if (file.size > maxSizeMB * 1024 * 1024) {
      setErrorMessage(`File size exceeds maximum limit of ${maxSizeMB}MB.`);
      setSelectedFile(null);
      if (onFileSelect) onFileSelect(null);
      return;
    }

    setErrorMessage(null);
    setSelectedFile(file);
    if (onFileSelect) onFileSelect(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedFile(null);
    setErrorMessage(null);
    if (inputRef.current) inputRef.current.value = "";
    if (onFileSelect) onFileSelect(null);
  };

  return (
    <div className={cn("w-full", className)}>
      <input
        ref={inputRef}
        type="file"
        accept={acceptedFormats.join(",")}
        onChange={(e) => handleFiles(e.target.files)}
        className="hidden"
        id="file-upload-input"
      />

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 flex flex-col items-center justify-center min-h-[140px]",
          dragActive
            ? "border-cyan-400 bg-brand-500/10 shadow-lg shadow-cyan-500/10"
            : selectedFile
            ? "border-emerald-500/60 bg-emerald-950/20"
            : "border-steel-700/80 bg-navy-900/50 hover:border-brand-500/50 hover:bg-navy-850/50"
        )}
      >
        {selectedFile ? (
          <div className="flex items-center justify-between w-full max-w-md p-3 rounded-lg bg-navy-800 border border-emerald-500/30">
            <div className="flex items-center space-x-3 truncate">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <FileCheck className="w-5 h-5" />
              </div>
              <div className="text-left truncate">
                <p className="text-sm font-semibold text-white truncate">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-steel-400">
                  {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Ready for quote
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleRemove}
              className="p-1 rounded-md text-steel-400 hover:text-red-400 hover:bg-navy-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <div className="w-12 h-12 rounded-xl bg-navy-800 border border-steel-700 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              <UploadCloud className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-steel-100">{label}</p>
            <p className="text-xs text-steel-400 mt-1 max-w-sm">{sublabel}</p>
            <span className="mt-3 text-xs font-mono text-cyan-400 underline underline-offset-2">
              Browse Files or Drag & Drop
            </span>
          </>
        )}
      </div>

      {errorMessage && (
        <div className="flex items-center gap-2 mt-2 text-xs text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
}
