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
                'linear-gradient(90deg, #A6E3E9 0%, rgb(126,212,87) 50%,  yellow 100%)',
        }}
    ></ProgressPrimitive.Root>
));
ProgressClone.displayName = ProgressPrimitive.Root.displayName;

export { ProgressClone };
