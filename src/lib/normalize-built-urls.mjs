import fs from 'node:fs';
import {globSync} from 'glob';
import {load} from 'cheerio';
const aliases = new Map([['/posts','/recent-posts'],['/articles','/recent-posts'],['/case-results','/courtroom-victories'],...Array.from({length:14},(_,i)=>[`/case-results/${i+2}`,`/courtroom-victories/${i+2}`])]);
export function normalizeBuiltUrls(){
 const root='dist/client';const files=globSync('**/*.html',{cwd:root,posix:true});
 const paths=new Set(files.map(f=>f==='index.html'?'/':'/'+f.replace(/\.html$/,'')));
 const hosts=new Set(['www.simoncriminaldefense.com','simoncriminaldefense.com',new URL(process.env.SITE_URL||'https://jas-law-astro-review.netlify.app').hostname]);
 function normalize(value){
  if(typeof value!=='string'||(!value.startsWith('/')&&!value.startsWith('https://')&&!value.startsWith('http://')))return value;
  try{const u=new URL(value,'https://'+[...hosts].at(-1));if(!hosts.has(u.hostname))return value;let p=u.pathname.replace(/\/index\.html$/, '/').replace(/\.html$/, '').replace(/\/$/,'')||'/';p=aliases.get(p)||p;if(!paths.has(p))return value;u.pathname=p;return value.startsWith('/')?p+u.search+u.hash:u.href;}catch{return value;}
 }
 function walk(v){if(typeof v==='string')return normalize(v);if(Array.isArray(v))return v.map(walk);if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,walk(x)]));return v;}
 for(const file of files){const path=`${root}/${file}`;const $=load(fs.readFileSync(path,'utf8'));
  $('[href]').each((_,el)=>$(el).attr('href',normalize($(el).attr('href'))));
  $('meta[property="og:url"]').each((_,el)=>$(el).attr('content',normalize($(el).attr('content'))));
  $('script[type="application/ld+json"]').each((_,el)=>{const raw=$(el).text();try{$(el).text(JSON.stringify(walk(JSON.parse(raw))).replaceAll('<','\\u003c'));}catch{throw Error(`Invalid JSON-LD in ${file}`);}});
  fs.writeFileSync(path,$.html());
 }
 const redirects=[...aliases].map(([from,to])=>`${from} ${to} 301`);
 fs.writeFileSync(`${root}/_redirects`,redirects.join('\n')+'\n');
 console.log(`Normalized internal URLs in ${files.length} pages; wrote ${redirects.length} direct alias redirects.`);
}
