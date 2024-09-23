'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';

const ProgressClone = React.forwardRef<
    React.ElementRef<typeof ProgressPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
    <ProgressPrimitive.Root
        ref={ref}
        className={cn(
            'relative h-2 w-full overflow-visible rounded-full bg-primary/20',
            className,
        )}
        {...props}
        style={{
            background:
                'linear-gradient(90deg, green 0%, rgba(126,212,87,1) 20%,  yellow 60%,red 100%)',
        }}
    ></ProgressPrimitive.Root>
));
ProgressClone.displayName = ProgressPrimitive.Root.displayName;

export { ProgressClone };
