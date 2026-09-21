import React from 'react';
import { notFound } from 'next/navigation';
import { DOCUMENTS } from '@/data/documents';
import DocumentEditor from '@/components/DocumentEditor';

export async function generateStaticParams() {
  return Object.keys(DOCUMENTS).map((slug) => ({ slug }));
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = DOCUMENTS[slug];

  if (!doc) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
            {doc.category}
          </span>
          <h1 className="text-3xl font-extrabold text-neutral-900 mt-2">{doc.title} Oluştur</h1>
          <p className="text-sm text-neutral-600 mt-1">{doc.description}</p>
        </header>

        <DocumentEditor doc={doc} />
      </div>
    </div>
  );
}
