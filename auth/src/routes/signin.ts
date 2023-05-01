import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  res.send('Hi There from Auth service');
});

export { router as signinRouter };
