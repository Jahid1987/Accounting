const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto py-5 px-2 flex justify-between items-center gap-2 text-sm font-light">
        <nav className="flex flex-col">
          <h6 className="text-lg font-light">Company name</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-lg font-light">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="text-lg font-light">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
      </div>
      <h6 className="text-center pb-2 text-xs">
        Copyright © 2024 - All right reserved
      </h6>
    </footer>
  );
};

export default Footer;
