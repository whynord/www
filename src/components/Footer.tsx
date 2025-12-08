const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nord. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
