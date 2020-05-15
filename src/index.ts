import { IRegistry, IContainer } from 'aurelia';
import { FastDnaConfig, FastComponent } from './config';

export class FastDna implements IRegistry, FastDnaConfig {
    componentsToInclude: FastComponent[];
    static config(config?: (config: FastDnaConfig) => void): FastDna {
        const instance = new FastDna();
        config && config(instance);
        return instance;
    }

    register(container: IContainer): void {


        if (this.componentsToInclude?.length === 0) {
            this.componentsToInclude = ['All'];
        }

        this.componentsToInclude.forEach(x => {
        });

    }
}
