"use client";

import { useSelectedLayoutSegments } from "next/navigation";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import type { Post } from "@/app/get-posts";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function PostMetadata({ posts }: { posts: Post[] }) {
  const segments = useSelectedLayoutSegments();
  const initialPost = posts.find(
    (post) => post.id === segments[segments.length - 1]
  );

  const { data: post, mutate } = useSWR(
    `/api/view?id=${initialPost?.id ?? ""}`,
    fetcher,
    {
      fallbackData: initialPost,
      refreshInterval: 5000,
    }
  );

  if (initialPost == null) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-neutral-500 dark:text-neutral-400 mb-8 font-mono">
      <time dateTime={post.date}>{formatDate(post.date)}</time>
      <span className="text-neutral-300 dark:text-neutral-600">•</span>
      <Views id={post.id} mutate={mutate} defaultValue={post.viewsFormatted} />
    </div>
  );
}

function Views({
  id,
  mutate,
  defaultValue,
}: {
  id: string;
  mutate: (data?: Post) => void;
  defaultValue: string;
}) {
  const views = defaultValue;
  const didLogViewRef = useRef(false);

  useEffect(() => {
    if ("development" === process.env.NODE_ENV) return;
    if (!didLogViewRef.current) {
      const url = "/api/view?incr=1&id=" + encodeURIComponent(id);
      fetch(url)
        .then((res) => res.json())
        .then((obj) => {
          mutate(obj);
        })
        .catch(console.error);
      didLogViewRef.current = true;
    }
  });

  return <span>{views != null ? `${views} views` : null}</span>;
}
