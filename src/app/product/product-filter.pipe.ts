import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
//Burada bize PipeTransform interface'ni implemente ediyor bize
//eğer içindekileri silersem hata verir.
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    //Filtertext varsa onu filtrele ve name'lerini kuçük harfler yazıp listeye ekle
    return filterText?value.filter((p:Product)=>p.name
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
