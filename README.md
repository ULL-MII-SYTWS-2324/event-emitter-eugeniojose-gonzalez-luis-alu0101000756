[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-7f7980b617ed060a017424585567c406b6ee15c891e84e1186181d67ecf80aa0.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=12797360)
- [Event Emitters](#event-emitters)
- [With-time](#with-time)
- [Pruebas](#pruebas)

## Event Emitters

Esta es una clase de javascript que permite gestionar los eventos. En este problema que nos ocupa, hay que utilizar esta clase para crear una nuestra propia, y así que no haya necesidad de definir todos los métodos necesarios como on, emit,... Antes de pasar al problema en cuestión, se va a mostrar una imagen que muestra los métodos que se definen en Event Emitter:

<img src=./img/eventemitter.png>

## With-time

Ahora, centrándonos en el problema en cuestión. Se pide crear una clase with-time que reciba como argumento una función asíncrona (que se va a encargar de emitir los diferentes eventos) y luego los argumentos. Lo que hay que tener en cuenta es lo siguiente:
* La llamada withTime.execute(asyncFun, ...args) emita eventos begin y end señalando el comienzo y final de la ejecución de asyncfun.
* Deberá así mismo emitir un evento result con el resultado de la operación asíncrona al final de la misma.
* Deberá emitir un evento time indicando el tiempo que ha tomado la ejecución en nanosegundos (puede usar process.hrtime.bigint para ello).

Para resolver todo esto se ha creado la pertinente clase y su función:
```js
class WithTime extends EventEmitter{
 // ...
}
```

Comentar el código aquí

## Pruebas

Comentar las pruebas que se hayan hecho