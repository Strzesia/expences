import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ExpencesTableComponent } from "./expences-overview/expences-table/expences-table.component";
import { CategoriesOverviewComponent } from "./categories/categories-overview/categories-overview.component";
import { AddExpencesComponent } from "./add-expences/add-expences/add-expences.component";

const APP_ROUTES: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'expences' },
    { path: 'expences', component: ExpencesTableComponent },
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