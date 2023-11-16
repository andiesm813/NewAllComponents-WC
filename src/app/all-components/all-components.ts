import { html, css, LitElement } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';
import { IgcCategoryChartModule } from '@infragistics/igniteui-webcomponents-charts';
import { ModuleManager } from '@infragistics/igniteui-webcomponents-core';
import { defineComponents, IgcAccordionComponent, IgcAvatarComponent, IgcBadgeComponent, IgcButtonComponent, IgcCalendarComponent, IgcCardComponent, IgcCheckboxComponent, IgcChipComponent, IgcComboComponent, IgcDialogComponent, IgcExpansionPanelComponent, IgcIconButtonComponent, IgcIconComponent, IgcInputComponent, IgcListComponent, IgcListItemComponent, IgcRadioComponent, IgcRadioGroupComponent, IgcRatingComponent, IgcRippleComponent, IgcSelectComponent, IgcSelectHeaderComponent, IgcSliderComponent, IgcSnackbarComponent, IgcStepperComponent, IgcSwitchComponent, IgcTabsComponent, IgcTreeComponent } from 'igniteui-webcomponents';
import '@infragistics/igniteui-webcomponents-grids/grids/combined.js';
import { BoxOfficeRevenueType } from '../models/financial/box-office-revenue-type';
import { EmployeesType } from '../models/northwind/employees-type';
import { financialService } from '../services/Financial-service';
import { northwindService } from '../services/Northwind-service';

defineComponents(IgcTabsComponent, IgcIconComponent, IgcAccordionComponent, IgcExpansionPanelComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent, IgcStepperComponent, IgcButtonComponent, IgcRippleComponent, IgcTreeComponent, IgcIconButtonComponent, IgcBadgeComponent, IgcChipComponent, IgcCheckboxComponent, IgcRadioGroupComponent, IgcRadioComponent, IgcSwitchComponent, IgcRatingComponent, IgcSliderComponent, IgcInputComponent, IgcSelectComponent, IgcSelectHeaderComponent, IgcComboComponent, IgcCalendarComponent, IgcCardComponent, IgcSnackbarComponent, IgcDialogComponent);

ModuleManager.register(IgcCategoryChartModule);

ModuleManager.register(IgcCategoryChartModule);

