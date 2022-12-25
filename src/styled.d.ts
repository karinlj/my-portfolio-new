// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    background: string;
    background_darker: string;
    btn_background: string;
    text: string;
    //btn_text: string;
  }
}
