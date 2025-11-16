'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/campaigns', label: 'Campaigns' },
  { href: '/gallery', label: 'Gallery' },
]

const resources = [
  { href: '/certificates', label: 'Certificates' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/donate', label: 'Donate' },
  { href: '/login', label: 'Admin Login' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: Implement newsletter subscription API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      toast.success('Successfully subscribed to newsletter!', {
        description: 'Thank you for subscribing to our updates.',
      })
      setEmail('')
    } catch (error) {
      toast.error('Failed to subscribe', {
        description: 'Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <Heart className="h-6 w-6" />
              </div>
              <span>Sai Seva Samiti</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A non-profit organization dedicated to serving the community through food distribution,
              medical assistance, and awareness campaigns.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span>123 Seva Street, Mumbai, Maharashtra 400001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@saiseva.org" className="hover:text-primary transition-colors">
                  contact@saiseva.org
                </a>
              </div>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleNewsletterSubmit} className="space-y-2 pt-2">
              <label htmlFor="newsletter-email" className="text-sm font-medium">
                Subscribe to Newsletter
              </label>
              <div className="flex gap-2">
                <Input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={isSubmitting}
                  className="gradient-primary"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Sai Seva Samiti. All rights reserved.
            </p>
            <p>
              Proudly Non-Profit | Made with{' '}
              <Heart className="inline h-4 w-4 text-destructive" /> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
