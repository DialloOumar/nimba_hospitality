// Generates the Nimba Hospitality Group logo as pure-path SVGs (no font dependency).
// Run: npm run logo
import fs from 'node:fs';
import path from 'node:path';
import opentype from 'opentype.js';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const fontDir = (pkg) => path.join(root, 'node_modules/@fontsource', pkg, 'files');
const load = (pkg, file) => opentype.parse(new Uint8Array(fs.readFileSync(path.join(fontDir(pkg), file))).buffer);

const serif = load('cormorant-garamond', 'cormorant-garamond-latin-700-normal.woff');
const sansBold = load('montserrat', 'montserrat-latin-800-normal.woff');
const sansSemi = load('montserrat', 'montserrat-latin-600-normal.woff');

export const GREEN = '#0E3B27';
export const GOLD = '#C29B57';

const r = (n) => Math.round(n * 100) / 100;
const glyphPath = (font, text, x, y, size, letterSpacing = 0) => {
  const p = font.getPath(text, x, y, size, { letterSpacing: letterSpacing / size, kerning: true });
  return p;
};
const d = (p) => p.toPathData(2);
const bbox = (p) => p.getBoundingBox();

// ---------- Monogram ----------
const S = 260; // serif font size
const base = 220; // baseline y
const N = glyphPath(serif, 'N', 0, base, S);
const nb = bbox(N);
const H = glyphPath(serif, 'H', nb.x2 - S * 0.075, base, S);
const hb = bbox(H);
const G = glyphPath(serif, 'G', hb.x2 - S * 0.06, base, S);
const gb = bbox(G);
const top = Math.min(nb.y1, hb.y1, gb.y1);
const capH = base - top;

// Gold swoosh: tapered wave rising from the foot of the N, cresting across the H
// and settling into the bar of the G.
const sx = nb.x1 + (nb.x2 - nb.x1) * 0.36, sy = base - capH * 0.16;
const ex = gb.x1 + (gb.x2 - gb.x1) * 0.6, ey = base - capH * 0.4;
const t = capH * 0.06; // max thickness
const span = ex - sx;
const swoosh = [
  `M${r(sx)} ${r(sy)}`,
  // upper edge: rises over the H, crests, then dips into the G's bar
  `C${r(sx + span * 0.32)} ${r(base - capH * 0.62)} ${r(sx + span * 0.7)} ${r(base - capH * 0.66)} ${r(ex)} ${r(ey)}`,
  // lower edge back to the start, offset to give a tapered blade
  `C${r(sx + span * 0.68)} ${r(base - capH * 0.66 + t * 2.4)} ${r(sx + span * 0.34)} ${r(base - capH * 0.62 + t * 2.6)} ${r(sx)} ${r(sy)}`,
  'Z',
].join(' ');

const pad = 6;
const mono = {
  x: r(nb.x1 - pad), y: r(top - pad),
  w: r(gb.x2 - nb.x1 + pad * 2), h: r(capH + pad * 2 + Math.max(0, Math.max(nb.y2, hb.y2, gb.y2) - base)),
  n: d(N), hh: d(H), g: d(G), swoosh,
};

// ---------- Wordmark ----------
const WS = 74; // wordmark size
const lineGap = WS * 1.02;
const wx = 0;
const L1 = glyphPath(sansBold, 'NIMBA', wx, 0, WS, WS * 0.06);
const L2 = glyphPath(sansBold, 'HOSPITALITY', wx, lineGap, WS, WS * 0.06);
const L3 = glyphPath(sansBold, 'GROUP', wx, lineGap * 2, WS, WS * 0.06);
const b2 = bbox(L2);
const wordTop = bbox(L1).y1;
const wordWidth = b2.x2 - b2.x1;

const TS = 30;
const tagText = "L'ART DE VOUS RECEVOIR";
const tagProbe = glyphPath(sansSemi, tagText, 0, 0, TS, TS * 0.08);
const tw = bbox(tagProbe).x2 - bbox(tagProbe).x1;
const tagY = lineGap * 2 + WS * 0.62;
const tagX = wx + (wordWidth - tw) / 2;
const Tag = glyphPath(sansSemi, tagText, tagX, tagY, TS, TS * 0.08);
const tagb = bbox(Tag);
const ruleY = (tagb.y1 + tagb.y2) / 2;
const ruleGap = TS * 0.6;
const rules = [
  { x1: wx, x2: tagb.x1 - ruleGap },
  { x1: tagb.x2 + ruleGap, x2: wx + wordWidth },
];
const word = {
  x: r(wx), y: r(wordTop), w: r(wordWidth), h: r(tagb.y2 - wordTop), linesBottom: r(bbox(L3).y2),
  lines: [d(L1), d(L2), d(L3)].join(' '), tag: d(Tag),
  rules: rules.map((l) => ({ x1: r(l.x1), x2: r(l.x2), y: r(ruleY) })), ruleW: r(TS * 0.16),
};

