import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { USER_ROUTES } from './routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(USER_ROUTES)],
})
export class UserModule {}
