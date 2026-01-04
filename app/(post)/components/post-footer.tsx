'use client';

import Link from 'next/link';

interface PostFooterProps {
  slug?: string;
}

export function PostFooter({ slug }: PostFooterProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 not-prose">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          ← Back to all posts
        </Link>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        <p>
          Found this useful?{' '}
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Share on Twitter
          </a>
          {' '}or{' '}
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}