@customElement('app-all-components')
export default class AllComponents extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
    }
    .row-layout {
      display: flex;
    }
    .group {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .tabs {
      height: 143px;
      min-width: 0;
      min-height: 0;
    }
    .accordion {
      overflow-y: auto;
      flex-shrink: 0;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 0.5rem;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 0.625rem;
      position: relative;
      min-width: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 472px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
    }
    .group_6 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_7 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_8 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_9 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_10 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 20px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_11 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      height: max-content;
      min-width: 240px;
    }
    .group_12 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      padding: 24px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .tab-item-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .stepper {
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .step-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0.5rem;
      overflow: auto;
      position: relative;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .step-content_1 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 0.625rem;
      overflow: auto;
      position: relative;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .step-content_2 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 1.5rem;
      overflow: auto;
      position: relative;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .textarea {
      height: max-content;
      min-width: min-content;
    }
    .media-content {
      height: 156px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .text {
      height: max-content;
      min-width: min-content;
    }
    .icon {
      --size: 24px;
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .chip {
      width: max-content;
      height: max-content;
    }
    .icon_1 {
      --size: 18px;
      font-size: 18px;
      width: 18px;
      height: 18px;
    }
    .calendar {
      height: max-content;
    }
    .image {
      height: 100%;
    }
    .list {
      height: max-content;
    }
    .tree {
      min-width: max-content;
      min-height: max-content;
      flex-shrink: 0;
    }
    .grid {
      min-width: 600px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .button {
      height: max-content;
      flex-shrink: 0;
    }
    .button_1 {
      height: max-content;
      flex-grow: 1;
      flex-basis: 0;
    }
    .user-input_2 {
      height: max-content;
      min-width: min-content;
    }
    .user-input {
      width: max-content;
      height: max-content;
    }
    .radio {
      padding: 8px;
    }
    .slider {
      height: max-content;
      min-width: 50px;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .button_2 {
      height: max-content;
    }
    .badge {
      width: max-content;
      height: max-content;
    }
    .snackbar {
      height: max-content;
      min-width: min-content;
    }
    .banner {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
    .category-chart {
      min-width: 400px;
      min-height: 300px;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  constructor() {
    super();
    this.financialBoxOfficeRevenue = financialService.getData('BoxOfficeRevenueType');
    this.northwindEmployees = northwindService.getData('EmployeesType');
  }

  @query('#stepper')
  private stepper?: IgcStepperComponent;

  @state()
  private checked: boolean = true;

  @state()
  private value: number = 4;

  @state()
  private value1: number = 0;

  @state()
  private value2: string = '2';

  @state()
  private financialBoxOfficeRevenue: BoxOfficeRevenueType[] = [];

  @state()
  private northwindEmployees: EmployeesType[] = [];

  @query('#snackbar')
  private snackbar?: IgcSnackbarComponent;

  @query('#dialog')
  private dialog?: IgcDialogComponent;

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <link rel='stylesheet' href='node_modules/@infragistics/igniteui-webcomponents-grids/grids/themes/light/material.css'>
      <div class="row-layout group">
        <div class="column-layout group_1">
          <igc-tabs class="tabs">
            <igc-tab ?selected="${true}">
              <span class="material-icons">
                library_music
              </span>
              <span>Albums</span>
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content">
              <p class="typography__body-1 text">
                Albums
              </p>
            </igc-tab-panel>
            <igc-tab>
              <span class="material-icons">
                favorite
              </span>
              <span>Favorite</span>
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
            <igc-tab ?disabled="${true}">
              <span class="material-icons">
                info
              </span>
              <span>Details</span>
            </igc-tab>
            <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          </igc-tabs>
          <igc-accordion ?single-expand="${false}" class="accordion">
            <igc-expansion-panel>
              <p class="typography__body-1 text">
                This is the content text of the expanded accordion item.
              </p>
              <span slot="title">Accordion Item 1</span>
              <span slot="subtitle">Action, Adventure, Thriller</span>
            </igc-expansion-panel>
            <igc-expansion-panel>
              <p class="typography__body-1 text">
                This is the content text of the expanded accordion item.
              </p>
              <span slot="title">Accordion Item 2</span>
              <span slot="subtitle">Action, Adventure, Thriller</span>
            </igc-expansion-panel>
            <igc-expansion-panel>
              <p class="typography__body-1 text">
                This is the content text of the expanded accordion item.
              </p>
              <span slot="title">Accordion Item 3</span>
              <span slot="subtitle">Action, Adventure, Thriller</span>
            </igc-expansion-panel>
          </igc-accordion>
          <igc-list class="list">
            <igc-list-item>
              <div slot="title">Single Line Item</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Single Line Item</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <div slot="title">Single Line Item</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
          </igc-list>
          <igc-list class="list">
            <igc-list-item>
              <igc-avatar src="/src/assets/53c4f9a7b7f5f730460a0235b717b99679251327.png" slot="start" shape="circle"></igc-avatar>
              <div slot="title">Primary Text </div>
              <div slot="subtitle">Secondary Text</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="/src/assets/53c4f9a7b7f5f730460a0235b717b99679251327.png" slot="start" shape="circle"></igc-avatar>
              <div slot="title">Primary Text </div>
              <div slot="subtitle">Secondary Text</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
            <igc-list-item>
              <igc-avatar src="/src/assets/53c4f9a7b7f5f730460a0235b717b99679251327.png" slot="start" shape="circle"></igc-avatar>
              <div slot="title">Primary Text </div>
              <div slot="subtitle">Secondary Text</div>
              <span slot="end" class="material-icons icon">
                keyboard_arrow_right
              </span>
            </igc-list-item>
          </igc-list>
        </div>
        <div class="column-layout group_1">
          <igc-stepper orientation="vertical" title-position="end" id="stepper" class="stepper">
            <igc-step ?optional="${true}">
              <div class="column-layout step-content">
                <div class="row-layout group_2">
                  <igc-button size="large" @click="${() => this.stepper?.next()}" class="button">
                    Next
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button size="large" @click="${() => this.stepper?.next()}" class="button">
                    Next
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </div>
              <p .slot="title">Parcel Dispatched</p>
              <p .slot="subtitle">13 Aug 2021 - 01:10 PM</p>
            </igc-step>
            <igc-step ?optional="${true}">
              <div class="column-layout step-content_1">
                <p class="typography__body-1 text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta nulla asperiores, officia ullam recusandae voluptatem omnis perferendis vitae non magni magnam praesentium placeat nemo quas repudiandae. Nisi, quo ex!
                </p>
                <div class="row-layout group_3">
                  <igc-button size="large" @click="${() => this.stepper?.prev()}" class="button">
                    Prev
                    <igc-ripple></igc-ripple>
                  </igc-button>
                  <igc-button size="large" @click="${() => this.stepper?.next()}" class="button">
                    Next
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </div>
              <p .slot="title">Arrived at sorting center</p>
              <p .slot="subtitle">15 Aug 2021 - 02:51 AM</p>
            </igc-step>
            <igc-step ?optional="${true}">
              <div class="column-layout step-content_2">
                <p class="typography__body-1 text">
                  This is the content text of the active step.
                </p>
              </div>
              <p .slot="title">Delivering</p>
              <p .slot="subtitle">21 Aug 2021 - 07:55 AM</p>
            </igc-step>
          </igc-stepper>
          <igc-tree selection="multiple" class="tree">
            <igc-tree-item label="Design">
              <igc-tree-item label="Figma">
                <igc-tree-item label="Figma"></igc-tree-item>
              </igc-tree-item>
              <igc-tree-item label="Adobe XD"></igc-tree-item>
              <igc-tree-item label="Sketch"></igc-tree-item>
            </igc-tree-item>
          </igc-tree>
        </div>
        <div class="column-layout group_4">
          <div class="row-layout group_5">
            <igc-button size="large" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Button</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="outlined" size="large" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Button</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="flat" size="large" class="button_1">
              <span class="material-icons">
                add
              </span>
              <span>Button</span>
              <igc-ripple></igc-ripple>
            </igc-button>
          </div>
          <span class="user-input_2">ButtonGroup not yet available in WebComponents</span>
          <div class="row-layout group_6">
            <igc-icon-button variant="flat">
              <span class="material-icons">
                email
              </span>
              <igc-ripple></igc-ripple>
            </igc-icon-button>
            <igc-button variant="fab" size="large" class="user-input">
              <span class="material-icons">
                add
              </span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <igc-button variant="fab" size="large" class="user-input">
              <span class="material-icons">
                add
              </span>
              <span>fab</span>
              <igc-ripple></igc-ripple>
            </igc-button>
            <span class="material-icons icon">
              mail
            </span>
            <igc-badge class="badge"></igc-badge>
            <igc-badge class="badge">
              1
            </igc-badge>
            <igc-badge class="badge">
              10
            </igc-badge>
            <igc-badge class="badge">
              1000
            </igc-badge>
            <igc-badge class="badge">
              <span class="material-icons">
                mail
              </span>
            </igc-badge>
          </div>
          <div class="row-layout group_7">
            <igc-chip size="large" class="chip">
              Country
            </igc-chip>
            <igc-chip size="large" class="chip">
              <span slot="prefix">
                <span class="material-icons icon_1">
                  place
                </span>
              </span>
              Country
            </igc-chip>
            <igc-chip size="large" class="chip">
              <span slot="prefix">
                <span class="material-icons icon_1">
                  place
                </span>
              </span>
              <span slot="suffix">
                <span class="material-icons icon_1">
                  clear
                </span>
              </span>
              Country
            </igc-chip>
          </div>
          <div class="row-layout group_8">
            <div class="column-layout group_9">
              <igc-checkbox labelPosition="after" class="user-input">
                Label
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="user-input">
                Label
              </igc-checkbox>
              <igc-checkbox labelPosition="after" class="user-input">
                Label
              </igc-checkbox>
            </div>
            <igc-radio-group class="user-input">
              <igc-radio value="1" class="radio">
                Label
              </igc-radio>
              <igc-radio value="2" class="radio">
                Label
              </igc-radio>
              <igc-radio value="3" class="radio">
                Label
              </igc-radio>
            </igc-radio-group>
            <div class="column-layout group_10">
              <igc-switch LabelPosition="before" checked="${this.checked}" @igcChange="${(e: any) => this.checked = e.detail}" class="user-input">
                Label
              </igc-switch>
              <igc-switch LabelPosition="before" class="user-input">
                Label
              </igc-switch>
              <igc-switch LabelPosition="before" checked="${this.checked}" ?disabled="${true}" @igcChange="${(e: any) => this.checked = e.detail}" class="user-input">
                Label
              </igc-switch>
              <igc-switch LabelPosition="before" ?disabled="${true}" class="user-input">
                Label
              </igc-switch>
            </div>
          </div>
          <div class="row-layout group_8">
            <igc-rating label="Rate your experience" size="small" class="user-input"></igc-rating>
            <igc-rating label="Rate your experience" value="${this.value}" size="medium" @igcChange="${(e: any) => this.value = e.detail}" class="user-input"></igc-rating>
            <igc-rating label="Rate your experience" value="${this.value}" size="large" ?disabled="${true}" @igcChange="${(e: any) => this.value = e.detail}" class="user-input"></igc-rating>
          </div>
          <div class="row-layout group_7">
            <igc-avatar src="/src/assets/a7f211be67afc061d9571f5b5b5236cd92420e0c.png" size="large"></igc-avatar>
            <igc-avatar src="/src/assets/a06650fce7091f420c440f26201d916f775db29d.png" size="medium"></igc-avatar>
            <igc-avatar src="/src/assets/7e86e8b8b495deb8eefcdd3556151a40532211e1.png"></igc-avatar>
            <igc-avatar initials="AB" size="large" shape="circle"></igc-avatar>
            <igc-avatar initials="AB" size="medium" shape="circle"></igc-avatar>
            <igc-avatar initials="AB" shape="circle"></igc-avatar>
            <igc-avatar shape="rounded" size="large">
              <span class="material-icons">
                people
              </span>
            </igc-avatar>
            <igc-avatar shape="rounded" size="medium">
              <span class="material-icons">
                people
              </span>
            </igc-avatar>
            <igc-avatar shape="rounded">
              <span class="material-icons">
                people
              </span>
            </igc-avatar>
          </div>
          <div class="row-layout group_7">
            <igc-slider value="${this.value1}" min="0" max="100" step="10" ?discrete-track="${true}" @igcChange="${(e: any) => this.value1 = e.detail}" class="slider"></igc-slider>
          </div>
        </div>
        <div class="column-layout group_11">
          <igc-input label="Label" placeholder="Placeholder" ?outlined="${true}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                account_circle
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                info
              </span>
            </span>
            <span slot="helper-text">Hint</span>
          </igc-input>
          <span class="date-picker">DatePicker not yet available in WebComponents</span>
          <span class="textarea">Textarea not yet available in WebComponents</span>
          <igc-select ?outlined="${true}" label="Select" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail.value}" class="user-input_2">
            <igc-select-header>
              Header
            </igc-select-header>
            <igc-select-item value="1">
              Drop Down Item text
            </igc-select-item>
            <igc-select-item value="2">
              Selected value
            </igc-select-item>
            <igc-select-item value="Option">
              Drop Down Item text
            </igc-select-item>
            <igc-select-item value="Option">
              Drop Down Item text
            </igc-select-item>
          </igc-select>
          <igc-combo ?outlined="${true}" .data="${this.financialBoxOfficeRevenue}" label="Label/Placeholder" display-key="Franchise" ?single-select="${true}" class="user-input_2"></igc-combo>
          <igc-input label="Label" placeholder="Placeholder" ?outlined="${false}" class="user-input_2">
            <span slot="prefix">
              <span class="material-icons icon">
                account_circle
              </span>
            </span>
            <span slot="suffix">
              <span class="material-icons icon">
                info
              </span>
            </span>
            <span slot="helper-text">Hint</span>
          </igc-input>
          <span class="date-picker">DatePicker not yet available in WebComponents</span>
          <span class="textarea">Textarea not yet available in WebComponents</span>
          <igc-select ?outlined="${false}" label="Select" value="${this.value2}" @igcChange="${(e: any) => this.value2 = e.detail.value}" class="user-input_2">
            <igc-select-header>
              Header
            </igc-select-header>
            <igc-select-item value="1">
              Drop Down Item text
            </igc-select-item>
            <igc-select-item value="2">
              Selected value
            </igc-select-item>
            <igc-select-item value="Option">
              Drop Down Item text
            </igc-select-item>
            <igc-select-item value="Option">
              Drop Down Item text
            </igc-select-item>
          </igc-select>
          <igc-combo .data="${this.financialBoxOfficeRevenue}" label="Label/Placeholder" display-key="Franchise" ?outlined="${false}" ?single-select="${true}" class="user-input_2"></igc-combo>
        </div>
        <div class="column-layout group_1">
          <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
          <igc-card class="card">
            <igc-card-media class="media-content">
              <img src="/src/assets/9224c81ebdbe1cd0ac916c1389ee7eb2e9bf77b6.png" .attr class="image" />
            </igc-card-media>
            <igc-card-header>
              <div slot="thumbnail">
                <igc-avatar src="/src/assets/53c4f9a7b7f5f730460a0235b717b99679251327.png"></igc-avatar>
              </div>
              <h3 slot="title">
                Title goes here...
              </h3>
              <h5 slot="subtitle">
                Subtitle goes here...
              </h5>
            </igc-card-header>
            <igc-card-content class="body-content">
              <p class="typography__body-2 text">
                A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea.
              </p>
            </igc-card-content>
            <igc-card-actions class="actions-content">
              <igc-button variant="flat" slot="start" size="large" class="button_2">
                Button
                <igc-ripple></igc-ripple>
              </igc-button>
              <igc-icon-button slot="end" variant="flat">
                <span class="material-icons">
                  favorite
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button slot="end" variant="flat">
                <span class="material-icons">
                  bookmark
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
              <igc-icon-button slot="end" variant="flat">
                <span class="material-icons">
                  share
                </span>
                <igc-ripple></igc-ripple>
              </igc-icon-button>
            </igc-card-actions>
          </igc-card>
        </div>
      </div>
      <div class="row-layout group_12">
        <igc-category-chart .dataSource="${this.financialBoxOfficeRevenue}" chart-type="area" chart-title="This is the title" x-axis-title="Axis title" y-axis-title="Vertical Axis Title" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
        <igc-category-chart .dataSource="${this.financialBoxOfficeRevenue}" chart-type="column" chart-title="This is the title" computed-plot-area-margin-mode="series" class="category-chart"></igc-category-chart>
        <igc-grid .data="${this.northwindEmployees}" primary-key="employeeID" display-density="cosy" allow-filtering="true" filter-mode="excelStyleFilter" auto-generate="false" class="ig-typography ig-scrollbar grid">
          <igc-column field="lastName" data-type="string" header="lastName" sortable="true" selectable="false"></igc-column>
          <igc-column field="firstName" data-type="string" header="firstName" sortable="true" selectable="false"></igc-column>
          <igc-column field="employeeID" data-type="number" header="employeeID" sortable="true" selectable="false"></igc-column>
          <igc-column field="title" data-type="string" header="title" sortable="true" selectable="false"></igc-column>
          <igc-column field="titleOfCourtesy" data-type="string" header="titleOfCourtesy" sortable="true" selectable="false"></igc-column>
          <igc-column field="birthDate" data-type="date" header="birthDate" sortable="true" selectable="false"></igc-column>
          <igc-column field="hireDate" data-type="date" header="hireDate" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.street" data-type="string" header="address street" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.city" data-type="string" header="address city" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.region" data-type="string" header="address region" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.postalCode" data-type="string" header="address postalCode" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.country" data-type="string" header="address country" sortable="true" selectable="false"></igc-column>
          <igc-column field="address.phone" data-type="string" header="address phone" sortable="true" selectable="false"></igc-column>
          <igc-column field="managerID" data-type="number" header="managerID" sortable="true" selectable="false"></igc-column>
          <igc-column field="notes" data-type="string" header="notes" sortable="true" selectable="false"></igc-column>
          <igc-column field="avatarUrl" data-type="string" header="avatarUrl" sortable="true" selectable="false"></igc-column>
        </igc-grid>
      </div>
      <p class="typography__body-1 text">
        This is the content text of the active step.
      </p>
      <igc-snackbar action-text="Action" @igcAction="${() => this.snackbar?.toggle()}" id="snackbar" class="snackbar">
        This is a message
      </igc-snackbar>
      <igc-dialog ?close-on-outside-click="${true}" ?keep-open-on-escape="${false}" id="dialog">
        <h5 slot="title">
          Confirmation
        </h5>
        <p>Are you sure you want to do this?</p>
        <div slot="footer">
          <igc-button variant="flat" size="large" @click="${() => this.dialog?.toggle()}">Cancel</igc-button>
          <igc-button variant="flat" size="large" @click="${() => this.dialog?.toggle()}">OK</igc-button>
        </div>
      </igc-dialog>
      <span class="banner">Banner not yet available in WebComponents</span>
    `;
  }
}
