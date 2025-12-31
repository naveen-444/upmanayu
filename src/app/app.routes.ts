import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout.component';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Cv } from './pages/cv/cv';
import { CaseStudies } from './pages/case_studies/case_studies';
import { CaseStudies1 } from './pages/case_studies1/case_studies1';
import { CaseStudies2 } from './pages/case_studies2/cast_studies2';
import { Work } from './pages/work/work';
import { CaseStudiesParent1 } from './pages/case_studies_parent1/case_studies_parent1';
import { CaseStudiesParent1Wepegasus } from './pages/case_studies_parent1_ wepegasus/case_studies_parent1_ wepegasus';
import { CaseStudiesParent1FlashAi} from './pages/case_studies_parent1_flashai/case_studies_parent1_flashai';
import { CaseStudiesParent1FlashAi1} from './pages/case_studies_parent1_flashai1/case_studies_parent1_flashai1';
import { CaseStudiesParent1FlashAi2} from './pages/case_studies_parent1_flashai2/case_studies_parent1_flashai2';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Home , data: { title: 'Home - Upamanyu Naskar' } },
      { path: 'work', component: Work, data: { title: 'Work - Upamanyu Naskar' }  },
      { path: 'about', component: About, data: { title: 'About - Upamanyu Naskar' }  },
      { path: 'contact', component: Contact, data: { title: 'Contact - Upamanyu Naskar' }  },
      { path: 'cv', component: Cv, data: { title: 'CV - Upamanyu Naskar' }  },
      { path: 'case-study', component: CaseStudies, data: { title: 'Case Study - Upamanyu Naskar' }  },
      { path: 'case-study1', component: CaseStudies1, data: { title: 'Case Study 1 - Upamanyu Naskar' }  },
      { path: 'case-study2', component: CaseStudies2, data: { title: 'Case Study 2 - Upamanyu Naskar' } },
      { path: 'case-study-parent1', component: CaseStudiesParent1, data: { title: 'Case Study Parent - Upamanyu Naskar' } },
      { path: 'case-study-wepegasus', component: CaseStudiesParent1Wepegasus, data: { title: 'Case Study Parent - Wepegasus' } },
     { path: 'case-study-flashai', component: CaseStudiesParent1FlashAi, data: { title: 'Case Study Parent - FlashAI' } },
    { path: 'case-study-flashai1', component: CaseStudiesParent1FlashAi1, data: { title: 'Case Study Parent - FlashAI' } },
     { path: 'case-study-warehouse', component: CaseStudiesParent1FlashAi2, data: { title: 'Case Study Parent - FlashAI' } },
   
    ],
  },
  { path: '**', redirectTo: '' },
];