// ---------- Compose full lockup ----------
function lockup({ green, gold, word: wordFill = green }) {
  const monoScale = (word.h * 1.0) / mono.h;
  const mw = mono.w * monoScale;
  const gap = 46;
  const divX = mw + gap;
  const wordX = divX + gap;
  const W = wordX + word.w, Hh = word.h;
  const m = Hh * 0.05;
  const rulesSvg = word.rules.map((l) => `<rect x="${l.x1}" y="${r(l.y - word.ruleW / 2)}" width="${r(l.x2 - l.x1)}" height="${word.ruleW}" fill="${gold}"/>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${r(-m)} ${r(-m)} ${r(W + m * 2)} ${r(Hh + m * 2)}" role="img" aria-label="Nimba Hospitality Group — L'art de vous recevoir">
<g transform="scale(${r(monoScale * 1000) / 1000}) translate(${-mono.x} ${-mono.y})">
<path fill="${green}" d="${mono.n}"/><path fill="${gold}" d="${mono.hh}"/><path fill="${green}" d="${mono.g}"/><path fill="${gold}" d="${mono.swoosh}"/>
</g>
<rect x="${r(divX - 2.5)}" y="${r(Hh * 0.02)}" width="5" height="${r(Hh * 0.96)}" fill="${gold}"/>
<g transform="translate(${r(wordX - word.x)} ${-word.y})">
<path fill="${wordFill}" d="${word.lines}"/><path fill="${gold}" d="${word.tag}"/>${rulesSvg}
</g>
</svg>`;
}

function monogram({ green, gold, bg }) {
  const p = bg ? mono.h * 0.22 : 0;
  const size = Math.max(mono.w, mono.h) + p * 2;
  const ox = (size - mono.w) / 2 - mono.x, oy = (size - mono.h) / 2 - mono.y;
  const vb = bg ? `0 0 ${r(size)} ${r(size)}` : `${mono.x} ${mono.y} ${mono.w} ${mono.h}`;
  const tr = bg ? ` transform="translate(${r(ox)} ${r(oy)})"` : '';
  const rect = bg ? `<rect width="${r(size)}" height="${r(size)}" rx="${r(size * 0.18)}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="NHG">${rect}<g${tr}><path fill="${green}" d="${mono.n}"/><path fill="${gold}" d="${mono.hh}"/><path fill="${green}" d="${mono.g}"/><path fill="${gold}" d="${mono.swoosh}"/></g></svg>`;
}

const out = path.join(root, 'public/brand');
fs.mkdirSync(out, { recursive: true });
const files = {
  'nhg-logo.svg': lockup({ green: GREEN, gold: GOLD }),
  'nhg-logo-white.svg': lockup({ green: '#FFFFFF', gold: GOLD }),
  'nhg-monogram.svg': monogram({ green: GREEN, gold: GOLD }),
  'nhg-monogram-white.svg': monogram({ green: '#FFFFFF', gold: GOLD }),
};
for (const [f, svg] of Object.entries(files)) fs.writeFileSync(path.join(out, f), svg);
const favicon = monogram({ green: '#FFFFFF', gold: GOLD, bg: GREEN });
fs.writeFileSync(path.join(root, 'public/favicon.svg'), favicon);
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile(path.join(root, 'public/apple-touch-icon.png'));
await sharp(Buffer.from(favicon)).resize(32, 32).png().toFile(path.join(root, 'public/favicon-32.png'));
await sharp(Buffer.from(files['nhg-logo.svg'])).resize({ width: 1600 }).png().toFile(path.join(out, 'nhg-logo.png'));

// Path data for the inline header/footer logo component (colours driven by CSS).
fs.writeFileSync(path.join(root, 'src/data/logo.json'), JSON.stringify({ mono, word }, null, 2));
console.log('Logo assets written to public/brand, public/favicon.svg and src/data/logo.json');
