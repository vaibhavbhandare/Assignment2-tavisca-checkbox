import {css} from 'lit-element';
export default css`:host{--checkbox-color: var(--primary);--secondary: var(--secondary-text);--container-background-neutral: var(--neutral);--checkbox-border:var(--disabled-text);--checkbox-secondary-text: var(--secondary-text);--font-family: var(--global-font-family);--font-color: var(--secondary-text);--font-weight: var(--font-weight-regular);--checkbox-disabled-text: var(--disabled-text);--neutral-color: var(--neutral);--tertiary-color: var(--tertiary-text)}*{font-family:var(--font-family);box-sizing:border-box}.checkbox-common .disabled-parent,.checkbox-unable .disabled-parent{width:100%}.checkbox-common .disabled-parent .container,.checkbox-unable .disabled-parent .container{width:100%;height:48px;background-color:var(--neutral-color);display:flex;align-items:center;border-width:1.2px;padding:0px 16px;position:relative}.checkbox-common .disabled-parent .container .checkbox-input,.checkbox-unable .disabled-parent .container .checkbox-input{width:20px;height:20px;color:var(--checkbox-disabled-text);padding:0px;margin:0px}.checkbox-common .disabled-parent .container .label,.checkbox-unable .disabled-parent .container .label{font-size:1.4rem;font-weight:var(--font-weight);color:var(--font-color);display:inline-block;padding-left:8px}.checkbox-common .disabled-parent .container .select,.checkbox-unable .disabled-parent .container .select{vertical-align:top;display:block;width:100%}.checkbox-common .disabled-parent .container .slot-data,.checkbox-unable .disabled-parent .container .slot-data{font-size:1.4rem;font-weight:var(--font-weight);color:var(--tertiary-color);position:absolute;right:16px;float:right}`;