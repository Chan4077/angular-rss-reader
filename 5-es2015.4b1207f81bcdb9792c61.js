(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{dGa1:function(e,n,t){"use strict";t.r(n);var s=t("2kYt"),c=t("S17y"),r=t("DgXe"),o=t("sEIs"),i=t("EM62"),a=t("+EvI"),b=t("AytR");function l(e,n){if(1&e&&(i.Sb(0,"p"),i.Ec(1,"Release date: "),i.Sb(2,"em"),i.Sb(3,"time",8),i.Ec(4),i.fc(5,"date"),i.Rb(),i.Rb(),i.Rb()),2&e){const e=n.ngIf;i.Bb(3),i.lc("dateTime",e),i.Bb(1),i.Fc(i.hc(5,2,e,"short"))}}function f(e,n){if(1&e&&(i.Sb(0,"p"),i.Ec(1,"Released by: "),i.Sb(2,"em"),i.Ec(3),i.Rb(),i.Rb()),2&e){const e=n.ngIf;i.Bb(3),i.Fc(e)}}function g(e,n){if(1&e&&(i.Qb(0),i.Sb(1,"p"),i.Ec(2,"See this "),i.Sb(3,"a",9),i.Ec(4,"link"),i.Rb(),i.Ec(5," for the release notes."),i.Rb(),i.Pb()),2&e){const e=i.ec().ngIf;i.Bb(3),i.lc("href",e,i.xc)}}function u(e,n){if(1&e&&(i.Qb(0),i.Ob(1,"p",10),i.fc(2,"markdown"),i.Pb()),2&e){const e=i.ec(2).ngIf,n=i.ec(2);i.Bb(1),i.lc("innerHTML",i.gc(2,1,n.joinReleaseNotes(e.summary)),i.vc)}}function p(e,n){if(1&e&&(i.Qb(0),i.Sb(1,"p"),i.Ec(2,"See this "),i.Sb(3,"a",9),i.Ec(4,"link"),i.Rb(),i.Ec(5," for more info."),i.Rb(),i.Pb()),2&e){const e=i.ec(2).ngIf;i.Bb(3),i.lc("href",e.summary,i.xc)}}function R(e,n){if(1&e&&(i.Qb(0),i.Cc(1,u,3,3,"ng-container",7),i.Cc(2,p,6,1,"ng-container",7),i.Pb()),2&e){const e=i.ec().ngIf,n=i.ec(2);i.Bb(1),i.lc("ngIf",n.isArray(e.summary)),i.Bb(1),i.lc("ngIf",!n.isArray(e.summary)&&n.isUrl(e.summary))}}function m(e,n){if(1&e&&(i.Qb(0),i.Ob(1,"p",10),i.fc(2,"markdown"),i.Pb()),2&e){const e=i.ec().ngIf,n=i.ec(2);i.Bb(1),i.lc("innerHTML",i.gc(2,1,n.joinReleaseNotes(e)),i.vc)}}function h(e,n){if(1&e&&(i.Qb(0),i.Cc(1,g,6,1,"ng-container",7),i.Cc(2,R,3,2,"ng-container",7),i.Cc(3,m,3,3,"ng-container",7),i.Pb()),2&e){const e=n.ngIf,t=i.ec(2);i.Bb(1),i.lc("ngIf",t.isStr(e)&&t.isUrl(e)),i.Bb(1),i.lc("ngIf",!t.isStr(e)&&t.isObj(e)),i.Bb(1),i.lc("ngIf",!t.isStr(e)&&t.isArray(e))}}function I(e,n){if(1&e&&(i.Qb(0),i.Cc(1,l,6,5,"p",7),i.Cc(2,f,4,1,"p",7),i.Cc(3,h,4,3,"ng-container",7),i.Pb()),2&e){const e=i.ec();i.Bb(1),i.lc("ngIf",e.getReleaseDate(e.releaseNotes.latestVersion)),i.Bb(1),i.lc("ngIf",e.getReleaseAuthor(e.releaseNotes.latestVersion)),i.Bb(1),i.lc("ngIf",e.getReleaseNote(e.releaseNotes.latestVersion))}}function S(e,n){1&e&&(i.Sb(0,"h2",11),i.Ec(1,"All release notes"),i.Rb())}function B(e,n){1&e&&(i.Sb(0,"mat-chip",15),i.Ec(1,"Latest"),i.Rb())}function d(e,n){if(1&e&&(i.Sb(0,"p"),i.Ec(1,"Release date: "),i.Sb(2,"em"),i.Sb(3,"time",8),i.Ec(4),i.fc(5,"date"),i.Rb(),i.Rb(),i.Rb()),2&e){const e=n.ngIf;i.Bb(3),i.lc("dateTime",e),i.Bb(1),i.Fc(i.hc(5,2,e,"short"))}}function y(e,n){if(1&e&&(i.Sb(0,"p"),i.Ec(1,"Released by: "),i.Sb(2,"em"),i.Ec(3),i.Rb(),i.Rb()),2&e){const e=n.ngIf;i.Bb(3),i.Fc(e)}}function E(e,n){if(1&e&&(i.Qb(0),i.Sb(1,"p"),i.Ec(2,"See this "),i.Sb(3,"a",9),i.Ec(4,"link"),i.Rb(),i.Ec(5," for the release notes."),i.Rb(),i.Pb()),2&e){const e=i.ec().ngIf;i.Bb(3),i.lc("href",e,i.xc)}}function N(e,n){if(1&e&&(i.Qb(0),i.Ob(1,"p",10),i.fc(2,"markdown"),i.Pb()),2&e){const e=i.ec(2).ngIf,n=i.ec(3);i.Bb(1),i.lc("innerHTML",i.gc(2,1,n.joinReleaseNotes(e.summary)),i.vc)}}function C(e,n){if(1&e&&(i.Qb(0),i.Sb(1,"p"),i.Ec(2,"See this "),i.Sb(3,"a",9),i.Ec(4,"link"),i.Rb(),i.Ec(5," for more info."),i.Rb(),i.Pb()),2&e){const e=i.ec(2).ngIf;i.Bb(3),i.lc("href",e.summary,i.xc)}}function v(e,n){if(1&e&&(i.Qb(0),i.Cc(1,N,3,3,"ng-container",7),i.Cc(2,C,6,1,"ng-container",7),i.Pb()),2&e){const e=i.ec().ngIf,n=i.ec(3);i.Bb(1),i.lc("ngIf",n.isArray(e.summary)),i.Bb(1),i.lc("ngIf",!n.isArray(e.summary)&&n.isUrl(e.summary))}}function w(e,n){if(1&e&&(i.Qb(0),i.Ob(1,"p",10),i.fc(2,"markdown"),i.Pb()),2&e){const e=i.ec().ngIf,n=i.ec(3);i.Bb(1),i.lc("innerHTML",i.gc(2,1,n.joinReleaseNotes(e)),i.vc)}}function A(e,n){if(1&e&&(i.Qb(0),i.Cc(1,E,6,1,"ng-container",7),i.Cc(2,v,3,2,"ng-container",7),i.Cc(3,w,3,3,"ng-container",7),i.Pb()),2&e){const e=n.ngIf,t=i.ec(3);i.Bb(1),i.lc("ngIf",t.isStr(e)&&t.isUrl(e)),i.Bb(1),i.lc("ngIf",!t.isStr(e)&&t.isObj(e)),i.Bb(1),i.lc("ngIf",!t.isStr(e)&&t.isArray(e))}}function P(e,n){if(1&e&&(i.Qb(0),i.Sb(1,"h3",13),i.Ec(2),i.Cc(3,B,2,0,"mat-chip",14),i.Rb(),i.Cc(4,d,6,5,"p",7),i.Cc(5,y,4,1,"p",7),i.Cc(6,A,4,3,"ng-container",7),i.Pb()),2&e){const e=n.$implicit,t=i.ec(2);i.Bb(1),i.nc("id","version-",e,""),i.Bb(1),i.Gc(" Version ",e," "),i.Bb(1),i.lc("ngIf",e===t.releaseNotes.latestVersion),i.Bb(1),i.lc("ngIf",t.getReleaseDate(e)),i.Bb(1),i.lc("ngIf",t.getReleaseAuthor(e)),i.Bb(1),i.lc("ngIf",t.getReleaseNote(e))}}function Q(e,n){if(1&e&&(i.Qb(0),i.Cc(1,P,7,6,"ng-container",12),i.Pb()),2&e){const e=i.ec();i.Bb(1),i.lc("ngForOf",e.versions.slice().reverse())}}function j(e,n){1&e&&(i.Sb(0,"div",16),i.Sb(1,"h2",17),i.Ec(2,"No release notes available!"),i.Rb(),i.Sb(3,"p"),i.Ec(4,"Are you connected to the internet?"),i.Rb(),i.Rb())}const k=new i.q("Release notes JSON file",{providedIn:"root",factory:()=>a}),O=new i.q("Custom Git repository"),G=[{path:"",component:(()=>{class e{constructor(e,n){this.releaseNotesJson=e,this.customGitRepo=n}get releaseNotes(){return this.releaseNotesJson}get versions(){return Object.keys(this.releaseNotes.releases)}get gitRepo(){return this.createGitRepoUrl(this.customGitRepo?this.customGitRepo:this.releaseNotes.gitRepo?this.releaseNotes.gitRepo:b.a.gitRepoDefaults)}createGitRepoUrl(e){return"object"==typeof e?`${e.host}/${e.username}/${e.repo}`:e}getReleaseNote(e){return this.releaseNotes.releases[e].releaseNotes}getReleaseDate(e){return this.releaseNotes.releases[e].releaseDate}getReleaseAuthor(e){return this.releaseNotes.releases[e].releaseAuthor}getReleaseInfo(e){return this.releaseNotes.releases[e]}joinReleaseNotes(e){return e.join("\n")}isArray(e){return Array.isArray(e)}isUrl(e){return/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(e)}isStr(e){return"string"==typeof e}isObj(e){return"object"==typeof e}}return e.\u0275fac=function(n){return new(n||e)(i.Nb(k),i.Nb(O,8))},e.\u0275cmp=i.Hb({type:e,selectors:[["app-release-notes"]],decls:13,vars:7,consts:[[1,"app-content"],["id","app-header"],["id","current-version"],["id","current-version-release-notes"],[4,"ngIf","ngIfElse"],["id","all-release-notes",4,"ngIf"],["noReleaseNotes",""],[4,"ngIf"],[3,"dateTime"],[3,"href"],[3,"innerHTML"],["id","all-release-notes"],[4,"ngFor","ngForOf"],[3,"id"],["color","primary",4,"ngIf"],["color","primary"],[1,"center"],["id","no-release-notes-available"]],template:function(e,n){if(1&e&&(i.Sb(0,"div",0),i.Sb(1,"h1",1),i.Ec(2,"Release notes"),i.Rb(),i.Sb(3,"h2",2),i.Ec(4),i.Rb(),i.Sb(5,"h3",3),i.Ec(6),i.Rb(),i.Cc(7,I,4,3,"ng-container",4),i.Ob(8,"hr"),i.Cc(9,S,2,0,"h2",5),i.Cc(10,Q,2,1,"ng-container",4),i.Rb(),i.Cc(11,j,5,0,"ng-template",null,6,i.Dc)),2&e){const e=i.sc(12);i.Bb(4),i.Gc("Current version: ",n.releaseNotes.latestVersion,""),i.Bb(2),i.Gc("Release notes for ",n.releaseNotes.latestVersion,""),i.Bb(1),i.lc("ngIf",n.versions)("ngIfElse",e),i.Bb(2),i.lc("ngIf",(null==n.versions?null:n.versions.length)>0),i.Bb(1),i.lc("ngIf",n.versions)("ngIfElse",e)}},directives:[s.m,s.l,c.a],pipes:[s.e,r.b],encapsulation:2}),e})()}];let L=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(n){return new(n||e)},imports:[[o.f.forChild(G)],o.f]}),e})();t.d(n,"ReleaseNotesModule",(function(){return D}));const T=[c.c];let D=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(n){return new(n||e)},imports:[[s.c,r.a.forChild(),T,L]]}),e})()}}]);