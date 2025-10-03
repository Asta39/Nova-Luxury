// src/components/ui/PolicyModal.jsx

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Icon from '../AppIcon';

const PolicyModal = ({ triggerText, title, children }) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-sm text-muted-foreground hover:text-primary luxury-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
          {triggerText}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50" />
        <Dialog.Content 
          className="fixed z-50 flex flex-col border-t border-white/10 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500
          
          // --- UPDATED: iOS warm white glassmorphic style ---
          bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl
          
          // --- Mobile Style ---
          inset-x-0 bottom-0 max-h-[90vh] rounded-t-3xl
          data-[state=closed]:slide-out-to-bottom-full data-[state=open]:slide-in-from-bottom-full
          
          // --- Desktop Style ---
          md:top-1/2 md:left-1/2 md:w-full md:max-w-2xl md:max-h-[85vh] md:rounded-2xl md:border
          md:-translate-x-1/2 md:-translate-y-1/2
          md:data-[state=closed]:fade-out-0 md:data-[state=open]:fade-in-0
          md:data-[state=closed]:zoom-out-95 md:data-[state=open]:zoom-in-95
          md:data-[state=closed]:slide-out-to-top-[48%] md:data-[state=open]:slide-in-from-top-[48%]"
        >
          {/* Header */}
          <div className="flex-shrink-0 flex items-center justify-between p-4 border-b border-black/10 dark:border-white/10">
            <Dialog.Title className="text-lg font-semibold text-primary">
              {title}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-1 rounded-full text-muted-foreground hover:bg-black/10 dark:hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <Icon name="X" size={20} />
              </button>
            </Dialog.Close>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {children}
          </div>

          {/* Glassmorphic Footer & Button */}
          <div className="flex-shrink-0 p-4 border-t border-black/10 dark:border-white/10 text-right">
            <Dialog.Close asChild>
              <button 
                className="px-6 py-2 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-primary rounded-full text-sm font-semibold
                hover:bg-black/10 dark:hover:bg-white/20 backdrop-blur-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Done
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PolicyModal;