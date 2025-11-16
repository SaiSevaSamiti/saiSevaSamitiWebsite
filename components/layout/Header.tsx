'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/campaigns', label: 'Campaigns' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/certificates', label: 'Certificates' },
  { href: '/contact-us', label: 'Contact Us' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border'
          : 'bg-background border-b border-border/50'
      }`}
    >
      {/* Top Bar - Contact Info */}
      <div className="border-b border-border/50 bg-muted/30">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2 text-sm">
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">+91 98765 43210</span>
              </a>
              <a
                href="mailto:contact@saiseva.org"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden md:inline">contact@saiseva.org</span>
              </a>
            </div>
            <Link href="/donate">
              <Button
                size="sm"
                className="gradient-secondary hover:opacity-90 transition-opacity"
              >
                <Heart className="h-4 w-4 mr-2" />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition-opacity"
          >
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
              <Heart className="h-6 w-6" />
            </div>
            <span className="hidden sm:inline">Sai Seva Samiti</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.href)
                    ? 'text-primary font-semibold'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border pb-4 animate-in slide-in-from-top-5 duration-300">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted text-foreground/80'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
