import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'av-card',
  templateUrl: './av-card.component.html',
  styleUrls: ['./av-card.component.scss'],
})
export class AvCardComponent implements OnInit {
  @Input() name: string;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() size: 'w-75' | 'w-50' | 'w-25';
  @Input() collapsible: boolean;
  @Input() isCollapse: boolean;
  /**
   * Pokud je true, bude možné kartu sbalit kliknutím na hlavičku karty. Při false se sbalí jen kliknutím na ikonu sbalení.
   */
  @Input() collapseUsingHeader: boolean = true;

  /**
   * Zobrazení badge vedle nadpisu
   */
  @Input() badge: string;

  @Input() shadowClass: string = 'shadow';

  @Input() class: string;

  @Input() displayHeader: boolean = true;

  @ContentChild('body', { static: true }) bodyTemplate: TemplateRef<any>;
  @ContentChild('header', { static: true }) headerTemplate: TemplateRef<any>;
  @ContentChild('headerRight', {static: true}) headerRightTemplate: TemplateRef<any>;
  @ContentChild('preview', {static: true}) previewTemplate: TemplateRef<any>;
  @ContentChild('subtitle', {static: true}) subtitleTemplate: TemplateRef<any>;
  @ContentChild('footer', {static: true}) footerTemplate: TemplateRef<any>;
  constructor() {}

  ngOnInit(): void {}
}
