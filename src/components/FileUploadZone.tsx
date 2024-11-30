import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import { validateFile } from '../utils/fileValidation';

interface FileUploadZoneProps {
  onFilesAccepted: (files: File[]) => void;
}

export const FileUploadZone: React.FC<FileUploadZoneProps> = ({ onFilesAccepted }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(file => !validateFile(file));
    if (validFiles.length > 0) {
      onFilesAccepted(validFiles);
    }
  }, [onFilesAccepted]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true
  });

  return (
    <div
      {...getRootProps()}
      className={`p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}
    >
      <input {...getInputProps()} />
      <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
      <p className="text-lg font-medium text-gray-700">
        {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
      </p>
      <p className="mt-2 text-sm text-gray-500">
        or click to select files
      </p>
      <p className="mt-1 text-xs text-gray-400">
        Supported formats: PDF, JPEG, PNG, GIF, DOC, DOCX (Max 10MB)
      </p>
    </div>
  );
};