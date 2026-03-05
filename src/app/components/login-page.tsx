import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Mail, Lock, User, Phone } from "lucide-react";
import logoImage from "../../assets/logo.png";


import React from 'react';

export function LoginPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isForgotPassword) {
      // Handle forgot password - in production, this would send a reset email
      alert(`Password reset link has been sent to ${email}`);
      setIsForgotPassword(false);
      setEmail("");
    } else {
      // Simple mock authentication - in production, this would call an API
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--corecleen-blue)] to-[var(--corecleen-teal)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-3 text-white hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="CoreCleen Solutions Ltd" className="h-16 w-auto brightness-0 invert" />
          </Link>
        </div>

        {/* Login/Signup Card */}
        <Card className="p-8">
          <div className="mb-6 text-center">
            <h2 className="text-gray-900 dark:text-white mb-2">
              {isForgotPassword ? "Reset Password" : isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {isForgotPassword 
                ? "Enter your email to receive a password reset link"
                : isSignUp 
                  ? "Sign up to access our cleaning services" 
                  : "Sign in to manage your cleaning services"
              }
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isForgotPassword && isSignUp && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+256"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="pl-10"
                    />
                  </div>
                </div>
              </>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10"
                />
              </div>
            </div>

            {!isForgotPassword && (
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
            )}

            {!isSignUp && !isForgotPassword && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className="text-gray-600 dark:text-gray-400">Remember me</span>
                </label>
                <button 
                  type="button"
                  onClick={() => setIsForgotPassword(true)}
                  className="text-[var(--corecleen-blue)] hover:underline"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-[var(--corecleen-blue)] hover:opacity-90 text-white"
            >
              {isForgotPassword ? "Send Reset Link" : isSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </form>

          {isForgotPassword ? (
            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsForgotPassword(false);
                  setEmail("");
                }}
                className="text-[var(--corecleen-blue)] font-semibold hover:underline text-sm"
              >
                ← Back to Sign In
              </button>
            </div>
          ) : (
            <div className="mt-6 text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-[var(--corecleen-blue)] font-semibold hover:underline"
                >
                  {isSignUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-[var(--corecleen-blue)]">
              ← Back to home
            </Link>
          </div>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
            <strong>Demo:</strong> Use any email and password to sign in
          </p>
        </Card>
      </div>
    </div>
  );
}
