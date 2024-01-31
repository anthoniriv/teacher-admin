// navigation.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private componentToLoad = new BehaviorSubject<string | null>(null);

  // Observable que los componentes pueden suscribir
  public componentToLoad$ = this.componentToLoad.asObservable();

  // Método para cambiar el componente
  public loadComponent(componentName: string) {
    this.componentToLoad.next(componentName);
  }
}
