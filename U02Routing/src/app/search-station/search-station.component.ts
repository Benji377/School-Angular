import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { StationValley } from 'src/shared/station-valley';
import { WeatherService } from 'src/shared/weather-service';

@Component({
  selector: 'ua-search-station',
  templateUrl: './search-station.component.html',
  styleUrls: ['./search-station.component.scss']
})
export class SearchStationComponent implements OnInit, OnDestroy {
  foundStations!: StationValley[];
  @Output() stationSelected = new EventEmitter<StationValley>();
  private searchTermEmitted = new EventEmitter<string>();
  constructor(private ws: WeatherService) { }

  ngOnInit() {
    this.searchTermEmitted.pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm => this.ws.getStations(searchTerm)))
      .subscribe(foundStations => this.foundStations = foundStations);
  }

  ngOnDestroy() {
    this.searchTermEmitted.unsubscribe();
  }
  handleKeyEvent(searchTerm: string) {
    this.searchTermEmitted.emit(searchTerm);
  }
  handleSelectedStation(station: StationValley) {
    this.stationSelected.emit(station);
  }

}
