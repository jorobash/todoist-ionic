import { Injectable } from '@angular/core';
import {Plugins} from '@capacitor/core';

const { Storage } = Plugins;

const PROJECT_KEY = 'categories';
const TASK_KEY    = 'tasks';

export interface Project {
  name: string;
  color: string;
  id?: number;
  task?: Task[];
}

export interface Task {
  name: string;
  project?: number;
  priority?: number;
  due?: string;
  done?: boolean;
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
