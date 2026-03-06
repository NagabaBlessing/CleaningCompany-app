import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoImage from "../../assets/logo.png";
import React from 'react';

const services = [
  'Office Cleaning',
  'Full Home Deep Cleaning',
  'Full Home Basic Cleaning',
  'Commercial Deep Cleaning',
  'Fumigation',
  'Move - In - out cleaning',
  'Post Construction Cleaning',
  'Garbage Collection',
  'Roof Cleaning',
  'Window Cleaning',
  'Retail Cleaning',
  'Upholstery Cleaning',
  'End of Tenancy Cleaning',
];

const teamMembers = [
  { name: 'Leilah Kayemba', role: 'Managing Director' },
  { name: 'Joshua Besigye', role: 'Operations Officer' },
  { name: 'Mary Caroline Nakyazze', role: 'Accountant' },
  { name: 'Bernard Mabonga', role: 'Company Secretary' },
];


export function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="CoreCleen Solutions Ltd" className="h-24 w-auto" />
          </div>
          <Link to="/login">
            <Button className="bg-[var(--corecleen-blue)] hover:opacity-90 text-white">
              Sign In
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--corecleen-blue)] to-[var(--corecleen-teal)] text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img src={logoImage} alt="CoreCleen Solutions Ltd" className="h-32 w-auto" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Breathe in a Clean Space
          </h1>
          <p className="text-xl mb-8 text-white/90">
            After a long & tiring day, nothing beats coming home to a clean and spotless space. We've got you covered
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="bg-white text-[var(--corecleen-blue)] hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <a href="#services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Our Services
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          <Card className="p-8">
  <div className="w-12 h-12 rounded-full bg-[var(--corecleen-orange)] flex items-center justify-center mb-4">
    <span className="text-white text-xl">🏢</span>
  </div>
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">ABOUT CORECLEEN</h3>
  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
  Corecleen aims to build and maintain long-term client relationships, with a competitive and excellent cleaning service. The commitment to excellence and professionalism by our cleaning team is why we have earned the loyalty and trust of our regular customers and are the best choice for new clients.
  </p>
</Card>
            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-[var(--corecleen-blue)] flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">OUR MISSION</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To provide our clients with top-quality professional and friendly cleaning services that supercede their expectations. By making the interests of our clients our number one priority we will earn their trust and loyalty and they will become our lifelong customers.
              </p>
            </Card>
            <Card className="p-8">
              <div className="w-12 h-12 rounded-full bg-[var(--corecleen-teal)] flex items-center justify-center mb-4">
                <span className="text-white text-xl">👁️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">OUR VISION</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                To continually provide excellent services that will propel us to become a household name within the cleaning industry in Uganda.
              </p>
            </Card>
            <Card className="p-8">
  <div className="w-12 h-12 rounded-full bg-[var(--corecleen-green)] flex items-center justify-center mb-4">
    <span className="text-white text-xl">⭐</span>
  </div>
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">OUR VALUES</h3>

  <ul className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
  <li><strong>Service Excellence</strong> - Taking responsibility to complete your tasks, perform the duties required by your job and be present for shifts in order to fulfill the goals of the company.</li>
  <li><strong>Respect</strong> - We respect the individual and believe that individuals who are treated with respect and given responsibility respond by giving their best.</li>
  <li><strong>Accountability</strong> - We own problems and we are always responsive.</li>
  <li><strong>Reliability</strong> - Being punctual and dependable, committed to the team, our customers and the company.</li>
  <li><strong>Team Work</strong> - Increased speed, shared satisfaction, creative solutions and working together.</li>
</ul>
</Card>



<Card className="p-8">
  <div className="w-12 h-12 rounded-full bg-[var(--corecleen-blue)] flex items-center justify-center mb-4">
    <span className="text-white text-xl">🎯</span>
  </div>
  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">CUSTOMER GOALS</h3>
  <ul className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-2">
  <li>Provide the highest standard of service and workmanship.</li>
  <li>To build long term relationships with our customers by providing quality services at competitive prices.</li>
  <li>Maintaining integrity and initiative.</li>
  <li>Professionalism and pride in our position in the market place.</li>
  <li>Long term stability.</li>
  <li>Maintain a well-trained and motivated staff.</li>
</ul>
</Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              OUR <span className="text-[var(--corecleen-teal)]">SERVICES</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              At CoreCleen, we are passionate about the following:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-[var(--corecleen-blue)]">
                <p className="text-gray-900 dark:text-white font-medium">• {service}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              TEAM <span className="text-[var(--corecleen-blue)]">MEMBERS</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Meet the team putting in the hours to give you excellent and professional services
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--corecleen-blue)] to-[var(--corecleen-teal)] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GET IN TOUCH
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[var(--corecleen-blue)] flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Call Us</h3>
              <p className="text-gray-600 dark:text-gray-400">+256 (0) 707265146</p>
              <p className="text-gray-600 dark:text-gray-400">+256 (0) 786151990</p>
              <p className="text-gray-600 dark:text-gray-400">+256 (0) 782923848</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[var(--corecleen-teal)] flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Email Us</h3>
              <p className="text-gray-600 dark:text-gray-400">corecleensolutions@gmail.com</p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[var(--corecleen-green)] flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Find Us At</h3>
              <p className="text-gray-600 dark:text-gray-400">Plot 97 Bukoto street opp. Bin it services</p>
              <p className="text-gray-600 dark:text-gray-400">P.O. Box 116729 Kampala Uganda</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-900 dark:text-white font-semibold mb-3">Connect with Us Via Social Media</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--corecleen-blue)] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--corecleen-teal)] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--corecleen-green)] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[var(--corecleen-orange)] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--corecleen-blue)] text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoImage} alt="CoreCleen Solutions Ltd" className="h-20 w-auto brightness-0 invert" />
          </div>
          <p className="text-white/80 text-sm">© 2026 CoreCleen Solutions Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
