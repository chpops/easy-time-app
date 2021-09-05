import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule }   from '@angular/common/http';
import {MatRippleModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
    imports: [
        MatButtonModule, 
        BrowserAnimationsModule, 
        CommonModule, 
        MatInputModule, 
        DragDropModule, 
        MatProgressSpinnerModule, 
        HttpClientModule, 
        MatRippleModule,
        MatMenuModule,
        MatIconModule,
        MatProgressBarModule
    ],
    exports: [
        MatButtonModule, 
        BrowserAnimationsModule,
        CommonModule, 
        MatInputModule,
        DragDropModule,
        MatProgressSpinnerModule,
        HttpClientModule,
        MatRippleModule,
        MatMenuModule,
        MatIconModule,
        MatProgressBarModule
    ]
})
export class MaterialAppModule { 
    
}