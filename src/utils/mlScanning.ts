// Simulated ML scanning service
export const simulateMlScanning = async (file: File): Promise<boolean> => {
  // Simulate scanning delay and random result
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate ML-based threat detection (90% safe files)
  return Math.random() > 0.1;
};