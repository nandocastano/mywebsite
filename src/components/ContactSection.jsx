import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Working on something that could shift the dial? I’m open to collabs
          that push tech into real world impact.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 text-center md:text-left">
          {/* Email */}
          <div className="flex flex-col items-center md:items-start">
            <div className="p-4 bg-primary/10 rounded-full mb-2">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-1">Email</h4>
            <a
              href="mailto:jfcastanom@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              jfcastanom@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center md:items-start">
            <div className="p-4 bg-primary/10 rounded-full mb-2">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-1">Phone</h4>
            <a
              href="tel:+971565478158"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +971 (56) 547-8158
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center md:items-start">
            <div className="p-4 bg-primary/10 rounded-full mb-2">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold mb-1">Location</h4>
            <span className="text-muted-foreground">Santiago de Cali, Colombia</span>
          </div>
        </div>

        <div className="pt-12 text-center">
          <h4 className="font-semibold mb-4">Connect With Me</h4>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/juan-f-castano-438107204"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="text-primary hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://x.com/nandocastanom"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-primary hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.instagram.com/nandocastanom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-primary hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
