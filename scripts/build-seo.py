#!/usr/bin/env python3
"""Build crawlable English and Turkish pages. Requires Python lxml and Node.js."""
from pathlib import Path
from copy import deepcopy
import json, re, subprocess
from lxml import html, etree
ROOT=Path(__file__).resolve().parents[1]
DOMAIN='https://getconzy.com'
source=(ROOT/'index.html').read_text()
js=(ROOT/'js/i18n.js').read_text().split('/* ─── Core')[0]
translations=json.loads(subprocess.check_output(['node','-e','const vm=require("node:vm"); const ctx={};vm.runInNewContext('+json.dumps(js)+'+";globalThis.result=LANGS;",ctx);process.stdout.write(JSON.stringify(ctx.result));'],text=True))
def inner(element,value):
 for child in list(element):element.remove(child)
 element.text=None
 for fragment in html.fragments_fromstring(value):
  if isinstance(fragment,str):
   if len(element):element[-1].tail=(element[-1].tail or '')+fragment
   else:element.text=(element.text or '')+fragment
  else:element.append(fragment)
def meta(head,key,value,prop=False):
 field='property' if prop else 'name'
 for old in head.xpath('./meta[@'+field+'="'+key+'"]'):head.remove(old)
 etree.SubElement(head,'meta',attrib={field:key,'content':value})
def link(head,rel,href,**attrs):etree.SubElement(head,'link',attrib={'rel':rel,'href':href,**attrs})
for lang in ['en','tr']:
 tree=html.document_fromstring(source)
 tree.set('lang',lang);tree.set('data-initial-lang',lang)
 head=tree.find('head');t=translations[lang];url=DOMAIN+('/tr/' if lang=='tr' else '/')
 for element in tree.xpath('//*[@data-i18n]'):
  value=t.get(element.get('data-i18n'))
  if isinstance(value,str):inner(element,value)
 for attribute,target in [('data-i18n-ph','placeholder'),('data-i18n-alt','alt'),('data-i18n-aria','aria-label')]:
  for element in tree.xpath('//*[@'+attribute+']'):
   value=t.get(element.get(attribute))
   if isinstance(value,str):element.set(target,value)
 # Translate form options before JavaScript runs too.
 for select in tree.xpath('//select[@name="sector"]'):
  options=select.findall('option')
  if options:options[0].text=t.get('form-sector-ph',options[0].text)
  for option,label in zip(options[1:],t.get('form-sector-opts',[])):option.text=label
 # Language links work without JavaScript and expose both URLs to crawlers.
 for element in tree.xpath('//*[@data-lang]'):
  choice=element.get('data-lang');element.tag='a';element.attrib.pop('type',None)
  element.set('href','/tr/' if choice=='tr' else '/');element.set('hreflang',choice);element.set('lang',choice)
  classes=[c for c in element.get('class','').split() if c!='active']
  if choice==lang:classes.append('active')
  element.set('class',' '.join(classes))
 for element in tree.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," js-lang-current ")]'):element.text=lang.upper()
 for element in tree.xpath('//*[@data-dashboard-image]'):
  asset='/assets/dashboard-'+element.get('data-dashboard-image')+'-'+lang+'.svg';element.set('src',asset);element.getparent().set('href',asset)
 # Root-relative asset URLs work at both / and /tr/.
 for element in tree.iter():
  for attribute in ['href','src','poster']:
   value=element.get(attribute)
   if value and not re.match(r'^(?:[a-zA-Z][a-zA-Z0-9+.-]*:|/|#)',value):element.set(attribute,'/'+value)
 title=head.find('title');title.text=t['page-title']
 meta(head,'description',t['meta-desc'])
 meta(head,'robots','index, follow, max-image-preview:large')
 meta(head,'application-name','Conzy')
 for element in head.xpath('./link[@rel="canonical" or @rel="alternate"]'):head.remove(element)
 link(head,'canonical',url)
 for code,path in [('en','/'),('tr','/tr/'),('x-default','/')]:link(head,'alternate',DOMAIN+path,hreflang=code)
 for key,value in {'og:type':'website','og:site_name':'Conzy','og:title':t['page-title'],'og:description':t['meta-desc'],'og:url':url,'og:locale':'tr_TR' if lang=='tr' else 'en_US','og:image':DOMAIN+'/assets/conzy-social.png','og:image:width':'1200','og:image:height':'630','og:image:alt':'Conzy WhatsApp assistant for business' if lang=='en' else 'Conzy işletmeler için WhatsApp asistanı'}.items():meta(head,key,value,True)
 meta(head,'twitter:card','summary_large_image');meta(head,'twitter:title',t['page-title']);meta(head,'twitter:description',t['meta-desc']);meta(head,'twitter:image',DOMAIN+'/assets/conzy-social.png')
 for element in head.xpath('./script[@id="conzy-structured-data"]'):head.remove(element)
 schema={'@context':'https://schema.org','@graph':[
  {'@type':'Organization','@id':DOMAIN+'/#organization','name':'Conzy','url':DOMAIN+'/','logo':{'@type':'ImageObject','url':DOMAIN+'/assets/conzy-brandmark.svg','width':512,'height':512}},
  {'@type':'WebSite','@id':DOMAIN+'/#website','name':'Conzy','alternateName':'getconzy.com','url':DOMAIN+'/','inLanguage':['en','tr'],'publisher':{'@id':DOMAIN+'/#organization'}},
  {'@type':'WebPage','@id':url+'#webpage','url':url,'name':t['page-title'],'description':t['meta-desc'],'inLanguage':lang,'isPartOf':{'@id':DOMAIN+'/#website'},'about':{'@id':DOMAIN+'/#organization'}}]}
 element=etree.SubElement(head,'script',attrib={'type':'application/ld+json','id':'conzy-structured-data'});element.text=json.dumps(schema,ensure_ascii=False,indent=2)
 # Prevent sample customer information in the visual demo from becoming search snippets.
 for element in tree.xpath('//*[contains(concat(" ",normalize-space(@class)," ")," hero-visual ")]'):element.set('data-nosnippet','')
 for element in head.xpath('./noscript[@id="seo-no-script"]'):head.remove(element)
 no=etree.SubElement(head,'noscript',attrib={'id':'seo-no-script'});style=etree.SubElement(no,'style');style.text='.fu{opacity:1!important;transform:none!important}'
 output=ROOT/('tr/index.html' if lang=='tr' else 'index.html');output.parent.mkdir(exist_ok=True)
 output.write_text(html.tostring(tree,encoding='unicode',method='html',doctype='<!DOCTYPE html>')+'\n')
(ROOT/'robots.txt').write_text('User-agent: *\nAllow: /\n\nSitemap: '+DOMAIN+'/sitemap.xml\n')
NS='http://www.sitemaps.org/schemas/sitemap/0.9';XHTML='http://www.w3.org/1999/xhtml'
root=etree.Element('{'+NS+'}urlset',nsmap={None:NS,'xhtml':XHTML})
for path in ['/','/tr/']:
 node=etree.SubElement(root,'{'+NS+'}url');etree.SubElement(node,'{'+NS+'}loc').text=DOMAIN+path
 for code,p in [('en','/'),('tr','/tr/'),('x-default','/')]:etree.SubElement(node,'{'+XHTML+'}link',rel='alternate',hreflang=code,href=DOMAIN+p)
(ROOT/'sitemap.xml').write_bytes(etree.tostring(root,encoding='UTF-8',xml_declaration=True,pretty_print=True))
(ROOT/'CNAME').write_text('getconzy.com\n')
print('Built English /, Turkish /tr/, sitemap.xml and robots.txt for '+DOMAIN)
