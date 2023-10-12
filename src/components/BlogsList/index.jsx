import React from "react";

const BlogsList = () => {
  return (
    <div>
      <div className="title text-3xl">My Blogs</div>
      <div className="projects text-lg tracking-wide leading-relaxed mt-3">
        <li className="project">
          <a
            className="no-underline hover:underline"
            href="https://medium.com/@this.vijayguttula/properly-fixing-the-no-such-key-found-error-on-refresh-for-react-apps-hosted-on-aws-cloudfront-bc45ce133c8d"
          >
            <span className="font-bold">
              Properly Fixing the “No Such Key Found” Error on Refresh for React
              Apps Hosted on AWS Cloudfront and S3 (SEO-Friendly Solution)
            </span>
          </a>
        </li>
      </div>
    </div>
  );
};

export default BlogsList;
