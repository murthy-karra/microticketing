import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  res.send('Hi There from Auth service');
});

export { router as signoutRouter };
