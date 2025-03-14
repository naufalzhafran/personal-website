import nextra from "nextra";
import type { NextConfig } from "next";

const withNextra = nextra({
  contentDirBasePath: "/docs", // Or even nested e.g. `/docs/advanced`
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextra(nextConfig);
