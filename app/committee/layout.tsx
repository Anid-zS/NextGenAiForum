import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';

export const metadata: Metadata = buildMetadata({
  title: 'Committee | NextGenAIForum 2027',
  description:
    'Review the NextGenAIForum committee structure, including the Core Committee, Steering Committee, Executive Chair, General Co-Chairs, and Technical Program Committee.',
  path: '/committee',
  keywords: [
    'core committee',
    'conference committee',
    'steering committee',
    'executive chair',
    'general co-chairs',
    'technical program committee',
    'conference leadership',
  ],
});

export { MetadataLayout as default } from '@/lib/metadata';