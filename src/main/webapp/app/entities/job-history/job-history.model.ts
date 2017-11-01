import { BaseEntity } from './../../shared';

export class JobHistory implements BaseEntity {
    constructor(
        public id?: number,
        public startDate?: any,
        public endDate?: any,
        public job?: BaseEntity,
        public department?: BaseEntity,
        public employee?: BaseEntity,
    ) {
    }
}
