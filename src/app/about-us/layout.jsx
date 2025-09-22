import AboutUsLayout from '@/components/about-us-layout';

export const metadata = {
  title:
    'About BELANARO Group of Companies | Dehydrated Onion & Garlic Exporters India',
  description:
    "Learn about BELANARO Group of Companies (VISHWANATH IMPEX) – India's leading manufacturer and exporter of dehydrated onion, garlic, and vegetable products. Trusted globally for quality and importer success.",
};

export default function Layout({ children }) {
  return <AboutUsLayout>{children}</AboutUsLayout>;
}
