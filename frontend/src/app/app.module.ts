import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PasswordsComponent } from './passwords/passwords.component';
import { PokerComponent } from './poker/poker.component';
import { MathComponent } from './math/math.component';
import { SqlComponent } from './sql/sql.component';
import { XmlComponent } from './xml/xml.component';
import { JavaService } from './java.service';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { PlatformModule} from '@angular/cdk/platform';


@NgModule({
  declarations: [
    AppComponent,
    PasswordsComponent,
    PokerComponent,
    MathComponent,
    SqlComponent,
    XmlComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    MatSortModule,
    PlatformModule,
    MatFormFieldModule
  ],
  providers: [JavaService],
  bootstrap: [AppComponent]
})

export class AppModule { }
