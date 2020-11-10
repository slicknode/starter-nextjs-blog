const PREVIEW_SECRET_TOKEN = process.env.PREVIEW_SECRET_TOKEN;

export default async (req, res) => {
  // Check the secret and next parameters
  // This secret should only be known to this API route and the CMS
  if (PREVIEW_SECRET_TOKEN && req.query.secret !== PREVIEW_SECRET_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  } else if (!PREVIEW_SECRET_TOKEN) {
    console.warn('WARNING: No PREVIEW_SECRET_TOKEN configured in ENV variables, preview mode is not secure.');
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});
  res.end('Preview mode enabled');
}
