/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { ControlBasicTest, ControlInvalidTest } from '../tests/control.spec';
import { ClrInputContainer } from './input-container';
import { ClrInput } from './input';

@Component({
  template: `
       <input type="text" clrInput />
    `,
})
class InvalidUseTest {}

@Component({
  template: `
       <input type="text" clrInput name="model" class="test-class" [(ngModel)]="model" />
    `,
})
class SimpleTest {}

export default function(): void {
  describe('Input directive', () => {
    ControlInvalidTest(ClrInput, InvalidUseTest);
    ControlBasicTest(ClrInputContainer, ClrInput, SimpleTest, 'clr-input');
  });
}
