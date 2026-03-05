import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search, FileText, Download } from "lucide-react";

const historyData = [
  {
    id: 1,
    service: 'Office Cleaning',
    date: '2026-03-01',
    location: 'Plot 12, Nakasero Hill',
    status: 'Completed',
    cost: 'UGX 150,000',
    rating: 5,
  },
  {
    id: 2,
    service: 'Home Deep Cleaning',
    date: '2026-02-28',
    location: 'Plot 45, Kololo Road',
    status: 'Completed',
    cost: 'UGX 200,000',
    rating: 5,
  },
  {
    id: 3,
    service: 'Fumigation',
    date: '2026-02-25',
    location: 'Plot 78, Ntinda Complex',
    status: 'Completed',
    cost: 'UGX 180,000',
    rating: 4,
  },
  {
    id: 4,
    service: 'Commercial Cleaning',
    date: '2026-02-20',
    location: 'Plot 23, Industrial Area',
    status: 'Completed',
    cost: 'UGX 300,000',
    rating: 5,
  },
  {
    id: 5,
    service: 'Post Construction Cleaning',
    date: '2026-02-15',
    location: 'Plot 56, Bugolobi',
    status: 'Completed',
    cost: 'UGX 450,000',
    rating: 5,
  },
  {
    id: 6,
    service: 'Garbage Collection',
    date: '2026-02-12',
    location: 'Plot 89, Muyenga',
    status: 'Cancelled',
    cost: '-',
    rating: 0,
  },
];

export function History() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const filteredHistory = historyData.filter((item) => {
    const matchesSearch = item.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || item.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">Service History</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">View your past cleaning service requests and invoices.</p>
      </div>

      {/* Filters */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by service or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full lg:w-48">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      {/* History Table - Desktop */}
      <Card className="hidden lg:block overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">Service</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">Location</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">Cost</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">Rating</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700 dark:text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredHistory.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">{item.service}</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{item.date}</td>
                  <td className="py-4 px-6 text-gray-700 dark:text-gray-300">{item.location}</td>
                  <td className="py-4 px-6">
                    <Badge 
                      className={
                        item.status === 'Completed' 
                          ? 'bg-[var(--corecleen-green)] text-white' 
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                      }
                    >
                      {item.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">{item.cost}</td>
                  <td className="py-4 px-6">
                    {item.rating > 0 ? (
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < item.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}>
                            ★
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500">-</span>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {item.status === 'Completed' && (
                      <Button variant="ghost" size="sm" className="text-[var(--corecleen-blue)] hover:bg-blue-50 dark:hover:bg-blue-900/20">
                        <FileText className="h-4 w-4 mr-2" />
                        Invoice
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* History Cards - Mobile */}
      <div className="lg:hidden space-y-4">
        {filteredHistory.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-gray-900 dark:text-white">{item.service}</h3>
              <Badge 
                className={
                  item.status === 'Completed' 
                    ? 'bg-[var(--corecleen-green)] text-white' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                }
              >
                {item.status}
              </Badge>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Date:</span>
                <span className="text-gray-900 dark:text-white font-medium">{item.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Location:</span>
                <span className="text-gray-900 dark:text-white font-medium text-right">{item.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Cost:</span>
                <span className="text-gray-900 dark:text-white font-medium">{item.cost}</span>
              </div>
              {item.rating > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Rating:</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < item.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {item.status === 'Completed' && (
              <Button variant="outline" size="sm" className="w-full mt-4">
                <FileText className="h-4 w-4 mr-2" />
                Download Invoice
              </Button>
            )}
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredHistory.length === 0 && (
        <Card className="p-12 text-center">
          <FileText className="h-12 w-12 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No history found</h3>
          <p className="text-base text-gray-700 dark:text-gray-300">No services match your search criteria.</p>
        </Card>
      )}

      {/* Export Button */}
      {filteredHistory.length > 0 && (
        <div className="mt-6 text-right">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export History
          </Button>
        </div>
      )}
    </div>
  );
}