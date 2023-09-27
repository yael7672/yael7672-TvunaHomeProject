import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../login/login.component';
// import { MenuComponent } from '../menu/menu.component';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { InfoComponent } from '../info/info.component';
import { AuthGuard } from '../auth.guard';
import { MyPersonalDetailsComponent } from '../my-personal-details/my-personal-details.component';
import { MyProjectsComponent } from '../my-projects/my-projects.component';

const routes: Routes = [
    {
        path: '', component: InfoComponent, canActivate: [AuthGuard], children: [
            { path: 'my-personal-details', component: MyPersonalDetailsComponent },
            { path: 'my-projects', component: MyProjectsComponent },

        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
