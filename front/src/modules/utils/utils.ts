export const humanReadableDate = (date: Date) => {
  return new Intl.DateTimeFormat(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

export const getLogoUrlFromDomainName = (domainName?: string): string => {
  return `https://api.faviconkit.com/${domainName}/144`;
};

export const browserPrefersDarkMode = (): boolean => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
