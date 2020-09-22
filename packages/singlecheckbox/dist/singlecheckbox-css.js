import { css } from 'lit-element';
export default css `:host{--checkbox-color: var(--primary);--secondary: var(--secondary-text);--container-background-neutral: var(--neutral);--checkbox-border:var(--disabled-text);--checkbox-secondary-text: var(--secondary-text);--font-family: var(--global-font-family);--font-color: var(--secondary-text);--font-weight: var(--font-weight-regular);--checkbox-disabled-text: var(--disabled-text);--neutral-color: var(--neutral);--tertiary-color: var(--tertiary-text)}*{font-family:var(--font-family);box-sizing:border-box}.checkbox-common .checkbox-behavior,.checkbox-unable .checkbox-behavior,.checkbox-disabled .checkbox-behavior{width:100%}.checkbox-common .checkbox-behavior .disabled-parent,.checkbox-unable .checkbox-behavior .disabled-parent,.checkbox-disabled .checkbox-behavior .disabled-parent{width:100%}.checkbox-common .checkbox-behavior .disabled-parent .container,.checkbox-unable .checkbox-behavior .disabled-parent .container,.checkbox-disabled .checkbox-behavior .disabled-parent .container{width:100%;height:48px;background-color:var(--neutral-color);display:flex;align-items:center;border-width:1.2px;padding:0px 16px}.checkbox-common .checkbox-behavior .disabled-parent .container .checkbox-input,.checkbox-unable .checkbox-behavior .disabled-parent .container .checkbox-input,.checkbox-disabled .checkbox-behavior .disabled-parent .container .checkbox-input{width:20px;height:20px;color:var(--checkbox-disabled-text);padding:0px;margin:0px}.checkbox-common .checkbox-behavior .disabled-parent .container .label,.checkbox-unable .checkbox-behavior .disabled-parent .container .label,.checkbox-disabled .checkbox-behavior .disabled-parent .container .label{font-size:1.4rem;font-weight:var(--font-weight);color:var(--font-color);display:inline-block;padding-left:8px}.checkbox-unable{padding:16px;background:#eee}.checkbox-disabled{padding:16px;background:#eee}.checkbox-list{width:100%;padding:16px;background:#eee}.checkbox-list .checkbox-behavior{width:100%}.checkbox-list .checkbox-behavior .parent{width:100%;background:var(--neutral-color)}.checkbox-list .checkbox-behavior .parent .container-list{display:inline-flex;width:100%;height:48px;padding:0 16px;align-items:center;border-width:1.2px;position:relative}.checkbox-list .checkbox-behavior .parent .container-list .checkboxes{width:20px;height:20px;color:var(--checkbox-secondary-text);padding:0px;margin:0px}.checkbox-list .checkbox-behavior .parent .container-list .label1{font-size:1.4rem;font-weight:var(--font-weight);color:var(--font-color);display:inline-block;padding-left:8px}.checkbox-list .checkbox-behavior .parent .container-list .select{padding-right:90%}.checkbox-list .checkbox-behavior .parent .container-list .metadata{font-size:1.4rem;font-weight:var(--font-weight);color:var(--tertiary-color);position:absolute;right:16px}@media (max-width: 968px){.checkbox-list .checkbox-behavior .parent .container-list .select{padding-right:68%}}`;
