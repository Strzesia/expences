import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { CategoriesOverviewComponent } from "./categories/categories-overview/categories-overview.component";
import { AddExpencesComponent } from "./add-expences/add-expences/add-expences.component";
import { ExpencesOverviewComponent } from "./expences/expences-overview/expences-overview.component";

const APP_ROUTES: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'expences' },
    { path: 'expences', component: ExpencesOverviewComponent },
    { path: 'categories', component: CategoriesOverviewComponent},
    { path: 'add-expenses', component: AddExpencesComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }