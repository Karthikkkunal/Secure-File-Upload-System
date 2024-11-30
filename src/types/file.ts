export interface FileStatus {
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'pending' | 'scanning' | 'safe' | 'malicious' | 'invalid';
  progress: number;
  uploadedAt: Date;
}

export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

export const MAX_FILE_SIZE = 100 * 1024 * 1024; 