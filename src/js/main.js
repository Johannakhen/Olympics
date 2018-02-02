import * as THREE from 'three'
import data from './data'
import Scene from './component/Scene'
class Main {
  constructor(){
    this.Scene = new Scene(data);
  }
}

export default Main