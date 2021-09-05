import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
imports: [MatButtonModule, BrowserAnimationsModule, CommonModule, MatInputModule, DragDropModule, MatProgressSpinnerModule, HttpClientModule],
exports: [MatButtonModule, BrowserAnimationsModule, CommonModule, MatInputModule, DragDropModule, MatProgressSpinnerModule, HttpClientModule]
})
export class MaterialAppModule { 
    
}