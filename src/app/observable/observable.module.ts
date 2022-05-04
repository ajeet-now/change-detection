import { NgModule } from "@angular/core";
import { ObservableComponent } from "./observable.component";
import { ObservableRoutingModule } from "./observable-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[ObservableComponent],
    imports:[ObservableRoutingModule,
        RouterModule,
        CommonModule,
    ]
})
export class ObservableModule {}