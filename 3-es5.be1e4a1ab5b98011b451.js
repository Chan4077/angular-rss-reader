(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{FwYu:function(l){l.exports=JSON.parse('{"$schema":"./release-notes-schema.json","latestVersion":"1.5.0","gitRepo":{"host":"https://github.com","repo":"rss-reader-web","username":"EdricChan03"},"releases":{"1.5.0":{"releaseNotes":{"summary":["- Removed settings that would not do anything","- Use labels instead of placeholders for input fields","- Added release notes that would inform you of the latest features","- Added tooltip to \\"more options\\" button in toolbar","- Slight tweaking of onboarding experience for new users","- And lots of bug-fixes!"],"details":["- Removed settings (_Enable multiple RSS feeds_, _Notifications_)","- Use `<mat-label>`s instead of the `placeholder` attribute for input fields. (This allows users to now see the labels of input fields even when an input is entered)","- Adds release notes (dialog and a dedicated page) for every release."]},"releaseDate":"Sat Aug 24 2019 20:24:00 GMT+0800 (Singapore Standard Time)","releaseAuthor":"EdricChan03"}}}')},lzVA:function(l,n,e){"use strict";e.r(n);var u=e("LoAr"),t=e("a198"),r=function(){return function(){}}(),o=e("C9Ky"),i=e("WV+C"),a=e("LYzL"),s=e("WT9V"),b=e("J1fr"),c=e("981U"),f=e("FwYu"),p=e("AytR"),d=function(){function l(l){this.http=l}return Object.defineProperty(l.prototype,"releaseNotes",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"versions",{get:function(){return Object.keys(this.releaseNotes.releases)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"gitRepo",{get:function(){return this.createGitRepoUrl(this.releaseNotes.gitRepo?this.releaseNotes.gitRepo:p.a.gitRepoDefaults)},enumerable:!0,configurable:!0}),l.prototype.createGitRepoUrl=function(l){return"object"==typeof l?l.host+"/"+l.username+"/"+l.repo:l},l.prototype.getReleaseNote=function(l){return this.releaseNotes.releases[l].releaseNotes},l.prototype.getReleaseDate=function(l){return this.releaseNotes.releases[l].releaseDate},l.prototype.getReleaseAuthor=function(l){return this.releaseNotes.releases[l].releaseAuthor},l.prototype.getReleaseInfo=function(l){return this.releaseNotes.releases[l]},l.prototype.joinReleaseNotes=function(l){return l.join("\n")},l.prototype.isArray=function(l){return Array.isArray(l)},l.prototype.isUrl=function(l){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(l)},l.prototype.isStr=function(l){return"string"==typeof l},l.prototype.ngOnInit=function(){},l}(),g=e("GiBk"),m=u.sb({encapsulation:2,styles:[],data:{}});function h(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,1,"h1",[["id","release-notes"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Release notes"]))],null,null)}function y(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,5,"mat-chip",[["class","mat-chip"],["color","primary"],["role","option"]],[[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Gb(l,1)._handleClick(e)&&t),"keydown"===n&&(t=!1!==u.Gb(l,1)._handleKeydown(e)&&t),"focus"===n&&(t=!1!==u.Gb(l,1).focus()&&t),"blur"===n&&(t=!1!==u.Gb(l,1)._blur()&&t),t},null,null)),u.tb(1,147456,null,3,t.b,[u.k,u.A,i.a,[2,a.k]],{color:[0,"color"]},null),u.Mb(603979776,1,{avatar:0}),u.Mb(603979776,2,{trailingIcon:0}),u.Mb(603979776,3,{removeIcon:0}),(l()(),u.Ob(-1,null,["Latest"]))],function(l,n){l(n,1,0,"primary")},function(l,n){l(n,0,0,u.Gb(n,1).disabled?null:-1,u.Gb(n,1).selected,u.Gb(n,1).avatar,u.Gb(n,1).trailingIcon||u.Gb(n,1).removeIcon,u.Gb(n,1).disabled,u.Gb(n,1).disabled||null,u.Gb(n,1).disabled.toString(),u.Gb(n,1).ariaSelected)})}function I(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Release date: "])),(l()(),u.ub(2,0,null,null,2,"em",[],null,null,null,null,null)),(l()(),u.Ob(3,null,["",""])),u.Kb(4,2)],null,function(l,n){var e=n.component,t=u.Pb(n,3,0,l(n,4,0,u.Gb(n.parent.parent.parent,0),e.getReleaseDate(n.parent.context.$implicit),"long"));l(n,3,0,t)})}function N(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Released by: "])),(l()(),u.ub(2,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),u.Ob(3,null,["",""]))],null,function(l,n){l(n,3,0,n.component.getReleaseAuthor(n.parent.context.$implicit))})}function v(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u.ub(1,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["See this "])),(l()(),u.ub(3,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),u.Ob(-1,null,["link"])),(l()(),u.Ob(-1,null,[" for the release notes."]))],null,function(l,n){l(n,3,0,n.parent.context.ngIf)})}function E(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.ub(1,0,null,null,1,"p",[],[[8,"innerHTML",1]],null,null,null,null)),u.Kb(2,1)],null,function(l,n){var e=n.component,t=u.Pb(n,1,0,l(n,2,0,u.Gb(n.parent.parent.parent.parent.parent,1),e.joinReleaseNotes(n.parent.parent.context.ngIf.summary)));l(n,1,0,t)})}function j(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,5,null,null,null,null,null,null,null)),(l()(),u.ub(1,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["See this "])),(l()(),u.ub(3,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),u.Ob(-1,null,["link"])),(l()(),u.Ob(-1,null,[" for more info."]))],null,function(l,n){l(n,3,0,n.parent.parent.context.ngIf.summary)})}function R(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,E)),u.tb(2,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,j)),u.tb(4,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(0,null,null,0))],function(l,n){var e=n.component;l(n,2,0,e.isArray(n.parent.context.ngIf.summary)),l(n,4,0,!e.isArray(n.parent.context.ngIf.summary)&&e.isUrl(n.parent.context.ngIf.summary))},null)}function O(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,v)),u.tb(2,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,R)),u.tb(4,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(0,null,null,0))],function(l,n){var e=n.component;l(n,2,0,e.isStr(n.context.ngIf)&&e.isUrl(n.context.ngIf)),l(n,4,0,!e.isStr(n.context.ngIf))},null)}function Q(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),u.ub(1,0,null,null,3,"h2",[],[[8,"id",0]],null,null,null,null)),(l()(),u.Ob(2,null,[" Version "," "])),(l()(),u.jb(16777216,null,null,1,null,y)),u.tb(4,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,I)),u.tb(6,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,N)),u.tb(8,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,O)),u.tb(10,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(0,null,null,0))],function(l,n){var e=n.component;l(n,4,0,n.context.$implicit===e.releaseNotes.latestVersion),l(n,6,0,e.getReleaseDate(n.context.$implicit)),l(n,8,0,e.getReleaseAuthor(n.context.$implicit)),l(n,10,0,e.getReleaseNote(n.context.$implicit))},function(l,n){l(n,1,0,u.yb(1,"version-",n.context.$implicit,"")),l(n,2,0,n.context.$implicit)})}function k(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,Q)),u.tb(2,278528,null,0,s.l,[u.Q,u.N,u.t],{ngForOf:[0,"ngForOf"]},null),(l()(),u.jb(0,null,null,0))],function(l,n){l(n,2,0,n.component.versions)},null)}function w(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,4,"div",[["class","center"]],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,1,"h1",[["id","no-release-notes-available"]],null,null,null,null,null)),(l()(),u.Ob(-1,null,["No release notes available!"])),(l()(),u.ub(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Ob(-1,null,["Are you connected to the internet?"]))],null,null)}function G(l){return u.Qb(0,[u.Ib(0,s.e,[u.v]),u.Ib(0,b.b,[u.k,b.c,u.A]),(l()(),u.ub(2,0,null,null,12,"div",[["class","app-content"]],null,null,null,null,null)),(l()(),u.ub(3,0,null,null,1,"h1",[["id","current-version"]],null,null,null,null,null)),(l()(),u.Ob(4,null,["Current version: ",""])),(l()(),u.ub(5,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.ub(6,0,null,null,3,"em",[],null,null,null,null,null)),(l()(),u.ub(7,0,null,null,2,"a",[["routerLink","."]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Gb(l,8).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u.tb(8,671744,null,0,c.o,[c.l,c.a,s.j],{fragment:[0,"fragment"],routerLink:[1,"routerLink"]},null),(l()(),u.Ob(-1,null,["Jump to release notes"])),(l()(),u.ub(10,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),u.jb(16777216,null,null,1,null,h)),u.tb(12,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"]},null),(l()(),u.jb(16777216,null,null,1,null,k)),u.tb(14,16384,null,0,s.m,[u.Q,u.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),u.jb(0,[["noReleaseNotes",2]],null,0,null,w))],function(l,n){var e=n.component;l(n,8,0,u.yb(1,"version-",e.releaseNotes.latestVersion,""),"."),l(n,12,0,(null==e.versions?null:e.versions.length)>0),l(n,14,0,e.versions,u.Gb(n,15))},function(l,n){l(n,4,0,n.component.releaseNotes.latestVersion),l(n,7,0,u.Gb(n,8).target,u.Gb(n,8).href)})}function x(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,1,"app-release-notes",[],null,null,null,G,m)),u.tb(1,114688,null,0,d,[g.c],null,null)],function(l,n){l(n,1,0)},null)}var A=u.qb("app-release-notes",d,x,{},{},[]),S=function(){return function(){}}(),$=e("rh80");e.d(n,"ReleaseNotesModuleNgFactory",function(){return K});var K=u.rb(r,[],function(l){return u.Db([u.Eb(512,u.j,u.cb,[[8,[o.a,A]],[3,u.j],u.y]),u.Eb(4608,s.o,s.n,[u.v,[2,s.F]]),u.Eb(4608,g.h,g.n,[s.d,u.C,g.l]),u.Eb(4608,g.o,g.o,[g.h,g.m]),u.Eb(5120,g.a,function(l){return[l]},[g.o]),u.Eb(4608,g.k,g.k,[]),u.Eb(6144,g.i,null,[g.k]),u.Eb(4608,g.g,g.g,[g.i]),u.Eb(6144,g.b,null,[g.g]),u.Eb(4608,g.f,g.j,[g.b,u.r]),u.Eb(4608,g.c,g.c,[g.f]),u.Eb(4608,a.b,a.b,[]),u.Eb(1073742336,s.c,s.c,[]),u.Eb(1073742336,g.e,g.e,[]),u.Eb(1073742336,g.d,g.d,[]),u.Eb(1073742336,b.a,b.a,[]),u.Eb(1073742336,c.p,c.p,[[2,c.u],[2,c.l]]),u.Eb(1073742336,S,S,[]),u.Eb(1073742336,t.d,t.d,[]),u.Eb(1073742336,r,r,[]),u.Eb(256,g.l,"XSRF-TOKEN",[]),u.Eb(256,g.m,"X-XSRF-TOKEN",[]),u.Eb(1024,c.j,function(){return[[{path:"",component:d}]]},[]),u.Eb(256,t.a,{separatorKeyCodes:[$.f]},[])])})}}]);