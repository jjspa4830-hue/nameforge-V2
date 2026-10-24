import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const sitemap = readFileSync(new URL('../../public/sitemap.xml', import.meta.url), 'utf8');
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

assert.ok(sitemap.includes('<urlset'), 'sitemap must contain a urlset root');
assert.ok(sitemap.includes('</urlset>'), 'sitemap must close its urlset root');
assert.deepEqual(
  locations,
  ['https://jjspa4830-hue.github.io/nameforge-V2/'],
  'published sitemap should list only the current crawlable homepage'
);
assert.ok(
  locations.every((url) => !url.includes('#')),
  'sitemap entries must not use URL fragments as crawlable pages'
);
assert.ok(
  !sitemap.includes('rayanellg.github.io/nameforge'),
  'published sitemap must not point to the previous deployment'
);

console.log('Site metadata checks passed: sitemap URL and crawlable entries are valid.');
