
#### Documentacion
---


##### [GET] /products:
Devuelve todos los productos existentes en la base de datos.

Respuesta:
```ts
[
  {
    "id": number,
    "name": string,
    "url_image": string,
    "price": number,
    "discount": number,
    "category": {
        "id": number,
        "name": string
    }
  }
  ...
]
```
---
#### [GET] /products/search:
Busca productos existentes la base de datos; Puede a la vez ordenar los resultados, dependiendo de los params `query` recibidos.

Query params aceptados:
  * `by`?:  Propiedad a usar para la busqueda, puede ser cualquier propiedad del [objeto retornado por el endpoint previo](https://github.com/deagred/bsale-challenge-api#:~:text=Respuesta%3A-,%5B%0A%20%20%7B%0A%20%20%20%20%22id%22%3A%20number%2C%0A%20%20%20%20%22name%22%3A%20string%2C%0A%20%20%20%20%22url_image%22%3A%20string%2C%0A%20%20%20%20%22price%22%3A%20number%2C%0A%20%20%20%20%22discount%22%3A%20number%2C%0A%20%20%20%20%22category%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22id%22%3A%20number%2C%0A%20%20%20%20%20%20%20%20%22name%22%3A%20string%0A%20%20%20%20%7D%0A%20%20%7D%0A%20%20...%0A%5D,-%5BGET%5D%20/products/search); Valor por defecto: `name`.
  * `sort`?: Orden a usar al momento de retornar los productos; Valor por defecto: `asc` (ascendente).
  * `value`!: Valor a usar para la busqueda; No puede estar vacio.
  * `sortBy`?: Propiedad para usar al momento de ordenar los productos; Valor por defecto: `el valor pasado al query param 'by'`.

Respuesta:
```ts
[
  {
    "id": number,
    "name": string,
    "url_image": string,
    "price": number,
    "discount": number,
    "category": {
        "id": number,
        "name": string
    }
  }
  ...
]
```
---

#### [GET] /categories
Devuelve todas las categorias existentes en la base de datos.

Respuesta:
```ts
[
  {
    "id": number,
    "name": string
  },
  ...
]
```
