import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { FASTButton, FASTDesignSystemProvider } from "@microsoft/fast-components";

Aurelia
  .app(MyApp)
  .start();

FASTButton;
FASTDesignSystemProvider;
