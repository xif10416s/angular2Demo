import {Component} from '@angular/core';
import {MdCheckbox} from '@angular2-material/checkbox';

@Component({
    selector: 'test-md-checkbox',
    template: `
    <h1>Checkbox Demo</h1>
    <section>
      <h2>Standalone Usage</h2>
      <h3>Shopping List</h3>
      <ul>
        <li *ngFor="#grocery of groceries">
          <md-checkbox [checked]="grocery.bought"
                       (change)="grocery.bought = $event">
            {{grocery.name}}
          </md-checkbox>
        </li>
      </ul>
    </section>

    <section>
      <h2>Usage Within a Form</h2>
      <form (submit)="onSubmit($event)">
        <md-checkbox [(ngModel)]="user.agreesToTOS" #tos>
          I agree to the Terms of Service
        </md-checkbox>
        <div>
          <button type="submit" [disabled]="!user.agreesToTOS">Submit</button>
        </div>
      </form>
    </section>

    <section>
      <h2>Indeterminate ("Mixed") Mode</h2>
      <md-checkbox [checked]="false"
                   [indeterminate]="isIndeterminate"
                   (change)="isIndeterminate = false">
        Click the Button to Make Me Indeterminate
      </md-checkbox>
      <button type="button" (click)="isIndeterminate = true">
        Make Indeterminate
      </button>
    </section>
    <section>
      <h2>Alignment</h2>
      <md-checkbox [checked]="true">I come before my label</md-checkbox>
      <br/><br/>
      <md-checkbox [checked]="true" align="end">
        I come after my label.
      </md-checkbox>
    </section>
  `,
    styles: [`
    ul {
      padding-left: 0;
    }
    ul > li {
      padding-left: 1em;
      list-style-type: none;
    }
    form {
      border-radius: 4px;
      border: 1px solid black;
      padding: 1em;
    }
    form > div {
      margin-top: 1em;
    }
  `],
    directives: [MdCheckbox]
})
export class MdCheckBox {
    public user = {
        agreesToTOS: false
    };

    public isIndeterminate = false;

    public groceries = [
        { name: 'Seitan', bought: false },
        { name: 'Almond Meal Flour', bought: false },
        { name: 'Organic Eggs', bought: false }
    ];

    onSubmit(e: Event) {
        e.preventDefault();
        alert('submitted!');
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
