
export class MyApp {
  public message = 'Hello World!';

  get currentTime() {
    console.log('test');
    return new Date().getSeconds();
  }
}


