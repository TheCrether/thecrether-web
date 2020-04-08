import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LelComponent } from './lel/lel.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', component: AppComponent },
        { path: 'test', component: LelComponent }
      ],
      {
        initialNavigation: 'enabled'
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent, LelComponent]
})
export class AppModule {}
