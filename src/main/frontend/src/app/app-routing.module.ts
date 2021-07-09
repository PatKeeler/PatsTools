import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathComponent} from "./math/math.component";
import { PasswordsComponent} from "./passwords/passwords.component";
import { PokerComponent} from "./poker/poker.component";
import { SqlComponent} from './sql/sql.component';
import { XmlComponent} from './xml/xml.component';

const routes: Routes = [
  { path: '', component: MathComponent},
  { path: 'passwords', component: PasswordsComponent},
  { path: 'poker', component: PokerComponent},
  { path: 'sql', component: SqlComponent},
  { path: 'xml', component: XmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
