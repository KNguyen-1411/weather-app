'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const Progress = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            'relative h-2.5 w-full overflow-visible rounded-full bg-primary/20',
            className,
        )}
        {...props}
        style={{
            background:
                'linear-gradient(90deg, rgba(58,110,180,1) 0%, rgba(126,212,87,1) 20%, rgba(248,212,73,1) 40%, rgba(235,77,96,1) 60%, rgba(180,96,231,1) 80%, rgba(178,34,34,1) 100%)',
        }}
    >
        <ProgressPrimitive.Indicator
            // className="h-full w-full flex-1 bg-primary transition-all"
            className="h-2.5 w-2.5 flex-1 rounded-full bg-primary shadow-lg shadow-white ring-2 transition-all dark:ring-gray-500 bg-white "
            style={{ marginLeft: `${value || 0}%` }}
        />
    </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
