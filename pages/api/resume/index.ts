import { NextApiRequest, NextApiResponse } from 'next';
import { ResumeService } from '../../../api/services/resume';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const resume = await ResumeService.getResume();
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch resume data' });
  }
}