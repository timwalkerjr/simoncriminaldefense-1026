import records from '@/content/city-pages.json';
export const serviceAreaHubs = [
  {name:'Ann Arbor',slug:'ann-arbor'}, {name:'Chelsea',slug:'chelsea'},
  {name:'Dexter',slug:'dexter'}, {name:'Milan',slug:'milan'},
  {name:'Saline',slug:'saline'}, {name:'Ypsilanti',slug:'ypsilanti'},
  {name:'Ypsilanti Township',slug:'ypsilanti-township'},
  {name:'Pittsfield Township',slug:'pittsfield-township'},
  {name:'Washtenaw County',slug:'washtenaw-county'},
];
export function hubForPage(name:string) {
  return [...serviceAreaHubs].sort((a,b)=>b.name.length-a.name.length).find(area=>name.toLowerCase().includes(area.name.toLowerCase()))!;
}
export function pagesForHub(slug:string) {
  return records.filter(item=>!item.isDraft&&!item.isArchived&&hubForPage(item.fieldData.name)?.slug===slug);
}
