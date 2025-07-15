import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['fr', 'de', 'cs', 'sk', 'sv', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'always'
});
 
export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};