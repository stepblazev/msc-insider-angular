import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'priceFormat',
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (value === null || value === undefined) return '';
    value = parseFloat(value.toString());
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
}
