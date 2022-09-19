import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

/*
const handler: NextApiHandler = (req, res) => {
  res.status(200).json({ curso: 'next.js', aluno: 'Éderson' });
};

export default handler;
*/

/*
export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ curso: 'next.js', aluno: 'Éderson' });
}
*/

/*
export type ResponseData = {
  curso: string;
  aluno: string;
}

const handler: NextApiHandler<ResponseData> = (req, res) => {
  res.status(200).json({ curso: 'next.js', aluno: 'Éderson' });
}

export default handler;
*/

export type ResponseData = {
  curso: string;
  aluno: string;
}

export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  res.status(200).json({ curso: 'next.js', aluno: 'Éderson' });
}
