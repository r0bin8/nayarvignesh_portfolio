import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init("skDpIzSYfQArL00YI");

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_cwzteya', // Your service ID
        'template_e8l2cnf', // Your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Vignesh', // You can customize this
        }
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
        duration: 5000,
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Email sending failed:', error);
      
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vigneshnayar01@gmail.com",
      link: "mailto:vigneshnayar01@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8555915986",
      link: "tel:+918555915986",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, India",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-background to-accent2/5">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-accent1 font-semibold mb-2">CONTACT ME</p>
          <h2 className="text-3xl font-bold">Got A Project? Let's Talk</h2>
          <p className="mt-4 text-foreground/80 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-4 space-y-6">
            {contactInfo.map((item, index) => (
              <Card key={index} className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-accent2/10 flex items-center justify-center mr-4">
                      <item.icon className="h-6 w-6 text-accent2" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <a
                        href={item.link}
                        className="text-foreground/80 hover:text-accent1 transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {["github", "linkedin", "twitter", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent1 transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      {/* Add social icons here */}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Card className="border-border/50">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto bg-accent2 hover:bg-accent2/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
