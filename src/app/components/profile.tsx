import React from "react";
import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { User, Mail, Phone, MapPin, Edit, Save, X } from "lucide-react";

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Kamau",
    email: "john.kamau@example.com",
    phone: "+256 701234567",
    address: "Plot 34, Naguru Road, Kampala",
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-gray-900 mb-2">Profile</h1>
          <p className="text-gray-600">Manage your account information and preferences.</p>
        </div>

        <div className="space-y-6">
          {/* Profile Card */}
          <Card className="p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarFallback className="bg-[var(--corecleen-blue)] text-white text-2xl">
                    JK
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-gray-900">{profile.name}</h2>
                  <p className="text-sm text-gray-500">Customer since Feb 2025</p>
                </div>
              </div>
              {!isEditing ? (
                <Button className="text-gray-900 dark:text-gray-100"
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                >
                  <Edit className="h-4 w-4 mr-2 text-gray-900 dark:text-gray-100" />
                  Edit Profile
                </Button>
              ) : (
                <div className="flex gap-2 text-gray-900 dark:text-gray-100">
                  <Button
                    onClick={handleSave}
                    className="bg-[var(--corecleen-green)] hover:opacity-90 text-gray-900 dark:text-gray-100"
                  >
                    <Save className="h-4 w-4 mr-2 text-gray-900 dark:text-gray-100" />
                    Save
                  </Button>
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                  >
                    <X className="h-4 w-4 mr-2 text-gray-900 dark:text-gray-100" />
                    Cancel
                  </Button>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-gray-900 dark:text-gray-100" htmlFor="name">Full Name</Label>
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <Input
                    id="name"
                    value={editedProfile.name}
                    onChange={(e) => setEditedProfile({ ...editedProfile, name: e.target.value })}
                    disabled={!isEditing}
                    className={!isEditing ? 'border-transparent text-gray-900 dark:text-gray-100' : ''}
                    
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-900 dark:text-gray-100" htmlFor="email">Email</Label>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={editedProfile.email}
                    onChange={(e) => setEditedProfile({ ...editedProfile, email: e.target.value })}
                    disabled={!isEditing}
                    className={!isEditing ? 'border-transparent text-gray-900 dark:text-gray-100' : ''}
                  />
                </div>
              </div>

              <div className="space-y-2">
              <Label className="text-gray-900 dark:text-gray-100" htmlFor="phone">Phone</Label>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <Input
                    id="phone"
                    type="tel"
                    value={editedProfile.phone}
                    onChange={(e) => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                    disabled={!isEditing}
                    className={!isEditing ? 'border-transparent text-gray-900 dark:text-gray-100' : ''}
                  />
                </div>
              </div>

              <div className="space-y-2">
              <Label className="text-gray-900 dark:text-gray-100" htmlFor="address">Address</Label>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <Input
                    id="address"
                    value={editedProfile.address}
                    onChange={(e) => setEditedProfile({ ...editedProfile, address: e.target.value })}
                    disabled={!isEditing}
                    className={!isEditing ? 'border-transparent text-gray-900 dark:text-gray-100' : ''}
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Account Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="p-6 text-center">
              <div className="text-3xl text-[var(--corecleen-blue)] mb-2">24</div>
              <p className="text-sm text-gray-600">Total Services</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl text-[var(--corecleen-teal)] mb-2">3</div>
              <p className="text-sm text-gray-600">Active Requests</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl text-[var(--corecleen-green)] mb-2">4.9</div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </Card>
          </div>

          {/* Preferences Card */}
          <Card className="p-6">
            <h3 className="mb-4 text-gray-900 dark:text-gray-100">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-gray-900 dark:text-gray-100">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive updates about your services</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--corecleen-blue)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--corecleen-blue)]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-100">
                <div>
                  <p className="text-gray-900 dark:text-gray-100">SMS Notifications</p>
                  <p className="text-sm text-gray-500">Get text updates on your phone</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--corecleen-blue)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--corecleen-blue)]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="text-gray-900 dark:text-gray-100">Marketing Updates</p>
                  <p className="text-sm text-gray-500">Receive special offers and promotions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--corecleen-blue)] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--corecleen-blue)]"></div>
                </label>
              </div>
            </div>
          </Card>

          {/* Danger Zone */}
          <Card className="p-6 border-red-200">
            <h3 className="text-red-600 mb-4">Danger Zone</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full sm:w-auto text-red-600 border-red-300 hover:bg-red-50">
                Change Password
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-red-600 border-red-300 hover:bg-red-50">
                Delete Account
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
