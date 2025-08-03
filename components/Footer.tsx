
import React from 'react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 mt-24">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white">AceHack <span className="text-purple-400">5.0</span></h3>
            <p className="text-slate-400">Organized by UEM Jaipur</p>
          </div>
          <div className="flex space-x-6">
            <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802C9.042 3.965 8.71 3.977 7.433 4.03c-2.793.126-3.905 1.233-4.042 4.042-.053 1.277-.064 1.636-.064 4.92s.011 3.643.064 4.92c.137 2.809 1.249 3.916 4.042 4.042 1.277.053 1.636.064 4.92.064s3.643-.011 4.92-.064c2.809-.126 3.916-1.233 4.042-4.042.053-1.277.064-1.636.064-4.92s-.011-3.643-.064-4.92c-.126-2.809-1.233-3.916-4.042-4.042-1.277-.053-1.636-.064-4.92-.064zm0 2.88a5.056 5.056 0 100 10.112 5.056 5.056 0 000-10.112zm0 1.802a3.254 3.254 0 110 6.508 3.254 3.254 0 010-6.508zm6.353-3.417a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z"/></svg>
            </SocialIcon>
             <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </SocialIcon>
             <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21.2 5.2H2.8C2.3 5.2 2 5.5 2 6v12c0 .5.3 1 .8 1h18.4c.5 0 .8-.5.8-1V6c0-.5-.3-.8-.8-.8zM8.3 17H5.9V9h2.4v8zM7.1 8.1c-.9 0-1.5-.6-1.5-1.4 0-.8.6-1.4 1.5-1.4s1.5.6 1.5 1.4c0 .8-.6 1.4-1.5 1.4zm12 8.9h-2.4v-4c0-1-.4-1.7-1.2-1.7s-1.4.7-1.4 1.7v4h-2.4V9h2.4v1.1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.5z"/></svg>
            </SocialIcon>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} AceHack 5.0. All rights reserved. Made with ❤️ for UEM Jaipur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
