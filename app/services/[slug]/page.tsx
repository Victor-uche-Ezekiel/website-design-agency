import { services } from '@/lib/services-data';
import { ServiceContent } from '@/components/services/service-content';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.title.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(
    (s) => s.title.toLowerCase().replace(/\s+/g, '-') === params.slug
  );

  if (!service) {
    notFound();
  }

  return <ServiceContent service={service} />;
}
