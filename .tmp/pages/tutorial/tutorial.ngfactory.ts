/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './tutorial';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/components/menu/menu-controller';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/slides/slides.ngfactory';
import * as import17 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from 'ionic-angular/util/keyboard';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from 'ionic-angular/components/tabs/tabs';
import * as import28 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import29 from '@angular/common/src/directives/ng_if';
import * as import30 from 'ionic-angular/components/navbar/navbar';
import * as import31 from 'ionic-angular/components/toolbar/toolbar';
import * as import32 from '@angular/common/src/directives/ng_for';
import * as import33 from 'ionic-angular/components/icon/icon';
import * as import34 from 'ionic-angular/components/button/button';
import * as import35 from 'ionic-angular/components/slides/slides';
import * as import36 from 'ionic-angular/components/content/content';
import * as import37 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import38 from '@angular/core/src/linker/query_list';
import * as import39 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import40 from '@angular/core/src/security';
export class Wrapper_TutorialPage {
  context:import0.TutorialPage;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.TutorialPage(p0,p1);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_TutorialPage_Host:import2.RenderComponentType = (null as any);
class _View_TutorialPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _TutorialPage_0_4:Wrapper_TutorialPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TutorialPage_Host0,renderType_TutorialPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-tutorial',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_TutorialPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._TutorialPage_0_4 = new Wrapper_TutorialPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.MenuController));
    this._appEl_0.initComponent(this._TutorialPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._TutorialPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.TutorialPage) && (0 === requestNodeIndex))) { return this._TutorialPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._TutorialPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_TutorialPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_TutorialPage_Host === (null as any))) { (renderType_TutorialPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_TutorialPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const TutorialPageNgFactory:import11.ComponentFactory<import0.TutorialPage> = new import11.ComponentFactory<import0.TutorialPage>('page-tutorial',viewFactory_TutorialPage_Host0,import0.TutorialPage);
const styles_TutorialPage:any[] = ([] as any[]);
var renderType_TutorialPage:import2.RenderComponentType = (null as any);
class _View_TutorialPage0 extends import1.AppView<import0.TutorialPage> {
  _el_0:any;
  _Header_0_3:import12.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import13.Wrapper_Navbar;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import14.Wrapper_NgIf;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _el_8:any;
  /*private*/ _appEl_8:import3.AppElement;
  _Content_8_4:import15.Wrapper_Content;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import3.AppElement;
  _Slides_10_4:import16.Wrapper_Slides;
  _text_11:any;
  _anchor_12:any;
  /*private*/ _appEl_12:import3.AppElement;
  _TemplateRef_12_5:any;
  _NgFor_12_6:import17.Wrapper_NgFor;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import3.AppElement;
  _Slide_14_4:import16.Wrapper_Slide;
  _text_15:any;
  _el_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _el_22:any;
  /*private*/ _appEl_22:import3.AppElement;
  _Button_22_4:import18.Wrapper_Button;
  _text_23:any;
  _el_24:any;
  _Icon_24_3:import19.Wrapper_Icon;
  _text_25:any;
  _text_26:any;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_3:any;
  _map_0:any;
  /*private*/ _expr_11:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TutorialPage0,renderType_TutorialPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this.renderer.setElementAttribute(this._el_0,'no-shadow','');
    this._Header_0_3 = new import12.Wrapper_Header(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import22.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import13.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import23.App),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_4 = new import3.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import24.TemplateRef_(this._appEl_4,viewFactory_TutorialPage1);
    this._NgIf_4_6 = new import14.Wrapper_NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._appEl_4]),
      ([] as any[]).concat([
        this._text_3,
        this._text_5
      ]
      )
    ]
    ,(null as any));
    this._text_6 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_8 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_8,'no-bounce','');
    this._appEl_8 = new import3.AppElement(8,(null as any),this,this._el_8);
    var compView_8:any = import15.viewFactory_Content0(this.viewUtils,this.injector(8),this._appEl_8);
    this._Content_8_4 = new import15.Wrapper_Content(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_8),this.renderer,this.parentInjector.get(import23.App),this.parentInjector.get(import25.Keyboard),this.parentInjector.get(import26.NgZone),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import27.Tabs,(null as any)));
    this._appEl_8.initComponent(this._Content_8_4.context,([] as any[]),compView_8);
    this._text_9 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_10 = this.renderer.createElement((null as any),'ion-slides',(null as any));
    this._appEl_10 = new import3.AppElement(10,8,this,this._el_10);
    var compView_10:any = import16.viewFactory_Slides0(this.viewUtils,this.injector(10),this._appEl_10);
    this._Slides_10_4 = new import16.Wrapper_Slides(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_10),this.renderer);
    this._appEl_10.initComponent(this._Slides_10_4.context,([] as any[]),compView_10);
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_12 = new import3.AppElement(12,10,this,this._anchor_12);
    this._TemplateRef_12_5 = new import24.TemplateRef_(this._appEl_12,viewFactory_TutorialPage2);
    this._NgFor_12_6 = new import17.Wrapper_NgFor(this._appEl_12.vcRef,this._TemplateRef_12_5,this.parentInjector.get(import28.IterableDiffers),this.ref);
    this._text_13 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_14 = this.renderer.createElement((null as any),'ion-slide',(null as any));
    this._appEl_14 = new import3.AppElement(14,10,this,this._el_14);
    var compView_14:any = import16.viewFactory_Slide0(this.viewUtils,this.injector(14),this._appEl_14);
    this._Slide_14_4 = new import16.Wrapper_Slide(new import21.ElementRef(this._el_14),this._Slides_10_4.context);
    this._appEl_14.initComponent(this._Slide_14_4.context,([] as any[]),compView_14);
    this._text_15 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_16 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','slide-image');
    this.renderer.setElementAttribute(this._el_16,'src','assets/img/appicon.png');
    this._text_17 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_18 = this.renderer.createElement((null as any),'h3',(null as any));
    this.renderer.setElementAttribute(this._el_18,'class','slide-title');
    this._text_19 = this.renderer.createText(this._el_18,'Este Aplicatico foi Desenvolvido com IONIC 2',(null as any));
    this._el_20 = this.renderer.createElement((null as any),'br',(null as any));
    this._text_21 = this.renderer.createText((null as any),'\n	  \n      ',(null as any));
    this._el_22 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_22,'clear','');
    this.renderer.setElementAttribute(this._el_22,'icon-right','');
    this.renderer.setElementAttribute(this._el_22,'ion-button','');
    this.renderer.setElementAttribute(this._el_22,'large','');
    this._appEl_22 = new import3.AppElement(22,14,this,this._el_22);
    var compView_22:any = import18.viewFactory_Button0(this.viewUtils,this.injector(22),this._appEl_22);
    this._Button_22_4 = new import18.Wrapper_Button((null as any),'',this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_22),this.renderer);
    this._appEl_22.initComponent(this._Button_22_4.context,([] as any[]),compView_22);
    this._text_23 = this.renderer.createText((null as any),'\n        Continue\n        ',(null as any));
    this._el_24 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_24,'name','arrow-forward');
    this.renderer.setElementAttribute(this._el_24,'role','img');
    this._Icon_24_3 = new import19.Wrapper_Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_24),this.renderer);
    this._text_25 = this.renderer.createText((null as any),'\n      ',(null as any));
      compView_22.create(this._Button_22_4.context,[([] as any[]).concat([
        this._text_23,
        this._el_24,
        this._text_25
      ]
    )],(null as any));
    this._text_26 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_14.create(this._Slide_14_4.context,[([] as any[]).concat([
        this._text_15,
        this._el_16,
        this._text_17,
        this._el_18,
        this._el_20,
        this._text_21,
        this._el_22,
        this._text_26
      ]
    )],(null as any));
    this._text_27 = this.renderer.createText((null as any),'\n  ',(null as any));
      compView_10.create(this._Slides_10_4.context,[([] as any[]).concat([
        this._text_11,
        this._appEl_12,
        this._text_13,
        this._el_14,
        this._text_27
      ]
    )],(null as any));
    this._text_28 = this.renderer.createText((null as any),'\n',(null as any));
    compView_8.create(this._Content_8_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_9,
        this._el_10,
        this._text_28
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_10,'ionWillChange',this.eventHandler(this._handle_ionWillChange_10_0.bind(this)));
    this._map_0 = import4.pureProxy1((p0:any):{[key: string]:any} => {
      return {pager: p0};
    });
    const subscription_0:any = this._Slides_10_4.context.ionWillChange.subscribe(this.eventHandler(this._handle_ionWillChange_10_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_22,'click',this.eventHandler(this._handle_click_22_0.bind(this)));
    this._expr_11 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._anchor_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._text_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import29.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    if (((token === import30.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._Navbar_2_4.context; }
    if (((token === import31.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Header_0_3.context; }
    if (((token === import24.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import32.NgFor) && (12 === requestNodeIndex))) { return this._NgFor_12_6.context; }
    if (((token === import33.Icon) && (24 === requestNodeIndex))) { return this._Icon_24_3.context; }
    if (((token === import34.Button) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._Button_22_4.context; }
    if (((token === import35.Slide) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._Slide_14_4.context; }
    if (((token === import35.Slides) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._Slides_10_4.context; }
    if (((token === import36.Content) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._Content_8_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    const currVal_2:any = this.context.showSkip;
    this._NgIf_4_6.check_ngIf(currVal_2,throwOnChange,false);
    this._NgIf_4_6.detectChangesInternal(this,this._anchor_4,throwOnChange);
    if (this._Content_8_4.detectChangesInternal(this,this._el_8,throwOnChange)) { this._appEl_8.componentView.markAsCheckOnce(); }
    const currVal_5:any = this._map_0(true);
    this._Slides_10_4.check_options(currVal_5,throwOnChange,false);
    if (this._Slides_10_4.detectChangesInternal(this,this._el_10,throwOnChange)) { this._appEl_10.componentView.markAsCheckOnce(); }
    const currVal_6:any = this.context.slides;
    this._NgFor_12_6.check_ngForOf(currVal_6,throwOnChange,false);
    this._NgFor_12_6.detectChangesInternal(this,this._anchor_12,throwOnChange);
    if (this._Slide_14_4.detectChangesInternal(this,this._el_14,throwOnChange)) { this._appEl_14.componentView.markAsCheckOnce(); }
    const currVal_8:any = '';
    this._Button_22_4.check_large(currVal_8,throwOnChange,false);
    const currVal_9:any = '';
    this._Button_22_4.check_clear(currVal_9,throwOnChange,false);
    if (this._Button_22_4.detectChangesInternal(this,this._el_22,throwOnChange)) { this._appEl_22.componentView.markAsCheckOnce(); }
    const currVal_10:any = 'arrow-forward';
    this._Icon_24_3.check_name(currVal_10,throwOnChange,false);
    this._Icon_24_3.detectChangesInternal(this,this._el_24,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Button_22_4.context.ngAfterContentInit(); } }
    const currVal_0:any = this._Navbar_2_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_2_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_3:any = this._Content_8_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_8,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_11:any = this._Icon_24_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementClass(this._el_24,'hide',currVal_11);
      this._expr_11 = currVal_11;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_24_3.context.ngOnDestroy();
    this._Slide_14_4.context.ngOnDestroy();
    this._Content_8_4.context.ngOnDestroy();
  }
  private _handle_ionWillChange_10_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.onSlideChangeStart($event)) !== false);
    return (true && pd_0);
  }
  private _handle_click_22_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.startApp()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_TutorialPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.TutorialPage> {
  if ((renderType_TutorialPage === (null as any))) { (renderType_TutorialPage = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_TutorialPage,{})); }
  return new _View_TutorialPage0(viewUtils,parentInjector,declarationEl);
}
class _View_TutorialPage1 extends import1.AppView<any> {
  _el_0:any;
  _ToolbarItem_0_3:import37.Wrapper_ToolbarItem;
  _query_Button_0_0:import38.QueryList<any>;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Button_2_4:import18.Wrapper_Button;
  _text_3:any;
  _text_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TutorialPage1,renderType_TutorialPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_0,'end','');
    this._ToolbarItem_0_3 = new import37.Wrapper_ToolbarItem(this.parent.parentInjector.get(import20.Config),new import21.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import31.Toolbar,(null as any)),(<_View_TutorialPage0>this.parent)._Navbar_2_4.context);
    this._query_Button_0_0 = new import38.QueryList<any>();
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'color','primary');
    this.renderer.setElementAttribute(this._el_2,'ion-button','');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import18.viewFactory_Button0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Button_2_4 = new import18.Wrapper_Button((null as any),'',this.parent.parentInjector.get(import20.Config),new import21.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Button_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'Pular',(null as any));
    compView_2.create(this._Button_2_4.context,[([] as any[]).concat([this._text_3])],(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import34.Button) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) { return this._Button_2_4.context; }
    if (((token === import39.ToolbarItem) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 4)))) { return this._ToolbarItem_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ToolbarItem_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_1:any = 'primary';
    this._Button_2_4.check_color(currVal_1,throwOnChange,false);
    if (this._Button_2_4.detectChangesInternal(this,this._el_2,throwOnChange)) { this._appEl_2.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_0.dirty) {
        this._query_Button_0_0.reset([this._Button_2_4.context]);
        this._ToolbarItem_0_3.context._buttons = this._query_Button_0_0;
        this._query_Button_0_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_2_4.context.ngAfterContentInit(); }
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.startApp()) !== false);
    return (true && pd_0);
  }
}
function viewFactory_TutorialPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TutorialPage1(viewUtils,parentInjector,declarationEl);
}
class _View_TutorialPage2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Slide_0_4:import16.Wrapper_Slide;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_TutorialPage2,renderType_TutorialPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-slide',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import16.viewFactory_Slide0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Slide_0_4 = new import16.Wrapper_Slide(new import21.ElementRef(this._el_0),(<_View_TutorialPage0>this.parent)._Slides_10_4.context);
    this._appEl_0.initComponent(this._Slide_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'img',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','slide-image');
    this._text_3 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'h2',(null as any));
    this.renderer.setElementAttribute(this._el_4,'class','slide-title');
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_0.create(this._Slide_0_4.context,[([] as any[]).concat([
        this._text_1,
        this._el_2,
        this._text_3,
        this._el_4,
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import35.Slide) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Slide_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._Slide_0_4.detectChangesInternal(this,this._el_0,throwOnChange)) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = this.context.$implicit.image;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_2,'src',this.viewUtils.sanitizer.sanitize(import40.SecurityContext.URL,currVal_0));
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.$implicit.title;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_4,'innerHTML',this.viewUtils.sanitizer.sanitize(import40.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this.context.$implicit.description;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementProperty(this._el_6,'innerHTML',this.viewUtils.sanitizer.sanitize(import40.SecurityContext.HTML,currVal_2));
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Slide_0_4.context.ngOnDestroy();
  }
}
function viewFactory_TutorialPage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  return new _View_TutorialPage2(viewUtils,parentInjector,declarationEl);
}