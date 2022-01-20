import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FMComponentComponent } from './fm-component/fm-component.component';
import { RouterModule,Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:FMComponentComponent}
  
];

@NgModule({
  declarations: [FMComponentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
  // exports:[
  //   // FMComponentComponent
  // ]//export the component to use it 

})
export class FeatureModuleModule { }
