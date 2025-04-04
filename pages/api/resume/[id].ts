import { NextApiRequest, NextApiResponse } from 'next';
import { ResumeService } from '../../../api/services/resume';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    return res.status(400).json({ message: 'Invalid resume ID' });
  }

  try {
    const resume = await ResumeService.getResumeById(id);
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ message: `Failed to fetch resume with id: ${id}` });
  }
}