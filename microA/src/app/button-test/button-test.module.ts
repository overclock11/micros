import {Injector, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule
  ],
  exports: [TestComponent]
})
export class ButtonTestModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const el = createCustomElement(TestComponent, { injector: this.injector });
    customElements.define('button-test', el);
  }
}
