import { withIronSession, Session } from 'next-iron-session';
import { NextApiRequest, NextApiResponse } from 'next';

export interface SessionRequest extends NextApiRequest {
  session: Session;
}

function handler(req: SessionRequest, res: NextApiResponse) {
  const user = req.session.get('user');
  if (user) {
    return res.send({ user });
  }
  return res.send('not logged in');
}

export default withIronSession(handler, {
  password: 'complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
  cookieName: 'next-iron-session',
});
