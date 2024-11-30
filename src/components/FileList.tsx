import React from 'react';
import { FileStatus } from '../types/file';
import { CheckCircle, AlertCircle, Clock, Shield } from 'lucide-react';

interface FileListProps {
  files: FileStatus[];
}

export const FileList: React.FC<FileListProps> = ({ files }) => {
  const getStatusIcon = (status: FileStatus['status']) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'malicious':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      case 'scanning':
        return <Shield className="w-5 h-5 text-blue-500 animate-pulse" />;
      default:
        return <Clock className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusText = (status: FileStatus['status']) => {
    switch (status) {
      case 'safe':
        return 'Safe';
      case 'malicious':
        return 'Threat Detected';
      case 'scanning':
        return 'Scanning...';
      case 'invalid':
        return 'Invalid File';
      default:
        return 'Pending';
    }
  };

  if (files.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Uploaded Files</h3>
      <div className="space-y-3">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center p-4 bg-white rounded-lg border border-gray-200"
          >
            <div className="mr-4">
              {getStatusIcon(file.status)}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <div className="flex items-center">
              <span className={`px-3 py-1 rounded-full text-sm
                ${file.status === 'safe' ? 'bg-green-100 text-green-800' :
                  file.status === 'malicious' ? 'bg-red-100 text-red-800' :
                    file.status === 'scanning' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'}`}>
                {getStatusText(file.status)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};