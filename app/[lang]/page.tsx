import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">MehguViewer.Proto</h1>
      <p className="mb-8 text-muted-foreground">
        The Source of Truth for the Federated Media Ecosystem.
      </p>
      <div className="flex gap-4">
        <Link
          href="/docs"
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
        >
          Documentation
        </Link>
        <Link
          href="/api-reference"
          className="rounded-md border bg-secondary px-4 py-2 text-secondary-foreground hover:bg-secondary/80"
        >
          API Reference
        </Link>
      </div>
    </main>
  );
}
