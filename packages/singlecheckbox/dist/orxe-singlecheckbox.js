var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { html, customElement, LitElement, property } from 'lit-element';
import styles from './singlecheckbox-css';
let OrxeSinglecheckbox = class OrxeSinglecheckbox extends LitElement {
    constructor() {
        super(...arguments);
        this.metaData = '(label)';
        this.checkboxList = ['checkbox', 'checkbox', 'checkbox'];
    }
    checkbox(event) {
        this.isCheckboxSelected = event.target.firstElementChild.checked;
        if (this.isCheckboxSelected) {
            event.target.firstElementChild.checked = false;
        }
        else {
            event.target.firstElementChild.checked = true;
        }
    }
    checkboxDisabled(event) {
        this.isCheckboxSelected = event.target.firstElementChild.disabled;
        if (this.isCheckboxSelected) {
            event.target.firstElementChild.disabled = true;
        }
    }
    checkboxSelect(event) {
        this.isCheckboxSelected = event.target.previousElementSibling.checked;
        if (this.isCheckboxSelected) {
            event.target.previousElementSibling.checked = false;
        }
        else {
            event.target.previousElementSibling.checked = true;
        }
    }
    render() {
        return html `
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
        ${this.checkboxList.map((options) => html `
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
};
OrxeSinglecheckbox.styles = styles;
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "isCheckboxSelected", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "metaData", void 0);
__decorate([
    property({ type: Array }),
    __metadata("design:type", Object)
], OrxeSinglecheckbox.prototype, "checkboxList", void 0);
OrxeSinglecheckbox = __decorate([
    customElement('orxe-singlecheckbox')
], OrxeSinglecheckbox);
export default OrxeSinglecheckbox;
