/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './about';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/components/popover/popover';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import15 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import16 from '@angular/core/src/linker/query_list';
import * as import17 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from 'ionic-angular/navigation/nav-controller';
import * as import25 from 'ionic-angular/components/menu/menu-controller';
import * as import26 from 'ionic-angular/components/toolbar/toolbar';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/components/icon/icon';
import * as import31 from 'ionic-angular/components/button/button';
import * as import32 from 'ionic-angular/components/menu/menu-toggle';
import * as import33 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import35 from 'ionic-angular/components/navbar/navbar';
import * as import36 from 'ionic-angular/components/content/content';
export class Wrapper_AboutPage {
  context:import0.AboutPage;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.AboutPage(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_AboutPage_Host:import2.RenderComponentType = (null as any);
class _View_AboutPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _AboutPage_0_4:Wrapper_AboutPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AboutPage_Host0,renderType_AboutPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-about',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_AboutPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._AboutPage_0_4 = new Wrapper_AboutPage(this.parentInjector.get(import8.PopoverController));
    this._appEl_0.initComponent(this._AboutPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._AboutPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.AboutPage) && (0 === requestNodeIndex))) { return this._AboutPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._AboutPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_AboutPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_AboutPage_Host === (null as any))) { (renderType_AboutPage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_AboutPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const AboutPageNgFactory:import10.ComponentFactory<import0.AboutPage> = new import10.ComponentFactory<import0.AboutPage>('page-about',viewFactory_AboutPage_Host0,import0.AboutPage);
const styles_AboutPage:any[] = ([] as any[]);
var renderType_AboutPage:import2.RenderComponentType = (null as any);
class _View_AboutPage0 extends import1.AppView<import0.AboutPage> {
  _el_0:any;
  _Header_0_3:import11.Wrapper_Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Navbar_2_4:import12.Wrapper_Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _Button_4_4:import13.Wrapper_Button;
  _MenuToggle_4_5:import14.Wrapper_MenuToggle;
  _ToolbarItem_4_6:import15.Wrapper_ToolbarItem;
  _query_Button_4_0:import16.QueryList<any>;
  _text_5:any;
  _el_6:any;
  _Icon_6_3:import17.Wrapper_Icon;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import3.AppElement;
  _ToolbarTitle_9_4:import18.Wrapper_ToolbarTitle;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _ToolbarItem_12_3:import15.Wrapper_ToolbarItem;
  _query_Button_12_0:import16.QueryList<any>;
  _text_13:any;
  _el_14:any;
  /*private*/ _appEl_14:import3.AppElement;
  _Button_14_4:import13.Wrapper_Button;
  _text_15:any;
  _el_16:any;
  _Icon_16_3:import17.Wrapper_Icon;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _text_20:any;
  _text_21:any;
  _el_22:any;
  /*private*/ _appEl_22:import3.AppElement;
  _Content_22_4:import19.Wrapper_Content;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _text_28:any;
  _el_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _el_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _text_39:any;
  _el_40:any;
  _text_41:any;
  _text_42:any;
  _el_43:any;
  _text_44:any;
  _text_45:any;
  _el_46:any;
  _text_47:any;
  _text_48:any;
  _el_49:any;
  _text_50:any;
  _text_51:any;
  _el_52:any;
  _el_53:any;
  _text_54:any;
  _text_55:any;
  _text_56:any;
  _el_57:any;
  _el_58:any;
  _text_59:any;
  _text_60:any;
  _text_61:any;
  _el_62:any;
  _text_63:any;
  _text_64:any;
  _el_65:any;
  _el_66:any;
  _text_67:any;
  _text_68:any;
  _el_69:any;
  _el_70:any;
  _text_71:any;
  _text_72:any;
  _text_73:any;
  _el_74:any;
  _text_75:any;
  _text_76:any;
  _el_77:any;
  _text_78:any;
  _text_79:any;
  _el_80:any;
  _text_81:any;
  _text_82:any;
  _el_83:any;
  _text_84:any;
  _text_85:any;
  _el_86:any;
  _text_87:any;
  _text_88:any;
  _el_89:any;
  _text_90:any;
  _text_91:any;
  _text_92:any;
  _text_93:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_AboutPage0,renderType_AboutPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import11.Wrapper_Header(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import22.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import12.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import23.App),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import24.NavController,(null as any)),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4.context,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_4,'ion-button','');
    this.renderer.setElementAttribute(this._el_4,'menuToggle','');
    this._appEl_4 = new import3.AppElement(4,2,this,this._el_4);
    var compView_4:any = import13.viewFactory_Button0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Button_4_4 = new import13.Wrapper_Button('','',this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_4),this.renderer);
    this._MenuToggle_4_5 = new import14.Wrapper_MenuToggle(this.parentInjector.get(import25.MenuController),new import21.ElementRef(this._el_4),this.parentInjector.get(import22.ViewController,(null as any)),this._Navbar_2_4.context);
    this._ToolbarItem_4_6 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import26.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._query_Button_4_0 = new import16.QueryList<any>();
    this._appEl_4.initComponent(this._Button_4_4.context,([] as any[]),compView_4);
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_6,'name','menu');
    this.renderer.setElementAttribute(this._el_6,'role','img');
    this._Icon_6_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_6),this.renderer);
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
      compView_4.create(this._Button_4_4.context,[([] as any[]).concat([
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._text_8 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_9 = new import3.AppElement(9,2,this,this._el_9);
    var compView_9:any = import18.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(9),this._appEl_9);
    this._ToolbarTitle_9_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import26.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._appEl_9.initComponent(this._ToolbarTitle_9_4.context,([] as any[]),compView_9);
    this._text_10 = this.renderer.createText((null as any),'Sobre',(null as any));
    compView_9.create(this._ToolbarTitle_9_4.context,[([] as any[]).concat([this._text_10])],(null as any));
    this._text_11 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_12,'end','');
    this._ToolbarItem_12_3 = new import15.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_12),this.renderer,this.parentInjector.get(import26.Toolbar,(null as any)),this._Navbar_2_4.context);
    this._query_Button_12_0 = new import16.QueryList<any>();
    this._text_13 = this.renderer.createText(this._el_12,'\n      ',(null as any));
    this._el_14 = this.renderer.createElement(this._el_12,'button',(null as any));
    this.renderer.setElementAttribute(this._el_14,'icon-only','');
    this.renderer.setElementAttribute(this._el_14,'ion-button','');
    this._appEl_14 = new import3.AppElement(14,12,this,this._el_14);
    var compView_14:any = import13.viewFactory_Button0(this.viewUtils,this.injector(14),this._appEl_14);
    this._Button_14_4 = new import13.Wrapper_Button((null as any),'',this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_14),this.renderer);
    this._appEl_14.initComponent(this._Button_14_4.context,([] as any[]),compView_14);
    this._text_15 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_16 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_16,'name','more');
    this.renderer.setElementAttribute(this._el_16,'role','img');
    this._Icon_16_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_16),this.renderer);
    this._text_17 = this.renderer.createText((null as any),'\n      ',(null as any));
      compView_14.create(this._Button_14_4.context,[([] as any[]).concat([
        this._text_15,
        this._el_16,
        this._text_17
      ]
    )],(null as any));
    this._text_18 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._text_19 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4.context,[
      ([] as any[]).concat([this._el_4]),
      ([] as any[]),
      ([] as any[]).concat([this._el_12]),
      ([] as any[]).concat([
        this._text_3,
        this._text_8,
        this._el_9,
        this._text_11,
        this._text_19
      ]
      )
    ]
    ,(null as any));
    this._text_20 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_21 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_22 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this._appEl_22 = new import3.AppElement(22,(null as any),this,this._el_22);
    var compView_22:any = import19.viewFactory_Content0(this.viewUtils,this.injector(22),this._appEl_22);
    this._Content_22_4 = new import19.Wrapper_Content(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_22),this.renderer,this.parentInjector.get(import23.App),this.parentInjector.get(import27.Keyboard),this.parentInjector.get(import28.NgZone),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import29.Tabs,(null as any)));
    this._appEl_22.initComponent(this._Content_22_4.context,([] as any[]),compView_22);
    this._text_23 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_24 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_24,'class','about-header');
    this._text_25 = this.renderer.createText(this._el_24,'\n    ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'img',(null as any));
    this.renderer.setElementAttribute(this._el_26,'src','assets/img/sitelogo.png');
    this._text_27 = this.renderer.createText(this._el_24,'\n  ',(null as any));
    this._text_28 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_29 = this.renderer.createElement((null as any),'div',(null as any));
    this.renderer.setElementAttribute(this._el_29,'class','about-info');
    this.renderer.setElementAttribute(this._el_29,'padding','');
    this._text_30 = this.renderer.createText(this._el_29,'\n\n\n    ',(null as any));
    this._el_31 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'\n    O IX SITe (Seminário de Informática e Tecnologia) é um evento anual que acontece na Universidade Estadual do Norte\n	do Paraná no Campus Luiz Meneghel, em BandeirantesPR,\n	de caráter acadêmico, organizado pelo Centro de Ciências\n	Tecnológicas, cujo intuito é proporcionar aos participantes interação com profissionais da área de tecnologia, abordar temas\n	(por meio de palestras e minicursos) em alta em termos de pesquisa e mercado de trabalho. O evento é aberto à\n	comunidade universitária, profissionais das áreas de informática, de educação e ciências sociais. Essa 9ª edição será\n	realizada nos dias 24, 25 e 26 de novembro de 2016.\n    ',(null as any));
    this._text_33 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_34 = this.renderer.createElement(this._el_29,'h4',(null as any));
    this._text_35 = this.renderer.createText(this._el_34,'Publico Alvo:',(null as any));
    this._text_36 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_37 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_38 = this.renderer.createText(this._el_37,'\n	O evento é aberto à comunidade, em especial aos estudantes, profissionais da área de informática, pesquisadores,\n	professores, profissionais da área de educação e ciências sociais de instituições de ensino superior.\n	',(null as any));
    this._text_39 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_40 = this.renderer.createElement(this._el_29,'h4',(null as any));
    this._text_41 = this.renderer.createText(this._el_40,'Objetivo:',(null as any));
    this._text_42 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_43 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_44 = this.renderer.createText(this._el_43,'\n	O objetivo do IX SITe é possibilitar aos participantes contato com profissionais que atuam na área de computação e\n	tecnologia, expondo uma perspectiva do mercado de trabalho sob a óptica dos convidados palestrantes e, ainda,\n	disponibilizar minicursos abordando tópicos que estão na vanguarda da pesquisa e do mercado de trabalho na área de\n	computação, trazendo as mais recentes tecnologias, tendências, metodologias, ferramentas e produtos disponíveis no\n	mercado de informática, que estejam em evidência no país e exterior.\n	',(null as any));
    this._text_45 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_46 = this.renderer.createElement(this._el_29,'h4',(null as any));
    this._text_47 = this.renderer.createText(this._el_46,'Inscrição:',(null as any));
    this._text_48 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_49 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_50 = this.renderer.createText(this._el_49,'\n	As inscrições devem ser realizadas por meio do site e o pagamento da inscrição¹ deverá ser realizado por meio de\n	transferência bancária. Mais informações em breve. O valor da inscrição é de:\n	',(null as any));
    this._text_51 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_52 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._el_53 = this.renderer.createElement(this._el_52,'strong',(null as any));
    this._text_54 = this.renderer.createText(this._el_53,'R$ 30,00',(null as any));
    this._text_55 = this.renderer.createText(this._el_52,' : No período de 24 de outubro a 23 de novembro;',(null as any));
    this._text_56 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_57 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._el_58 = this.renderer.createElement(this._el_57,'strong',(null as any));
    this._text_59 = this.renderer.createText(this._el_58,'R$ 40,00',(null as any));
    this._text_60 = this.renderer.createText(this._el_57,' : Nas datas do evento.',(null as any));
    this._text_61 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_62 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_63 = this.renderer.createText(this._el_62,'\n	As inscrições para os minicursos também deverão ser pagas¹ por meio de depósito bancário. Aos interessados em\n	participarem dos minicursos, sugerimos consultar na página de minicursos, atentando para a descrição do minicurso,\n	as exigências mínimas e a disponibilidade de vagas, bem como os horários de realização dos mesmo. O valor de cada\n	minicurso é de:\n	',(null as any));
    this._text_64 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_65 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._el_66 = this.renderer.createElement(this._el_65,'strong',(null as any));
    this._text_67 = this.renderer.createText(this._el_66,'R$ 20,00',(null as any));
    this._text_68 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_69 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._el_70 = this.renderer.createElement(this._el_69,'strong',(null as any));
    this._text_71 = this.renderer.createText(this._el_70,'¹OBSERVAÇÃO',(null as any));
    this._text_72 = this.renderer.createText(this._el_69,': Os valores pagos não poderão ser reembolsados.',(null as any));
    this._text_73 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_74 = this.renderer.createElement(this._el_29,'h4',(null as any));
    this._text_75 = this.renderer.createText(this._el_74,'Coordenador geral:',(null as any));
    this._text_76 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_77 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_78 = this.renderer.createText(this._el_77,'Profª. Drª. Tamara A. Baldo',(null as any));
    this._text_79 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_80 = this.renderer.createElement(this._el_29,'h4',(null as any));
    this._text_81 = this.renderer.createText(this._el_80,'Comissão organizadora:',(null as any));
    this._text_82 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_83 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_84 = this.renderer.createText(this._el_83,'Prof. Me. José Reinaldo Merlin',(null as any));
    this._text_85 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_86 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_87 = this.renderer.createText(this._el_86,'Prof. Me. Carlos Eduardo Ribeiro',(null as any));
    this._text_88 = this.renderer.createText(this._el_29,'\n	',(null as any));
    this._el_89 = this.renderer.createElement(this._el_29,'p',(null as any));
    this._text_90 = this.renderer.createText(this._el_89,'Prof. Me. Wellington A. Della Mura',(null as any));
    this._text_91 = this.renderer.createText(this._el_29,'\n  ',(null as any));
    this._text_92 = this.renderer.createText((null as any),'\n',(null as any));
    compView_22.create(this._Content_22_4.context,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_23,
        this._el_24,
        this._text_28,
        this._el_29,
        this._text_92
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_93 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_4,'click',this.eventHandler(this._handle_click_4_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_14,'click',this.eventHandler(this._handle_click_14_0.bind(this)));
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19,
      this._text_20,
      this._text_21,
      this._el_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._el_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._el_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._text_39,
      this._el_40,
      this._text_41,
      this._text_42,
      this._el_43,
      this._text_44,
      this._text_45,
      this._el_46,
      this._text_47,
      this._text_48,
      this._el_49,
      this._text_50,
      this._text_51,
      this._el_52,
      this._el_53,
      this._text_54,
      this._text_55,
      this._text_56,
      this._el_57,
      this._el_58,
      this._text_59,
      this._text_60,
      this._text_61,
      this._el_62,
      this._text_63,
      this._text_64,
      this._el_65,
      this._el_66,
      this._text_67,
      this._text_68,
      this._el_69,
      this._el_70,
      this._text_71,
      this._text_72,
      this._text_73,
      this._el_74,
      this._text_75,
      this._text_76,
      this._el_77,
      this._text_78,
      this._text_79,
      this._el_80,
      this._text_81,
      this._text_82,
      this._el_83,
      this._text_84,
      this._text_85,
      this._el_86,
      this._text_87,
      this._text_88,
      this._el_89,
      this._text_90,
      this._text_91,
      this._text_92,
      this._text_93
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import30.Icon) && (6 === requestNodeIndex))) { return this._Icon_6_3.context; }
    if (((token === import31.Button) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Button_4_4.context; }
    if (((token === import32.MenuToggle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._MenuToggle_4_5.context; }
    if (((token === import33.ToolbarItem) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._ToolbarItem_4_6.context; }
    if (((token === import34.ToolbarTitle) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarTitle_9_4.context; }
    if (((token === import30.Icon) && (16 === requestNodeIndex))) { return this._Icon_16_3.context; }
    if (((token === import31.Button) && ((14 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._Button_14_4.context; }
    if (((token === import33.ToolbarItem) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 18)))) { return this._ToolbarItem_12_3.context; }
    if (((token === import35.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Navbar_2_4.context; }
    if (((token === import26.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 20)))) { return this._Header_0_3.context; }
    if (((token === import36.Content) && ((22 <= requestNodeIndex) && (requestNodeIndex <= 92)))) { return this._Content_22_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_0_3.detectChangesInternal(this,this._el_0,throwOnChange);
    this._Navbar_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    if (this._Button_4_4.detectChangesInternal(this,this._el_4,throwOnChange)) { this._appEl_4.componentView.markAsCheckOnce(); }
    const currVal_3:any = '';
    this._MenuToggle_4_5.check_menuToggle(currVal_3,throwOnChange,false);
    this._MenuToggle_4_5.detectChangesInternal(this,this._el_4,throwOnChange);
    this._ToolbarItem_4_6.detectChangesInternal(this,this._el_4,throwOnChange);
    const currVal_5:any = 'menu';
    this._Icon_6_3.check_name(currVal_5,throwOnChange,false);
    this._Icon_6_3.detectChangesInternal(this,this._el_6,throwOnChange);
    if (this._ToolbarTitle_9_4.detectChangesInternal(this,this._el_9,throwOnChange)) { this._appEl_9.componentView.markAsCheckOnce(); }
    this._ToolbarItem_12_3.detectChangesInternal(this,this._el_12,throwOnChange);
    if (this._Button_14_4.detectChangesInternal(this,this._el_14,throwOnChange)) { this._appEl_14.componentView.markAsCheckOnce(); }
    const currVal_8:any = 'more';
    this._Icon_16_3.check_name(currVal_8,throwOnChange,false);
    this._Icon_16_3.detectChangesInternal(this,this._el_16,throwOnChange);
    if (this._Content_22_4.detectChangesInternal(this,this._el_22,throwOnChange)) { this._appEl_22.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_4_0.dirty) {
        this._query_Button_4_0.reset([this._Button_4_4.context]);
        this._ToolbarItem_4_6.context._buttons = this._query_Button_4_0;
        this._query_Button_4_0.notifyOnChanges();
      }
      if (this._query_Button_12_0.dirty) {
        this._query_Button_12_0.reset([this._Button_14_4.context]);
        this._ToolbarItem_12_3.context._buttons = this._query_Button_12_0;
        this._query_Button_12_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Button_4_4.context.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_14_4.context.ngAfterContentInit(); }
    }
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
    const currVal_4:any = this._MenuToggle_4_5.context.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_4,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_6_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_6,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_9:any = this._Icon_16_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_16,'hide',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._Content_22_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_22,'statusbar-padding',currVal_10);
      this._expr_10 = currVal_10;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_6_3.context.ngOnDestroy();
    this._Icon_16_3.context.ngOnDestroy();
    this._Content_22_4.context.ngOnDestroy();
  }
  private _handle_click_4_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_4_5.context.toggle()) !== false);
    return (true && pd_0);
  }
  private _handle_click_14_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.presentPopover($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_AboutPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.AboutPage> {
  if ((renderType_AboutPage === (null as any))) { (renderType_AboutPage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_AboutPage,{})); }
  return new _View_AboutPage0(viewUtils,parentInjector,declarationEl);
}