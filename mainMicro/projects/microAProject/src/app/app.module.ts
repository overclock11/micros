import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {ButtonTestModule} from "./button-test/button-test.module";
import {createCustomElement} from "@angular/elements";
import {TestComponent} from "./button-test/test/test.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonTestModule
  ],
  providers: [],
  entryComponents: [TestComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
/*    const strategyFactory = new ElementZoneStrategyFactory(TestComponent, this.injector);
    const helloElement = createCustomElement(HelloComponent, { injector: this.injector, strategyFactory });
    customElements.define('my-hello', helloElement);*/

    const el = createCustomElement(TestComponent, { injector: this.injector });
    customElements.define('project-test', el);
  }
}
