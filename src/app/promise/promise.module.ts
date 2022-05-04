import { NgModule } from "@angular/core";
import { PromiseRoutingModule } from "./promise-routing.module";
import { PromiseComponent } from "./promise.component";


@NgModule({
    declarations:[PromiseComponent],
    imports:[PromiseRoutingModule]
})
export class PromiseModule {}