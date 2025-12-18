import defaultSettings from '../setting'

export default function getPageTitle(pageTitle?: string): string {
  const title = defaultSettings.title || 'VND ADMIN MULTI WEB';
  return pageTitle ? `${pageTitle} - ${title}` : title;
}