// I will put the arrows here that can be clicked and change the slide of the playlist

/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `play-list-project`
 * 
 * @demo index.html
 * @element play-list-project
 */
export class PlayListArrow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "playlist-arrow";
  }

  constructor() {
    super();
    this.index = 0;
    this.total = 0;
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      index : { type: Number },
      total : { type: Number },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--ddd-spacing-2);
      }
      button {
        background-color: var(--ddd-theme-default-beaverBlue);
        color: var(--ddd-theme-default-white);
        border: none;
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        border-radius: var(--ddd-radius-sm);
        cursor: pointer;
        font-size: var(--ddd-font-size-s);
        margin-left: -90px
      }
      button:hover {
        opacity: 0.8;
      }
      button:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="wrapper">
        <button class="prev" 
        ?disabled="${this.index === 0}"
        @click=${() => this.dispatchEvent(new CustomEvent('prev-clicked', {bubbles: true, composed: true }))}>Previous</button>
        <button class="next" 
        ?disabled="${this.index === this.total - 1}"
        @click=${() => this.dispatchEvent(new CustomEvent('next-clicked', {bubbles: true, composed: true}))}>Next</button>
    </div>
    `;
  }


}

globalThis.customElements.define(PlayListArrow.tag, PlayListArrow);