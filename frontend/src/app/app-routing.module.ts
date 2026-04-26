import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathComponent} from './math/math.component';
import { PasswordsComponent} from './passwords/passwords.component';
import { PokerComponent} from './poker/poker.component';
import { SqlComponent} from './sql/sql.component';

const routes: Routes = [
  { path: '', component: MathComponent},
  { path: 'passwords', component: PasswordsComponent},
  { path: 'poker', component: PokerComponent},
  { path: 'sql', component: SqlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
