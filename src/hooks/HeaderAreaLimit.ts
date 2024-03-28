import { useEffect } from 'react';

const useHeaderAreaLimit = (textareaId: string) => {
  useEffect(() => {
    const textarea = document.getElementById(textareaId);
    
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        event.preventDefault();
      }
    };

    if (textarea) {
      textarea.addEventListener('keydown', handleKeyDown);

      return () => {
        textarea.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [textareaId]);
};

export default useHeaderAreaLimit;
