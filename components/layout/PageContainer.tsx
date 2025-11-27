import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type PageContainerProps = {
  id?: string;
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
};

export function PageContainer({ id, as: Tag = 'section', children, className }: PageContainerProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <Tag className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className ?? ''}`}>
        {children}
      </Tag>
    </motion.div>
  );
}
