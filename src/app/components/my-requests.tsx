import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, MapPin, Calendar, Eye, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const requests = [
  {
    id: 1,
    service: 'Home Deep Cleaning',
    date: '2026-03-05',
    time: '10:00 AM',
    location: 'Plot 45, Kololo Road, Kampala',
    status: 'Pending',
    statusColor: 'bg-yellow-100 text-yellow-800',
    notes: 'Please bring all cleaning supplies. Focus on kitchen and bathrooms.',
    requestDate: '2026-03-03',
  },
  {
    id: 2,
    service: 'Office Cleaning',
    date: '2026-03-06',
    time: '8:00 AM',
    location: 'Plot 12, Nakasero Hill, Kampala',
    status: 'Confirmed',
    statusColor: 'bg-blue-100 text-blue-800',
    notes: 'Weekly office cleaning. Access code: 4567',
    requestDate: '2026-03-01',
  },
  {
    id: 3,
    service: 'Fumigation',
    date: '2026-03-08',
    time: '2:00 PM',
    location: 'Plot 78, Ntinda Shopping Complex',
    status: 'In Progress',
    statusColor: 'bg-[var(--corecleen-orange)] text-white',
    notes: 'Commercial space. Coordinate with property manager.',
    requestDate: '2026-03-02',
  },
];

export function MyRequests() {
  const [selectedRequest, setSelectedRequest] = useState<typeof requests[0] | null>(null);

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">My Requests</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">View and manage your pending cleaning service requests.</p>
      </div>

      {/* Requests Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
        {requests.map((request) => (
          <Card key={request.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{request.service}</h3>
              <Badge className={request.statusColor}>
                {request.status}
              </Badge>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <Calendar className="h-4 w-4" />
                <span>{request.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                <Clock className="h-4 w-4" />
                <span>{request.time}</span>
              </div>
              <div className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="line-clamp-2">{request.location}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => setSelectedRequest(request)}
              >
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="text-red-600 hover:text-red-700"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Request Details Dialog */}
      <Dialog open={!!selectedRequest} onOpenChange={() => setSelectedRequest(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Request Details</DialogTitle>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{selectedRequest.service}</h3>
                <Badge className={selectedRequest.statusColor}>
                  {selectedRequest.status}
                </Badge>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Scheduled Date & Time</p>
                  <p className="text-base text-gray-900 dark:text-white">{selectedRequest.date} at {selectedRequest.time}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Location</p>
                  <p className="text-base text-gray-900 dark:text-white">{selectedRequest.location}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Request Date</p>
                  <p className="text-base text-gray-900 dark:text-white">{selectedRequest.requestDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Additional Notes</p>
                  <p className="text-base text-gray-900 dark:text-white">{selectedRequest.notes}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  className="w-full bg-[var(--corecleen-blue)] hover:opacity-90"
                  onClick={() => setSelectedRequest(null)}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Empty State */}
      {requests.length === 0 && (
        <Card className="p-12 text-center">
          <Clock className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No pending requests</h3>
          <p className="text-base text-gray-700 dark:text-gray-300 mb-4">You don't have any pending service requests.</p>
          <Button
            className="bg-[var(--corecleen-blue)] hover:opacity-90"
            onClick={() => window.location.href = '/apply'}
          >
            Request a Service
          </Button>
        </Card>
      )}
    </div>
  );
}