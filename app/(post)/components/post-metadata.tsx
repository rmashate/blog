interface PostMetadataProps {
  date?: string;
  readingTime?: number;
}

export function PostMetadata({ date, readingTime }: PostMetadataProps) {
  if (!date && !readingTime) return null;

  return (
    <div className="text-sm text-gray-500 dark:text-gray-400 mb-8 -mt-4 not-prose">
      {date && <time dateTime={date}>{formatDate(date)}</time>}
      {date && readingTime && <span className="mx-2">·</span>}
      {readingTime && <span>{readingTime} min read</span>}
    </div>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
