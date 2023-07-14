import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LoginAnimationComponent} from './login-animation/login.components';
import { LoginExampleComponent } from './login-example/login-example.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginAnimationComponent,
    LoginExampleComponent

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
