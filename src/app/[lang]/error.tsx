'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Route error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertCircle className="w-16 h-16 text-destructive" />
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          Something went wrong
        </h1>
        <p className="text-muted-foreground">
          We encountered an unexpected error. Please try again.
        </p>
        <Button onClick={reset} variant="default">
          Try again
        </Button>
      </div>
    </div>
  );
}
