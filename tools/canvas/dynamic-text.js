// SWF color transforms store multipliers as 8.8 fixed point (256 = one).
// JPEXS Canvas helpers instead use 255 = one; normalize only authored calls.
function sourceCxform(r,g,b,a,rm,gm,bm,am){return new cxform(r,g,b,a,rm*255/256,gm*255/256,bm*255/256,am*255/256);}
function dynamicText(ctx,matrix,clip,ctrans,id){
 const field=SOURCE_TEXT.fields[id],fontId=field?.renderFontId??field?.fontId,font=SOURCE_TEXT.fonts[fontId],glyph=registry['font'+fontId];if(!field||!font||!glyph)return false;
 const contents=String(clip.text??'');if(contents===field.initialText.replace(/\r\n?/g,'\n').replace(/\n$/,'')&&clip.textColor==null&&!clip.textFormat)return false;
 // Flash setTextFormat sizes are in pixels; the recovered field metrics and
 // font outlines use twips. Resolve HTML's effective font from its text records,
 // rather than the edit tag's potentially sparse default font subset.
 const size=Number(clip.textFormat?.size),height=Number.isFinite(size)&&size>0?size*20:field.fontHeight;
 const scale=height/(1024*font.divider),r=field.bounds;
 // Color/transforms stay live. Only the source font's exact wrapping and glyph
 // positions are reused, with the original arithmetic and iteration order.
 const key=JSON.stringify([id,height,contents]);let layout=sourceTextLayoutCache.get(key);
 if(!layout){
  const left=r[0]*20+40+field.leftMargin,available=(r[2]-r[0])*20-80-field.leftMargin-field.rightMargin;
  const advance=ch=>(font.advances[ch]??font.advances['?']??0)*scale;
  const lines=[];for(const paragraph of contents.split(/\r\n?|\n/)){if(!field.wordWrap){lines.push(paragraph);continue;}let line='';for(const word of paragraph.split(/(\s+)/)){const next=line+word;if(line&&[...next].reduce((a,c)=>a+advance(c),0)>available){lines.push(line.trimEnd());line=word.trimStart();}else line=next;}lines.push(line);}
  layout=[];let y=r[1]*20+40+font.ascent*scale;
  for(const line of lines){const width=[...line].reduce((a,c)=>a+advance(c),0);let x=left+(field.align===2?(available-width)/2:field.align===1?available-width:0);for(const ch of line){layout.push(Object.freeze({ch,x,y}));x+=advance(ch);}y+=height+field.leading;}
  Object.freeze(layout);sourceTextLayoutCache.set(key,layout,key.length*2+layout.length*64+64);
 }
 ctx.save();ctx.transform(...matrix);ctx.beginPath();ctx.rect(r[0]*20,r[1]*20,(r[2]-r[0])*20,(r[3]-r[1])*20);ctx.clip();
 const rgb=clip.textColor??clip.textFormat?.color,color=tocolor(ctrans.apply(rgb==null?field.color.slice():[(rgb>>>16)&255,(rgb>>>8)&255,rgb&255,field.color[3]]));
 for(const {ch,x,y} of layout){ctx.save();ctx.transform(scale,0,0,scale,x,y);glyph(ctx,ch,color);ctx.restore();}
 ctx.restore();return true;
}
