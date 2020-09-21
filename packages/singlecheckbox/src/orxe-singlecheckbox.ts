import { html, customElement, LitElement, property } from 'lit-element';
import styles from './singlecheckbox-css';

@customElement('orxe-singlecheckbox')
export default class OrxeSinglecheckbox extends LitElement {

   /**
   * Following property are used to give the initial and default value.
   */

  @property({type: Boolean})
  isCheckboxSelected: any;
  @property({type: String})
  metaData = '(label)';
  @property({type: Array})
  checkboxList = ['checkbox', 'checkbox', 'checkbox'];

  /**
   * Function that check target of firstElementChild attribute state is checked.
   */

  private checkbox(event: any): void {
    this.isCheckboxSelected = event.target.firstElementChild.checked;
    if (this.isCheckboxSelected) {
      event.target.firstElementChild.checked = false;
    } else {
      event.target.firstElementChild.checked = true;
    }
  }

  /**
   * Function that check target of firstElementChild attribute state is disabled.
   */

  private checkboxDisabled(event: any): void {
    this.isCheckboxSelected = event.target.firstElementChild.disabled;
    if (this.isCheckboxSelected) {
      event.target.firstElementChild.disabled = true;
    }
  }

  /**
   * Function that check target of previousElementSibling attribute state is checked.
   */

  private checkboxSelect(event: any): void {
    this.isCheckboxSelected = event.target.previousElementSibling.checked;
    if (this.isCheckboxSelected) {
      event.target.previousElementSibling.checked = false;
    } else {
      event.target.previousElementSibling.checked = true;
    }
  }

  /**
   * This method render the checkbox with single and group checkbox.
   */

  render() {
    return html`
  <div class="checkbox-unable">
    <div class="checkbox-behavior">
      <h1>Single Checkbox Selected</h1>
      <div class="disabled-parent">
        <div class="container" @click="${this.checkbox}">
          <input type="checkbox"  class="checkbox-input" value="true" checked>
          <label for="checkbox" class="label"> Checkbox </label>
        </div>
      </div>
    </div>
    <div class="checkbox-behavior">
      <h1>Single Checkbox Unselected</h1>
      <div class="disabled-parent">
        <div class="container" @click="${this.checkbox}">
         <input type="checkbox"  class="checkbox-input" value="true">
         <label for="checkbox" class="label"> Checkbox </label>
        </div>
      </div>
    </div>
  </div>
  <div data-testId="checkbox-container" class="checkbox-disabled">
    <div class="checkbox-behavior">
      <h1>Single Checkbox Selected Disabled</h1>
      <div class="disabled-parent">
        <div class="container" @click="${this.checkboxDisabled}">
          <input type="checkbox"  class="checkbox-input" value="true" disabled checked>
          <label for="checkbox" class="label" disabled> Checkbox </label>
        </div>
      </div>
    </div>
    <div class="checkbox-behavior">
      <h1>Single Checkbox Unselected Disabled</h1>
      <div class="disabled-parent">
        <div class="container" @click="${this.checkboxDisabled}">
         <input type="checkbox"  class="checkbox-input" value="true" disabled>
         <label for="checkbox" class="label" disabled> Checkbox </label>
        </div>
      </div>
    </div>
  </div>
  <div class="checkbox-list">
    <div class="checkbox-behavior">
      <h1>Single Checkbox Button Behavior</h1>
      <div class="parent">
        <div class="container-list" @click="${this.checkbox}">
          <input type="checkbox" class="checkboxes" value="true" checked>
          <label for="checkbox" class="label1"> Checkbox </label>
        </div>
      </div>
    </div>
    <div class="checkbox-behavior">
      <h1>Group Checkbox Buttons Behavior</h1>
      <div class="parent">
        ${this.checkboxList.map((options) => html`
         <div class="container-list">
           <input type="checkbox" class="checkboxes" value="true">
           <label for="checkbox" class="label1 select" @click="${this.checkboxSelect}"> ${options} </label>
           <span class="metadata">${this.metaData}</span>
         </div>
        `)}
        </div>
      </div>
    </div>
  </div>`;
  }


  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
