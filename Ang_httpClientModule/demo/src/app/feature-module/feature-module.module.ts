import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FMComponentComponent } from './fm-component/fm-component.component';



@NgModule({
  declarations: [
    FMComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FMComponentComponent
  ]//export the component to use it 

})
export class FeatureModuleModule { }
