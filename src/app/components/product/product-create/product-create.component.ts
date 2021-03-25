import { ProductService } from './../product.service';
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
    
  produto: Product =  {
    name: '',
    price: null
  }
  
  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
            
  }

  createProduct():void{
    this.productService.create(this.produto).subscribe(()=> {
      this.productService.showMessage('Produto criado com sucesso')
      this.router.navigate(['/product'])
    })
       
  }

  cancel():void{
    this.router.navigate(['/product'])
  }


}
