import { Component, forwardRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  @HostBinding('attr.id')
  externalId = '';
  private _ID = '';
  // tslint:disable-next-line: no-input-rename
  @Input('value') _value = false;
  onChange: any = () => {};
  onTouched: any = () => {};

  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }

  get id() {
    return this._ID;
  }

  get value() {
    return this._value;
  }

  set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() { }

  writeValue(obj: any): void {
    if (obj) {
      this.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  switch(): void {
    this.value = !this.value;
  }
}
