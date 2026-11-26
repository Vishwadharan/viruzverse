import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JOBS } from "@/lib/careers";
import JobDetailPage from "@/components/sections/careers/JobDetailPage";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return JOBS.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) return {};
  return {
    title: job.title,
    description: `${job.title} at Viruzverse — ${job.location} · ${job.type} · ${job.experience}`,
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = JOBS.find((j) => j.slug === slug);
  if (!job) notFound();
  return <JobDetailPage job={job} />;
}
