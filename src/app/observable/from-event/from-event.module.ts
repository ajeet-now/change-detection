import { NgModule } from "@angular/core";

import { FromEventComponent } from "./from-event.component";
import { FromEventRoutingModule } from "./from-event-routing.module";


@NgModule({
    declarations:[FromEventComponent],
    imports:[FromEventRoutingModule]
})
export class FromEventModule {}