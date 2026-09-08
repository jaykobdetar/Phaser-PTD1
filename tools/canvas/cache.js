// Shared by all exported renderers. Only immutable source strings/layouts are
// retained; no clip, Canvas, context, registry or rendered bitmap is cached.
class CanvasValueCache {
 constructor(maxEntries,maxBytes){this.maxEntries=maxEntries;this.maxBytes=maxBytes;this.clear();}
 clear(){this.values=new Map();this.bytes=0;this.hits=0;this.misses=0;this.evictions=0;}
 get(key){const entry=this.values.get(key);if(!entry){this.misses++;return undefined;}this.hits++;this.values.delete(key);this.values.set(key,entry);return entry.value;}
 set(key,value,bytes){if(bytes>this.maxBytes)return value;const prior=this.values.get(key);if(prior){this.bytes-=prior.bytes;this.values.delete(key);}while(this.values.size>=this.maxEntries||this.bytes+bytes>this.maxBytes){const oldest=this.values.keys().next().value;this.bytes-=this.values.get(oldest).bytes;this.values.delete(oldest);this.evictions++;}this.values.set(key,{value,bytes});this.bytes+=bytes;return value;}
 stats(){return {entries:this.values.size,estimatedBytes:this.bytes,maxEntries:this.maxEntries,maxBytes:this.maxBytes,hits:this.hits,misses:this.misses,evictions:this.evictions};}
}
const sourcePathCache=new CanvasValueCache(2048,2*1024*1024);
const sourceTextLayoutCache=new CanvasValueCache(512,1024*1024);
function sourcePathParts(path,stroke){
 let parts=sourcePathCache.get(path);
 if(!parts){parts=Object.freeze(path.split(' '));sourcePathCache.set(path,parts,path.length*4+parts.length*16+64);}
 // The JPEXS stroke algorithm transforms coordinates in-place. Fill paths can
 // read the cached strings directly; strokes must always own their tokens.
 return stroke?parts.slice():parts;
}
// Diagnostics and explicit invalidation for tests/tools. Catalog text metrics
// are immutable during play; callers replacing those metrics must clear here.
export function clearCanvasCaches(){sourcePathCache.clear();sourceTextLayoutCache.clear();}
export function canvasCacheStats(){return {paths:sourcePathCache.stats(),text:sourceTextLayoutCache.stats()};}
