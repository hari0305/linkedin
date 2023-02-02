import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register/register.component";
import { ProfPageComponent } from "./prof-page/prof-page.component";


const routes: Routes = [
    {path: 'profile-page', component: ProfPageComponent},
    {path: 'app-login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [ProfPageComponent]