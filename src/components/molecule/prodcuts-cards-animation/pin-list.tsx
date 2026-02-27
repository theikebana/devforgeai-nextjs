'use client';

import * as React from 'react';
import { Pin } from 'lucide-react';
import {
  motion,
  LayoutGroup,
  AnimatePresence,
  type HTMLMotionProps,
  type Transition,
} from 'motion/react';
import { cn } from '../../../lib/utlis';

type PinListItem = {
  id: number;
  name: string;
  info: string;
  icon: React.ElementType;
  pinned: boolean;
};

type PinListProps = {
  items: PinListItem[];
  labels?: {
    pinned?: string;
    unpinned?: string;
  };
  transition?: Transition;
  labelMotionProps?: HTMLMotionProps<'p'>;
  className?: string;
  labelClassName?: string;
  pinnedSectionClassName?: string;
  unpinnedSectionClassName?: string;
  zIndexResetDelay?: number;
} & HTMLMotionProps<'div'>;

function PinList({
  items,
  labels = { pinned: 'Pinned Items', unpinned: 'All Items' },
  transition = { stiffness: 320, damping: 28, mass: 0.8, type: 'spring' },
  labelMotionProps = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
    transition: { duration: 0.22, ease: 'easeInOut' },
  },
  className,
  labelClassName,
  pinnedSectionClassName,
  unpinnedSectionClassName,
  zIndexResetDelay = 500,
  ...props
}: PinListProps) {
  const [listItems, setListItems] = React.useState(items);
  const [togglingGroup, setTogglingGroup] = React.useState<'pinned' | 'unpinned' | null>(null);

  const pinned = listItems.filter((u) => u.pinned);
  const unpinned = listItems.filter((u) => !u.pinned);

  const toggleStatus = (id: number) => {
    const item = listItems.find((u) => u.id === id);
    if (!item) return;

    setTogglingGroup(item.pinned ? 'pinned' : 'unpinned');
    setListItems((prev) => {
      const idx = prev.findIndex((u) => u.id === id);
      if (idx === -1) return prev;
      const updated = [...prev];
      const [item] = updated.splice(idx, 1);
      if (!item) return prev;
      const toggled = { ...item, pinned: !item.pinned };
      if (toggled.pinned) updated.push(toggled);
      else updated.unshift(toggled);
      return updated;
    });

    setTimeout(() => setTogglingGroup(null), zIndexResetDelay);
  };

  return (
    <motion.div
      className={cn(
        'w-full space-y-5', // full width
        'bg-black/90  rounded-3xl shadow-xl shadow-black/50',
        className
      )}
      {...props}
    >
      <LayoutGroup>
        {/* Pinned Section */}
        {pinned.length > 0 && (
          <div
            className={cn(
              'space-y-1 relative',
              togglingGroup === 'pinned' ? 'z-5' : 'z-10',
              pinnedSectionClassName
            )}
          >
            {pinned.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`item-${item.id}`}
                onClick={() => toggleStatus(item.id)}
                transition={transition}
                className="flex items-center justify-between gap-5 rounded-md p-2
                  bg-gradient-to-r from-neutral-900/80 to-neutral-800/80
                  hover:from-neutral-800/70 hover:to-neutral-700/70
                  backdrop-blur-md border border-neutral-700/40
                  shadow-md shadow-black/40 cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-sm bg-neutral-900/50 p-2 backdrop-blur-sm">
                    <item.icon className="size-5 text-white/80" />
                  </div>
                  <div>
                    <div className="text-xs text-white">{item.name}</div>
                    <div className="text-xs text-white/50">{item.info}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center size-8 rounded-full bg-red-600/80 shadow-lg shadow-red-400/30">
                  <Pin className="size-4 text-white/80 fill-white/80 animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Unpinned Section */}
        <AnimatePresence>
          {unpinned.length > 0 && (
            <motion.p
              layout
              key="all-label"
              className={cn(
                'font-medium px-3 text-white/60 text-sm mb-2 tracking-wide',
                labelClassName
              )}
              {...labelMotionProps}
            >
              {labels.unpinned}
            </motion.p>
          )}
        </AnimatePresence>
        {unpinned.length > 0 && (
          <div
            className={cn(
              'space-y-1 relative',
              togglingGroup === 'unpinned' ? 'z-5' : 'z-10',
              unpinnedSectionClassName
            )}
          >
            {unpinned.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`item-${item.id}`}
                onClick={() => toggleStatus(item.id)}
                transition={transition}
                className="flex items-center justify-between gap-5 rounded-md p-2
                  bg-neutral-900/50 hover:bg-neutral-800/50 backdrop-blur-sm
                  border border-neutral-700/30 shadow-sm shadow-black/30
                  group cursor-pointer transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-sm bg-neutral-900/30 p-2 backdrop-blur-sm">
                    <item.icon className="size-5 text-white/70 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white">{item.name}</div>
                    <div className="text-xs text-white/50">{item.info}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center size-8 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Pin className="size-4 text-white/90" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </LayoutGroup>
    </motion.div>
  );
}

export { PinList, type PinListProps, type PinListItem };