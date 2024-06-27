import { cn } from '@/utils/utils';

import type { ComponentPropsWithoutRef } from 'react';

type HeaderProps = ComponentPropsWithoutRef<'h1'>;

const Heading = ({ className, children, ...props }: HeaderProps) => {
  return (
    <h1 className={cn('', className)} {...props}>
      {children}
    </h1>
  );
};

export default Heading;
