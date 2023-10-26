import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { PosterComponent } from './poster/poster.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsListComponent } from './events-list/events-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {FooterComponent} from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AnnouncementsComponent,
        PosterComponent,
        EventCardComponent,
        EventsListComponent,
        ToolbarComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSelectModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
