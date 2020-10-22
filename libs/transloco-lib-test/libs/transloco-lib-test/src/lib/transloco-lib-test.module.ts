import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';

export const scopeLoader = ['fr'].reduce((acc, lang) => {
  acc[lang] = () => import(`./assets/i18n/${lang}.json`);
  return acc;
}, {});

@NgModule({
  imports: [CommonModule, TranslocoModule],
  declarations: [TestComponent],
  exports: [TestComponent],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'lib',
        defaultLang: 'fr',
        loader: scopeLoader
      }
    }
  ],
})
export class TranslocoLibTestModule {}
