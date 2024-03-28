import { useEffect } from 'react';

const useAutoResizeTextarea = (textareaId: string) => {
  useEffect(() => {
    const handleInput = (event: Event) => {
      const textarea = event.target as HTMLTextAreaElement;
      if (textarea.id === textareaId) {
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };

    const textarea = document.getElementById(textareaId) as HTMLTextAreaElement;
    if (textarea) {
      textarea.addEventListener('input', handleInput);

      return () => {
        textarea.removeEventListener('input', handleInput);
      };
    }
  }, [textareaId]);
};

export default useAutoResizeTextarea;
