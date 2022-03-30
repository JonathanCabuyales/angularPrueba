import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dasboard-nuevo',
  templateUrl: './dasboard-nuevo.component.html',
  styleUrls: ['./dasboard-nuevo.component.scss']
})
export class DasboardNuevoComponent implements OnInit {
  login: boolean = false;
  @ViewChild('drawer') sidebar!: MatSidenav
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => {
        console.log(result.matches);
        
        return result.matches
      }),
      shareReplay()
    );
  layoutChanges =  this.breakpointObserver.observe([
    '(max-width: 599.98px)',
    '(min-width: 960px) and (max-width: 1279.98px)'
  ]);

  constructor(
    private breakpointObserver: BreakpointObserver, 
    private _router: Router, 
    private route: ActivatedRoute,
    private _change: ChangeDetectorRef
    ) {
    
    
  }

  ngOnInit(): void {
    
  }


  async cerrarSideResponsive(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
    ])
    .subscribe((r) =>{
      console.log(r);
      
      if(r.matches){
        this.sidebar.close();
      }else{
        return;
      }
      
    });
    

    // console.log(algo);
    
    
    
  }



  

}
