import { Link } from "react-router";
import { ClipboardList, Clock, CheckCircle, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

const stats = [
  { name: 'Total Requests', value: '24', icon: ClipboardList, color: 'bg-blue-500' },
  { name: 'Pending Requests', value: '3', icon: Clock, color: 'bg-[var(--corecleen-orange)]' },
  { name: 'Completed Services', value: '21', icon: CheckCircle, color: 'bg-[var(--corecleen-green)]' },
  { name: 'This Month', value: '8', icon: TrendingUp, color: 'bg-[var(--corecleen-teal)]' },
];

const recentRequests = [
  { id: 1, service: 'Office Cleaning', date: '2026-03-01', status: 'Completed', statusColor: 'text-[var(--corecleen-green)]' },
  { id: 2, service: 'Home Deep Cleaning', date: '2026-03-03', status: 'In Progress', statusColor: 'text-[var(--corecleen-orange)]' },
  { id: 3, service: 'Fumigation', date: '2026-03-04', status: 'Pending', statusColor: 'text-yellow-600' },
];

export function DashboardOverview() {
  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h1>
        <p className="text-base text-gray-700 dark:text-gray-300">Here's what's happening with your cleaning services today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              </div>
              <div className={`${stat.color} rounded-full p-3`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
        <Link
          to="/dashboard/apply"
          className="bg-[var(--corecleen-blue)] text-white p-6 rounded-lg hover:opacity-90 transition-opacity shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full p-3">
              <ClipboardList className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Request Cleaning</h3>
              <p className="text-sm text-white/90">Submit a new service request</p>
            </div>
          </div>
        </Link>

        <Link
          to="/dashboard/requests"
          className="bg-[var(--corecleen-teal)] text-white p-6 rounded-lg hover:opacity-90 transition-opacity shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full p-3">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">My Requests</h3>
              <p className="text-sm text-white/90">View pending services</p>
            </div>
          </div>
        </Link>

        <Link
          to="/dashboard/history"
          className="bg-[var(--corecleen-green)] text-white p-6 rounded-lg hover:opacity-90 transition-opacity shadow-md"
        >
          <div className="flex items-center gap-4">
            <div className="bg-white/20 rounded-full p-3">
              <CheckCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Service History</h3>
              <p className="text-sm text-white/90">View completed services</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Requests */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Requests</h2>
          <Link to="/dashboard/requests" className="text-sm font-medium text-[var(--corecleen-blue)] hover:underline">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Service</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Date</th>
                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentRequests.map((request) => (
                <tr key={request.id} className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{request.service}</td>
                  <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{request.date}</td>
                  <td className="py-3 px-4">
                    <span className={`font-medium ${request.statusColor}`}>{request.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}