import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcCalendarComponent } from 'igniteui-webcomponents';

defineComponents(IgcCalendarComponent);

@customElement('app-calendar')
export default class Calendar extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: stretch;
      align-content: flex-start;
    }
    .row-layout {
      display: flex;
    }
    .group {
      flex-wrap: wrap;
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
    .calendar {
      width: 104px;
      height: max-content;
    }
    .calendar_1 {
      width: 180px;
      height: max-content;
    }
    .calendar_2 {
      width: 240px;
      height: max-content;
    }
    .calendar_3 {
      height: max-content;
      flex-grow: 1;
      flex-basis: 0;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="row-layout group">
        <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar"></igc-calendar>
        <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar_1"></igc-calendar>
        <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar_2"></igc-calendar>
        <igc-calendar ?hide-header="${false}" header-orientation="horizontal" class="calendar_3"></igc-calendar>
      </div>
    `;
  }
}
