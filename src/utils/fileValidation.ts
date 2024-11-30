import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from '../types/file';

export const validateFile = (file: File): string | null => {
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return 'Invalid file type. Only PDF, JPEG, PNG, GIF, and Word documents are allowed.';
  }

  if (file.size > MAX_FILE_SIZE) {
    return 'File size exceeds 10MB limit.';
  }

  return null;
};