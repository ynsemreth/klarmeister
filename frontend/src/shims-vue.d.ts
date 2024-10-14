// src/shims-vue.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  declare module '*.png' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpg' {
    const value: string;
    export default value;
  }
  
  declare module '*.jpeg' {
    const value: string;
    export default value;
  }
  
  declare module '*.svg' {
    const value: string;
    export default value;
  }
  
  declare module '*.mp4' {
    const value: string;
    export default value;
  }
  
  declare module '*.webm' {
    const value: string;
    export default value;
  }
  