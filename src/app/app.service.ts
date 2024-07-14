import { Injectable } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { Subject } from "rxjs";
import { Name } from "./name.type";

const defaultOptions = {
  initialValue: { name: 'John' } as Name,
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private readonly nameSub = new Subject<Name>();

  setName(newName: Name) {
    this.nameSub.next(newName);
  }

  nameSignal = toSignal(this.nameSub, {
    ...defaultOptions,
    equal: (a: Name, b: Name) => a.name === b.name,
  });

  nameDefaultSignal = toSignal(this.nameSub,defaultOptions);
}
