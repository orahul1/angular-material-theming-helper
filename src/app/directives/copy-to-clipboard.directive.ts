import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]'
})
export class CopyToClipboardDirective {

  //receive data from copy
  @Input("appCopyToClipboard") public payload: string; 

  //to know text copying completed
  @Output("copied") public copied : EventEmitter<string> = new EventEmitter<string>(); 

  @HostListener("click", ["$event"])  //capture event from host
  public onClick(event: MouseEvent): void {

    event.preventDefault();

    if (!this.payload){
        console.log(this.payload, 'check'); 
        return;
    }else{

      let listener = (e: ClipboardEvent) => {
        console.log(e ,'e');        
        let clipboard = e.clipboardData || window["clipboardData"];
        clipboard.setData("text", this.payload.toString());
        e.preventDefault();
  
        this.copied.emit(this.payload);
      };

      document.addEventListener("copy", listener, false)
      document.execCommand("copy");
      document.removeEventListener("copy", listener, false);
     }
  }
}
