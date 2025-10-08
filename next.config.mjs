/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for GitHub Pages or other static hosts.
   *
   * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports
   */
  output: "export",

  /**
   * No base path since you're deploying to a custom domain root.
   */
  basePath: "",

  /**
   * Disable server-based image optimization since Next.js static export
   * doesn't support dynamic features.
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;