// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    background_darker: string;
    text: string;
    btn_background: string;
  }
}
