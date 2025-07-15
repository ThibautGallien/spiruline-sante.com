"use client";

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Leaf, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const locale = useLocale();
  const t = useTranslations('footer');
  const navT = useTranslations('navigation');

  const quickLinks = [
    { name: navT('home'), href: `/${locale}` },
    { name: navT('spirulina'), href: `/${locale}/spirulina` },
    { name: navT('phycocyanin'), href: `/${locale}/phycocyanin` },
    { name: navT('omega3'), href: `/${locale}/omega-3` },
    { name: navT('blog'), href: `/${locale}/blog` },
  ];

  const legalLinks = [
    { name: t('legal'), href: `/${locale}/legal` },
    { name: t('privacy'), href: `/${locale}/privacy` },
    { name: t('terms'), href: `/${locale}/terms` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Spirulina Health</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">{t('description')}</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('newsletter')}</h3>
            <p className="text-gray-400 text-sm mb-4">{t('newsletterDescription')}</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder={t('newsletterPlaceholder')}
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button size="icon" className="bg-green-600 hover:bg-green-700">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}