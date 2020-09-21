import { LitElement } from 'lit-element';
export default class OrxeSinglecheckbox extends LitElement {
    isCheckboxSelected: any;
    metaData: string;
    checkboxList: string[];
    private checkbox;
    private checkboxDisabled;
    private checkboxSelect;
    render(): import("lit-element").TemplateResult;
    static styles: import("lit-element").CSSResult;
}
