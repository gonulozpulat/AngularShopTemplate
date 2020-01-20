import { Component, OnInit } from '@angular/core';
import { Category } from './category'; //Cateory Class import

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi"
  categories : Category[] =[ //CategoryArray
    {id:1, name:"Elektronik"}, //Add category data
    {id:2, name:"Bilgisayar"},
    {id:3, name:"İletişim"},
    {id:4, name:"Müzik"},
    {id:5, name:"İçeçek"},


  ]
  ngOnInit() {
  }

}
