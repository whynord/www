const HeroSection = () => {
  return <section id="home" className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="slide-up opacity-0">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/50 mb-8">
            <img src="https://framerusercontent.com/images/jb5SuyXjFazLWtFvvZef7K9L0.png?width=512&height=539" alt="Nord profile" className="w-full h-full object-cover grayscale" />
          </div>
        </div>

        <h1 className="heading-xl slide-up opacity-0 stagger-1 text-6xl font-sans shadow-none font-light">
          <span className="text-foreground font-thin">Sawasdee Krub!</span>
          <br />
          <span className="text-primary neon-text font-thin"> I'm Nord — I am a brand and marketing creative freelancer — based in Bangkok, Thailand.</span>
        </h1>

        <p className="heading-lg mt-6 text-foreground slide-up opacity-0 stagger-2 font-inclusive">
          I can help you with your marketing communications
          <br />
          needs and more!
        </p>

        <a href="#contact" className="inline-block mt-10 text-xl md:text-2xl text-muted-foreground hover:text-primary transition-colors duration-300 slide-up opacity-0 stagger-3 font-sans font-normal">
          Let's get in touch!
        </a>
      </div>
    </section>;
};
export default HeroSection;
