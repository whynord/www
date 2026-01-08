import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="slide-up opacity-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 mb-8">
              <img 
                src="https://framerusercontent.com/images/g7CQZHA559XpFDke75P44vFlpM.png?width=512" 
                alt="Nord profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4 slide-up opacity-0 stagger-1">About</p>
          
          <h1 className="text-5xl md:text-7xl font-sans font-light text-foreground slide-up opacity-0 stagger-1">
            Nord
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-primary mt-2 slide-up opacity-0 stagger-2">
            Panpong Varavarn
          </h2>
          <p className="text-lg text-muted-foreground mt-1 slide-up opacity-0 stagger-2">
            หม่อมหลวงปานพงษ์ วรวรรณ
          </p>

          <a 
            href="https://drive.google.com/file/d/1FiCECmiR0YeOszxMN6EUav0k6Np0moeb/view?usp=drivesdk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-6 text-primary hover:text-primary/80 underline transition-colors font-inclusive"
          >
            My CV in PDF →
          </a>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">At a glance</p>
          
          <p className="text-xl md:text-2xl text-foreground leading-relaxed font-inclusive">
            A seasoned brand communications leader with a proven track record in crafting impactful messaging across diverse platforms and audiences. Skilled in strategic brand storytelling, crisis communication, and bilingual localization (English–Thai), I bring clarity, creativity, and cultural nuance to every project. My strengths span stakeholder engagement, campaign development, and result-oriented creativity.
          </p>

          <p className="mt-8 text-muted-foreground font-inclusive">
            <span className="text-primary font-medium">Aka NORD</span> // Thai // 48 y/o // 25+ work exp. // well educated // well traveled // well dressed // tech enthusiast // cultured // good presenter // attentive listener // analytical // logical // pug person
          </p>
        </div>
      </section>

      {/* Career Portfolio */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Career Portfolio</p>
          
          <p className="text-lg text-foreground/80 mb-12 font-inclusive max-w-3xl">
            Throughout my career, I've had the privilege of working with a diverse array of clients and organizations, from renowned companies and agencies to innovative startups. Now, as a freelance designer, I continue to push creative boundaries and deliver impactful design solutions.
          </p>

          <div className="space-y-8">
            {[
              { year: "2024 - Present", company: "Tune Protect Thailand", role: "Strategic Brand and Marketing Consultant" },
              { year: "2020 - 2024", company: "Amadeus", role: "Global Brand & Creative Manager" },
              { year: "2020", company: "Kiatnakin Patra Bank", role: "Deputy Director Corporate Communications and Brand" },
              { year: "2010 - 2018", company: "Amadeus", role: "APAC Regional Marketing Communications Manager" },
            ].map((job, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border pb-6">
                <span className="text-primary font-mono text-sm">{job.year}</span>
                <span className="text-foreground font-medium">{job.company}</span>
                <span className="text-muted-foreground font-inclusive">{job.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Education</p>
          
          <p className="text-lg text-foreground/80 mb-12 font-inclusive max-w-3xl">
            I'm not exactly teacher's ideal student but I love keeping myself learning new things. Here are my recent education — they might not be streamlined but it shaped the way I see and process the world around me.
          </p>

          <div className="space-y-8">
            {[
              { year: "2005", school: "KMITL, Bangkok", degree: "MSc in Management in IT" },
              { year: "2001", school: "University of Essex", degree: "MSc in Computer Studies" },
              { year: "1999", school: "Chulalongkorn University, Bangkok", degree: "BA in Political Science (International Relations)" },
            ].map((edu, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b border-border pb-6">
                <span className="text-primary font-mono text-sm">{edu.year}</span>
                <span className="text-foreground font-medium">{edu.school}</span>
                <span className="text-muted-foreground font-inclusive">{edu.degree}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Core Competencies</p>
          
          <p className="text-lg text-foreground/80 mb-12 font-inclusive">
            Here are skills honed throughout my working years:
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-primary text-sm font-medium mb-3">Essential Skills</h3>
              <p className="text-foreground/80 font-inclusive">
                Marketing // Digital Marketing // Brand Development // Brand Design // Brand Management // Corporate Communications // Strategic Internal Communications // Public Relations // Marketing Communications // Project Management // People Management // Presentation Design // Public Speaking and Presentation // Event Management
              </p>
            </div>

            <div>
              <h3 className="text-primary text-sm font-medium mb-3">Technical Skills</h3>
              <p className="text-foreground/80 font-inclusive">
                Application Development // Website Development // UI/UX in Application and Web Design // Graphic Design // Video Post-production // Project Management // People Management
              </p>
            </div>

            <div>
              <h3 className="text-primary text-sm font-medium mb-3">Languages</h3>
              <p className="text-foreground/80 font-inclusive">
                Proficient in Thai and English communications both spoken and written languages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Get in touch</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-primary text-sm font-medium mb-2">Email</h3>
              <a href="mailto:panpong@gmail.com" className="text-foreground hover:text-primary transition-colors font-inclusive">
                panpong@gmail.com
              </a>
            </div>
            <div>
              <h3 className="text-primary text-sm font-medium mb-2">Phone</h3>
              <a href="tel:+66896936191" className="text-foreground hover:text-primary transition-colors font-inclusive">
                +66 (0) 8 9693 6191
              </a>
            </div>
            <div>
              <h3 className="text-primary text-sm font-medium mb-2">Social</h3>
              <span className="text-foreground font-inclusive">@whynord</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
