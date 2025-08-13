const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-inner py-4">
      <div className="container mx-auto px-4 flex justify-center text-white">
        <p className="text-sm text-center">
          © {new Date().getFullYear()} Registration System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
