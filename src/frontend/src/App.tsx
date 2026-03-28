import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CheckCircle,
  ChevronDown,
  FlaskConical,
  Layers,
  MapPin,
  Menu,
  Paintbrush,
  Palette,
  Phone,
  Send,
  Shield,
  Star,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "923002840030";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Colors", href: "#colors" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Paintbrush,
    title: "Premium Interior Emulsions",
    description:
      'From "Cloud White" to "Rich Navy," we offer the latest trending palettes for a sophisticated indoor atmosphere.',
    badge: "Best Seller",
  },
  {
    icon: Shield,
    title: "Weather-Shield Exteriors",
    description:
      "High-durability paints designed to withstand the elements and keep your home looking pristine for years.",
    badge: "Durable",
  },
  {
    icon: Layers,
    title: "Wall Fillings & Primers",
    description:
      "Ensuring a smooth, professional-grade foundation for every project with specialized filling compounds.",
    badge: "Foundation",
  },
  {
    icon: Palette,
    title: "Custom Color Consultations",
    description:
      "Navigate Sage Greens, Earthy Tones, and Modern Neutrals with expert guidance to find your perfect match.",
    badge: "Expert",
  },
  {
    icon: FlaskConical,
    title: "Industrial Chemicals",
    description:
      "Quality-tested chemicals for specialized construction and maintenance needs at factory rate pricing.",
    badge: "Specialized",
  },
];

const GALLERY_IMAGES = [
  {
    src: "/assets/uploads/736efb7f6fb5996f693d42b83fced95e-019d3352-d1e7-76f2-957c-a6531222b46d-1.jpg",
    alt: "Elegant dining room with warm tan walls",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/assets/uploads/6a5b1b5ef24343878b31aac5970e6565-019d3352-e343-75a8-a8cc-e6b4ad2d0be9-3.jpg",
    alt: "Elegant hallway with staircase",
    span: "",
  },
  {
    src: "/assets/uploads/fb17e5b1144f52201cb4beb35e1b4a4e-019d3352-f856-739f-ad02-075ef4db270b-11.jpg",
    alt: "Mauve elegant bedroom",
    span: "",
  },
  {
    src: "/assets/uploads/f5d5099da53fc237ba6ce7db7ad9d276-019d3352-f953-704f-b978-aaf0f288e72b-12.jpg",
    alt: "Sage green bedroom",
    span: "",
  },
  {
    src: "/assets/uploads/02-dsc_7877-019d3352-fa73-70b1-a793-d598687e95ec-14.jpg",
    alt: "Luxury beige bedroom",
    span: "",
  },
  {
    src: "/assets/uploads/885d5dc1817d96738d860b9b6849d8cf-019d3352-fa86-73b0-912b-4ac0b3e5ec2f-15.jpg",
    alt: "Green painted dining room",
    span: "",
  },
  {
    src: "/assets/uploads/835a6ceb42f83d262396ec263ae3b53a-019d3352-fb04-71f1-9a50-417b5c52ea46-16.jpg",
    alt: "Blue-grey elegant bedroom",
    span: "",
  },
];

const COLOR_IMAGES = [
  {
    src: "/assets/uploads/661709eae9a008ce61a7284de14eef46-019d3352-dea1-7133-b0d5-3be0b75578f0-2.jpg",
    alt: "Best Color Combinations",
    label: "Color Combinations",
  },
  {
    src: "/assets/uploads/e2e4324d19e87337178eb3aa12dedc93-019d3352-ee66-7446-90e5-b52c55e36be6-6.jpg",
    alt: "Blue Navy Beige Palette",
    label: "Navy & Beige Palette",
  },
  {
    src: "/assets/uploads/ace-backyard-rainbow-mural-_athomewithashley-text-update-019d3352-f1d2-719a-8a55-431c1d401192-7.jpg",
    alt: "Rainbow color swatches",
    label: "Vibrant Palettes",
  },
  {
    src: "/assets/uploads/a2d02785acf094531f9163e9a970e337-019d3352-f4bf-74dd-a281-8bee2eaa5ace-8.jpg",
    alt: "Sage cream earth tones",
    label: "Earth & Sage Tones",
  },
];

