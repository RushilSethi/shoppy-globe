const Footer = () => {
    return (
      <footer className="bg-container bg-opacity-30 backdrop-blur-lg border-t-2 border-border-color shadow-md py-6 px-4">
        <div className="max-w-screen-lg mx-auto text-center text-text-primary">
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
          </p>
          <div className="mt-4 space-x-6">
            <a
              href="#"
              className="text-accent-primary hover:text-accent-secondary transition duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-accent-primary hover:text-accent-secondary transition duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-accent-primary hover:text-accent-secondary transition duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  