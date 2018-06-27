/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

import {ClrOption} from "../option";

@Injectable()
export class OptionSelectionService {
    private currentSelection: ClrOption;

    private _selectionChanged: Subject<ClrOption> = new Subject<ClrOption>();

    get selectionChanged(): Observable<ClrOption> {
        return this._selectionChanged.asObservable();
    }

    // Currently only handles single selection
    updateSelection(option: ClrOption): void {
        if (this.currentSelection && this.currentSelection === option) {
            return;
        }
        if (this.currentSelection) {
            this.currentSelection.selected = false;
        }
        option.selected = true;
        this.currentSelection = option;
        this._selectionChanged.next(option);
    }
}
