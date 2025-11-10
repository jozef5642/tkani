import { makeAutoObservable } from "mobx"

export default class TkanStore {
  constructor() {
   this._types = [
    {id: 1, name: 'Для дома'},
    {id: 2, name: 'Для шитья'}
   ]

   this._brands = [
    {id: 1, name: 'Египет'},
    {id: 2, name: 'Азия'}
   ]

   this._tkans = [
    {id: 1, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_1.png'},
    {id: 2, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_2.png'},
    {id: 3, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_3.png'},
    {id: 4, name: 'Двунитка Мокрый Асфальт', price: 800, rating: 5, img:'public/image_wet_asphalt_4.png'}
   ]

   this._selectedType = {}
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setTkan(tkan) {
    this._tkans = tkans;
  }

  setSelectedType(type){
    this._setSelectedType = type
  } 
  
  getSelectedBrand(brand){
    this._getSelectedBrand = brand
  } 

  get types() {
    return this._types;
  }

  get user() {
    return this._brands;
  }

  get tkans() {
    return this._tkans;
  }

  get setSelectedType() {
    return this._setSelectedType
  }
  
  get setSelectedBrand() {
    return this._setSelectedtype
  }
}