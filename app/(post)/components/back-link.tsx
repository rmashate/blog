import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/"
      className="inline-flex items-center text-sm text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 transition-colors mb-6"
    >
      <span className="mr-1">←</span>
      <span>All posts</span>
    </Link>
  );
}
