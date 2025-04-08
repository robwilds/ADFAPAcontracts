import { BrowserModule } from '@angular/platform-browser';
import { MetadataDialogAdapterComponent } from './documents/metadata-dialog-adapter.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ApolloModule } from 'apollo-angular';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
// ADF modules
import { ContentModule } from '@alfresco/adf-content-services';
import { ProcessServicesCloudModule } from '@alfresco/adf-process-services-cloud';
import { CoreModule, TRANSLATION_PROVIDER, TranslateLoaderService } from '@alfresco/adf-core';

// Custom stencils
import { StencilsModule } from './stencils.module';

// App components
import { VersionManagerDialogAdapterComponent } from './dashboard/version-manager-dialog-adapter.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppsComponent } from './apps/apps.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { StartProcessComponent } from './start-process/start-process.component';
import { FileViewComponent } from './file-view/file-view.component';
import { BlobViewComponent } from './file-view/blob-view.component';
import { PreviewService } from './services/preview.service';
import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { DocumentsComponent } from './documents/documents.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AssociationsComponent } from './associations/associations.component';
import { AiSearchComponent } from './ai-search/ai-search.component';

@NgModule({
    imports: [
      MatButtonModule,
      MatSortModule,
      MatPaginatorModule,
      DragDropModule,
        BrowserModule,
        MatSlideToggleModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        CommonModule,
        RouterModule.forRoot(appRoutes // ,
// { enableTracing: true } // <-- debugging purposes only
, { relativeLinkResolution: 'legacy' }),

        // ADF modules
        CoreModule.forRoot(),
        ContentModule.forRoot(),
        ProcessServicesCloudModule.forRoot(),
        TranslateModule.forRoot({
            loader: { provide: TranslateLoader, useClass: TranslateLoaderService }
        }),
        StencilsModule,
        ApolloModule
    ],
    declarations: [
        AppComponent,
        AppsComponent,
        LoginComponent,
        TasksComponent,
        TaskDetailsComponent,
        StartProcessComponent,
        AppLayoutComponent,
        BlobViewComponent,
        FileViewComponent,
        DocumentsComponent,
        DashboardComponent,
        AssociationsComponent,
        MetadataDialogAdapterComponent,
        VersionManagerDialogAdapterComponent,
        AiSearchComponent
    ],
    providers: [
        PreviewService,DatePipe,
        {
            provide: TRANSLATION_PROVIDER,
            multi: true,
            useValue: {
                name: 'app',
                source: 'resources'
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
