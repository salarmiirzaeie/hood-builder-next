export const cleanShortcodes = (text: string): string => {
  return text.replace(/\[\/?\w+(?:\s+[^\]]*)?\]/g, "");
};
