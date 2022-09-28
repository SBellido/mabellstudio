/* Angular */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components*/
import { HomeComponent } from './components/home/home.component';
import { InterventionComponent } from './components/intervention/intervention.component';
import { WorksComponent } from './works.component';
import { BiographyComponent } from './components/biography/biography.component';
import { AcademicComponent } from './components/biography/components/academic/academic.component';
import { LaborComponent } from './components/biography/components/labor/labor.component';
import { PersonalComponent } from './components/biography/components/personal/personal.component';
import { GraphicComponent } from './components/design/components/graphic/graphic.component';
import { ExperimentalComponent } from './components/design/components/experimental/experimental';
import { UxUiComponent } from './components/design/components/ux-ui/ux-ui.component';
import { DesignComponent } from './components/design/design.component';
import { DevelopmentComponent } from './components/development/development.component';
import { PublicComponent } from './components/intervention/components/public/public.component';
import { PrivateComponent } from './components/intervention/components/private/private.component';
import { VLifeComponent } from './components/design/components/ux-ui/components/v-life/v-life.component';

const routes: Routes = [
  {
    path: '',
    component: WorksComponent,
    children: [     
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'design',
        component: DesignComponent
      },
      {
        path: 'design/graphic',
        pathMatch: 'full',
        component: GraphicComponent
      },
      {
        path: 'design/ux-ui',
        pathMatch: 'full',
        component: UxUiComponent
      },
      {
        path: 'design/ux-ui/v-life',
        pathMatch: 'full',
        component: VLifeComponent
      },
      {
        path: 'design/experimental',
        component: ExperimentalComponent
      },
      {
        path: 'development',
        component: DevelopmentComponent
      },
      {
        path: 'intervention',
        component: InterventionComponent
      },
      {
        path: 'intervention/public',
        pathMatch: 'full',
        component: PublicComponent
      },
      {
        path: 'intervention/private',
        pathMatch: 'full',
        component: PrivateComponent
      },
      {
        path: 'biography',
        component: BiographyComponent
      },
      {
        path: 'biography/academic',
        pathMatch: 'full',
        component: AcademicComponent
      },
      {
        path: 'biography/labor',
        pathMatch: 'full',
        component: LaborComponent
      },
      {
        path: 'biography/personal',
        pathMatch: 'full',
        component: PersonalComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class WorksRoutingModule { }
