"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  src: string;
  alt: string;
  // Intrinsic pixel size, so next/image reserves the right space before load.
  width: number;
  height: number;
  caption?: string;
};

export default function DiagramLightbox({
  src,
  alt,
  width,
  height,
  caption,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* full bleed: the diagram is the argument, so it gets the window */}
      <figure className="relative left-1/2 mt-12 w-screen -translate-x-1/2 px-5 sm:px-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`Expand ${alt}`}
          className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-surface-muted ring-1 ring-line-soft transition-shadow duration-200 hover:ring-brand/30"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="100vw"
            className="h-auto w-full"
          />
          <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-surface/85 px-3.5 py-1.5 text-sm font-medium text-brand ring-1 ring-line backdrop-blur-sm">
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="7" cy="7" r="4.5" />
              <path d="M10.5 10.5 14 14M7 5.2v3.6M5.2 7h3.6" />
            </svg>
            Expand
          </span>
        </button>
        {caption && (
          <figcaption className="mx-auto mt-4 max-w-5xl text-sm text-ink-subtle">
            {caption}
          </figcaption>
        )}
      </figure>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <div className="absolute right-4 top-4 z-10 flex items-center gap-3 sm:right-6 sm:top-6">
            <a
              href={src}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="rounded-full bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-black/60"
            >
              Open full size
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-colors hover:bg-black/60"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 4l8 8M12 4l-8 8" />
              </svg>
            </button>
          </div>

          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes="100vw"
            onClick={(event) => event.stopPropagation()}
            className="max-h-full w-auto max-w-full rounded-lg object-contain"
          />
        </div>
      )}
    </>
  );
}
