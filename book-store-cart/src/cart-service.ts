import { Subject } from "rxjs";
class CartService {
  private _items = [];
  private _sub: Subject<any[]> = new Subject<any[]>();
  obs$ = this._sub.asObservable();
  add(item) {
    this._items.push(item);
    this._sub.next([...this._items]);
  }

  remove(item) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      // only splice array when item is found
      this._items.splice(index, 1); // 2nd parameter means remove one item only
    }
    this._sub.next([...this._items]);
  }

  getAll() {
    return this._items;
  }
}
export const cartService = new CartService();
