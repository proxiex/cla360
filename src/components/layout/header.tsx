"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { motion, useScroll, useTransform } from "framer-motion";

const navigation = [
  { name: "Students", href: "/students" },
  { name: "Universities", href: "/universities" },
  { name: "Events", href: "/events" },
];

const resourceLinks = [
  { name: "Research & Insights", href: "/research" },
  { name: "FAQ", href: "/faq" },
  { name: "Trust & Compliance", href: "/trust" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 shadow-lg border-b border-gray-100" 
          : "bg-white/70 border-b border-white/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <motion.div 
          className="flex lg:flex-1 items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-gradient-purple flex items-center justify-center shadow-purple">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">CLA360</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-6 items-center">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="relative text-sm font-semibold text-gray-600 transition-colors hover:text-primary group px-3 py-2 rounded-lg hover:bg-primary/5"
              >
                {item.name}
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-semibold text-gray-600 transition-colors hover:text-primary px-3 py-2 rounded-lg hover:bg-primary/5">
              Resources <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {resourceLinks.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link href={item.href} className="font-medium">{item.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3 items-center">
          <Button variant="ghost" className="rounded-full font-semibold" asChild>
            <Link href="/login">Sign In</Link>
          </Button>
          <Button className="bg-gradient-purple text-white rounded-full px-6 font-semibold shadow-purple hover:shadow-purple-lg transition-all hover:opacity-90" asChild>
            <Link href="/register">Get Your PRV Score</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-white">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <div className="h-8 w-8 rounded-full bg-gradient-purple flex items-center justify-center shadow-purple">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">CLA360</span>
                </Link>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-border">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    {resourceLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="space-y-2 py-6">
                    <Button variant="outline" className="w-full rounded-full font-semibold" asChild>
                      <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                        Sign In
                      </Link>
                    </Button>
                    <Button className="w-full bg-gradient-purple text-white rounded-full font-semibold shadow-purple hover:opacity-90" asChild>
                      <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                        Get Your PRV Score
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
