(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{yPrK:function(e,t,o){"use strict";o.r(t),o.d(t,"SettingsModule",(function(){return y}));var n=o("An66"),s=o("CBf0"),a=o("3kIJ"),c=o("hCLc"),r=o("F6wS"),i=o("UDV5"),b=o("EmXI"),l=o("Tcl6"),m=o("IOEv"),u=o("1VvW"),h=o("kZht"),p=o("jx6E"),g=o("r2F1"),d=o("Avx7"),f=o("Sgnd"),w=o("pTnX");function k(e,t){if(1&e&&(h.Qb(0,"mat-option",13),h.Bc(1),h.Pb()),2&e){const e=t.$implicit;h.jc("value",e),h.zb(1),h.Cc(e)}}const P=[{path:"",component:(()=>{class e{constructor(e,t,o,n){this.dialog=e,this.shared=o,this.settingsStorage=n,this.themes=["indigo-pink","deeppurple-amber","pink-bluegrey","purple-green"],this.settingsForm=t.group({openNewTab:!1,showImages:!1,theme:"indigo-pink",notifyNewReleases:!1}),this.settingsForm.patchValue(n.settings)}reset(){this.dialog.openConfirmDialog({title:"Reset settings?",msg:"Are you sure you want to reset the settings?"}).afterClosed().subscribe(e=>{"ok"===e&&(this.settingsStorage.clearSettings(),this.shared.openSnackBar({msg:"Settings successfully reset"}))})}save(){this.settingsStorage.setSettings(this.settingsForm.value),this.shared.openSnackBar({msg:"Settings saved",action:"Reload"}).onAction().subscribe(()=>{window.location.reload()})}}return e.\u0275fac=function(t){return new(t||e)(h.Lb(p.a),h.Lb(a.c),h.Lb(g.b),h.Lb(d.a))},e.\u0275cmp=h.Fb({type:e,selectors:[["app-settings"]],decls:28,vars:3,consts:[[1,"app-content"],["fxLayout","column"],["fxLayout","column",3,"formGroup"],[1,"mat-subheader"],["formControlName","openNewTab",1,"checkbox"],["formControlName","showImages",1,"checkbox"],["color","accent"],["formControlName","theme"],[3,"value",4,"ngFor","ngForOf"],["formControlName","notifyNewReleases",1,"checkbox"],["align","end"],["mat-button","","color","warn",3,"click"],["mat-button","","color","primary",3,"disabled","click"],[3,"value"]],template:function(e,t){1&e&&(h.Qb(0,"div",0),h.Qb(1,"mat-card"),h.Qb(2,"mat-card-title"),h.Bc(3,"Settings"),h.Pb(),h.Qb(4,"mat-card-content",1),h.Qb(5,"form",2),h.Qb(6,"h3",3),h.Bc(7,"General"),h.Pb(),h.Qb(8,"mat-checkbox",4),h.Bc(9,"Open posts in a new tab"),h.Pb(),h.Qb(10,"mat-checkbox",5),h.Bc(11,"Show images"),h.Pb(),h.Qb(12,"mat-form-field",6),h.Qb(13,"mat-label"),h.Bc(14,"Theme"),h.Pb(),h.Qb(15,"mat-select",7),h.zc(16,k,2,2,"mat-option",8),h.Pb(),h.Qb(17,"mat-hint"),h.Bc(18,"Changes will be made on reload."),h.Pb(),h.Pb(),h.Qb(19,"h3",3),h.Bc(20,"Releases"),h.Pb(),h.Qb(21,"mat-checkbox",9),h.Bc(22,"Notify when new releases are out"),h.Pb(),h.Pb(),h.Pb(),h.Qb(23,"mat-card-actions",10),h.Qb(24,"button",11),h.Yb("click",(function(){return t.reset()})),h.Bc(25,"Reset"),h.Pb(),h.Qb(26,"button",12),h.Yb("click",(function(){return t.save()})),h.Bc(27,"Save"),h.Pb(),h.Pb(),h.Pb(),h.Pb()),2&e&&(h.zb(5),h.jc("formGroup",t.settingsForm),h.zb(11),h.jc("ngForOf",t.themes),h.zb(10),h.jc("disabled",t.settingsForm.invalid))},directives:[r.a,r.h,r.c,f.b,a.r,a.k,a.e,i.a,a.j,a.d,b.d,b.h,m.a,n.l,b.g,r.b,c.b,w.i],encapsulation:2}),e})()}];let Q=(()=>{class e{}return e.\u0275mod=h.Jb({type:e}),e.\u0275inj=h.Ib({factory:function(t){return new(t||e)},imports:[[u.f.forChild(P)],u.f]}),e})();const v=[c.c,r.f,i.b,b.f,l.b,m.b];let y=(()=>{class e{}return e.\u0275mod=h.Jb({type:e}),e.\u0275inj=h.Ib({factory:function(t){return new(t||e)},imports:[[n.c,a.o,s.a,v,Q]]}),e})()}}]);