const TRUST_BADGES = [
  {
    icon: Star,
    title: "Factory Rate Pricing",
    description:
      "Premium quality at wholesale prices — direct from manufacturer to your doorstep.",
  },
  {
    icon: CheckCircle,
    title: "Master Quality Products",
    description:
      "Every product in our store meets the highest standards of finish and durability.",
  },
  {
    icon: Palette,
    title: "Expert Color Consultation",
    description:
      "Personalized guidance from our color experts to make your vision a reality.",
  },
];

// WhatsApp SVG Icon
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-ocid="whatsapp.button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#20bd5a] transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <WhatsAppIcon className="w-8 h-8 text-white" />
    </motion.a>
  );
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy shadow-luxury py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
          data-ocid="nav.link"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold flex-shrink-0">
            <img
              src="/assets/uploads/1774677971765-019d3353-2234-7544-a5fd-ac8b2e741788-19.png"
              alt="Rolex Paint Logo"
              className="w-full h-full object-contain bg-white"
            />
          </div>
          <div className="leading-tight">
            <div className="text-white font-heading font-bold text-base sm:text-lg leading-none">
              Rolex Paint
            </div>
            <div className="text-gold text-xs font-body tracking-wider uppercase">
              &amp; Chemical Store
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-white/80 hover:text-gold transition-colors duration-200 font-body text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:03002840030" data-ocid="nav.primary_button">
            <Button
              size="sm"
              className="gold-gradient text-navy font-semibold hover:opacity-90 transition-opacity border-0"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              Call Now
            </Button>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-white/80 hover:text-gold transition-colors font-body py-1"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:03002840030">
                <Button className="gold-gradient text-navy font-semibold w-full border-0">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: 0300-2840030
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/uploads/736efb7f6fb5996f693d42b83fced95e-019d3352-d1e7-76f2-957c-a6531222b46d-1.jpg"
          alt="Beautiful interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      </div>

      {/* Store banner strip */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-3.5 h-3.5 text-gold" fill="currentColor" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">
                Premium Quality Since Day One
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-3"
          >
            Rolex Paint &
            <br />
            <span className="text-gold">Chemical Store</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-xl font-body mb-2 font-light tracking-wide"
            dir="rtl"
            lang="ur"
          >
            روليکس پينٹ اينڈ کيميکل سٹور
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl sm:text-2xl text-gold font-heading italic mb-6"
          >
            Where Quality Meets Color
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-white/70 text-base sm:text-lg font-body leading-relaxed mb-10 max-w-xl"
          >
            Your premier destination for high-performance architectural coatings
            and industrial chemical solutions in Chunian. Transforming spaces
            with the Rolex Standard of excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="tel:03002840030" data-ocid="hero.primary_button">
              <Button
                size="lg"
                className="gold-gradient text-navy font-bold text-base px-8 py-6 rounded-sm shadow-gold border-0 hover:opacity-90 transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us Now: 0300-2840030
              </Button>
            </a>
            <a href="#services" data-ocid="hero.secondary_button">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white/50 hover:bg-white/10 hover:border-white font-body text-base px-8 py-6 rounded-sm"
              >
                Our Services
                <ChevronDown className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gold opacity-70" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-cream" data-ocid="about.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1 max-w-12 bg-gold" />
              <span className="text-gold font-body text-sm uppercase tracking-widest">
                Our Story
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy leading-tight mb-6">
              The Rolex Standard
              <br />
              <span className="italic text-gold">of Excellence</span>
            </h2>
            <p className="text-navy/70 font-body leading-relaxed text-base mb-6">
              Welcome to Rolex Paint &amp; Chemical Store, your premier
              destination for high-performance architectural coatings and
              industrial chemical solutions. Located in the heart of Chunian, we
              specialize in providing top-tier paint products that transform
              spaces and protect your investments.
            </p>
            <p className="text-navy/70 font-body leading-relaxed text-base mb-8">
              At Rolex Paint, we don&apos;t just sell cans of paint — we provide
              the &ldquo;Rolex Standard&rdquo; of excellence. Whether you are
              looking for the perfect palette for a modern bedroom, a durable
              exterior finish for your home, or specialized chemical solutions,
              our curated selection ensures a flawless finish every time.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 py-2 bg-gold/5 rounded-r-lg">
              <p className="font-heading text-lg italic text-navy font-semibold">
                &ldquo;Our mission is to bring luxury aesthetics and durable
                protection to every doorstep in Chunian.&rdquo;
              </p>
              <footer className="mt-3 text-navy/60 font-body text-sm">
                — Sharafat Ali, Owner
              </footer>
            </blockquote>

            <div className="mt-8 flex items-center gap-6">
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-gold">
                  100%
                </div>
                <div className="text-navy/60 font-body text-xs uppercase tracking-wide mt-1">
                  Quality Assured
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-gold">
                  Factory
                </div>
                <div className="text-navy/60 font-body text-xs uppercase tracking-wide mt-1">
                  Rate Pricing
                </div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="font-heading text-3xl font-bold text-gold">
                  Expert
                </div>
                <div className="text-navy/60 font-body text-xs uppercase tracking-wide mt-1">
                  Consultations
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-luxury">
              <img
                src="/assets/uploads/lv_0_20260327092518-019d3353-1d81-730e-9dc3-f5fe82034f67-18.jpg"
                alt="Rolex Paint Store Banner"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="mt-6 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gold/10 blur-xl" />
                <img
                  src="/assets/uploads/1774677971765-019d3353-2234-7544-a5fd-ac8b2e741788-19.png"
                  alt="Rolex Classic Paint Premium Plastic Finish"
                  className="relative w-56 h-56 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 navy-gradient"
      data-ocid="services.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-widest">
              What We Offer
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Our Premium <span className="text-gold italic">Services</span>
          </h2>
          <p className="text-white/60 font-body mt-4 max-w-xl mx-auto">
            A comprehensive range of products tailored to meet the needs of
            homeowners, contractors, and interior designers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-gold/40 transition-all duration-300 h-full group cursor-default">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                      <service.icon className="w-6 h-6 text-gold" />
                    </div>
                    <span className="text-xs font-body font-medium text-gold border border-gold/30 rounded-full px-3 py-1">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-body text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 bg-cream-dark"
      data-ocid="gallery.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-widest">
              Visual Inspiration
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Inspiration <span className="text-gold italic">Gallery</span>
          </h2>
          <p className="text-navy/60 font-body mt-4 max-w-xl mx-auto">
            Beautifully painted spaces created using our premium paint
            collections.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1" : "4/3" }}
              onClick={() => setLightbox(img.src)}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-navy/70 px-4 py-2 rounded-full">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            data-ocid="gallery.modal"
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
              data-ocid="gallery.close_button"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Gallery fullscreen"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ColorSection() {
  return (
    <section id="colors" className="py-24 bg-cream" data-ocid="colors.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-widest">
              Find Your Shade
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Color <span className="text-gold italic">Inspiration</span>
          </h2>
          <p className="text-navy/60 font-body mt-4 max-w-xl mx-auto">
            Explore curated color palettes and combinations to find the perfect
            shade for every room and mood.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLOR_IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
              data-ocid={`colors.item.${i + 1}`}
            >
              <div className="relative overflow-hidden rounded-xl shadow-xs">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/80 to-transparent p-4">
                  <p className="text-white font-body text-sm font-medium">
                    {img.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Swatch card highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-2xl overflow-hidden shadow-luxury">
            <img
              src="/assets/uploads/67a15c51685aaef1f5684e9636c2fcf7-019d3352-eb5e-72d3-a50e-97f8c3f9b6fe-5.jpg"
              alt="Paint color swatches"
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-luxury">
            <img
              src="/assets/uploads/f1be97415bff6a278878db2418cefcd5-019d3352-f7c4-707c-a64c-e8721dd5975c-9.jpg"
              alt="Bedroom color ideas"
              className="w-full h-48 object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyUsSection() {
  return (
    <section className="py-20 navy-gradient" data-ocid="whyus.section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white">
            Why Choose <span className="text-gold italic">Rolex Paint?</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TRUST_BADGES.map((badge, i) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center group"
              data-ocid={`whyus.item.${i + 1}`}
            >
              <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform shadow-gold">
                <badge.icon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {badge.title}
              </h3>
              <p className="text-white/60 font-body leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InquirySection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Rolex Paint & Chemical Store!\n\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="inquiry"
      className="py-24 bg-cream-dark"
      data-ocid="inquiry.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-widest">
              Get A Quote
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Send an <span className="text-gold italic">Inquiry</span>
          </h2>
          <p className="text-navy/60 font-body mt-4 max-w-xl mx-auto">
            Fill in the form below and we&apos;ll respond to you directly via
            WhatsApp.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white border-border shadow-luxury overflow-hidden">
              <div className="h-2 gold-gradient" />
              <CardContent className="p-8">
                {/* WhatsApp badge */}
                <div className="flex items-center gap-3 mb-8 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30">
                  <WhatsAppIcon className="w-8 h-8 text-[#25D366] flex-shrink-0" />
                  <div>
                    <p className="text-navy font-heading font-semibold text-sm">
                      Replies via WhatsApp
                    </p>
                    <p className="text-navy/60 font-body text-xs">
                      Your inquiry will be sent directly to Sharafat Ali on
                      WhatsApp.
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label
                      htmlFor="inquiry-name"
                      className="font-body text-navy font-medium"
                    >
                      Your Name <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="inquiry-name"
                      type="text"
                      placeholder="e.g. Ahmed Khan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="border-border focus:border-gold focus:ring-gold/20 font-body"
                      data-ocid="inquiry.input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="inquiry-phone"
                      className="font-body text-navy font-medium"
                    >
                      Phone Number <span className="text-gold">*</span>
                    </Label>
                    <Input
                      id="inquiry-phone"
                      type="tel"
                      placeholder="e.g. 0300-1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="border-border focus:border-gold focus:ring-gold/20 font-body"
                      data-ocid="inquiry.input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="inquiry-message"
                      className="font-body text-navy font-medium"
                    >
                      Your Message / Inquiry{" "}
                      <span className="text-gold">*</span>
                    </Label>
                    <Textarea
                      id="inquiry-message"
                      placeholder="Tell us about your project — type of paint, area size, colors you like..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      className="border-border focus:border-gold focus:ring-gold/20 font-body resize-none"
                      data-ocid="inquiry.textarea"
                    />
                  </div>

                  <AnimatePresence>
                    {submitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 p-3 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30"
                        data-ocid="inquiry.success_state"
                      >
                        <CheckCircle className="w-4 h-4 text-[#25D366]" />
                        <p className="text-navy font-body text-sm">
                          WhatsApp opened! Your message is ready to send.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-base py-6 rounded-sm border-0 transition-colors shadow-md"
                    data-ocid="inquiry.submit_button"
                  >
                    <WhatsAppIcon className="w-5 h-5 mr-2" />
                    Send Inquiry via WhatsApp
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-cream"
      data-ocid="contact.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-body text-sm uppercase tracking-widest">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
            Visit Us <span className="text-gold italic">Today</span>
          </h2>
          <p className="text-navy/60 font-body mt-4 max-w-xl mx-auto">
            Ready to start your next project? Experience our wide range of
            Master quality paints and expert advice in person.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="bg-white border-border shadow-luxury overflow-hidden">
              <div className="h-2 gold-gradient" />
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gold">
                    <img
                      src="/assets/uploads/1774677971765-019d3353-2234-7544-a5fd-ac8b2e741788-19.png"
                      alt="Rolex Paint"
                      className="w-full h-full object-contain bg-white"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy">
                      Sharafat Ali
                    </h3>
                    <p className="text-navy/60 font-body text-sm">
                      Owner, Rolex Paint &amp; Chemical Store
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-cream">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-navy/60 font-body text-xs uppercase tracking-wide mb-0.5">
                        Phone
                      </div>
                      <a
                        href="tel:03002840030"
                        className="text-navy font-heading text-lg font-semibold hover:text-gold transition-colors"
                        data-ocid="contact.link"
                      >
                        0300-2840030
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-cream">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-navy/60 font-body text-xs uppercase tracking-wide mb-0.5">
                        Location
                      </div>
                      <p className="text-navy font-body font-medium">
                        Chunian, Kot Umer Wattoo
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-cream">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/15 flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
                    </div>
                    <div>
                      <div className="text-navy/60 font-body text-xs uppercase tracking-wide mb-0.5">
                        WhatsApp
                      </div>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-navy font-heading font-semibold hover:text-[#25D366] transition-colors"
                        data-ocid="contact.link"
                      >
                        0300-2840030
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-cream">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                      <Star className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-navy/60 font-body text-xs uppercase tracking-wide mb-0.5">
                        TikTok
                      </div>
                      <p className="text-navy font-body font-medium">
                        @stylishsharafatRajpoot
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a href="tel:03002840030" data-ocid="contact.primary_button">
                    <Button
                      size="lg"
                      className="w-full gold-gradient text-navy font-bold text-sm py-5 rounded-sm border-0 hover:opacity-90 transition-opacity shadow-gold"
                    >
                      <Phone className="w-4 h-4 mr-1.5" />
                      Call Now
                    </Button>
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid="contact.secondary_button"
                  >
                    <Button
                      size="lg"
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-5 rounded-sm border-0 transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4 mr-1.5" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Store banner + products */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="rounded-2xl overflow-hidden shadow-luxury">
              <img
                src="/assets/uploads/lv_0_20260327092518-019d3353-1d81-730e-9dc3-f5fe82034f67-18.jpg"
                alt="Rolex Paint Store"
                className="w-full h-48 object-cover"
              />
            </div>

            <Card className="bg-white border-border">
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-bold text-navy mb-4">
                  Available Products
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Super Emulsion",
                    "Weather Shield",
                    "Plastic Emulsion",
                    "Wall Filling",
                    "Wall Primer",
                    "Industrial Chemicals",
                  ].map((product) => (
                    <div
                      key={product}
                      className="flex items-center gap-2 text-sm font-body text-navy/80"
                    >
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      {product}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="rounded-xl bg-navy p-6 text-center">
              <p className="font-heading text-lg italic text-gold mb-2">
                &ldquo;Factory Rate Pricing&rdquo;
              </p>
              <p className="text-white/70 font-body text-sm">
                Premium quality without premium prices. Visit our store for
                exclusive deals.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="bg-navy border-t border-white/10 py-10"
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gold/50">
              <img
                src="/assets/uploads/1774677971765-019d3353-2234-7544-a5fd-ac8b2e741788-19.png"
                alt="Rolex Paint"
                className="w-full h-full object-contain bg-white"
              />
            </div>
            <div>
              <div className="text-white font-heading font-bold text-base leading-none">
                Rolex Paint &amp; Chemical Store
              </div>
              <div className="text-gold/70 font-body text-xs mt-0.5">
                Where Quality Meets Color
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/50 hover:text-gold transition-colors font-body text-xs"
                data-ocid="footer.link"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/40 font-body text-xs">
              © {year} Rolex Paint &amp; Chemical Store. All rights reserved.
            </p>
            <p className="text-white/30 font-body text-xs mt-1">
              Built with ❤️ using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <FloatingWhatsApp />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ColorSection />
        <WhyUsSection />
        <InquirySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
