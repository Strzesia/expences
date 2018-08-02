import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { ExpencesTableComponent } from "./expences-overview/expences-table/expences-table.component";
import { CategoriesOverviewComponent } from "./categories/categories-overview/categories-overview.component";

const APP_ROUTES: Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'expences' },
    { path: 'expences', component: ExpencesTableComponent },
    { path: 'categories', component: CategoriesOverviewComponent}
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