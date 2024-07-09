import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InMemoryDataService } from './services/in-memory-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private inMemoryDataService: InMemoryDataService) {}

  ngOnInit() {
    // init the in-memory data service
    this.inMemoryDataService.createDb();
  }
}
