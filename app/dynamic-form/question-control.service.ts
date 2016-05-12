import { Injectable }   from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor(private fb:FormBuilder){ }

    toControlGroup(questions:QuestionBase<any>[] ) {
        let group = {};

        //相同key分一组
        questions.forEach(question => {
            group[question.key] = question.required ? [question.value || '', Validators.required] : [question.value || ''];
        });
        return this.fb.group(group);
    }
}