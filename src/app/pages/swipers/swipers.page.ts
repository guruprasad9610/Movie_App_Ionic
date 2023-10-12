import { Component, OnInit, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Router } from '@angular/router';

// import { Plugins } from '@capacitor/core';
// const { Storage } = Plugins;
// export const INTRO_KEY = 'intro-seen';

register();

@Component({
  selector: 'app-swipers',
  templateUrl: './swipers.page.html',
  styleUrls: ['./swipers.page.scss'],
})
export class SwipersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  async start()
  {
    // const hasSeenIntro = await Storage['set']({key: INTRO_KEY, value: 'true'});
    this.router.navigateByUrl('/movies', { replaceUrl: true });
  }

}
