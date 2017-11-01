import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JHipsterJobHistoryModule } from './job-history/job-history.module';
import { JHipsterJobModule } from './job/job.module';
import { JHipsterDepartmentModule } from './department/department.module';
import { JHipsterEmployeeModule } from './employee/employee.module';
import { JHipsterLocationModule } from './location/location.module';
import { JHipsterCountryModule } from './country/country.module';
import { JHipsterRegionModule } from './region/region.module';
import { JHipsterTaskModule } from './task/task.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JHipsterJobHistoryModule,
        JHipsterJobModule,
        JHipsterDepartmentModule,
        JHipsterEmployeeModule,
        JHipsterLocationModule,
        JHipsterCountryModule,
        JHipsterRegionModule,
        JHipsterTaskModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JHipsterEntityModule {}
