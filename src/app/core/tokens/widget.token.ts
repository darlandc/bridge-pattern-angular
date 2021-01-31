import { Widget} from '../interfaces/widget.interface';
import { InjectionToken } from '@angular/core';

export const WIDGET = new InjectionToken<Widget>('Widget');
