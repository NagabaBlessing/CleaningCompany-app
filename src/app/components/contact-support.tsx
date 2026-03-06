import React from "react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function ContactSupport() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSubject("");
      setMessage("");
    }, 3000);
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 dark:text-white mb-2">Contact Support</h1>
          <p className="text-gray-600 dark:text-gray-400">Get in touch with our team for any questions or concerns.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-gray-900 dark:text-white mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[var(--corecleen-blue)] rounded-lg p-2">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-900 dark:text-white">+256 707265146</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[var(--corecleen-teal)] rounded-lg p-2">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-900 dark:text-white">corecleensolutions@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[var(--corecleen-green)] rounded-lg p-2">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                    <p className="text-gray-900 dark:text-white">Plot 97 Bukoto Street, Kampala</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[var(--corecleen-orange)] rounded-lg p-2">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Business Hours</p>
                    <p className="text-gray-900 dark:text-white">Mon - Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-900 dark:text-white">Sat: 9:00 AM - 4:00 PM</p>
                    <p className="text-gray-900 dark:text-white">Sun: Closed</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ Card */}
            <Card className="p-6">
              <h3 className="text-gray-900 dark:text-white mb-4">Quick Help</h3>
              <div className="space-y-3">
                <details className="group">
                  <summary className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-[var(--corecleen-blue)] transition-colors">
                    How do I reschedule a service?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                    Go to "My Requests", select the service, and click "Reschedule". Choose a new date and confirm.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-[var(--corecleen-blue)] transition-colors">
                    What payment methods do you accept?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                    We accept cash, mobile money (MTN & Airtel), and bank transfers.
                  </p>
                </details>
                <details className="group">
                  <summary className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-[var(--corecleen-blue)] transition-colors">
                    Do you provide cleaning supplies?
                  </summary>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 pl-4">
                    Yes, all our services include professional-grade cleaning supplies and equipment.
                  </p>
                </details>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <h2 className="text-gray-900 dark:text-white mb-4">Send us a Message</h2>
            
            {submitted ? (
              <div className="py-12 text-center">
                <div className="bg-[var(--corecleen-green)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-gray-900 dark:text-gray-100" htmlFor="subject">Subject *</Label>
                  <Select value={subject} onValueChange={setSubject} required>
                    <SelectTrigger className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700">  
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="service">Service Question</SelectItem>
                      <SelectItem value="billing">Billing Issue</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-900 dark:text-gray-100" htmlFor="message">
  Message *
</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[var(--corecleen-blue)] hover:opacity-90"
                  disabled={!subject || !message}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}