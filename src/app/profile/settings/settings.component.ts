import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateCompiler, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public form: FormGroup;

  constructor(fb: FormBuilder, private translate: TranslateService) {
  }

  ngOnInit(): void {
  }
  useLanguage(language: string) {
    this.translate.use(language);
  }
}
