import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Directives in Angular</h1>
    </div>
    <h2>*ngFor Directives</h2>
    <div>
      <div *ngFor="let hero of avengers; index as idx; first as fst; last as lst; odd as od; even as ev">
        {{idx+1}} ~ 
        <span *ngIf="fst">First Avenger : </span>
        <span *ngIf="lst">Last Avenger : </span>
        <span *ngIf="!fst && !lst">In Between Avenger : </span>
        <span *ngIf="od">Odd Avenger : </span>
        <span *ngIf="ev">Even Between Avenger : </span>
        {{hero}}
      </div>
    </div>
    <ng-template ngFor let-hero [ngForOf]="avengers">
      {{hero}}
    </ng-template>
    <h2>*ngSwitch Directive</h2>
    <input #rng type="range" min="1" max="5" [value]="rating" (input)="rating = rng.value" /> {{rating}}
    <div [ngSwitch]="rating">
      <h3 *ngSwitchCase="1" class="rating">*</h3>
      <h3 *ngSwitchCase="2" class="rating">**</h3>
      <h3 *ngSwitchCase="3" class="rating">***</h3>
      <h3 *ngSwitchCase="4" class="rating">****</h3>
      <h3 *ngSwitchCase="5" class="rating">*****</h3>
      <h3 *ngSwitchDefault class="rating">not rated</h3>
    </div>
    <h2>ngNonBindable directive</h2>
    <h3 ngNonBindable>{{ hello masai }}</h3>
    <h2>[ngStyle] directive</h2>
    <div [style]="styleprop">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel magnam? Repellat, consectetur accusantium alias odio eius eveniet quod sed necessitatibus numquam. Doloribus magni quas deserunt? Sequi, quaerat! Ipsam, minus?
    </div>
    <div [style.backgroundColor]="bgcol1">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel magnam? Repellat, consectetur accusantium alias odio eius eveniet quod sed necessitatibus numquam. Doloribus magni quas deserunt? Sequi, quaerat! Ipsam, minus?
    </div>
    <div [ngStyle]="{'background-color' : bgcol2, 'color' : 'darkblue' }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel magnam? Repellat, consectetur accusantium alias odio eius eveniet quod sed necessitatibus numquam. Doloribus magni quas deserunt? Sequi, quaerat! Ipsam, minus?
    </div>
    <div [ngStyle]="{'background-color' : rating < 3 ? 'grey' : 'darkorange' }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel magnam? Repellat, consectetur accusantium alias odio eius eveniet quod sed necessitatibus numquam. Doloribus magni quas deserunt? Sequi, quaerat! Ipsam, minus?
    </div>
 
    <h2>[ngClass] directive</h2>
 
    <div [ngClass]="{ redbox : rating > 2, bluebox : rating > 4 }">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, vel magnam? Repellat, consectetur accusantium alias odio eius eveniet quod sed necessitatibus numquam. Doloribus magni quas deserunt? Sequi, quaerat! Ipsam, minus?
    </div>
 
  `,
  styles: [`
    .rating{
      margin : 0px;
      font-family : arial;
      color : goldenrod;
    }
    
    .redbox{
      width :300px;
      background-color : red;
      text-align : justify;
      padding : 10px;
      margin : 10px
    }
    
    .bluebox{
      width :300px;
      background-color : blue;
      text-align : justify;
      padding : 10px;
      margin : 10px
    }
  `]
})
export class AppComponent {
  title = 'step1-directives';
  bgcol1 = "yellow";
  bgcol2 = "pink";
  styleprop = "width:400px; padding:10px; margin:auto;font-family:arial; text-align:justify; background-color:silver; border:1px solid darkslategrey";
  avengers = ["Ironman", "Spiderman", "Hulk", "Thor", "Dr Strange", "Captain America", "Black Widow", "Hawkeye", "Groot", "Antman"]
  rating: any = 2;
}
