import React from "react";

const Footer = () => {
  return (
    <div className="pt-32 pb-6">
      <p className="text-center mb-1 header-hover font-mono">Designed & Built by Bikrom Roy
      </p>
      <div className="">
       <a className="flex items-center gap-5 justify-center " rel="noopener noreferrer" href="https://github.com/Bikrom2001" target='_blank'>
       <p className="flex items-center gap-2 header-hover">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star w-4 h-4"><title>Star</title><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        <span className="font-mono text-sm">5,627</span>
        </p>
        <p className="flex items-center gap-2 header-hover ">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather w-4 h-4 feather-git-branch"><title>Git Fork</title><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
        <span className="font-mono text-sm">2,627</span>
        </p>
       </a>
      </div>
    </div>
  );
};

export default Footer;
