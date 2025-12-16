import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <span className="section-label">Let's Chat</span>
          <h2 className="heading-lg mt-4 text-foreground">
            I'd love to hear from you!
          </h2>
          <p className="mt-4 text-muted-foreground font-inclusive">
            Whether you have a project in mind, need more information, or just
            want to chat, feel free to reach out. Let's create something amazing
            together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary transition-colors"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card border-border focus:border-primary transition-colors"
              />
            </div>
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-card border-border focus:border-primary transition-colors resize-none"
            />
          </div>
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="px-12 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold tracking-wide"
            >
              Send Message
            </Button>
          </div>
        </form>

        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:hello@nord.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              hello@nord.com
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
