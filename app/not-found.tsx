import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container py-16">
      <div className="mx-auto max-w-xl rounded-2xl border bg-white p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold text-brand-black">Page not found</h1>
        <p className="mt-2 text-sm text-brand-text">
          The page you are looking for doesn’t exist or may have been moved.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
