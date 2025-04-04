import { Resume } from '../../types/Resume';
import mockData from '../../mocks/resume-data.json';

export class ResumeService {
  static async getResume(): Promise<Resume> {
    try {
      // In a real implementation, this would be an API call
      // For now, we're simulating an API delay and returning mock data
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockData as Resume;
    } catch (error) {
      throw new Error('Failed to fetch resume data');
    }
  }

  static async getResumeById(id: string): Promise<Resume> {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));

      // For now, always return the same mock data
      // In a real implementation, this would fetch data based on the ID
      return mockData as Resume;
    } catch (error) {
      throw new Error(`Failed to fetch resume with id: ${id}`);
    }
  }

  static validateResume(data: unknown): data is Resume {
    if (!data || typeof data !== 'object') return false;

    const resume = data as Partial<Resume>;

    // Check for required fields
    if (!resume.basics?.name || !resume.basics?.email) return false;
    if (!Array.isArray(resume.work)) return false;
    if (!Array.isArray(resume.education)) return false;
    if (!Array.isArray(resume.skills)) return false;

    return true;
  }
}