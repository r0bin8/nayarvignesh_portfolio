
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Nayar delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made our project a success.",
      author: "Priya Kumar",
      role: "Product Manager",
      rating: 5,
    },
    {
      content:
        "Working with Nayar was a pleasure. He understood our requirements quickly and implemented innovative IoT solutions that greatly improved our operations.",
      author: "Rahul Sharma",
      role: "Tech Lead",
      rating: 5,
    },
    {
      content:
        "Nayar's problem-solving skills and dedication to quality are impressive. He completed our project on time and provided excellent support afterward.",
      author: "Ananya Singh",
      role: "Startup Founder",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="text-accent1 font-semibold mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl font-bold">What People Say About Me</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-accent1/50 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-accent1 fill-accent1"
                    />
                  ))}
                </div>
                <p className="mb-6 text-foreground/80 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-accent2/20 mr-3"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-foreground/70">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
