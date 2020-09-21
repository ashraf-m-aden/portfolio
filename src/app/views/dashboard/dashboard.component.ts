import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private meta: Meta,
    private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Ashraf: Developeur Javascript');
    this.meta.addTag({
      name: 'ashraf.work',
      content: 'Ashraf Mohamed'
    });
    this.meta.updateTag(
      {
        name: 'description',
        content: 'Mon portfolio que j\'ais crée.'
      });
    this.meta.updateTag(
      {
        name: 'keywords',
        content: 'ashraf, javascript, djibouti, developer, developpeur, angular, vue, node'
      });
  }
}
