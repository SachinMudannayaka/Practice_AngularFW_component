import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { mainClassSub } from './main/main.sub/main.sub';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { subComponent } from './sub/sub.component';
import { parentComponent } from './parent/parent.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    subComponent,
    parentComponent,
    mainClassSub,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
