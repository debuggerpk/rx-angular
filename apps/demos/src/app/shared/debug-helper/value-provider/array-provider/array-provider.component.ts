import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { ArrayProviderService } from '../array-provider.service';

@Component({
  selector: 'rxa-array-provider',
  exportAs: 'rxaArrayProvider',
  template: `
    <ng-container *ngIf="buttons">
      <div class="row">
        <div class="col-sm-12">
          <p>Observable Context</p>
          <button mat-raised-button [unpatch]="unpatched" (click)="reset()">
            Reset
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="error()">
            Error
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="complete()">
            Complete
          </button>
        </div>
        <div class="col-sm-6">
          <p>Mutable Operations</p>
          <button mat-raised-button [unpatch]="unpatched" (click)="addItemsMutable()">
            Add
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="moveItemsMutable()">
            Move
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="updateItemsMutable()">
            Update
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="removeItemsMutable()">
            Remove
          </button>

        </div>
        <div class="col-sm-6">
          <p>Immutable Operations</p>
          <button mat-raised-button [unpatch]="unpatched" (click)="addItemsImmutable()">
            Add
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="moveItemsImmutable()">
            Move
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="updateItemsImmutable()">
            Update
          </button>
          <button mat-raised-button [unpatch]="unpatched" (click)="removeItemsImmutable()">
            Remove
          </button>
        </div>
      </div>
    </ng-container>
    <ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrayProviderComponent extends ArrayProviderService {
  @Input()
  buttons = false;
  @Input()
  unpatched: any[] = undefined;

  @Input()
  min = 0;

  @Input()
  max = 10;

  constructor(protected cdRef: ChangeDetectorRef) {
    super(cdRef);
  }
}
