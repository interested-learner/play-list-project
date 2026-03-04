/**
 * Copyright 2026 interested-learner
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class PlayListSlide extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "play-list-slide";
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      ...super.properties,
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        flex-direction: row;
      }
      .slide {
        width: 50%;          
        max-height: 200px;     
        overflow-y: auto;     
        padding: var(--ddd-spacing-2);
      }
    `];
  }

  render() {
    return html`
      <div class="slide">
        <slot></slot>
      </div>`;
  }

}

globalThis.customElements.define(PlayListSlide.tag, PlayListSlide);