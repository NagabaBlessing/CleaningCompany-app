import { useState } from "react";
import { useNavigate } from "react-router";
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
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle } from "lucide-react";
import { cn } from "./ui/utils";
import React from "react";

const services = [
  'Office Cleaning',
  'Home Deep Cleaning',
  'Commercial Cleaning',
  'Fumigation',
  'Post Construction Cleaning',
  'Garbage Collection',
];

export function ApplyService() {
  const navigate = useNavigate();
  const [date, setDate] = useState<Date>();
  const [service, setService] = useState<string>("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      navigate("/dashboard/requests");
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="p-4 lg:p-8 flex items-center justify-center min-h-[calc(100vh-64px)] lg:min-h-screen">
        <Card className="p-8 text-center max-w-md mx-auto">
          <div className="bg-[var(--corecleen-green)] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted!</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
            Your cleaning service request has been received. We'll contact you shortly to confirm the details.
          </p>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Redirecting to My Requests...</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">Apply for Cleaning Service</h1>
          <p className="text-base text-gray-700 dark:text-gray-300">Fill out the form below to request a cleaning service.</p>
        </div>

        <Card className="p-6 lg:p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Type */}
            <div className="space-y-2">
            <Label className="text-gray-900 dark:text-gray-100" htmlFor="service">Service Type *</Label>
              <Select value={service} onValueChange={setService} required>
              <SelectTrigger className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
                  {services.map((service) => (
                    <SelectItem
                    key={service}
                    value={service}
                    className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
            <Label className="text-gray-900 dark:text-gray-100" htmlFor="date">Preferred Date *</Label>
            <Popover>
  <PopoverTrigger>
    <Button
      variant="outline"
      type="button"
      className={cn(
        "w-full justify-start text-left bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700",
        !date && "text-gray-500 dark:text-gray-400"
      )}
    >
      <CalendarIcon className="text-gray-900 dark:text-gray-100" />
      {date ? format(date, "PPP") : "Pick a date"}
    </Button>
  </PopoverTrigger>

  <PopoverContent
    className="w-auto p-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg text-gray-900 dark:text-gray-100"
    align="start"
  >
    <Calendar
      mode="single"
      selected={date}
      onSelect={(selectedDate) => setDate(selectedDate)}
      initialFocus
    />
  </PopoverContent>
</Popover>
            </div>

            {/* Location */}
            <div className="space-y-2">
            <Label className="text-gray-900 dark:text-gray-100" htmlFor="location">Service Location *</Label>
              <Input
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
                id="location"
                placeholder="Enter address or location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
            <Label className="text-gray-900 dark:text-gray-100" htmlFor="notes">Additional Notes</Label>
              <Textarea
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700"
                id="notes"
                placeholder="Any specific requirements or instructions..."
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-[var(--corecleen-blue)] hover:opacity-90"
                disabled={!service || !date || !location}
              >
                Submit Request
              </Button>
              <Button
  type="button"
  variant="outline"
  className="text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700"
  onClick={() => navigate("/")}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}