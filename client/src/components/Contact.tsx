import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertContact } from "@shared/schema";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Connect with me</h2>
          <p className="text-lg text-muted-foreground mb-6">Get in touch</p>
          <p className="text-muted-foreground italic max-w-2xl mx-auto">
            "Feel free to reach out with any questions, comments, or feedback. I look forward to hearing from you!"
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mt-12">
          <div>
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={submitContactMutation.isPending}
              className="h-12"
              data-testid="input-name"
            />
          </div>
          <div>
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={submitContactMutation.isPending}
              className="h-12"
              data-testid="input-email"
            />
          </div>
          <div>
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              disabled={submitContactMutation.isPending}
              className="min-h-40 resize-none"
              data-testid="input-message"
            />
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              disabled={submitContactMutation.isPending}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full px-8 py-6 text-lg font-semibold"
              data-testid="button-submit"
            >
              {submitContactMutation.isPending ? "Sending..." : "Submit Now"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
