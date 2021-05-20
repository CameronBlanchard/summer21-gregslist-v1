import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";


class HousesService{
  addHouse(formData){
    let newHouse = new House(formData.bedroom, formData.bath, formData.sqfootage, formData.garage, formData.town, formData.img)
    ProxyState.houses = [newHouse, ...ProxyState.houses]
  }
  
}

export const housesService = new HousesService()