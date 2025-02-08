document.addEventListener('selectionchange', () => {
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const rects = range.getClientRects();
    
    const highlight = document.createElement('div');
    highlight.style.position = 'absolute';
    highlight.style.backgroundColor = 'white';
    highlight.style.color = '#5421ef';
    highlight.style.borderRadius = '1rem';
    highlight.style.padding = '2px';
    highlight.style.zIndex = '9999';
    highlight.style.pointerEvents = 'none';
  
    rects.forEach(rect => {
      const clone = highlight.cloneNode();
      clone.style.top = `${rect.top + window.scrollY}px`;
      clone.style.left = `${rect.left + window.scrollX}px`;
      clone.style.width = `${rect.width}px`;
      clone.style.height = `${rect.height}px`;
      document.body.appendChild(clone);
  
      setTimeout(() => {
        document.body.removeChild(clone);
      }, 500);
    });
  });