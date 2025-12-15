const services = [{
  number: "01",
  title: "All Things Brand",
  description: "This would be my number 1 passion I have developed over my working life. I created, nurtured and grew a few brands -- both B2B and B2C, local and international. This is a culmination of creativity, functions and rationale to give your brand higher equity."
}, {
  number: "02",
  title: "Creative Design",
  description: "Creativity, for me, is an ability to provide a solution to the problem and also make it comprehensible, accessible, functional and, last but not least, pretty too!"
}, {
  number: "03",
  title: "Web & App Development",
  description: "I am eccentrically a nerd. Although I'm very bad at Math, I'm very good at logic. What I can offer you here is to develop a good-looking website and program it to work as you imagine a website can do."
}];
const ServicesSection = () => {
  return <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <span className="section-label">What I Can Do</span>
          <h2 className="heading-lg mt-4 text-foreground font-normal font-sans">
            Create. Develop. Extend.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground leading-relaxed font-sans text-base font-normal">
            I have been working in marketing/communications and brand scopes for
            more than 25 years hence I believe dearly that I would be able to
            offer you my experiences getting you to your goal with flying colors.
          </p>
          <p className="mt-4 text-muted-foreground">
            If you are interested, please do reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => <div key={service.number} className="group relative p-6 rounded-xl border border-border bg-card/50 hover:border-primary/50 transition-all duration-500 hover:bg-card" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <span className="service-number group-hover:text-primary/40 transition-colors duration-300">
                {service.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;