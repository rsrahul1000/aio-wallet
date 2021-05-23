import React from 'react';
import { useClickOutsideListenerRef } from '../hooks/useClickOutsideListenerRef';

export interface IDialogProps {
  onClose: () => void;
}

export const Dialog: React.FC<IDialogProps> = props => {
  const { onClose, children } = props;
  const ref = useClickOutsideListenerRef(onClose);
  // I'm using tailwindcss for my css, you can use whatever you want.
  return (
    <div className='w-screen h-screen fixed inset-0 z-50 dialog-container'>
      <div className='flex h-full'>
        <div ref={ref} className='bg-white p-3 rounded overflow-auto'>
          {children}
        </div>
      </div>

      <style jsx={true}>{`
        .dialog-container {
          background-color: rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};
