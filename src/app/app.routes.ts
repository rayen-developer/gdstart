import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { AgentsComponent } from './pages/agents/agents.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PropertiesComponent } from './pages/properties/properties.component';

export const routes: Routes = [
    { path: '',title:"Home", component: HomeComponent },
    { path: 'about',title:"About", component: AboutComponent },
    { path: 'agents',title:"Agents", component: AgentsComponent },
    { path: 'contact',title:"Contact", component: ContactComponent },
    { path: 'properties',title:"Properties", component: PropertiesComponent },
];
