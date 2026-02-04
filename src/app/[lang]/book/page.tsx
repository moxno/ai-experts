import type { Metadata } from 'next';
import BookingWizard from '@/components/BookingWizard';
import { getDictionary } from '@/dictionaries';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'he' | 'en');
  return {
    title: `${dict.booking.title} | AI-Experts.co.il`,
    description: dict.profile.bookNow,
  };
}

export default async function BookingPage(props: {
  params: Promise<{ lang: string }>,
  searchParams: Promise<{ offeringId?: string }>
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const lang = params.lang;
  const offeringId = searchParams.offeringId;

  if (!offeringId) notFound();

  const dict = await getDictionary(lang as 'he' | 'en');

  const offering = await prisma.offering.findUnique({
    where: { id: offeringId },
    include: { expert: true }
  });

  if (!offering) notFound();

  return (
    <div className="container" style={{ padding: '4rem 1.5rem' }}>
      <BookingWizard dict={dict} offering={offering} />
    </div>
  );
}
