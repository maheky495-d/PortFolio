import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Mail, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ContactResponse {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export default function ContactsPage() {
  const { data: contacts, isLoading } = useQuery<ContactResponse[]>({
    queryKey: ["/api/contacts"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading contacts...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Contact Submissions</h1>
            <p className="text-muted-foreground">
              {contacts?.length || 0} total {contacts?.length === 1 ? "message" : "messages"}
            </p>
          </div>
          <Button variant="outline" asChild data-testid="button-home">
            <Link href="/">Back to Portfolio</Link>
          </Button>
        </div>

        {!contacts || contacts.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-muted-foreground">No contact submissions yet.</p>
          </Card>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <Card key={contact.id} className="p-6" data-testid={`card-contact-${contact.id}`}>
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <span className="font-semibold">{contact.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {new Date(contact.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="hover:text-foreground transition-colors"
                      data-testid={`link-email-${contact.id}`}
                    >
                      {contact.email}
                    </a>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-sm whitespace-pre-wrap">{contact.message}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
