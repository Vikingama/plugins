// https://raw.githubusercontent.com/ddgksf2013/Scripts/master/bilibili_json.js
let t=$response.body;if(t){switch(!0){case/pgc\/season\/app\/related\/recommend\?/.test($request.url):try{let e=JSON.parse(t);e.result?.cards?.length&&(e.result.cards=e.result.cards.filter((t=>2!=t.type))),t=JSON.stringify(e)}catch(t){}break;case/^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\?/.test($request.url):try{let e=JSON.parse(t);delete e.data?.common_equip,t=JSON.stringify(e)}catch(t){}break;case/^https:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\?/.test($request.url):try{let e=JSON.parse(t),a=[];for(let t of e.data.items)if(!t.hasOwnProperty("banner_item")){if(t.hasOwnProperty("ad_info")||-1!==t.card_goto?.indexOf("ad")||!["small_cover_v2","large_cover_v1","large_cover_single_v9"].includes(t.card_type))continue;a.push(t)}e.data.items=a,t=JSON.stringify(e)}catch(t){}break;case/^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index\/story\?/.test($request.url):try{let e=JSON.parse(t),a=[];for(let t of e.data.items)t.hasOwnProperty("ad_info")||-1!==t.card_goto.indexOf("ad")||a.push(t);e.data.items=a,t=JSON.stringify(e)}catch(t){}break;case/^https?:\/\/app\.bilibili\.com\/x\/v\d\/account\/teenagers\/status\?/.test($request.url):try{let e=JSON.parse(t);e.data.teenagers_status=0,t=JSON.stringify(e)}catch(t){}break;case/^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab/.test($request.url):try{let a=new Set([177,178,179,181,102,104,106,486,488,489]),i=JSON.parse(t);if(i.data?.tab){var e=[];e.push({id:39,name:"直播",uri:"bilibili://live/home",tab_id:"直播 tab",pos:1},{id:40,name:"推荐",uri:"bilibili://pegasus/promo",tab_id:"推荐 tab",pos:2,default_selected:1}),-1==JSON.stringify(i.data.tab).indexOf("pgc/home")?e.push({id:774,name:"番剧",uri:"bilibili://following/home_activity_tab/6544",tab_id:"bangumi",pos:3}):e.push({id:545,name:"番剧",uri:"bilibili://pgc/home",tab_id:"bangumi",pos:3}),e.push({id:41,name:"热门",uri:"bilibili://pegasus/hottopic",tab_id:"hottopic",pos:4},{id:151,name:"影视",uri:"bilibili://pgc/cinema-tab",tab_id:"film",pos:5}),i.data.tab=e}if(i.data.top&&(i.data.top=[{id:481,icon:"http://i0.hdslb.com/bfs/archive/d43047538e72c9ed8fd8e4e34415fbe3a4f632cb.png",name:"消息",uri:"bilibili://link/im_home",tab_id:"消息 Top",pos:1}]),i.data.bottom){let t=i.data.bottom.filter((t=>a.has(t.id)));i.data.bottom=t}t=JSON.stringify(i)}catch(t){}break;case/^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine/.test($request.url):try{let e=JSON.parse(t),a=new Set([396,397,398,399,407,410,402,404,425,426,427,428,430,432,433,434,494,495,496,497,500,501,2830]);e.data.sections_v2.forEach(((t,i)=>{let s=t.items.filter((t=>a.has(t.id)));e.data.sections_v2[i].items=s,e.data.sections_v2[i].button={},delete e.data.sections_v2[i].be_up_title,delete e.data.sections_v2[i].tip_icon,delete e.data.sections_v2[i].tip_title,("创作中心"==e.data.sections_v2[i].title||"創作中心"==e.data.sections_v2[i].title)&&(delete e.data.sections_v2[i].title,delete e.data.sections_v2[i].type)})),delete e.data.vip_section_v2,delete e.data.vip_section,e.data.hasOwnProperty("live_tip")&&(e.data.live_tip={}),e.data.hasOwnProperty("answer")&&(e.data.answer={}),e.data.vip.status||(e.data.vip_type=2,e.data.vip.type=2,e.data.vip.status=1,e.data.vip.vip_pay_type=1,e.data.vip.due_date=466982416e4),t=JSON.stringify(e)}catch(t){}break;case/^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom/.test($request.url):try{let e=JSON.parse(t);e.data.activity_banner_info=null,e.data?.shopping_info&&(e.data.shopping_info={is_show:0}),e.data?.new_tab_info?.outer_list&&e.data.new_tab_info.outer_list.length&&(e.data.new_tab_info.outer_list=e.data.new_tab_info.outer_list.filter((t=>33!=t.biz_id))),t=JSON.stringify(e)}catch(t){}break;case/^https?:\/\/app\.bilibili\.com\/x\/resource\/top\/activity/.test($request.url):try{let e=JSON.parse(t);e.data&&(e.data.hash="ddgksf2013",e.data.online.icon=""),t=JSON.stringify(e)}catch(t){}break;case/ecommerce-user\/get_shopping_info\?/.test($request.url):try{let e=JSON.parse(t);e.data&&(e.data={shopping_card_detail:{},bubbles_detail:{},recommend_card_detail:{},selected_goods:{},h5jump_popup:[]}),t=JSON.stringify(e)}catch(t){}break;case/^https?:\/\/app\.bilibili\.com\/x\/v2\/search\/square/.test($request.url):try{let e=JSON.parse(t);e.data={type:"history",title:"搜索历史",search_hotword_revision:2},t=JSON.stringify(e)}catch(t){}break;case/https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\?/.test($request.url):try{let e=JSON.parse(t);e.data.vip.status||(e.data.vip.type=2,e.data.vip.status=1,e.data.vip.vip_pay_type=1,e.data.vip.due_date=466982416e4),t=JSON.stringify(e)}catch(t){}break;case/pgc\/page\/(bangumi|cinema\/tab\?)/.test($request.url):try{let e=JSON.parse(t);e.result.modules.forEach((t=>{t.style.startsWith("banner")&&(t.items=t.items.filter((t=>-1!=t.link.indexOf("play")))),t.style.startsWith("function")&&(t.items=t.items.filter((t=>-1==t.blink.indexOf("bilibili.com"))),[1283,241,1441,1284].includes(t.module_id)&&(t.items=[])),t.style.startsWith("tip")&&(t.items=[])})),t=JSON.stringify(e)}catch(t){}break;case/^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list/.test($request.url):try{let e=JSON.parse(t);if(e.data&&e.data.list)for(let t of e.data.list)t.duration=0,t.begin_time=2240150400,t.end_time=2240150400;t=JSON.stringify(e)}catch(t){}break;case/^https:\/\/api\.live\.bilibili\.com\/xlive\/app-interface\/v2\/index\/feed/.test($request.url):try{let e=JSON.parse(t);e.data&&e.data.card_list&&(e.data.card_list=e.data.card_list.filter((t=>"banner_v1"!=t.card_type))),t=JSON.stringify(e)}catch(t){}break;default:$done({})}$done({body:t})}else $done({});
