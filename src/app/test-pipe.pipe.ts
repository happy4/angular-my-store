import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
})
export class TestPipePipe implements PipeTransform {
  transform(value: number): number {
    return Math.floor(value);
  }
}
