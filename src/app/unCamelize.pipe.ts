import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'unCamelize'
})
export class UnCamelizePipe implements PipeTransform {
  transform(camelCase: any) {
    if (camelCase == null || camelCase === '') {
      return camelCase;
    }

    camelCase = camelCase.trim();
    let newText = '';
    for (let i = 0; i < camelCase.length; i++) {
      if (/[A-Z]/.test(camelCase[i])
        && i !== 0
        && /[a-z]/.test(camelCase[i - 1])) {
        newText += ' ';
      }
      if (i === 0 && /[a-z]/.test(camelCase[i])) {
        newText += camelCase[i].toUpperCase();
      } else {
        newText += camelCase[i];
      }
    }

    return newText;
  }
}
