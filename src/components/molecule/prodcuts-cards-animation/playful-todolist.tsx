'use client';

import * as React from 'react';
import { motion, type Transition } from 'motion/react';

const checkboxItems = [
  { id: 1, label: 'Code in Assembly 💾', defaultChecked: false },
  { id: 2, label: 'Present a bug as a feature 🪲', defaultChecked: false },
  { id: 3, label: 'Push to prod on a Friday 🚀', defaultChecked: false },
];

const getPathAnimate = (isChecked: boolean) => ({
  pathLength: isChecked ? 1 : 0,
  opacity: isChecked ? 1 : 0,
});

const getPathTransition = (isChecked: boolean): Transition => ({
  pathLength: { duration: 1, ease: 'easeInOut' },
  opacity: { duration: 0.01, delay: isChecked ? 0 : 1 },
});

function PlayfulTodolist() {
  const [checked, setChecked] = React.useState(
    checkboxItems.map((i) => !!i.defaultChecked)
  );

  return (
    <div className="bg-black rounded-md w-full p-2 space-y-2 shadow-lg shadow-black/50">
      {checkboxItems.map((item, idx) => (
        <div key={item.id} className="space-y-2">
          <div className="flex items-center space-x-3 relative">
            {/* Custom Dark Checkbox */}
            <label
              htmlFor={`checkbox-${item.id}`}
              className="relative w-5 h-5 cursor-pointer"
            >
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                checked={checked[idx]}
                onChange={(e) => {
                  const updated = [...checked];
                  updated[idx] = e.target.checked;
                  setChecked(updated);
                }}
                className="appearance-none w-5 h-5 rounded border-2 border-neutral-700 bg-neutral-900
                           checked:bg-green-500 checked:border-green-500 transition-all duration-300
                           cursor-pointer"
              />
              {/* Optional checkmark */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={false}
                animate={{ opacity: checked[idx] ? 1 : 0 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </label>

            {/* Label */}
            <span className="text-white text-sm  cursor-pointer select-none">
              {item.label}
            </span>

            {/* Motion Path */}
            <motion.svg
              width="340"
              height="32"
              viewBox="0 0 340 32"
              className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 w-full h-10"
            >
              <motion.path
                d="M 10 16.91 s 79.8 -11.36 98.1 -11.34 c 22.2 0.02 -47.82 14.25 -33.39 22.02 c 12.61 6.77 124.18 -27.98 133.31 -17.28 c 7.52 8.38 -26.8 20.02 4.61 22.05 c 24.55 1.93 113.37 -20.36 113.37 -20.36"
                vectorEffect="non-scaling-stroke"
                strokeWidth={2}
                strokeLinecap="round"
                strokeMiterlimit={10}
                fill="none"
                initial={false}
                animate={getPathAnimate(checked[idx])}
                transition={getPathTransition(checked[idx])}
                className="stroke-white/50"
              />
            </motion.svg>
          </div>

          {idx !== checkboxItems.length - 1 && (
            <div className="border-t border-neutral-700/30" />
          )}
        </div>
      ))}
    </div>
  );
}

export { PlayfulTodolist };