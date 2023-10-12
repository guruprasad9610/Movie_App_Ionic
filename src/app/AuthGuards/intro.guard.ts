import { Injectable } from '@angular/core';
import { CanLoad, Router} from '@angular/router';
import { Observable } from 'rxjs';


// export const INTRO_KEY = 'intro-seen';
// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})

export class IntroGuard implements CanLoad
{
constructor (private router: Router) {}

  async canLoad(): Promise<boolean>
  {
    this.router.navigateByUrl('/movies');
    return true;

    // const hasSeenIntro = await localStorage.get({key: INTRO_KEY, value: 'true'});

    // if(hasSeenIntro && (hasSeenIntro.value === 'true'))
    // {
    //   return true;
    // }
    // else
    // {
    //   this.router.navigateByUrl('/swipers', { replaceUrl: true });
    //   return true;
    // }
  }

}
