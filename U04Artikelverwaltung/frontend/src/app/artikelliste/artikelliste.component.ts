import { ItemService } from './../shared/ItemService';
import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/rohdateien/item';

@Component({
  selector: 'app-artikelliste',
  templateUrl: './artikelliste.component.html',
  styleUrls: ['./artikelliste.component.scss']
})
export class ArtikellisteComponent implements OnInit {
  displayedColumns: string[] = ['bild', 'id', 'beschreibung', 'anzahl', 'einkaufspreis', 'verkaufspreis', 'einfuhrungsdatum'];
  dataSource: Item[] = [];

  constructor(private is: ItemService) { }

  ngOnInit(): void {
    this.is.getAllItems()
    .then(result => {console.log(result); this.dataSource = result})
    .catch(error => console.error(error));
  }

}

/*
[
    {
        "id": "DE12345678",
        "number": 200,
        "description": "Umwälzpumpe",
        "images": [
            {
                "title": "Umwälzpumpe",
                "url": "https://upload.wikimedia.org/wikipedia/commons/0/08/Sindelfingen_Haus_%26_Energie_2018_by-RaBoe_056.jpg"
            }
        ],
        "launchDate": "2019-02-01",
        "purchasingPrice": 25.3,
        "retailPrice": 77.9
    },
    {
        "id": "IT123456",
        "number": 100,
        "description": "Kupplung",
        "images": [
            {
                "title": "Kraftfahrzeugkupplung",
                "url": "https://upload.wikimedia.org/wikipedia/commons/c/cf/Clutch-c.jpg"
            },
            {
                "title": "Kupplungsscheibe",
                "url": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Clutchdisc.jpg"
            }
        ],
        "launchDate": "2019-02-02",
        "purchasingPrice": 5.3,
        "retailPrice": 7.9
    }
]
*/
