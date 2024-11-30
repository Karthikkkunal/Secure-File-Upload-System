import React, { useState, useCallback } from 'react';
import { Shield } from 'lucide-react';
import { FileUploadZone } from './components/FileUploadZone';
import { FileList } from './components/FileList';
import { FileStatus } from './types/file';
import { validateFile } from './utils/fileValidation';
import { simulateMlScanning } from './utils/mlScanning';

function App() {
  const [files, setFiles] = useState<FileStatus[]>([]);

  const handleFilesAccepted = useCallback(async (acceptedFiles: File[]) => {
    const newFiles: FileStatus[] = acceptedFiles.map(file => ({
      id: crypto.randomUUID(),
      name: file.name,
      size: file.size,
      type: file.type,
      status: 'pending',
      progress: 0,
      uploadedAt: new Date()
    }));

    setFiles(prev => [...prev, ...newFiles]);

    // Process each file
    for (const [index, file] of acceptedFiles.entries()) {
      const fileId = newFiles[index].id;
      
      // Update status to scanning
      setFiles(prev => prev.map(f => 
        f.id === fileId ? { ...f, status: 'scanning', progress: 30 } : f
      ));

      // Simulate ML scanning
      const isSafe = await simulateMlScanning(file);

      // Update final status
      setFiles(prev => prev.map(f =>
        f.id === fileId ? {
          ...f,
          status: isSafe ? 'safe' : 'malicious',
          progress: 100
        } : f
      ));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="mx-auto h-12 w-12 text-blue-500" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Secure File Upload System
          </h2>
          <p className="mt-2 text-gray-600">
            Upload your files securely. Our ML-powered system will scan for potential threats.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <FileUploadZone onFilesAccepted={handleFilesAccepted} />
          <FileList files={files} />
        </div>
      </div>
    </div>
  );
}

export default App;