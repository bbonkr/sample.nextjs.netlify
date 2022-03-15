import type { NextApiRequest, NextApiResponse } from 'next';
import { SampleModel } from '../../models/Sample';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    const data: SampleModel = { message: 'Hello :) 🇰🇷' };
    res.status(200).json(data);
};

export default handler;
